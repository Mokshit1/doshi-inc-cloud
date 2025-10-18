# Deployment Instructions (Vercel frontend, Render backend, MongoDB Atlas, Cloudinary)

Follow these steps to deploy the Doshi Inc. project to the cloud.

---
## 1) MongoDB Atlas (create cluster & DB)
1. Sign up at https://www.mongodb.com/cloud/atlas and create a free cluster.
2. Create a database user (username/password) and allow your IP (or 0.0.0.0/0 for testing).
3. Obtain the connection string (replace <password> and <dbname>) and copy it.

Example:
`mongodb+srv://USER:PASSWORD@cluster0.abcd.mongodb.net/doshi?retryWrites=true&w=majority`

---
## 2) Prepare backend on Render
1. Create a new account at https://render.com and create a new **Web Service**.
2. Connect your GitHub repository (or you can deploy via manual upload).
3. For the build command use: `npm install && npm run build` (if you add a build) or just `npm install`.
4. Start command: `node server.js`
5. Set environment variables on Render (in Dashboard -> Environment):
   - `MONGO_URI` (from Atlas)
   - `JWT_SECRET` (generate a long secret)
   - `CLOUDINARY_URL` (optional, for images)
   - `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` (optional)
6. Deploy. Once deployed, Render will give you a URL like `https://doshi-backend.onrender.com`

---
## 3) Prepare frontend on Vercel
1. Create a new account at https://vercel.com and connect your GitHub repo containing the `frontend` folder.
2. Set the project root to the `frontend` folder (or create a repo for frontend only).
3. Add Environment Variable on Vercel:
   - `VITE_API_URL` -> `https://doshi-backend.onrender.com` (your Render URL)
4. Build & Deploy: Vercel auto-detects Vite and runs `npm run build`

---
## 4) Cloudinary (image uploads)
1. Create an account at https://cloudinary.com
2. Copy your `CLOUDINARY_URL` (format: cloudinary://API_KEY:API_SECRET@CLOUD_NAME)
3. Add `CLOUDINARY_URL` to your Render backend environment variables.
4. The backend currently stores `image` as a URL; extend admin product creation to upload images to Cloudinary (or use signed upload).

---
## 5) Seed database
After backend has access to the MongoDB Atlas URI and is running (on Render or locally):
- Run `node backend/scripts/seed.js` locally (or adapt script to run via a one-off job on Render) to create sample products and an admin user (admin@doshi.com / admin123). Remember to change the password in production.

---
## 6) Hidden admin route
- Admin login page is at `/admin/login`; the admin panel is at `/admin`.
- Do not link `/admin` in the public nav to keep it less discoverable; use a bookmark or IP restriction on Render for added security.

---
## 7) Notes & next steps
- Add input validation, rate-limiting and production-level error handling before public launch.
- Replace seeded admin password and set secure JWT secret.
- Configure HTTPS and domain names in Render/Vercel as needed.
