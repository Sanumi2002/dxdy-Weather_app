# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Weather Application

Overview

This weather application allows users to retrieve weather information for a specific location. It integrates with a weather API to fetch data asynchronously and displays it in a user friendly manner.

Functionality

Users can enter a location (city name).
The application retrieves weather information (e.g., temperature, humidity, etc.) for the specified location.
Weather information is displayed to the user in a clean and intuitive interface.

User Interface (UI)

The user interface includes:

An input field for users to enter the location.
Visual display of retrieved weather information.
API Integration
The application utilizes the VisualCrossingWeather API to retrieve weather data. You need to sign up for an API key and replace the placeholder with the actual API key in the code.

API requests and responses are handled asynchronously to prevent blocking the user interface.

Error Handling

Invalid user input or failed API requests are gracefully handled.
Meaningful error messages are displayed to the user when necessary.

Bonus Features (Optional)

Additional weather information such as wind speed, heat index etc.
Support for displaying weather forecasts for multiple days.

Instructions for Running the Application

Clone the repository to your local machine.
Navigate to the project directory.
Install dependencies by running npm install.
Obtain an API key from VisualCrossingWeather and replace the placeholder in the code with your API key.
Start the development server by running npm start.
Open your web browser and visit http://localhost:5173 to access the application.

Additional Information

This project was bootstrapped with Create React App and utilizes Tailwind CSS for styling.
For any questions or issues, please contact [sshanwella02@gmail.com].
