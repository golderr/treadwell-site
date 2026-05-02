"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function AdminHeader({ email }: { email?: string }) {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  return (
    <header className="bg-navy">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[56px]">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="font-display font-black italic text-[15px] text-white tracking-[-0.01em]">
            TREADWELL <span className="text-cherry-light font-bold not-italic text-[11px] tracking-[0.04em]">ADMIN</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-5">
            <Link href="/admin/checklist" className="font-display font-semibold text-[11px] tracking-[0.06em] uppercase text-white/50 hover:text-white transition-colors">
              Checklist
            </Link>
            <Link href="/admin/docs" className="font-display font-semibold text-[11px] tracking-[0.06em] uppercase text-white/50 hover:text-white transition-colors">
              Docs
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {email && (
            <span className="hidden sm:inline font-body text-[12px] text-silver-dark">
              {email}
            </span>
          )}
          <button
            onClick={handleSignOut}
            className="font-display font-bold text-[10px] tracking-[0.06em] uppercase text-white/50 hover:text-white transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
