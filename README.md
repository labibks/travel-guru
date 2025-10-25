# Travel Guru

**A modern, responsive travel booking UI built with React, Tailwind CSS and Firebase Authentication.**

> Lightweight travel site to browse destinations, view details and sign in / register using Firebase Auth.

---

## Demo

Add your live demo URL here (Vercel / Netlify / GitHub Pages)

---

## Key Features

* Responsive UI with Tailwind CSS
* Destination listing and details pages
* Navbar search (search from navbar navigates to Destination page with query)
* Client-side filtering and live search inside Destination page
* Firebase Authentication (Email / Password)
* Protected routes for booking/details (requires login)
* Clean, reusable React components and routes (React Router)

---

## Tech Stack

* React (Vite)
* React Router
* Tailwind CSS
* Firebase Authentication
* Git & GitHub

---

## Prerequisites

* Node.js (>= 16)
* npm or yarn
* Firebase project (for Authentication)

---

## Setup & Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd travel-guru
```

2. Install dependencies

```bash
npm install
# or
# yarn
```

3. Create environment file

Create a file named `.env.local` in the project root and add your Firebase keys (Vite requires `VITE_` prefix):

```env
VITE_apiKey=your_api_key_here
VITE_authDomain=your_auth_domain_here
VITE_projectId=your_project_id_here
VITE_storageBucket=your_storage_bucket_here
VITE_messagingSenderId=your_messaging_sender_id_here
VITE_appId=your_app_id_here
```

> **Important:** Do **not** commit `.env.local` to version control. Add it to `.gitignore`.

4. Configure Firebase in `src/firebase/firebase.config.js` (example uses `import.meta.env`):

```js
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};
```

5. Run the dev server

```bash
npm run dev
# or
# yarn dev
```

Open `http://localhost:5173` (or the port shown) to view the site.

---

## Project Structure (suggested)

```
src/
├─ assets/          # images, icons
├─ components/      # reusable UI components (Navbar, Footer, Card...)
├─ pages/           # page components (Home, Destination, Details, Login, Register)
├─ routes/          # react-router related loaders / route definitions
├─ firebase/        # firebase.config.js
├─ Provider/        # AuthProvider (context)
├─ App.jsx
├─ main.jsx
└─ index.css
```

---

## Routing & Search Behavior

* Navbar search sends the user to `/destination?search=keyword`.
* `Destination` page reads `location.search` and filters the `destinationData` by `hotelName`.
* If `search` query is empty or missing, the page shows all destinations.

**Example:**

* Navbar: Enter `cox` and press Enter → navigates to `/destination?search=cox` → Destination page shows matching items.

---

## Firebase Authentication

* Authentication is implemented using `firebase/auth` and an `AuthProvider` context.
* Use `getAuth(app)` and export `auth` from the firebase config module.
* Protect private routes by checking `user` from `AuthContext` and redirecting to `/login` when needed.

---

## Scripts

* `npm run dev` — Start development server
* `npm run build` — Create production build
* `npm run preview` — Preview production build

---

## Deployment

Recommend deploying to Vercel or Netlify. Ensure you add the same environment variables (VITE_*) in the deployment dashboard.

---

## Common Issues & Troubleshooting

* **Blank results after search**: Make sure you parse query with `new URLSearchParams(location.search)` and use `.get('search')`.
* **.env not loaded**: Make sure `.env.local` is in project root and variable names start with `VITE_` for Vite.
* **Firebase auth errors**: Verify Firebase project config and enable Email/Password sign-in in Firebase Console.

---

## Contributing

1. Fork repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "feat: add ..."`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## TODO / Future Improvements

* Add search suggestions (auto-complete) in Navbar
* Add filters (location, rating, price range)
* Connect bookings to a database (Firestore)
* Unit / integration tests
* Improve accessibility & i18n (Bengali/English toggle)

---

## License

This project is provided under the MIT License. Replace if you prefer a different license.

---

## Author

* Your name (kawsar sheikh) — replace with the real author name
* Email: [h.kawsarsheikh@gmail.com](h.kawsarsheikh@gmail.com)

---

If you want, I can also:

* generate a `README` in Bangla,
* add example screenshots and badges,
* commit the `.env.example` file (without secrets) for developer onboarding.

Tell me which one you prefer and I will update the README.
live link: https://travel-guru-d9a0e.web.app