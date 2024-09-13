# GOCINGO Website

## Description

This is a web project for an NGO, built using Next.js and other technologies like ShadCN and MockAPI. The website dynamically fetches project data, offers SEO optimization, and provides a clean and responsive design.

This website showcases the NGO’s mission, projects, and other information. Users can view ongoing initiatives, donate, and learn more about the organization.


## Setup Instructions
Follow thse steps to run the project locally:

### Prerequisites
- Node.js (v16.x or higher)
- npm
  
### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mysomDeGeneral/gocingo.git
   ```

2. Navigate to the project directory:
   ```bash
   cd  gocingo
   ```

3. Install dependencies
    ```bash
    npm install
    ```
   
### Running the Development server
   ```sh
   npm run dev
   ```
   The project will be available at `http://localhost:3000`

### Building for Production
   For production
   ```sh
   npm run build
   ```
   This will create an optimized production build of the site.

### Deploying
The project is ready to be deployed to platforms like **Vercel** or **Netlify**. You can deploy the site by following the instructions for **Next.js** projects. 

## Mock API Setup
- The project data is stored in a mock API located at `data/projects.ts`.
  This is dynamically fetched on the **Projects** and **Home** pages.
- You can update the project data by modifying the file `data/projects.ts`.

## SEO Optimizations
SEO metadata (title and description) has been added for each page to ensure better search engine visibility.

## Technologies Used
- **Next.js** - React-based framework for building websites.
- **ShadCN** - UI component library for styling.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **MockAPI** - Used for dynamically fetching project data.


