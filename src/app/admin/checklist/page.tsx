import { createClient } from "@/lib/supabase/server";
import { AdminHeader } from "../AdminHeader";
import { ChecklistClient } from "./ChecklistClient";

export const metadata = {
  title: "Pre-Launch Checklist | Treadwell Admin",
};

export default async function ChecklistPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: items, error } = await supabase
    .from("checklist_items")
    .select("*")
    .order("phase_order", { ascending: true })
    .order("item_order", { ascending: true });

  return (
    <div className="min-h-screen bg-surface">
      <AdminHeader email={user?.email} />
      <ChecklistClient initialItems={items || []} loadError={error?.message} />
    </div>
  );
}
