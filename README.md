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

Local data files:

- `server/data/submissions.json`
- `server/data/donations.json`
