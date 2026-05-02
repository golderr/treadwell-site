"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";

interface ChecklistItem {
  id: string;
  phase: string;
  phase_order: number;
  item_order: number;
  title: string;
  detail_html: string | null;
  tags: string[];
  meta_cost: string | null;
  meta_time: string | null;
  meta_who: string | null;
  is_gate: boolean;
  gate_group: string | null;
  completed: boolean;
  completed_at: string | null;
  notes: string;
}

interface Phase {
  key: string;
  label: string;
  items: ChecklistItem[];
}

function groupItemsByPhase(items: ChecklistItem[]): Phase[] {
  const phases: Phase[] = [];
  const seen = new Set<string>();

  for (const item of items) {
    const key = item.is_gate ? `gate-${item.gate_group}` : `phase-${item.phase_order}`;
    if (!seen.has(key)) {
      seen.add(key);
      const label = item.is_gate
        ? item.gate_group === "first-job"
          ? "First Job Readiness"
          : "Marketing Spend Activation"
        : item.phase;
      phases.push({ key, label, items: [] });
    }
    phases.find((p) => p.key === key)!.items.push(item);
  }

  return phases;
}

export function ChecklistClient({
  initialItems,
  loadError,
}: {
  initialItems: ChecklistItem[];
  loadError?: string;
}) {
  const [items, setItems] = useState<ChecklistItem[]>(initialItems);
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("treadwell-expanded-phases");
        if (stored) return new Set(JSON.parse(stored));
      } catch {}
    }
    return new Set(["phase-1"]);
  });
  const [hideComplete, setHideComplete] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [expandedNotes, setExpandedNotes] = useState<Set<string>>(new Set());
  const notesTimerRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  const supabase = createClient();

  useEffect(() => {
    localStorage.setItem(
      "treadwell-expanded-phases",
      JSON.stringify([...expandedPhases])
    );
  }, [expandedPhases]);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const togglePhase = useCallback((key: string) => {
    setExpandedPhases((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    const phases = groupItemsByPhase(items);
    setExpandedPhases(new Set(phases.map((p) => p.key)));
  }, [items]);

  const collapseAll = useCallback(() => {
    setExpandedPhases(new Set());
  }, []);

  const toggleItem = useCallback(
    async (id: string) => {
      const item = items.find((i) => i.id === id);
      if (!item) return;

      const newCompleted = !item.completed;

      // Optimistic update
      setItems((prev) =>
        prev.map((i) =>
          i.id === id
            ? {
                ...i,
                completed: newCompleted,
                completed_at: newCompleted ? new Date().toISOString() : null,
              }
            : i
        )
      );

      const { error } = await supabase
        .from("checklist_items")
        .update({
          completed: newCompleted,
          completed_at: newCompleted ? new Date().toISOString() : null,
        })
        .eq("id", id);

      if (error) {
        // Revert
        setItems((prev) =>
          prev.map((i) =>
            i.id === id
              ? { ...i, completed: item.completed, completed_at: item.completed_at }
              : i
          )
        );
        setToast("Failed to save. Please try again.");
      } else {
        setLastSaved(new Date());
      }
    },
    [items, supabase]
  );

  const saveNotes = useCallback(
    async (id: string, notes: string) => {
      const { error } = await supabase
        .from("checklist_items")
        .update({ notes })
        .eq("id", id);

      if (error) {
        setToast("Failed to save notes.");
      } else {
        setLastSaved(new Date());
      }
    },
    [supabase]
  );

  const handleNotesChange = useCallback(
    (id: string, value: string) => {
      setItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, notes: value } : i))
      );

      // Debounce save
      if (notesTimerRef.current[id]) clearTimeout(notesTimerRef.current[id]);
      notesTimerRef.current[id] = setTimeout(() => saveNotes(id, value), 800);
    },
    [saveNotes]
  );

  const phases = groupItemsByPhase(items);
  const totalItems = items.length;
  const completedItems = items.filter((i) => i.completed).length;
  const progressPct = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return (
    <>
      {/* Sticky progress header */}
      <div className="sticky top-0 z-40 bg-white border-b border-silver-light/50 shadow-sm">
        <div className="max-w-[800px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="font-display font-black text-[22px] sm:text-[26px] tracking-[-0.02em] text-navy">
              Pre-Launch Checklist
            </h1>
            <span className="font-display font-bold text-[13px] text-navy">
              {completedItems}/{totalItems}{" "}
              <span className="text-silver-dark">({progressPct}%)</span>
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-cherry rounded-full transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <div className="flex items-center justify-between mt-2">
            {lastSaved && (
              <span className="font-body text-[11px] text-silver-dark">
                Last saved {lastSaved.toLocaleTimeString()}
              </span>
            )}
            {!lastSaved && <span />}

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hideComplete}
                  onChange={() => setHideComplete(!hideComplete)}
                  className="w-3.5 h-3.5 accent-cherry"
                />
                <span className="font-body text-[11px] text-silver-dark">Hide complete</span>
              </label>
              <button
                onClick={expandAll}
                className="font-display font-bold text-[10px] tracking-[0.04em] uppercase text-cherry hover:text-cherry-dark"
              >
                Expand all
              </button>
              <button
                onClick={collapseAll}
                className="font-display font-bold text-[10px] tracking-[0.04em] uppercase text-cherry hover:text-cherry-dark"
              >
                Collapse all
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-navy text-white font-body text-[14px] px-5 py-3 rounded-lg shadow-lg">
          {toast}
        </div>
      )}

      {loadError && (
        <div className="max-w-[800px] mx-auto px-6 pt-8">
          <div className="bg-cherry/10 text-cherry font-body text-[14px] p-4 rounded-md">
            Error loading checklist: {loadError}
          </div>
        </div>
      )}

      {/* Phases */}
      <main className="max-w-[800px] mx-auto px-6 py-8 pb-20">
        {phases.map((phase) => {
          const phaseCompleted = phase.items.filter((i) => i.completed).length;
          const isExpanded = expandedPhases.has(phase.key);
          const isGate = phase.key.startsWith("gate-");
          const visibleItems = hideComplete
            ? phase.items.filter((i) => !i.completed)
            : phase.items;

          if (hideComplete && visibleItems.length === 0) return null;

          return (
            <section key={phase.key} className="mb-6">
              <button
                onClick={() => togglePhase(phase.key)}
                className="w-full flex items-center justify-between py-3 px-4 rounded-md bg-white hover:bg-surface-warm transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-silver-dark transition-transform ${isExpanded ? "rotate-90" : ""}`}
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  <h2
                    className={`font-display font-bold text-[15px] tracking-[-0.01em] ${
                      isGate ? "text-cherry-dark" : "text-navy"
                    }`}
                  >
                    {isGate ? (
                      <>
                        <span className="font-extrabold text-[10px] tracking-[0.08em] uppercase text-cherry mr-2">
                          GATE
                        </span>
                        {phase.label}
                      </>
                    ) : (
                      phase.label
                    )}
                  </h2>
                </div>
                <span
                  className={`font-display font-bold text-[12px] px-2.5 py-0.5 rounded-full ${
                    phaseCompleted === phase.items.length
                      ? "bg-green-100 text-green-700"
                      : "bg-surface text-silver-dark"
                  }`}
                >
                  {phaseCompleted}/{phase.items.length}
                </span>
              </button>

              {isExpanded && (
                <div className="mt-1 space-y-1">
                  {visibleItems.map((item) => (
                    <TaskRow
                      key={item.id}
                      item={item}
                      onToggle={toggleItem}
                      onNotesChange={handleNotesChange}
                      notesExpanded={expandedNotes.has(item.id)}
                      onToggleNotes={() =>
                        setExpandedNotes((prev) => {
                          const next = new Set(prev);
                          if (next.has(item.id)) next.delete(item.id);
                          else next.add(item.id);
                          return next;
                        })
                      }
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </main>
    </>
  );
}

function TaskRow({
  item,
  onToggle,
  onNotesChange,
  notesExpanded,
  onToggleNotes,
}: {
  item: ChecklistItem;
  onToggle: (id: string) => void;
  onNotesChange: (id: string, value: string) => void;
  notesExpanded: boolean;
  onToggleNotes: () => void;
}) {
  const [detailOpen, setDetailOpen] = useState(false);
  const hasNotes = item.notes && item.notes.trim().length > 0;

  return (
    <div
      className={`bg-white rounded-md border transition-colors ${
        item.completed ? "border-green-200 bg-green-50/30" : "border-transparent"
      }`}
    >
      <div className="flex items-start gap-3 px-4 py-3">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(item.id)}
          className="mt-0.5 flex-shrink-0 w-[22px] h-[22px] rounded border-2 flex items-center justify-center transition-colors"
          style={{
            borderColor: item.completed ? "#16a34a" : "#B8BFC6",
            backgroundColor: item.completed ? "#16a34a" : "transparent",
          }}
          aria-label={`Mark "${item.title}" as ${item.completed ? "incomplete" : "complete"}`}
        >
          {item.completed && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20,6 9,17 4,12" />
            </svg>
          )}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`font-body font-semibold text-[14px] ${
                item.completed ? "line-through text-silver-dark" : "text-navy"
              }`}
            >
              {item.title}
            </span>

            {item.tags?.map((tag) => (
              <span
                key={tag}
                className={`font-display font-bold text-[9px] tracking-[0.06em] uppercase px-1.5 py-0.5 rounded ${
                  tag === "critical"
                    ? "bg-cherry/10 text-cherry"
                    : tag === "blocker"
                    ? "bg-orange-100 text-orange-700"
                    : tag === "defer"
                    ? "bg-silver-light/50 text-silver-dark"
                    : tag === "parallel"
                    ? "bg-powder-light text-powder-dark"
                    : "bg-surface text-silver-dark"
                }`}
              >
                {tag}
              </span>
            ))}

            {hasNotes && !notesExpanded && (
              <span className="text-[12px]" title="Has notes">
                {String.fromCodePoint(0x1F4DD)}
              </span>
            )}
          </div>

          {/* Meta info */}
          {(item.meta_cost || item.meta_time || item.meta_who) && (
            <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1">
              {item.meta_cost && (
                <span className="font-body text-[11px] text-silver-dark">
                  Cost: {item.meta_cost}
                </span>
              )}
              {item.meta_time && (
                <span className="font-body text-[11px] text-silver-dark">
                  Time: {item.meta_time}
                </span>
              )}
              {item.meta_who && (
                <span className="font-body text-[11px] text-silver-dark">
                  Who: {item.meta_who}
                </span>
              )}
            </div>
          )}

          {/* Detail toggle */}
          {item.detail_html && (
            <>
              <button
                onClick={() => setDetailOpen(!detailOpen)}
                className="font-display font-bold text-[10px] tracking-[0.04em] uppercase text-cherry hover:text-cherry-dark mt-1"
              >
                {detailOpen ? "Hide details" : "Show details"}
              </button>
              {detailOpen && (
                <div
                  className="mt-2 font-body text-[13px] leading-relaxed text-silver-dark prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: item.detail_html }}
                />
              )}
            </>
          )}

          {/* Notes */}
          {notesExpanded && (
            <textarea
              value={item.notes || ""}
              onChange={(e) => onNotesChange(item.id, e.target.value)}
              placeholder="Add notes..."
              className="mt-2 w-full p-2 border border-silver-light rounded text-[13px] font-body text-navy placeholder:text-silver resize-y min-h-[60px] focus:outline-none focus:ring-1 focus:ring-cherry/30"
            />
          )}
        </div>

        {/* Notes toggle button */}
        <button
          onClick={onToggleNotes}
          className={`flex-shrink-0 mt-0.5 p-1 rounded transition-colors ${
            notesExpanded ? "bg-cherry/10 text-cherry" : "text-silver hover:text-silver-dark"
          }`}
          title="Toggle notes"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
