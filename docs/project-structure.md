asynchire/
├─ public/
│  ├─ images/               # Static images, including your API diagram
│  └─ favicon.ico
│
├─ src/
│  ├─ app/                  # Next.js App Router pages
│  │  ├─ dashboard/         # Employer dashboard pages
│  │  │  ├─ index.tsx       # Dashboard main page
│  │  │  └─ [interviewId]/  # Interview detail pages
│  │  │     └─ index.tsx
│  │  │
│  │  ├─ interviews/        # Pages for creating interviews
│  │  │  └─ create.tsx
│  │  │
│  │  ├─ submissions/       # Candidate submission pages
│  │  │  └─ [link]/index.tsx
│  │  │
│  │  ├─ auth/              # Login / Signup pages
│  │  │  ├─ login.tsx
│  │  │  └─ signup.tsx
│  │  │
│  │  └─ layout.tsx         # App-wide layout, header/footer
│  │
│  ├─ components/           # Reusable UI components
│  │  ├─ Button.tsx
│  │  ├─ Modal.tsx
│  │  ├─ VideoRecorder.tsx
│  │  └─ ProgressBar.tsx
│  │
│  ├─ lib/                  # Helper functions & API utils
│  │  └─ api.ts             # Wrapper for fetch calls to backend
│  │
│  ├─ models/               # MongoDB schemas (or Typescript interfaces)
│  │  ├─ User.ts
│  │  ├─ Interview.ts
│  │  ├─ Question.ts
│  │  └─ Submission.ts
│  │
│  ├─ services/             # Business logic (optional layer)
│  │  └─ interviewService.ts
│  │
│  └─ styles/               # Tailwind config + global styles
│      └─ globals.css
│
├─ docs/                    # Documentation
│  ├─ user-flow.md
│  ├─ data-models.md
│  └─ api-design.md
│
├─ .gitignore
├─ package.json
├─ tailwind.config.js
├─ tsconfig.json
├─ next.config.js
└─ README.md
