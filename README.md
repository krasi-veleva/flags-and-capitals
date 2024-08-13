# Flags and Capitals

Flags and Capitals is a web application built with React that allows users to play a game guessing flags and capitals of different countries. This project was created as part of a React.js assignment.

## Features

- User authentication (register, login, logout)
- Play a game guessing flags and capitals
- View and update user profiles
- Leaderboard with user statistics
- Responsive design using Material-UI
- Cheat code functionality for testing purposes

## Technologies Used

- React 18.3.1
- React Router 6.24.1
- Firebase (for authentication and database)
- Material-UI 5.16.0
- Vite (as build tool)

## Project Structure

The project is structured as a Single Page Application (SPA) with the following key components:

- `App.jsx`: The main component that handles routing and authentication
- `Register.jsx`: Handles user registration
- `Login.jsx`: Handles user login
- `Home.jsx`: The home page component
- `FlagsGame.jsx`: The main game component
- `Statistic.jsx`: Displays user statistics and leaderboard (serves as a catalog view)
- `ProfileDetails.jsx`: Shows user profile details (serves as a details view)
- `ProfileEdit.jsx`: Allows users to edit their profile

## Routes

The application uses the following routes:

1. `/` - Home page (public)
2. `/register` - User registration page (public)
3. `/login` - User login page (public)
4. `/flags-and-capitals` - The main game page (private)
5. `/statistic` - Leaderboard and user statistics page (public)
6. `/profile-details/:uid` - User profile details page (uses params, public)
7. `/profile-edit/:uid` - User profile edit page (uses params, private)
8. `*` - Not found page (catches all other routes)

Routes that use params:

- `/profile-details/:uid` - The `uid` parameter represents the user ID of the profile being viewed
- `/profile-edit/:uid` - The `uid` parameter represents the user ID of the profile being edited

## Authentication and Route Guards

The application implements authentication using Firebase. Route guards are in place to protect private routes:

- The game page (`/flags-and-capitals`) is only accessible to logged-in users.
- The profile edit page (`/profile-edit/:uid`) is only accessible to the user who owns the profile.
- Public routes like home, login, and register are accessible to all users.

## React-Specific Concepts

This project demonstrates the use of various React concepts:

- Functional Components: All components are implemented as functional components.
- React Hooks: Extensive use of `useState`, `useEffect`, `useParams`, and `useNavigate` hooks.

## Error Handling and Data Validation

Error handling is implemented throughout the application:

- Registration form validates user input and displays error messages.
- Login form handles authentication errors and displays appropriate messages.
- Profile updates are validated before submission.
- The game component handles potential errors in fetching questions or updating scores.

## CRUD Operations

The application implements full CRUD (Create, Read, Update, Delete) operations:

- Create: User registration, creating game scores
- Read: Viewing user profiles, game statistics
- Update: Editing user profiles, updating game scores
- Delete: Option to delete user profiles

## UI/UX Design

The application focuses on providing a good user experience through:

- Consistent design using Material-UI components
- Responsive layout that works on various device sizes
- Clear navigation with a home page featuring prominent action buttons
- Immediate feedback during the game (correct/incorrect answers)
- User-friendly forms with validation feedback

## Cheat Code Feature

For testing purposes, the game includes a cheat code feature. Append `?cheat=motherlode` to the game URL to enable cheat mode, where all answers are considered correct.

## Setup and Installation

1. Clone the repository: `git clone https://github.com/krasi-veleva/flags-and-capitals.git`
2. Install dependencies: `npm install`
3. Create a Firebase project and add your configuration to `src/App.jsx`
4. Run the development server: `npm run dev`

## Available Scripts

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm run lint`: Lints the project files
- `npm run preview`: Previews the built app

## Deployment

The app is available here

## License

This project is open source and available under the [MIT License](LICENSE).

## GitHub Repository

The source code for this project is available on GitHub: [https://github.com/krasi-veleva/flags-and-capitals]
