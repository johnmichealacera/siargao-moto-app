# SiargaoMoto Monorepo

Monorepo for a motorcycle rental MVP for Siargao Island.

- Frontend: Expo React Native (TypeScript), React Navigation, NativeWind/Tailwind, React Query
- Backend: NestJS (TypeScript), Prisma ORM, PostgreSQL
- Auth: Firebase Auth (email/password; social later)
- Payments: Stripe/PayPal/GCash (MVP: simulated)
- Hosting targets: Railway (API), Supabase (Postgres + Storage)

## Repo structure

```
.
├─ frontend/       # Expo app (RN + TypeScript)
└─ backend/        # NestJS API + Prisma
```

## Prerequisites

- Node.js 18+ (Expo 53 works with 18; some Firebase packages warn for <20 – safe to ignore for dev)
- npm
- PostgreSQL database (local or Supabase)

## Quick start

1) Backend
- Create `backend/.env`:
```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB
```
- Install deps, generate client, migrate, seed:
```
cd backend
npm install
npx prisma migrate dev --name init
npm run prisma:seed
npm run start:dev
```

2) Frontend
- Set runtime config in `frontend/app.json` → `expo.extra` (or use EAS secrets):
  - `backendUrl`, `stripePublishableKey`, `firebase` keys, `GOOGLE_MAPS_API_KEY` under `ios.config`/`android.config`
- Install and run:
```
cd frontend
npm install
npm run android   # or: npm run ios  |  npm run web
```

Notes:
- Web build disables native maps; use Android/iOS for Map screen.
- If bundler fails, clear cache: `npx expo start --clear`.

## Features (MVP)

- Authentication (Firebase email/password; social sign-in to follow)
- Listings: owners CRUD bikes, set pricing (daily/weekly/monthly), photos
- Availability: mark dates available/unavailable
- Booking: renters create bookings, optional deposit, pickup/drop-off toggle
- Payments: simulate and record transactions; future real Stripe/PayPal/GCash
- Owner dashboard: manage bikes, view bookings
- Damage report: before/after photos (Supabase Storage later)
- Map search: Google Maps API (mobile), type filters
- Offline-ready: cache last search (to be extended), auto-sync when online
- Scalable schema: `Category` model to support surfboards, vans, tours

## Backend API (selected)

- Bikes
  - GET `/bikes?type=Scooter`
  - GET `/bikes/:id`
  - POST `/bikes` (header `x-user-id` as owner)
- Bookings
  - GET `/bookings` (header `x-user-id` as renter)
  - POST `/bookings`
- Payments
  - POST `/payments/:bookingId/simulate` { provider, amount }
- Availability
  - GET `/availability/:bikeId`
  - POST `/availability/:bikeId` { date, available }
- Users
  - GET `/users/me` (header `x-user-id`)

Auth note: MVP uses `x-user-id` header. Replace with Firebase Admin token verification for production.

## Database (Prisma)

- Core models: `User`, `Bike`, `Availability`, `Booking`, `Payment`, `DamageReport`, `Category`
- Roles: `OWNER`, `RENTER`
- Payment providers: `STRIPE`, `PAYPAL`, `GCASH`, `MANUAL`
- Scripts:
```
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

## Environment variables

- Backend (`backend/.env`)
  - `DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB`
  - `STRIPE_SECRET_KEY=...` (future)
  - `FIREBASE_PROJECT_ID=...` (future)
  - `FIREBASE_CLIENT_EMAIL=...` (future)
  - `FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"` (future)

- Frontend (`frontend/app.json` → `expo.extra`)
  - `backendUrl`, `stripePublishableKey`
  - `firebase`: `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`
  - `GOOGLE_MAPS_API_KEY` (under `ios.config.googleMapsApiKey` and `android.config.googleMaps.apiKey`)

## Development tips

- If Expo web complains about native-only modules, test on device/emulator (`npm run android`/`ios`).
- For web, you can replace the Map screen with a web map widget later.
- After schema changes, regenerate client: `npx prisma generate`.

## Deployment (targets)

- API: Railway (set `DATABASE_URL`)
- DB/Storage: Supabase (use database URL for Prisma; place uploads in Storage)
- Mobile builds: Expo EAS (store secrets in EAS)

## Roadmap

- Replace header auth with Firebase token verification in NestJS
- Real payments (Stripe/PayPal/GCash)
- Supabase Storage uploads for damage reports and listing photos
- Owner roles/guards and validation DTOs
- Offline caching + background sync refinements
