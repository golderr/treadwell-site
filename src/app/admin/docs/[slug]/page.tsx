import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminHeader } from "../../AdminHeader";
import { createClient } from "@/lib/supabase/server";
import { MarkdownRenderer } from "./MarkdownRenderer";

interface Props {
  params: Promise<{ slug: string }>;
}

function getDoc(slug: string) {
  const filePath = path.join(process.cwd(), "admin-docs", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    title: data.title || slug.replace(/-/g, " "),
    description: data.description || "",
    tags: data.tags || [],
    content,
  };
}

export async function generateStaticParams() {
  const docsDir = path.join(process.cwd(), "admin-docs");
  if (!fs.existsSync(docsDir)) return [];

  return fs
    .readdirSync(docsDir)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map((f) => ({ slug: f.replace(/\.md$/, "") }));
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const doc = getDoc(slug);

  if (!doc) notFound();

  return (
    <div className="min-h-screen bg-surface-warm">
      <AdminHeader email={user?.email} />

      <main className="max-w-[800px] mx-auto px-6 py-12">
        <Link
          href="/admin/docs"
          className="inline-flex items-center gap-1 font-display font-bold text-[10px] tracking-[0.06em] uppercase text-cherry hover:text-cherry-dark mb-6"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to docs
        </Link>

        <h1 className="font-display font-black text-[32px] tracking-[-0.02em] text-navy mb-3">
          {doc.title}
        </h1>

        {doc.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-8">
            {doc.tags.map((tag: string) => (
              <span
                key={tag}
                className="font-display font-bold text-[9px] tracking-[0.06em] uppercase px-2 py-0.5 rounded bg-surface text-silver-dark"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <MarkdownRenderer content={doc.content} />
      </main>
    </div>
  );
}
