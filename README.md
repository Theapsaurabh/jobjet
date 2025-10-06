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

JobJet - Development Progress Documentation
📅 Day 01: Project Setup & Authentication UI
✅ Completed Tasks
1. Project Initialization & Setup
✅ Set up Next.js 14 project with TypeScript

✅ Configured Tailwind CSS with custom animations

✅ Installed and configured Shadcn/UI components

✅ Set up Lucide React icons for beautiful icons

✅ Created project structure and folder organization

2. Design System & Global Styling
✅ Custom global CSS with OKLCH color system

✅ Dark/Light mode support configuration

✅ Custom animation keyframes (fade-in, slide-up, slide-down)

✅ Professional color palette and typography system

✅ Responsive design foundation

3. Registration Page Development
✅ Beautiful gradient background design

✅ Role selection cards (Job Seeker vs Employer)

✅ Form fields: Name, Username, Email, Password, Confirm Password

✅ Password visibility toggle functionality

✅ Terms & Conditions checkbox

✅ Loading states with spinner animations

✅ Smooth hover effects and transitions

✅ Professional animations (fade-in, slide-up)

✅ Responsive design for all devices

✅ Form validation structure

4. Login Page Development
✅ Matching design with registration page

✅ Email & Password fields with icons

✅ Password visibility toggle

✅ Forgot password link

✅ Loading states with animations

✅ "Create account" navigation link

✅ Consistent professional styling

5. Component Library
✅ Input components with icons

✅ Button components with gradients

✅ Card components with backdrop blur

✅ Label and form components

✅ Checkbox components

✅ Select dropdown components

🎯 Technical Achievements
TypeScript interfaces for all form data

Responsive design that works on mobile, tablet, and desktop

Smooth animations with CSS keyframes and Tailwind

Professional UI/UX with modern design principles

Clean code structure with reusable components

📱 Features Implemented
✨ Visual Appeal: Gradient backgrounds, smooth animations

🔧 User Experience: Loading states, hover effects, focus states

📱 Responsiveness: Mobile-first design approach

🎨 Consistency: Unified design system across pages

📅 Day 02: Database Schema & Backend Foundation
✅ Completed Tasks
1. Database Schema Design
✅ User schema with essential registration fields

✅ Proper data types and constraints

✅ Unique constraints for username and email

✅ Timestamp fields for created_at and updated_at

✅ Role-based user system (applicant/employer)

2. Drizzle ORM Setup
✅ PostgreSQL database configuration

✅ Drizzle schema definition in TypeScript

✅ Proper table relationships and foreign keys

✅ Migration system setup

3. Database Operations
✅ Initial database push operation

✅ Migration file generation

✅ Database connection testing

✅ Schema validation and optimization

4. Enhanced User Schema
typescript
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  userName: varchar("username", { length: 50 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: text("password").notNull(),
  role: varchar("role", { length: 20 }).notNull().default('applicant'),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
5. Development Workflow Setup
✅ Drizzle Kit commands for database management

✅ Migration generation and execution

✅ Database studio for visual management

✅ Proper development workflow establishment

🎯 Technical Achievements
Database Schema: Clean, efficient user table design

Type Safety: Full TypeScript support with Drizzle ORM

Migration System: Proper database version control

Scalability: Foundation for future table expansions

🔧 Commands Executed
bash
# Database operations
npx drizzle-kit push          # Initial schema push
npx drizzle-kit generate      # Migration file generation
npx drizzle-kit migrate       # Migration execution
npx drizzle-kit studio        # Database visualization
📊 Database Features
🗄️ User Management: Complete user registration system

🔐 Security: Proper password storage preparation

📝 Audit Trail: created_at and updated_at timestamps

🎯 Role System: applicant/employer differentiation

⚡ Performance: Optimized indexes and constraints



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
