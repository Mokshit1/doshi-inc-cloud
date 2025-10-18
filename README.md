# Doshi Inc. — Cloud-deployable Starter (Frontend: Vercel, Backend: Render)

This repository is a starter full-stack project for Doshi Inc. — a construction materials company (cement, steel, PVC pipes, AAC blocks, bathware, etc.). It includes:

- React + Vite + Tailwind frontend (ready for Vercel)
- Node.js + Express backend (ready for Render)
- MongoDB Atlas (cloud DB)
- Cloudinary image integration (placeholders included)
- Hidden admin route `/admin` (admin user seeded: admin@doshi.com / admin123)
- Seed script to populate sample products and admin user

## What I included
- Frontend code in `/frontend`
- Backend code in `/backend`
- Dummy product images in `frontend/src/assets/products/`
- `backend/scripts/seed.js` to populate sample data (run after connecting to MongoDB Atlas)
- `.env.example` files for both frontend and backend

## Quick setup (local dev)
1. Backend
   - `cd backend`
   - `npm install`
   - create `.env` (see `.env.example`) with `MONGO_URI` and `JWT_SECRET`
   - `npm run dev`
   - Run seed: `node scripts/seed.js`

2. Frontend
   - `cd frontend`
   - `npm install`
   - create `.env` with `VITE_API_URL=http://localhost:5000`
   - `npm run dev`

## Cloud deployment (summary)
1. **MongoDB Atlas**: create a cluster, database user, and get `MONGO_URI`.
2. **Render** (Backend): Create a Web Service, connect GitHub or upload code, set environment variables (see `backend/.env.example`), and deploy. Port is detected automatically.
3. **Vercel** (Frontend): Connect Git repo or upload the `frontend` folder; set `VITE_API_URL` to your Render backend URL (e.g., `https://doshi-backend.onrender.com`), then deploy.
4. **Cloudinary**: Create an account, get cloud name / API keys and set `CLOUDINARY_URL` in backend environment for image uploads (the code includes placeholder support).

Full step-by-step instructions are included in `DEPLOYMENT.md` inside the ZIP.

**IMPORTANT**: Change the seeded admin password before production and secure JWT secret.

