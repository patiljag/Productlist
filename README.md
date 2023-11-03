



This is a simple React application for displaying and filtering a list of products. Users can view a list of products, filter products by category, sort products by price, and navigate through pages of product listings using pagination.

To run this application, you'll need to have Node.js and npm (Node Package Manager) installed on your machine.

Clone the repository or download the source code.

Open a terminal or command prompt and navigate to the project directory.

Install the project dependencies by running the following command:


>npm install
Once the dependencies are installed, you can start the development server with the following command:

>npm start

This will start the development server and open the application in your default web browser. By default, the application will run on http://localhost:3000/.

>Project Structure
The project structure is organized as follows:

src/: This directory contains the source code for the React application.

App.js: The main application component that displays the product list, handles filtering, sorting, and pagination.

App.css: The CSS file for styling the application.



public/: This directory contains the public assets of the application, including images.

>Features
Product Listing: The application displays a list of products with their title, description, image, and price.

Filtering by Category: Users can select a category from the dropdown to filter products by category. The "All Categories" option displays all products.

Sorting by Price: Users can click the "Sort by Price" button to toggle between sorting products from low to high price and high to low price.

Pagination: Products are paginated, and users can navigate through different pages using the pagination controls at the bottom of the list.

>How to Use
Upon running the application, you will see a list of products on the main page.

Use the "Sort by Price" button to change the sorting order of products based on their prices.

Use the dropdown to filter products by category. Select "All Categories" to view all products or choose a specific category.

The product list is paginated. You can navigate to different pages using the page numbers at the bottom of the list.

>Data
The product data is stored in the productsData array in App.js. You can customize this data or add more products as needed. Each product object has the following properties:

id: A unique identifier for the product.
title: The title or name of the product.
description: A description of the product.
price: The price of the product.
category: The category to which the product belongs.
image: The path to the image file associated with the product.