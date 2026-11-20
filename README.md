# Russian Culture Club – public website

Static public-facing preview deployed with GitHub Pages. RU/EN bilingual, responsive and calendar functional. Dates are not invented: only verified events should enter `events.json`.

The full production FastAPI backend and Telegram importer remain in the supplied RCC ZIP archive. GitHub Pages **cannot host the backend, shared database, secure CMS, or Telegram webhook**; deploy those to a separate server before enabling editor access. Admin panel is intentionally not linked from the static public preview.

Edit `events.json` (array `events`) only for verified public events. Data schema: `{ "id":1,"title":"...", "start_at":"2026-12-01T19:00", "category":"meetup", "location":"...", "description":"...", "url":"https://..." }`. Until backend exists this requires a GitHub file edit.

Pictures are artistic concepts, not documentary photographs from actual RCC meetings.