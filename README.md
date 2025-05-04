# 🧠 Tech Quiz App

A full-stack MERN quiz application that allows users to test their knowledge by answering a series of randomly selected questions. Includes both **end-to-end (E2E)** and **component testing** using Cypress.

---

## 🚀 Features

- ✅ 10-question quiz with scoring
- ✅ Random questions from a MongoDB database
- ✅ Responsive UI with Bootstrap
- ✅ Restartable quiz session
- ✅ Cypress-powered testing:
- ✅Component tests for `Quiz` UI logic
- ✅ E2E tests covering full user flow

---

## 🛠️ Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Frontend   | React + Vite + TypeScript   |
| Backend    | Node.js + Express           |
| Database   | MongoDB                     |
| Styling    | Bootstrap 5                 |
| Testing    | Cypress (E2E + Component)   |

---

## 🎥 Video Tutorial

Want to see how it works in action?

👉 **Watch the full walkthrough here:**  
📺 [https://app.screencastify.com/v3/watch/xqnlHsmfF2wHWHk8n8dO](https://drive.google.com/file/d/1-fAH3VjQ1_Os3T-m9ktDYs1eqI8bEVGY/view?usp=sharing)

> Covers: Setup, test writing, app features, and debugging tips.

---

## 📦 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/chicalauren/Tech-Quiz.git
cd tech-quiz
```

### 2. Install Dependencies

#### Server (Root)

```bash
npm install
```

#### Client

```bash
cd client
npm install
```

---

## ▶️ Run the App

### Run Backend

```bash
npm run start
```

### Run Frontend (in separate terminal)

```bash
cd client
npm run dev
```

Visit: [http://localhost:3001](http://localhost:3001)

---

## ✅ Cypress Testing

### Open Cypress UI

```bash
npx cypress open
```

Run either **E2E** or **Component Tests**.

### Run Headless (CI-friendly)

```bash
npx cypress run
```

---

## 🧪 Test Coverage

- **E2E tests**:
  - Starts the quiz
  - Answers all questions
  - Displays score and restarts

- **Component tests**:
  - Mounts and interacts with the `Quiz` component
  - Mocks API responses using fixtures
  - Covers quiz logic and state transitions

---

## 📁 Project Structure

```
Tech-Quiz/
├── client/                  # React frontend
│   └── src/components/Quiz.tsx
├── server/                  # Express backend
│   └── routes, models, db.js
├── cypress/
│   ├── e2e/quiz.cy.ts       # E2E test
│   ├── component/Quiz.cy.tsx
│   └── fixtures/questions.json
├── cypress.config.ts
├── package.json
└── README.md
```

---

## 🧠 Author

By **Lauren Brown** as a MERN-stack quiz and testing exercise.

---

## 📜 License

MIT License – use freely, contribute openly!
