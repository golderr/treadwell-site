"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

const ALLOWED_EMAIL = process.env.NEXT_PUBLIC_ALLOWED_ADMIN_EMAIL || "goldstein.nate@gmail.com";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "restricted">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (email.trim().toLowerCase() !== ALLOWED_EMAIL) {
      setStatus("restricted");
      return;
    }

    setStatus("sending");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: {
        emailRedirectTo: `${window.location.origin}/admin/auth/callback`,
      },
    });

    if (error) {
      setStatus("error");
    } else {
      setStatus("sent");
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-navy-deep via-navy to-navy-grad flex items-center justify-center px-6">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-8">
          <h1 className="font-display font-black text-[28px] text-white tracking-[-0.02em]">
            Treadwell Admin
          </h1>
          <p className="font-body text-[14px] text-silver mt-2">
            Sign in with your magic link
          </p>
        </div>

        <div className="bg-white rounded-lg p-8">
          {status === "sent" ? (
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-[18px] text-navy mb-2">Check your email</h2>
              <p className="font-body text-[14px] text-silver-dark">
                We sent a magic link to <strong>{email}</strong>. Click the link to sign in.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 font-display font-semibold text-[12px] tracking-[0.06em] uppercase text-navy">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "restricted" || status === "error") setStatus("idle");
                }}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 border border-silver-light rounded-md font-body text-[15px] text-navy placeholder:text-silver focus:outline-none focus:ring-2 focus:ring-cherry/30 focus:border-cherry"
              />

              {status === "restricted" && (
                <p className="mt-2 font-body text-[13px] text-cherry font-semibold">
                  Access restricted. This email is not authorized.
                </p>
              )}
              {status === "error" && (
                <p className="mt-2 font-body text-[13px] text-cherry font-semibold">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full mt-4 bg-cherry text-white font-body font-bold text-[15px] py-3 rounded-md hover:bg-cherry-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Magic Link"}
              </button>
            </form>
          )}
        </div>

        <p className="text-center font-body text-[12px] text-silver-dark mt-6">
          Private admin area for Treadwell Restoration
        </p>
      </div>
    </div>
  );
}
