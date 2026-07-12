CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  form_type TEXT NOT NULL CHECK (form_type IN ('refer_patient','consultation','callback','contact')),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  message TEXT,
  source_url TEXT,
  user_agent TEXT,
  ip_address TEXT,
  extra JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 200
    AND length(phone) BETWEEN 5 AND 40
    AND (email IS NULL OR length(email) <= 320)
    AND (message IS NULL OR length(message) <= 5000)
  );

CREATE INDEX leads_created_at_idx ON public.leads (created_at DESC);
CREATE INDEX leads_form_type_idx ON public.leads (form_type);