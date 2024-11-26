import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductsGrid from './components/ProductsGrid';  // Import your product grid component
import './App.css';  // Import any app-specific styles if needed


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products'); // Adjust the API endpoint as needed
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

    return (
       <div className="App">
           <ProductsGrid products={products} /> {/* Pass products data to the grid */}

           {/* Other components for header, footer, etc. as needed. */}
       </div>
    );
}

export default App;
