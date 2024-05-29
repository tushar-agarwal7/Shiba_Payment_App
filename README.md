# Shiba_Payment_App
Shiba Payment  is a web application that allows users to send money to each other seamlessly and securely. This project includes user authentication, profile management, and transaction handling features.

# Technologies Used

- Monorepo
- Frontend and Backend: Next.js
- Database: PostgreSQL with Prisma
- Authentication: NextAuth.js
- Containerization: Docker
- TypeScript: Full TypeScript support

Getting Started

1. Clone the repository:
```
git clone git@github.com:tushar-agarwal7/Shiba_Payment_App.git
```

2. Navigate to the project directory:
```
cd Shiba_Payment_App
```

3. Install the dependencies:
```
   npm install
```
4. Run postgres either locally or on the cloud (neon.tech)

```jsx
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- Update .env files everywhere with the right db url
- Go to `packages/db`
    - npx prisma migrate dev
- Go to `apps/merchant-app` , run `npm run dev`
