# Sustained Life

Separated apps for [Sustained Life, Inc.](https://sustainedlife.org).

## Structure

```
frontend/   Public Next.js website
admin/      Owner admin dashboard
server/     Express API
```

## Local development

Install from the repo root:

```bash
npm install
```

Run in separate terminals:

```bash
npm run dev:server      # http://localhost:4000
npm run dev:frontend    # http://localhost:3000
npm run dev:admin       # http://localhost:3001
```

### Admin access

1. Open http://localhost:3001/login  
2. Sign in with the admin secret from `server/.env` (`ADMIN_SECRET` / `SUBMISSIONS_ADMIN_SECRET`)  
3. Default local secret: `sustained-life-admin`

Admin features:

- **Messages** inbox for Contact form + Method request submissions
- Track donations (manual records + totals)
- View newsletter subscriber count and list

## API endpoints

| Method | Path | Purpose |
|--------|------|---------|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/contact` | Contact form |
| `POST` | `/api/method-request` | Method info request |
| `POST` | `/api/newsletter` | Newsletter signup |
| `GET` | `/api/submissions` | List submissions (admin) |
| `GET` | `/api/admin/stats` | Dashboard stats (admin) |
| `GET/POST` | `/api/admin/donations` | Donation tracking (admin) |

### Database (MongoDB)

The API stores form submissions and donations in **MongoDB** when `MONGODB_URI` is set in `server/.env`.

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database user and allow network access (for local: your IP; for DigitalOcean: `0.0.0.0/0` or the app’s outbound IPs)
3. Copy the connection string into `server/.env`:

```bash
MONGODB_URI=mongodb+srv://USER:PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=sustained_life
```

4. Restart the API. Health check will report `"storage": "mongodb"`.

If `MONGODB_URI` is missing, the API falls back to local JSON files (`server/data/`). On first Mongo connect, any existing JSON data is imported automatically when the collections are empty.

On DigitalOcean App Platform, add `MONGODB_URI` (and optionally `MONGODB_DB`) as encrypted env vars for the API component.

### Deploy API on DigitalOcean App Platform

Because this repo is an npm monorepo, set the component like this:

| Setting | Value |
|--------|--------|
| Source directory | `server` |
| Build command | `npm run do:build` |
| Run command | `npm run do:start` |
| HTTP port | `8080` (App Platform sets `PORT`) |

`do:build` installs dependencies **inside** `server/` (avoids workspace hoisting to the repo root, which breaks the run image).

Required env vars: `MONGODB_URI`, `MONGODB_DB`, `ADMIN_SECRET`, `FRONTEND_ORIGIN`.
