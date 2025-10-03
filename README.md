JobJet - Job Tracking Application
https://img.shields.io/badge/JobJet-Job%2520Tracking-blue https://img.shields.io/badge/Next.js-13-black https://img.shields.io/badge/TypeScript-Ready-blue https://img.shields.io/badge/PostgreSQL-Database-blue

A modern job application tracking system built with Next.js 13, TypeScript, and PostgreSQL. Streamline your job search by organizing applications, tracking status, and managing opportunities in one place.

🚀 Features
📊 Dashboard Overview - Get insights into your job search progress

📝 Application Management - Add, edit, and track job applications

🔔 Status Tracking - Monitor application stages (Applied, Interview, Offer, etc.)

📱 Responsive Design - Works seamlessly on all devices

🔐 Secure Authentication - JWT-based user authentication

⚡ Fast Performance - Built with Next.js 13 for optimal speed

🛠 Tech Stack
Frontend: Next.js 13, React, TypeScript, Tailwind CSS

Backend: Next.js API Routes

Database: PostgreSQL with Drizzle ORM

Authentication: JWT

Deployment: Vercel-ready

📦 Installation
Prerequisites
Node.js 16.8 or later

PostgreSQL database

npm, yarn, or pnpm

Quick Start
Clone the repository

bash
git clone https://github.com/yourusername/jobjet.git
cd jobjet
Install dependencies

bash
npm install
# or
yarn install
# or
pnpm install
Environment Setup
Create a .env file in the root directory:

env
DATABASE_URL=your_postgres_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
Database Setup

bash
# Run database migrations
npm run db:push
Start Development Server

bash
npm run dev
# or
yarn dev
# or
pnpm dev
Open your browser
Navigate to http://localhost:3000

🏗 Project Structure
text
jobjet/
├── app/                    # Next.js 13 app directory
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Protected dashboard routes
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── lib/                  # Utility libraries
│   ├── auth.ts          # Authentication config
│   ├── db.ts            # Database configuration
│   └── utils.ts         # Helper functions
├── db/                   # Database schema and migrations
│   ├── schema.ts         # Drizzle ORM schema
│   └── migrations/       # Database migrations
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── package.json
🔧 Configuration
Database Setup
Create a PostgreSQL database

Update your .env file with the connection string:

env
DATABASE_URL="postgresql://username:password@localhost:5432/jobjet"
Environment Variables
Variable	Description	Required
DATABASE_URL	PostgreSQL connection string	Yes
NEXTAUTH_SECRET	Secret key for JWT encryption	Yes
NEXTAUTH_URL	Base URL of your application	Yes
🚀 Deployment
Vercel (Recommended)
Push your code to GitHub

Connect your repository to Vercel

Add environment variables in Vercel dashboard

Deploy!

Other Platforms
JobJet can be deployed on any platform that supports Next.js:

Netlify

Railway

Digital Ocean

AWS

🤝 Contributing
We love your input! We want to make contributing to JobJet as easy and transparent as possible.

Development Process
Fork the repo

bash
git clone https://github.com/yourusername/jobjet.git
Create a feature branch

bash
git checkout -b feature/amazing-feature
Make your changes

bash
git commit -m "Add amazing feature"
Push to your branch

bash
git push origin feature/amazing-feature
Open a Pull Request

Code Style
Use TypeScript for type safety

Follow ESLint and Prettier configurations

Write meaningful commit messages

Add tests for new features

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

🆘 Support
📧 Email: [your-email@example.com]

🐛 Issues: GitHub Issues

💬 Discussions: GitHub Discussions

🙏 Acknowledgments
Built with Next.js

Styled with Tailwind CSS

Database ORM with Drizzle

Icons from Lucide React

<div align="center">
Made with ❤️ by Saurabh Pandey

Report Bug · Request Feature

</div>
