# ShrinkURL Frontend

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-149eca?style=for-the-badge&logo=react&logoColor=white" alt="React" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-646cff?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/React_Router-ca4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" /></a>
  <a href="https://redux-toolkit.js.org/"><img src="https://img.shields.io/badge/Redux_Toolkit-764abc?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" /></a>
  <a href="https://react-hook-form.com/"><img src="https://img.shields.io/badge/React_Hook_Form-ec5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" /></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" /></a>
</p>

Simple and fast URL shortener!
ShrinkURL allows you to shorten long links from Instagram, Facebook, YouTube, Twitter, LinkedIn, WhatsApp, TikTok, blogs, and any domain name. Just paste the long URL and click the Shorten button. On the dashboard, manage your links with search, pagination, and click tracking.

The backend repository: [shrink_url_be](https://github.com/alfannurfaiz9/shrink_url_be.git).

## Tech Stack

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| [React](https://react.dev/) | 19.3.1 | Component-based library for building the user interface |
| [TypeScript](https://www.typescriptlang.org/) | 5.8.3 | Strongly typed programming language for JavaScript |
| [Vite](https://vite.dev/) | 8.3.6 | Build tool and fast development server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.3.5 | Utility-first CSS framework for styling |
| [React Router](https://reactrouter.com/) | 8.5.1 | Page navigation and dynamic routing via URL Search Params |
| [Redux Toolkit](https://redux-toolkit.js.org/) | 2.14.0 | Global application state management |
| [React Redux](https://react-redux.js.org/) | 9.3.1 | Connects React components with the Redux store |
| [React Hook Form](https://react-hook-form.com/) | 7.91.0 | Form state management and validation |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.7.0 | Icons for the interface |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | 11.2.0 | Notifications and feedback messages |
| [Node.js](https://nodejs.org/) | 24 | JavaScript runtime environment |

## Features

- **Authentication**: User registration, login, and secure session handling.
- **URL Shortening**: Convert long URLs into concise, shareable short links.
- **Dashboard & Search**: View created links with built-in search, pagination, and state synchronization via URL search parameters.
- **Link Management**: Delete active links and monitor click statistics.

## Architecture


```

User -> React Router -> Pages/Components -> Redux Toolkit -> Axios -> Go Backend API

```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v24 recommended) & npm
- [Git](https://git-scm.com/)
- The [backend repository](https://github.com/alfannurfaiz9/shrink_url_be.git) running locally or remotely.

### 1. Clone the Repository

```bash
git clone [https://github.com/alfannurfaiz9/shrink_url_fe.git](https://github.com/alfannurfaiz9/shrink_url_fe.git)
cd shrink_url_fe
```

### 2. Install Dependencies

```bash
npm ci
```

### 3. Configure Environment Variables

Create a `.env` file in the root of your project directory and add the following configuration:

```env
VITE_API_BASE_URL=http://localhost:8080/api/v1
```

*(Sesuaikan URL port backend Go Anda jika berjalan di port yang berbeda)*

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to the local address shown in your terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite development server |
| `npm run local` | Start dev server exposed to local network (`0.0.0.0`) |
| `npm run build` | Type-check (`tsc -b`) and bundle for production |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Locally preview production build |

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit).

## Related Project

[![backend](https://img.shields.io/badge/BACKEND-GO-00ADD8?logo=go&logoColor=WHITE)](https://github.com/alfannurfaiz9/shrink_url_be.git)