# E-Commerce CodeBook Using React

![Main Page](https://github.com/kareemosama/E-Commerce-CodeBook/blob/main/public/assets/GitImages/MainPage.png)
![ProductListWithFilter](https://github.com/kareemosama/E-Commerce-CodeBook/blob/main/public/assets/GitImages/ProductListWithFilter.png)
![ProductDetails](https://github.com/kareemosama/E-Commerce-CodeBook/blob/main/public/assets/GitImages/ProductDetails.png)
![Register](https://github.com/kareemosama/E-Commerce-CodeBook/blob/main/public/assets/GitImages/Register.png)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Languages](#languages)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Link](#ProjectLink)
- [Reference](#Reference)

## About

The E-Commerce CodeBook is a comprehensive and customizable E-Commerce platform designed to empower businesses to establish and manage their online Book stores efficiently. With a focus on flexibility and extensibility, this codebase serves as a foundation for creating a feature-rich E-Commerce application tailored to your unique requirements.

## Features

- **Customizable Design:** Tailor the look and feel of your online store to match your brand identity.
- **Product Management:** Easily manage your product catalog, including adding, updating, and removing products.
- **Order Processing:** Streamline the order fulfillment process with features for tracking and managing customer orders.
- **User Authentication:** Secure user accounts with a robust authentication system for customer accounts and order history.
- **Payment Integration:** Seamlessly integrate popular payment gateways for a smooth and secure checkout process.

## Languages

The project is primarily built using the following languages:

- **JavaScript (Node.js):** The server-side language for building the backend.
- **React (JavaScript):** The front-end library for building user interfaces.
  1.  JSX and components
  2.  State and props
  3.  Event handling
  4.  Built-in hooks (e.g. useState, useEffect, useCallback, useRef)
  5.  Working with forms, validations, and handling form data.
  6.  Client-side routing with React Router
  7.  Work with multiple API and handle data for projects
- **Tailwind CSS:** A utility-first CSS framework for styling the application.

## Getting Started

To get started with E-Commerce CodeBook, follow the [Getting Started](#getting-started) section in this README to set up your development environment and install the necessary dependencies.

# Prerequisites

Before you begin working with the E-Commerce CodeBook, ensure that you have the following software installed on your machine:

- [Node.js](https://nodejs.org/en/): The JavaScript runtime to execute the application.
- [npm](https://www.npmjs.com/): The Node Package Manager for managing project dependencies.

# Installation

Follow these steps to set up and run the E-Commerce CodeBook locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/kareemosama/E-Commerce-CodeBook.git
   cd E-Commerce-CodeBook

   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the JSON Server:**

   ```bash
   json-server data/db.json -m ./node_modules/json-server-auth -r data/route.json --port 8000
   ```

4. **Run the Application:**

   Create a .env file in the root of the project and set the necessary environment variables. You can use the .env.example file as a template.

   ```bash
   npm start
   ```

# ProjectLink

- [E-Commerce CodeBook](https://ecommerce-codebook.netlify.app/): Application Link

# Reference

- [Tailwind CSS](https://tailwindcss.com): A utility-first CSS framework used for styling the application.
- [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto): The Roboto font family used for text elements.
- [React Toastify](https://www.npmjs.com/package/react-toastify): A notification library used to display user feedback messages.
- [json server auth](https://www.npmjs.com/package/json-server-auth): JSON server fake RESTAPI prototyping
