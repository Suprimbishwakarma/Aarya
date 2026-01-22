import {
  roastify,
  codeExplainer,
  Result,
  homepage,
  RoastMe,
  topTracks,
  spotify,
  image01,
  image02,
  image03,
  image04,
  Output,
  RickAndMorty,
  CharacterRick,
  ExploreRick,
  IntroRick,
  FilterRick,
} from "../assets/assets";

export const projectData = [
  {
    id: "roastify",
    title: "Roastify: AI Powered Spotify Music Roaster",
    description:
      "A full-stack entertainment web application that connects to Spotify via OAuth 2.0, analyzes user's music taste, and delivers personalized, humorous AI-generated roasts.",
    details:
      "Roastify is a unique full-stack web application designed to entertain users by analyzing their musical taste. The sole purpose of this project is to entertain spotify User. By integrating Spotify's API and Gemini AI model, it generates witty and personalized roasts based on listening history of the user. The application features a secure OAuth 2.0 authentication flow, ensuring user data privacy. Users can adjust the roast intensity, making it a fun and interactive experience.",
    screenshots: [spotify, homepage, topTracks, RoastMe],
    technologies: [
      "React",
      "React-Router",
      "Axios",
      "React-icons",
      "Node.js",
      "Express",
      "Spotify Web API",
      "Google Generative AI (Gemini API)",
      "OAuth 2.0",
      "JWT",
      "express-session",
      "express-rate-limit",
    ],
    result: Result,
    image: roastify,
    githubLink: "https://github.com/suprimbishwakarma/Roastify",
    keyFeatures: [
      "Secure Spotify OAuth 2.0 AUthentication",
      "AI-Powered Roast Generation (OpenAI)",
      "Adjustable Roast Intensity Levels",
      "Responsive and Interactive UI",
      "Real-time Music Data Analysis",
    ],
    projectStructure: `
    Roastify/
    ├── client/                 # Frontend React application
    │   ├── public/            # Static assets
    │   ├── src/
    │   │   ├── components/    # React components
    │   │   │   ├── LoadingSpinner/
    │   │   │   ├── MusicStats/
    │   │   │   └── RoastDisplay/
    │   │   ├── pages/         # Page components
    │   │   │   ├── Dashboard/
    │   │   │   └── Landing/
    │   │   ├── utils/         # API utilities
    │   │   ├── App.jsx        # Main app component
    │   │   └── main.jsx       # Entry point
    │   ├── package.json
    │   └── vite.config.js
    │
    ├── server/                 # Backend Express application
    │   ├── config/            # Configuration files
    │   │   └── spotify.js     # Spotify API setup
    │   ├── controllers/       # Route controllers
    │   │   ├── auth.controller.js
    │   │   ├── fetch.controller.js
    │   │   └── roast.controller.js
    │   ├── middleware/        # Custom middleware
    │   │   └── verifyToken.js
    │   ├── routes/            # API routes
    │   │   ├── auth.route.js
    │   │   ├── fetch.route.js
    │   │   └── roast.route.js
    │   ├── app.js             # Express app configuration
    │   ├── server.js          # Server entry point
    │   └── package.json
    │
    ├── LICENSE
    └── README.md
    `,
    apiEndpoints: [
      {
        method: "GET",
        endpoint: "/auth/spotify",
        description: "Initiates Spotify OAuth flow",
      },
      {
        method: "GET",
        endpoint: "/auth/callback",
        description: "Handles Spotify OAuth Callback",
      },
      {
        method: "GET",
        endpoint: "/data/user",
        description: "Fetches user's Spotify profile data",
      },
      {
        method: "GET",
        endpoint: "/data/playlist/:id",
        description: "Fetches specific playlist data",
      },
      {
        method: "POST",
        endpoint: "/roast/generate",
        description: "Generates roast based on listening history",
      },
    ],
    flowChart:
      "User Login -> Spotify OAuth -> Fetch Listening History -> Send Data to Gemini -> Generate Roast -> Display to User",
    challenges: [
      "Spotify OAuth 2.0 implementation",
      "Finding the working AI model for free tier",
      "Multiple third party APIs integration",
      "Reading data from JSON objects returned by spotify",
      "Creating a best prompt for AI model so that the response will be digestible",
    ],
    contentConsumed: [
      "https://oauth.net/2/",
      "https://www.geeksforgeeks.org/web-tech/json-web-token-jwt/",
      "https://ai.google.dev/gemini-api/docs",
      "https://developer.spotify.com/documentation/web-api",
      "https://developers.google.com/identity/protocols/oauth2/web-server#node.js",
    ],
    learnings: [
      "Gained experience with Gemini AI API parameters (temperature, max_tokens)",
      "Learned to handle asynchronous server actions",
      "learned multiple third party API integration",
      "learned to work with raw JSON data",
      "got familiar with basic prompt engineering",
    ],
  },
  {
    id: "code-explainer",
    title: "AI Code Explainer: Intelligent Code Analysis Tool",
    description:
      "A full-stack web application that uses OpenAI's language model to provide instant, clear explanations of code in multiple programming languages.",
    details:
      "The AI Code Explainer was built for educational purposes for developers of all levels. It allows user to input code snippets in various languages and receive instant human-readable explanations. The backend leverages OpenAI model to parse and interpret complex logic, breaking it down into simple terms. This tool is particularly useful for debugging.",
    screenshots: [image01, image02, image03, image04],
    technologies: [
      "React",
      "Express",
      "Node.js",
      "Tailwind CSS",
      "OpenAI API",
      "express-rate-limit",
      "RESTful API",
    ],
    result: Output,
    image: codeExplainer,
    githubLink: "https://github.com/suprimbishwakarma/AI-Code-Explainer",
    keyFeatures: [
      "Multi-language Support (Python, JS, Go, Rust, TS, Java)",
      "Instant AI Analysis and Explanation",
      "Loading states and error handling for better UI",
      "Prevent API abuse with rate-limiting",
      "Responsive and interactive design",
    ],
    projectStructure: `
   AI-Code-Explainer/
    ├── client/                    # Frontend React application
    │   ├── src/
    │   │   ├── actionstate/      # Server actions (React 19 feature)
    │   │   │   └── index.js      # Form action for code explanation
    │   │   ├── components/       # React components
    │   │   │   ├── CodeDetails.jsx    # Displays AI explanation
    │   │   │   ├── Error.jsx          # Error message component
    │   │   │   ├── Forms.jsx          # Code input form
    │   │   │   └── Header.jsx         # App header
    │   │   ├── App.jsx          # Main app component
    │   │   ├── main.jsx         # Entry point
    │   │   └── index.css        # Global styles
    │   ├── index.html           # HTML template
    │   ├── vite.config.js       # Vite configuration
    │   ├── eslint.config.js     # ESLint configuration
    │   └── package.json         # Client dependencies
    │
    ├── server/                   # Backend Node.js application
    │   ├── controllers/         # Route controllers
    │   │   └── code.controllers.js   # Code explanation logic
    │   ├── routes/              # API routes
    │   │   └── code.route.js         # Code explanation endpoint
    │   ├── app.js              # Express app setup
    │   ├── server.js           # Server entry point
    │   ├── .env                # Environment variables
    │   └── package.json        # Server dependencies
    │
    └── LICENSE                  # MIT License
    `,
    apiEndpoints: [
      {
        method: "POST",
        endpoint: "/api/code-explainer",
        description: "Sends code snippet for analysis",
      },
    ],
    flowChart:
      "User selects language, gives code -> Send to Backend -> OpenAI Analysis -> Return Explanation -> Render in UI",
    challenges: [
      "Finding the working AI model for free tier",
      "Understanding useActionState hook",
      "prompt engineering",
      "API integration",
      "Ensuring the backend didn't crash from API abuse",
    ],
    contentConsumed: [
      "https://react.dev/reference/react/useActionState",
      "https://tokenfactory.nebius.com/",
    ],
    learnings: [
      "Learned about working with LLMs",
      "learned a new react hook (useActionState)",
      "learned full-stack integration",
      "got familiar with basic prompt engineering",
    ],
  },
  // {
  //   id: "rick-and-morty",
  //   title: "Rick and Morty Pro Analytics Dashboard",
  //   description:
  //     "A comprehensive analytics dashboard for the Rick and Morty universe, featuring character, location, and episode data visualization.",
  //   details:
  //     "This application serves as a deep-dive analytics tool for the Rick and Morty TV show. It interfaces with the public Rick and Morty API to provide detailed insights into characters, locations, and episodes. Users can explore character relations, filter by various attributes, and view statistics about the show's universe. It demonstrates complex state management, data fetching strategies, and responsive UI design.",
  //   result: FilterRick,
  //   screenshots: [IntroRick, ExploreRick, CharacterRick, FilterRick],
  //   technologies: [
  //     "React 19",
  //     "TypeScript",
  //     "Vite",
  //     "Tailwind CSS",
  //     "Axios",
  //     "Lucide React",
  //     "clsx",
  //     "React-Router",
  //   ],
  //   image: RickAndMorty,
  //   githubLink: "https://github.com/Suprimbishwakarma/Rick-and-Morty-Pro-Analytics-Dashboard",
  //   keyFeatures: [
  //     "Character/Episode/Location analytics",
  //     "Data visualization",
  //     "Interactive filtering",
  //     "Responsive Design",
  //     "Pagination & Debounced Search",
  //     "Persistent Storage", "Skeleton Loading", "Error Handling"
  //   ],
  //   projectStructure: `
  //   Rick-and-Morty-Dashboard/
  //   ├── src/
  //   │   ├── components/      # UI Components
  //   │   │   ├── CharacterCard.tsx
  //   │   │   ├── CharacterFilters.tsx
  //   │   │   ├── Info.tsx
  //   │   │   └── Pagination.tsx
  //   │   ├── pages/          # Route Pages
  //   │   │   ├── CharacterDetail.tsx
  //   │   │   ├── Home.tsx
  //   │   │   └── Landing.tsx
  //   │   ├── hooks/          # Custom Hooks
  //   │   │   ├── useDebounce.ts
  //   │   │   └── useLocalStorage.ts
  //   │   ├── types/          # TypeScript Definitions
  //   │   │   └── dataTypes.ts
  //   │   ├── App.tsx         # Main Component
  //   │   └── main.tsx        # Entry Point
  //   `,
  //   apiEndpoints: [
  //     {
  //       method: "GET",
  //       endpoint: "/character",
  //       description: "Fetch character data with filtering",
  //     },
  //     {
  //       method: "GET",
  //       endpoint: "/location",
  //       description: "Fetch location data",
  //     },
  //     {
  //       method: "GET",
  //       endpoint: "/episode",
  //       description: "Fetch episode data",
  //     },
  //   ],
  //   flowChart:
  //     "User Search/Filter -> Debounce Hook -> API Request -> Data Transformation -> Component Rendering",
  //   challenges: [
  //     "Managing complex strict type definitions with TypeScript",
  //     "Optimizing performance with large lists",
  //     "Implementing efficient search with debounce",
  //     "Handling API pagination",
  //   ],
  //   contentConsumed: [
  //     "https://rickandmortyapi.com/documentation",
  //     "https://react.dev/reference/react/hooks",
  //     "https://tailwindcss.com/docs",
  //   ],
  //   learnings: [
  //     "Advanced TypeScript patterns for API responses",
  //     "Custom hook implementation (useLocalStorage, useDebounce)",
  //     "Vite + Tailwind CSS configuration",
  //     "React Router v7 data flow",
  //   ],
  // },
  /*
  {
    id: "backend-dev",
    title: "Introduction to Backend Development",
    description:
      "A robust backend API built with Node.js, Express.js, and MongoDB, designed to demonstrate core backend concepts including user authentication and CRUD operations for posts.",
    details:
      "This project is a guide for modern backend practices. It features a complete RESTful API for user authentication, secure password hashing, and CURD operations for managing posts. It was ideally structured to serve as a learning resource or a boilerplate for my future projects.",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "bcrypt"],
    image: backend,
    githubLink:
      "https://github.com/Suprimbishwakarma/Into-to-backend-web-development",
    keyFeatures: [
      "CRUD Operations (Create, Read, Update, Delete)",
      "Secure Password Hashing (Bcrypt)",
      "MongoDB Schema Design and Relations",
      "MVC architecture",
    ],
    projectStructure: `
    src/
    ├── config/         # Database configuration
    ├── controllers/    # Request handlers (User, Post)
    ├── models/         # Mongoose models (User, Post)
    ├── routes/         # API Route definitions
    ├── app.js          # Express app setup
    └── index.js        # Entry point
    `,
    apiEndpoints: [
      {
        method: "POST",
        endpoint: "/api/v1/users/register",
        description: "Register new user",
      },
      {
        method: "POST",
        endpoint: "/api/v1/users/login",
        description: "User login",
      },
      {
        method: "POST",
        endpoint: "/api/v1/users/logout",
        description: "Logout the user",
      },
      {
        method: "POST",
        endpoint: "api/v1/posts/create",
        description: "Create a new post",
      },
      {
        method: "GET",
        endpoint: "api/v1/posts/getPosts",
        description: "Retrieve all posts",
      },
      {
        method: "PATCH",
        endpoint: "api/v1/posts/update/:id",
        description: "Update an existing post",
      },
      {
        method: "DELETE",
        endpoint: "api/v1/posts/delete/:id",
        description: "Delete specific post",
      },
    ],
    flowChart:
      "Client Request -> Auth/Validation -> Controller -> Model -> Database -> Response",
  },
  {
    id: "portfolio",
    title: "First Personal Portfolio",
    description:
      "This project is a modern, responsive, and visually stunning developer portfolio designed to showcase skills, projects, and professional experience. The design philosophy focuses on interactive storytelling, ensuring that every visitor gets a unique insight into the developer's journey.",
    details:
      "This portfolio website encapsulates my journey. It features smooth animations, a responsive layout, and an intuitive navigation system. The Projects section, which you are viewing now serves as a central hub for my professional identity.",
    technologies: ["React", "CSS3", "React-icons"],
    image: portfolio,
    keyFeatures: [
      "Fully Responsive Design",
      "Dynamic content loading",
      "Smooth CSS animations",
      "Optimized asset delivery",
    ],
    projectStructure: `
    src/
    ├── assets/       # Static assets and images
    ├── components/   # Reusable UI components
    │   ├── Contact/
    │   ├── Copyright/
    │   ├── Home/
    │   ├── Navbar/
    │   ├── ProjectDetails/
    │   ├── Projects/
    │   └── Skills/
    ├── constants/ 
    ├── App.jsx       # Main application component
    ├── main.jsx      # Entry point
    └── index.css     # Global styles and variables
    `,
  }, */
];
