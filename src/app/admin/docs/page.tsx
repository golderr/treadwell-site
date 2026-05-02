import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { AdminHeader } from "../AdminHeader";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Docs | Treadwell Admin",
};

interface DocMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

function getDocs(): DocMeta[] {
  const docsDir = path.join(process.cwd(), "admin-docs");

  if (!fs.existsSync(docsDir)) return [];

  const files = fs.readdirSync(docsDir).filter(
    (f) => f.endsWith(".md") && f !== "README.md"
  );

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(docsDir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title || file.replace(/\.md$/, "").replace(/-/g, " "),
      description: data.description || "",
      tags: data.tags || [],
    };
  });
}

export default async function DocsIndexPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const docs = getDocs();

  return (
    <div className="min-h-screen bg-surface-warm">
      <AdminHeader email={user?.email} />

      <main className="max-w-[800px] mx-auto px-6 py-12">
        <h1 className="font-display font-black text-[32px] tracking-[-0.02em] text-navy mb-2">
          Operational Docs
        </h1>
        <p className="font-body text-[15px] text-silver-dark mb-10">
          Internal reference docs for the more complex launch tasks. To request edits, ask Claude to update the file by name.
        </p>

        {docs.length === 0 ? (
          <p className="font-body text-[14px] text-silver-dark">No docs found.</p>
        ) : (
          <div className="space-y-3">
            {docs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/admin/docs/${doc.slug}`}
                className="block bg-white rounded-md p-6 hover:shadow-md transition-shadow group"
              >
                <h2 className="font-body font-bold text-[16px] text-navy group-hover:text-cherry transition-colors mb-1">
                  {doc.title}
                </h2>
                {doc.description && (
                  <p className="font-body text-[13px] text-silver-dark mb-2">
                    {doc.description}
                  </p>
                )}
                {doc.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
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
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
