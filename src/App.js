import React, { useState } from "react";


import "./App.css";

// import product from './product1.jpg'
// import product1 from'./product2.jpg'

const productsData = [
  

  
  {
    id: 1,
    title: "Product 1",
    description: "camera, in photography, device for recording an image of an object on a light-sensitive surface; it is essentially a light-tight box with an aperture to admit light focused onto a sensitized film or plate. A camera is a piece of equipment that is used for taking photographs, making films, or producing television pictures. Many cameras are now included as part of other digital devices such as phones and tablets.",
    price: 1000,
    category: "Devices",

    image:  "./images/Camera.jpg",

   
    
    
  },
  {
    id: 2,
    title: "Product 2",
    description: "Tshirt",
    price: 400,
    category: "Cloths",

    image: "./images/Tshirt.jpg",
   
    
    
  },
  
  {
    id: 3,
    title: "Product 3",
    description: "A laptop is a personal computer that can be easily moved and used in a variety of locations. Most laptops are designed to have all of the functionality of a desktop computer, which means they can generally run the same software and open the same types of files.",
    price: 50000,
    category: "Devices",
    image: "./images/Laptop.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Jacket",
    price: 700,
    category: "Cloths",

    image: "./images/Jacket.jpg",
   
    
    
  },
  
  {
    id: 5,
    title: "Product 5",
    description: "watch, portable timepiece that has a movement driven either by spring or by electricity and that is designed to be worn or carried in the pocket.",
    price: 2500,
    category: "Devices",

    image: "./images/Watch.jpg",
   
    
    
  },
  {
    id: 6,
    title: "Product 6",
    description: "They are electroacoustic transducers, which convert an electrical signal to a corresponding sound. Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear. Headphones are also known as earphones or, colloquially, cans.",
    price: 3000,
    category: "Devices",

    image: "./images/Headphone.jpg",
   
    
    
  },
  {
    id: 7,
    title: "Product 7",
    description: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. Form was originally tied to function but over time shoes also became fashion items.",
    price: 600,
    category: "Devices",

    image: "./images/Shoes.jpg",
   
    
    
  },
  
  
  {
    id: 8,
    title: "Product 8",
    description: "A refrigerator, colloquially fridge, is a commercial and home appliance consisting of a thermally insulated compartment and a heat pump (mechanical, electronic or chemical) that transfers heat from its inside to its external environment so that its inside is cooled to a temperature below the room temperature.",
    price: 3000,
    category: "Electronics ",

    image: "./images/Refrigerator.jpg",
  
  },
  {
    id: 9,
    title: "Product 9",
    description: "An oven is a tool which is used to expose materials to a hot environment. Ovens contain a hollow chamber and provide a means of heating the chamber in a controlled way. In use since antiquity, they have been used to accomplish a wide variety of tasks requiring controlled heating.",
    price: 2000,
    category: "Electronics ",

    image: "./images/oven.jpg",
    
  },
  {
    id: 10,
    title: "Product 10",
    description: "A pen is an ink-filled tool that you use for writing or drawing. Doing a crossword puzzle with a pen shows a lot of self confidence, since you can't erase your answers.",
    price: 50,
    category: "Stationary",

    image: "./images/Pen.jpg",  
  },
  {
    id: 11,
    title: "Product 11",
    description: "A notebook is a blank book that you can write in. Students often carry notebooks, where they can take notes (and doodle). The pages in a notebook are often lined, so that you can write neatly.",
    price: 1000,
    category: "Stationary",

    image: "./images/Notebook.jpg",
   
    
    
  },
  // Add more product entries
];




function App() {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Filter products based on category
  const handleFilter = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  };

  // Sort products by price
  const handleSort = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setFilteredProducts(sortedProducts);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bgimage">
      
      <h1>Product List</h1>
     
      <div>
        <button onClick={handleSort}>
          Sort by Price ({sortOrder === "asc" ? "Low to High" : "High to Low"})
        </button>
        <br></br>
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option value="all">All Categories</option>
          {/* Add unique categories dynamically */}
          {Array.from(new Set(products.map((product) => product.category))).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        
      
        
      </div>
     
      <ul>
        {currentProducts.map((product) => (
          
          <li key={product.id}>
             
             
             
            <h2>{product.title}</h2>
            <img src={product.image} alt="Product Image" height="200px" width="300px" />
            <p>{product.description}</p>
            <p>Price: Rs.{product.price}</p>
          </li>
        ))}
        </ul>
      
      
      <ul className="pagination">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
          <li key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

