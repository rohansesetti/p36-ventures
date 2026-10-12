# P36 Fellowship: changes and placeholders

## New pages
- /opportunities/fellowship: programme page, FAQ (#faq)
- /opportunities/fellowship/membership: cost and reimbursement (#criteria)
- /opportunities/fellowship/apply: application form
- /welcome/[token]: selection + membership activation (noindex)
  Local preview: run `npm run dev` and open /welcome/preview (preview token works in development only)

## Edited files
- src/app/(site)/opportunities/page.tsx: one Fellowship band added above the application section. Desk role cards unchanged.
- src/components/ui/PageHero.tsx: optional `children` prop (backwards compatible).
- src/app/(site)/privacy/page.tsx: placeholder section for fellowship applicants.

## New files
- src/data/fellowship.ts: ALL fellowship copy lives here
- src/components/fellowship/FaqList.tsx
- src/components/fellowship/FellowshipApplicationForm.tsx
- src/lib/acceptance.ts: token lookup stub

## Placeholders to fill (all in src/data/fellowship.ts unless noted)
- cohort.name, startDate, closeDate, places, hoursPerWeek, screenReplyDays
- reimbursementCriteria: measure, threshold, assessor for each row
- FAQ "Is it remote?" and "Who can apply?" answers
- membership/page.tsx: [CANCELLATION POLICY]
- privacy/page.tsx: fellowship applicant section

## Notion (application form)
Applications POST to /api/fellowship/apply, which validates them and creates a row in Notion.
Files: src/app/api/fellowship/apply/route.ts, src/lib/notion.ts
Env vars (Vercel > Project > Settings > Environment Variables):
- NOTION_TOKEN
- NOTION_FELLOWSHIP_DB_ID
Database properties (names must match exactly): Name (Title), Email (Email), Country (Text),
Status (Select), Organisation (Text), LinkedIn (URL), Workstreams (Multi-select),
Why private markets (Text), Hours a week (Select), Source (Select),
Membership acknowledged (Checkbox), Alumni opt-in (Checkbox), Stage (Select), Applied (Date)

## Still to wire up
- src/lib/acceptance.ts: real token lookup.
- Vercel env var STRIPE_PAYMENT_LINK (Project > Settings > Environment Variables).

## Desks
Opportunities hero now says desks are commission-based and filled by referral or offered to exceptional candidates. Role cards otherwise unchanged.

## Photos
Reuses existing images (capital.jpg, studio.jpg, briefing.jpg in /public/photos/fields). Swap for fellowship-specific photos later if wanted.
