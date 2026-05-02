-- Checklist items table
CREATE TABLE checklist_items (
  id TEXT PRIMARY KEY,
  phase TEXT NOT NULL,
  phase_order INTEGER NOT NULL,
  item_order INTEGER NOT NULL,
  title TEXT NOT NULL,
  detail_html TEXT,
  tags TEXT[] DEFAULT '{}',
  meta_cost TEXT,
  meta_time TEXT,
  meta_who TEXT,
  is_gate BOOLEAN DEFAULT FALSE,
  gate_group TEXT,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-update updated_at on changes
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_checklist_items_updated_at
BEFORE UPDATE ON checklist_items
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security: only authenticated users matching the allowlist can read/write
ALTER TABLE checklist_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin can read checklist"
ON checklist_items FOR SELECT
TO authenticated
USING (auth.jwt() ->> 'email' = 'goldstein.nate@gmail.com');

CREATE POLICY "Admin can update checklist"
ON checklist_items FOR UPDATE
TO authenticated
USING (auth.jwt() ->> 'email' = 'goldstein.nate@gmail.com');

CREATE POLICY "Admin can insert checklist"
ON checklist_items FOR INSERT
TO authenticated
WITH CHECK (auth.jwt() ->> 'email' = 'goldstein.nate@gmail.com');
