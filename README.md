# JobJet 🚀

**JobJet** is a modern **job portal web application** built with **Next.js**, **Tailwind CSS**, **Shadcn UI**, and **Drizzle ORM**.  
It helps job seekers find opportunities and employers post listings efficiently.

---

## Features ✨

- **Job Seeker**
  - Browse and filter jobs by category, location, or salary
  - Apply for jobs directly
  - Save favorite jobs

- **Employer**
  - Post new job listings
  - Manage applications
  - Track applicants

- **Admin Dashboard**
  - Manage users and job listings
  - Analytics and insights

- **Tech Stack**
  - **Frontend:** Next.js, Tailwind CSS, Shadcn UI
  - **Backend / ORM:** Drizzle ORM with PostgreSQL
  - **Authentication:** JWT + Cookies
  - **Optional:** Node.js API routes

---

## Getting Started 🏃‍♂️

Clone the repo:

```bash
git clone https://github.com/yourusername/jobjet.git
cd jobjet
Install dependencies:

bash
Copy code
npm install
# or
yarn
# or
pnpm install
Create a .env file with your environment variables:

env
Copy code
DATABASE_URL=your_postgres_url
NEXT_PUBLIC_API_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret
Run the development server:

bash
Copy code
npm run dev
# or
yarn dev
# or
pnpm dev
Open http://localhost:3000 in your browser to see the app.

Project Structure 📂
bash
Copy code
jobjet/
├─ app/                # Next.js app pages & routes
├─ components/         # Reusable UI components
├─ db/                 # Drizzle ORM schema & database setup
├─ pages/api/          # API routes (if any)
├─ public/             # Static assets
├─ styles/             # Tailwind / global styles
└─ README.md
Contributing 🤝
Contributions are welcome!

Fork the repo

Create a new branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m "Add your feature")

Push to your branch (git push origin feature/your-feature)

Open a Pull Request

License 📝
This project is licensed under the MIT License.

⚠️ Note: MIT allows others to modify your code freely. If you want to prevent modifications in forks, you would need a more restrictive license.

Made with ❤️ by Saurabh Pandey