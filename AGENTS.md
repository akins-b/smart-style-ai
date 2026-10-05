# SmartStyle AI — development notes

## Stack
Node.js (CommonJS) + Express 5 API backed by PostgreSQL (`pg`). No frontend;
the app itself is the API. Image uploads are stored on local disk in `uploads/`
(the directory must exist — multer does not create it).

## Running in this sandbox
`docker compose -f docker-compose.base44.yml up -d` brings up:
- `db` — postgres:16-alpine with local dev credentials (see compose `environment:`)
- `app` — node:22 with the repo bind-mounted at `/app`; installs deps with
  `npm ci` on container start, then runs `node --watch src/server.js` (live reload
  on file edits; restart via compose if it ever misses a change)

## Database
- The `user_images` table (id, image_url, created_at) is created by
  `db/init.sql`, mounted into the postgres image's init hook. It only runs on a
  fresh volume — dropping the `db_data` volume re-applies it.
- There are no migrations; schema lives in `db/init.sql`.

## Environment variables (set via compose; no external secrets required)
PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT

## Verify it works
- `curl http://localhost:3000/` → service info JSON
- `curl http://localhost:3000/api/health` → `{"status":"OK",...}`
- Upload: `curl -F "image=@/tmp/test.png" http://localhost:3000/api/images/upload`
  → inserts a row into `user_images` and writes the file to `uploads/`
