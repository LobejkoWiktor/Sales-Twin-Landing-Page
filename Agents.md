# AI Agents Documentation - Sales Practice AI

This file serves as a reference for AI coding assistants (Agents) working on this project. It outlines the project's architecture, technology stack, security requirements, and technical constraints to ensure consistent development standards and guardrails.

## Security & Dependencies
**CRITICAL RULE:** Due to ongoing supply chain attacks (e.g., the 2026 "Mini Shai-Hulud" campaign) and general security best practices:
1. **Explicit Permission Required:** You MUST ask the user for explicit permission BEFORE installing or adding any new library or dependency to this project.
2. **Security Check Required:** Before suggesting or asking permission to add a new library, you MUST first verify its security. Check for recent vulnerabilities, its maintenance status, and ensure it is safe to use in the current environment. 

Do not bypass these rules under any circumstances.

## 1. Technology Stack

This project is built using a modern React ecosystem, and you should adhere to these technologies when generating or modifying code:

*   **Framework:** React 18 with Vite
*   **Language:** TypeScript
*   **Routing:** `react-router-dom` (v6+)
*   **Styling:** Tailwind CSS, `tailwind-merge`, and `clsx` for utility class management.
*   **Component Library:** `shadcn/ui` (built on top of Radix UI primitives).
*   **Data Fetching & State:** React Query (`@tanstack/react-query`)
*   **Forms & Validation:** `react-hook-form` with `zod` schema validation.
*   **Backend & Auth:** Supabase (`@supabase/supabase-js`)
*   **Icons:** `lucide-react`
*   **Animations:** `tailwindcss-animate`
*   **Charts:** `recharts`

## 2. Project Architecture & Development Guidelines

When developing features for this application, adhere to the following architectural patterns:

### UI & Styling
*   **shadcn/ui First:** Whenever a new UI component is needed, check if a `shadcn/ui` component exists or can be composed. Avoid building complex UI primitives from scratch if they already exist in the library.
*   **Tailwind CSS:** Use Tailwind for all custom styling. Do not use plain CSS or CSS modules unless absolutely necessary for specific complex animations not supported by Tailwind.
*   **Dark Mode:** The project supports dark mode using `next-themes`. Ensure all custom UI elements use appropriate Tailwind dark mode variants (e.g., `dark:bg-slate-900`).
*   **Responsive Design:** Build mobile-first. Ensure all views are usable on mobile devices, utilizing Tailwind's responsive breakpoints (`sm:`, `md:`, `lg:`, `xl:`).

### State Management & Data Fetching
*   **Server State:** Use React Query for fetching, caching, synchronizing, and updating server state (via Supabase).
*   **Local State:** Use standard React hooks (`useState`, `useReducer`) for ephemeral UI state.

### Forms
*   Always use `react-hook-form` for complex forms to avoid unnecessary re-renders.
*   Define validation schemas using `zod` and integrate them via `@hookform/resolvers/zod`.

## 3. Security Requirements

*   **Supabase RLS:** Row Level Security (RLS) policies MUST be enforced on all Supabase tables. Do not implement complex authorization logic solely in the frontend; the database must enforce access controls.
*   **Environment Variables:** Never commit sensitive keys (like Supabase Service Role keys) to the repository. Use `.env` variables for the Supabase URL and Anon Key.
*   **Input Validation:** Always validate user input both on the client side (using `zod`) and on the backend/database level.

## 4. Coding Standards

*   **TypeScript:** Use strict typing. Avoid `any`. Define interfaces/types for all component props, API responses, and state objects.
*   **Functional Components:** Use functional components with hooks. Do not use class components.
*   **Clean Code:** Write modular, reusable, and focused functions and components. Avoid massive monolithic files.
*   **Error Handling:** Implement robust error handling for all asynchronous operations (API calls, Supabase queries) and display user-friendly error messages using the `sonner` or `radix-ui/react-toast` components.
