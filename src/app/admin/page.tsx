import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { AdminHeader } from "./AdminHeader";

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-surface-warm">
      <AdminHeader email={user?.email} />

      <main className="max-w-[800px] mx-auto px-6 py-12">
        <h1 className="font-display font-black text-[32px] tracking-[-0.02em] text-navy mb-2">
          Welcome back, Nate.
        </h1>
        <p className="font-body text-[15px] text-silver-dark mb-10">
          Track your pre-launch progress and reference operational docs.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/admin/checklist"
            className="group block bg-white rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-md bg-cherry/10 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-[20px] text-navy mb-1">
              Pre-Launch Checklist
            </h2>
            <p className="font-body text-[14px] text-silver-dark">
              52 tasks across 6 phases plus 2 gate checkpoints. Track progress toward first job readiness.
            </p>
            <span className="inline-flex items-center gap-1 font-display font-bold text-[10px] tracking-[0.06em] uppercase text-cherry mt-4 group-hover:gap-2 transition-all">
              Open checklist
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <Link
            href="/admin/docs"
            className="group block bg-white rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-md bg-powder-light flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6aacbe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-[20px] text-navy mb-1">
              Operational Docs
            </h2>
            <p className="font-body text-[14px] text-silver-dark">
              Scripts, walkthroughs, and reference docs for the more complex launch tasks.
            </p>
            <span className="inline-flex items-center gap-1 font-display font-bold text-[10px] tracking-[0.06em] uppercase text-cherry mt-4 group-hover:gap-2 transition-all">
              Browse docs
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
