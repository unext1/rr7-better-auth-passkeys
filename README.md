# React Router v7 + DrizzleORM + Better Auth Starter

A modern full-stack application starter built with React Router v7, DrizzleORM, and Better Auth for passkeys.

## Tech Stack

- **Framework**: React Router v7
- **Database ORM**: DrizzleORM
- **Authentication**: Better Auth
- **Styling**: Tailwind CSS v4, Shadcn UI
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm
- SQLite database (this setup creates a filebase sqlite db when you apply migrations)

### Installation

1. Clone this repository
2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

Create a `.env` file in the root directory with the following variables:

```
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
```

### Database Setup

1. Apply migrations:

```bash
pnpm migrate:apply
```

## Development

Start the development server:

```bash
pnpm dev
```

## Available Scripts

- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm start`: Start production server
- `pnpm auth:generate`: Generate auth schema
- `pnpm migrate:gen`: Generate database migrations
- `pnpm migrate:apply`: Apply database migrations
