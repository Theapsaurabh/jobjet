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

Development:
---

**🛠 ESLint & Prettier - Code quality and formatting**

🐛 TypeScript - Full type safety
🔧 Hot Reload - Instant development feedback
🏁 Quick Start

### Prerequisites
---
- Node.js 18+
- PostgreSQL database
- npm 

Installation
---
**1 Clone the repository**
```bash
git clone https://github.com/yourusername/jobjet.git
cd jobjet
```

**2 Install dependencies**
```bash
npm install
# or
yarn install

```
**3 Environment Setup**
Create a .env file in the root directory:
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/jobjet"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
JWT_SECRET="your-jwt-secret"

```
**4 Database Setup**
```bash
# Generate database migrations
npm run db:generate

# Push schema to database
npm run db:push

```
**5 Start Development Server**
```bash
npm run dev
# or
yarn dev

```
**6 Open your browser**
Navigate to http://localhost:3000

### Folder Structure
---

```bash
jobjet/
├── app/                    # Next.js 14 App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn/UI components
│   ├── forms/            # Form components
│   ├── dashboard/        # Dashboard components
│   └── layout/           # Layout components
├── lib/                  # Utility libraries
│   ├── auth.ts          # Authentication config
│   ├── db.ts            # Database configuration
│   └── utils.ts         # Helper functions
├── db/                  # Database schema
│   ├── schema.ts        # Drizzle schema
│   └── migrations/      # Database migrations
├── public/              # Static assets
├── types/               # TypeScript type definitions
└── tailwind.config.js   # Tailwind configuration
```

🎨 UI Components
---
- JobJet uses Shadcn/UI for a consistent, accessible, and beautiful user interface:

- Cards - Job listings and company profiles

- Forms - Registration, login, and job applications

- Tables - Applicant tracking and job management

- Dialogs & Modals - Smooth user interactions

- Navigation - Intuitive menu system

🔐 Authentication
---
**Secure authentication system featuring:**

- JWT-based sessions

- Role-based access control (Job Seeker, Employer, Admin)

- Protected API routes

- Secure password hashing

📊 Database Schema
---
**Key entities**:

**Users** - Job seekers and employers

**Jobs** - Job listings with rich metadata

**Applications** - Job applications and status

**Companies** - Employer profiles and information

**Categories** - Job categories and skills

🤝 Contributing
---
**We welcome contributions! Please see our Contributing Guide for details**.

- Fork the repository

- Create your feature branch (git checkout -b feature/amazing-feature)

- Commit your changes (git commit -m 'Add some amazing feature')

- Push to the branch (git push origin feature/amazing-feature)

**Open a Pull Request**

👥 Team
--
**Saurabh Pandey** - Lead Developer & Maintainer.

## If you need help with:
---

**Setup issues** - Check the troubleshooting guide

**Feature requests** - Open an issue on GitHub

**Bugs** - Report with detailed information

### 🌟 Show Your Support
**Give a ⭐️ if this project helped you!**

Built with ❤️ using Next.js, Tailwind CSS, and Shadcn/UI

Connect talents with opportunities. Power careers with technology.
