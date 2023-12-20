# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# E-Commerce CodeBook

![Main Page](https://github.com/kareemosama/E-Commerce-CodeBook/blob/main/public/assets/GitImages/MainPage.png)
![ProductListWithFilter](https://github.com/kareemosama/E-Commerce-CodeBook/blob/main/public/assets/GitImages/ProductListWithFilter.png)
![ProductDetails](https://github.com/kareemosama/E-Commerce-CodeBook/blob/main/public/assets/GitImages/Product Details.png)
![Register](https://github.com/kareemosama/E-Commerce-CodeBook/blob/main/public/assets/GitImages/Register.png)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Reference](#reference)

## About

The E-Commerce CodeBook is a comprehensive and customizable E-Commerce platform designed to empower businesses to establish and manage their online Book stores efficiently. With a focus on flexibility and extensibility, this codebase serves as a foundation for creating a feature-rich E-Commerce application tailored to your unique requirements.

## Features

- **Customizable Design:** Tailor the look and feel of your online store to match your brand identity.
- **Product Management:** Easily manage your product catalog, including adding, updating, and removing products.
- **Order Processing:** Streamline the order fulfillment process with features for tracking and managing customer orders.
- **User Authentication:** Secure user accounts with a robust authentication system for customer accounts and order history.
- **Payment Integration:** Seamlessly integrate popular payment gateways for a smooth and secure checkout process.

## Getting Started

To get started with E-Commerce CodeBook, follow the [Getting Started](#getting-started) section in this README to set up your development environment and install the necessary dependencies.

# Prerequisites

Before you begin working with the E-Commerce CodeBook, ensure that you have the following software installed on your machine:

- [Node.js](https://nodejs.org/en/): The JavaScript runtime to execute the application.
- [npm](https://www.npmjs.com/): The Node Package Manager for managing project dependencies.

# Used Sites

- [Tailwind CSS](https://tailwindcss.com): A utility-first CSS framework used for styling the application.
- [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto): The Roboto font family used for text elements.
- [React Toastify](https://www.npmjs.com/package/react-toastify): A notification library used to display user feedback messages.

# Installation

Follow these steps to set up and run the E-Commerce CodeBook locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/kareemosama/E-Commerce-CodeBook.git
   cd E-Commerce-CodeBook

   ```

2. **Install Dependencies:**

   npm install

3. **Run the JSON Server:**

   json-server data/db.json -m ./node_modules/json-server-auth -r data/route.json --port 8000

4. **Run the Application:**

   Create a .env file in the root of the project and set the necessary environment variables. You can use the .env.example file as a template.
   npm start
