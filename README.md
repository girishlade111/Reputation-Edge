# Reputation Edge - Modern PR & Public Review Agency

This is a Next.js starter project for **Reputation Edge**, a modern PR and public review agency. The website is built using Firebase Studio, Next.js, React, ShadCN UI components, and Tailwind CSS.

## About The Website

Reputation Edge is designed to be a sleek, professional, and fast-loading marketing website. It serves as an online brochure for the agency, showcasing its services, portfolio, and expertise in the public relations field.

### Key Features

*   **Modern & Responsive Design**: Built with Tailwind CSS and ShadCN UI for a clean, consistent, and fully responsive user experience across all devices.
*   **Component-Based Architecture**: Developed with React and Next.js, featuring a modular structure with reusable components for easy maintenance and scalability.
*   **Optimized Performance**: Leverages Next.js features like Server Components and the `next/image` component for fast page loads and a smooth user experience.
*   **Comprehensive Sections**: The single-page layout includes:
    *   **Hero Section**: A compelling introduction to the agency.
    *   **Services**: Detailed descriptions of the services offered.
    *   **Portfolio**: Showcasing successful client campaigns.
    *   **Case Studies**: In-depth look at a featured success story.
    *   **Testimonials**: Client feedback to build trust.
    *   **About Us**: Introduction to the team and company mission.
    *   **Contact**: An easy-to-use form and contact details.
*   **Legal Pages**: Includes dedicated pages for Privacy Policy and Terms of Service to ensure compliance and transparency.

## Getting Started

To get this project up and running in your local environment, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd reputation-edge
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:9002`.

## Project Structure

Here is a brief overview of the key files and directories:

-   `src/app/`: Contains the main application routes and pages.
    -   `page.tsx`: The main landing page component.
    -   `layout.tsx`: The root layout for the application.
    -   `globals.css`: Global styles and Tailwind CSS configuration.
    -   `(legal)/`: Route group for legal pages.
        -   `privacy-policy/page.tsx`: The Privacy Policy page.
        -   `terms-of-service/page.tsx`: The Terms of Service page.
-   `src/components/`: Contains all the reusable React components.
    -   `layout/`: Components for the main site layout (Header, Footer).
    -   `sections/`: Components for each section of the landing page.
    -   `ui/`: ShadCN UI components.
-   `public/`: Static assets like images and fonts.
-   `tailwind.config.ts`: Configuration file for Tailwind CSS.
-   `next.config.ts`: Configuration file for Next.js.

---

## Credits

Built by **Girish Lade** — https://ladestack.in
