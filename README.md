🏫 School Finder / Management Project – Summary
🎯 Goal

Design and deploy a mini full-stack project using Next.js (frontend + API) and MySQL (database) that allows:

Adding schools via a form (AddSchool Page).

Displaying schools like an ecommerce grid (ShowSchools Page).

🛠️ Tech Stack

Frontend → Next.js (React + TailwindCSS + shadcn/ui components).

Backend → Next.js API routes (custom routes under /api/testDB/...).

Database → MySQL (local for dev, cloud DB like PlanetScale/Render for hosting).

Hosting → Localhost for dev, Render/Vercel for production.

📂 Project Structure
school-management/
 ├─ frontend/               # User interface (Next.js)
 │   ├─ pages/
 │   │   ├─ AddSchool.tsx   # Form to add a school
 │   │   ├─ ShowSchools.tsx # Grid to list schools
 │   │   ├─ Index.tsx       # Home page
 │   │   └─ NotFound.tsx    # 404 page
 │   ├─ components/         # Reusable UI (Navigation, Input, Button)
 │   └─ styles/             # TailwindCSS setup
 │
 ├─ backend/                # Next.js API routes (server-side)
 │   ├─ src/lib/db.js       # MySQL connection
 │   ├─ src/app/api/
 │   │   ├─ testDB/addSchool/route.js  # POST API (insert school)
 │   │   └─ testDB/getSchools/route.js # GET API (fetch schools)
 │   └─ public/schoolImages/           # Image uploads stored here
 │
 └─ database.sql            # SQL schema for table creation

🗄️ Database Design

Table: schools

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  contact VARCHAR(20),
  email_id TEXT,
  image TEXT
);

📌 Features
🔹 1. AddSchool Page (/addSchool)

Form built with react-hook-form (validation included).

Fields: name, address, city, state, contact, email, image.

Image file gets uploaded to /public/schoolImages.

Data saved into MySQL table.

After submit → form resets.

🔹 2. ShowSchools Page (/showSchools)

Fetches school list from API.

Displays schools in a grid layout like ecommerce products.

Each card shows:

✅ School Name

✅ Address

✅ City

✅ Image (from /public/schoolImages)

Responsive → works on both mobile & desktop.

Includes search bar (filter by name, city, or state).

🔹 3. Home Page (/)

Hero section with welcome text + buttons:

➕ Add School → /addSchool

🔍 View Schools → /showSchools

Navbar + footer for navigation.

🚦 User Flow

User opens Home Page → sees intro & navigation.

Clicks Add School → fills form → school info stored in DB + image saved.

Goes to Show Schools → sees all schools in a clean card UI.

Can search/filter schools by name/city/state.

🧩 Improvements Added

✅ File uploads handled and stored properly.

✅ Validation (email format, phone number format, required fields).

✅ Search functionality in ShowSchools.

✅ Responsive UI with Tailwind.

✅ Toast messages (removed later as per request).
