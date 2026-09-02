# 🎯 Hangman Game (React)

A classic Hangman word-guessing game built with **React**, showcasing core React concepts like Hooks and the Context API for state management.



## 📸 Preview
![alt text](image.png)
<!-- ![Hangman Game Screenshot](./screenshot.png) -->

## ✨ Features

- Random word selection for each new game
- Visual hangman progress as wrong guesses accumulate
- On-screen keyboard for letter selection
- Win/loss detection with game-over states
- Restart / play-again functionality
- Global game state managed via Context API (no prop drilling)
- Responsive UI

## 🛠️ Tech Stack

- **React 19** – UI library
- **Vite** – build tool & dev server
- **React Hooks** – `useState`, `useEffect`, `useContext`,etc;
- **Context API** – global game state management
- **React Router DOM** – client-side routing
- **Tailwind CSS v4** – styling
- **React Compiler** – automatic memoization (via `babel-plugin-react-compiler`)
- **ESLint** – code linting

## 📂 Project Structure

```
HangMan-App/
├── public/
├── src/
│   ├── components/       # UI components (Keyboard, HangmanFigure, WordDisplay, etc.)
│   ├── context/           # Context API provider(s) and game state logic
│   ├── assests/         
│   ├── data/               # Word list / word bank
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

> Update this structure to match your actual folder layout. Consider renaming the project in `package.json` from `project-11` to something like `hangman-app` before pushing — it's more descriptive for anyone browsing your GitHub.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hangman-app.git

# Navigate into the project
cd hangman-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`.

## 🎮 How to Play

1. A random word is selected when the game starts.
2. Guess letters one at a time using the on-screen keyboard.
3. Correct guesses reveal the letter's position(s) in the word.
4. Incorrect guesses add a part to the hangman figure.
5. Win by guessing the word before the figure is complete; lose if you run out of attempts.

## 🧠 What I Learned / Key Concepts Practiced

- Managing complex, shared state across components using **Context API**
- Avoiding prop drilling in a multi-component game UI
- Using **hooks** to manage game logic, side effects, and derived state
- Structuring a React app for readability and scalability
- Handling conditional rendering for win/loss/game states

## 🔮 Future Improvements

- Difficulty levels / categories
- Score tracking and local leaderboard
- Sound effects and animations
- Dark mode

## 📄 License

This project is licensed under the MIT License.

## 🙋‍♂️ Author

**Moh Aamir**
- GitHub:(https://github.com/MohAamir7)

---

⭐ If you like this project, consider giving it a star on GitHub!
