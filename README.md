
Portfolio Website
This is a personal portfolio website built using React.js, Vite, and Tailwind CSS. The portfolio showcases projects, skills, and other details about me in a clean, interactive way. It includes features like resume downloading, email sending through Email.js, and hover effects with pop-up details.

Table of Contents
Overview
Features
Technologies Used
Installation
Usage
Project Structure
License
Overview
This portfolio website is designed to present personal details such as skills, projects, and contact information in an interactive and user-friendly manner. Each section of the website uses smooth animations and interactive pop-ups to enhance the user experience. It's fully responsive, making it accessible on all devices.

Features
1. Home Page
The homepage introduces me with a clean, minimalist design. It features a resume downloading function which allows visitors to download my resume in PDF format with a single click.

2. About Me Page
This section provides detailed information about me, my background, and my goals. The layout is structured for readability with Tailwind CSS to enhance the typography.

3. Skills Page
The skills page showcases my technical abilities in various fields. Each skill card features a hover effect that, when triggered, opens a pop-up with more detailed information about the specific skill, such as tools used, level of proficiency, and experience.

4. Projects Page
On the projects page, I display all of my key projects, each with a brief description, technology stack, and a link to the GitHub repository. Similar to the skills page, hovering over a project card triggers a pop-up which shows more details, such as a project overview, role in the project, and challenges faced.

5. Contact Page
The contact page features a form that allows visitors to send me an email directly through the website. It is powered by Email.js, ensuring seamless integration and message delivery without needing a back-end.

Technologies Used
React.js - Frontend framework for building the UI components.
Vite - Fast and lightweight build tool.
Tailwind CSS - Utility-first CSS framework for styling and responsive design.
Email.js - API for sending emails directly from the frontend.
React Router - For handling navigation between pages.
Lordicons - animated icons used throughout the website.


Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/portfolio.git
Navigate into the project directory:

bash
Copy code
cd portfolio
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
The website will be live at http://localhost:3000/.

Usage
Once the project is set up and running, you can visit the various pages of the portfolio:

Home: Download resume and get an overview.
About Me: Learn more about my journey.
Skills: Hover over skill cards to get more details.
Projects: View project descriptions, technologies used, and pop-up details on hover.
Contact: Fill in the form to send an email directly via Email.js.
Project Structure
Here's a brief overview of the project structure:

bash
Copy code
public/
|──                       # Images and icons
src/
│             
├── components/           # Reusable components like Navbar, Footer, Pop-ups
|  
  ├── pages/                # Main pages like Home, AboutMe, Skills, Projects, Contact
├── App.jsx               # Main component with routes
├── index.css             # Tailwind configuration and global styles
├── main.jsx              # Entry point for the React app
└── emailjs.config.js     # Email.js integration setup
License
This project is open source and available under the MIT License.
