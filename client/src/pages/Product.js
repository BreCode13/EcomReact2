
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Products.css';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(9999);
//   const [sortOrder, setSortOrder] = useState('asc');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get('http://localhost:8800/products');
//         setProducts(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handlePriceFilter = (e) => {
//     const { name, value } = e.target;

//     if (name === 'minPrice') {
//       setMinPrice(value);
//     } else if (name === 'maxPrice') {
//       setMaxPrice(value);
//     }
//   };

//   const handleSortOrder = (e) => {
//     setSortOrder(e.target.value);
//   };

//   const filteredProducts = products.filter(
//     (product) => product.price >= minPrice && product.price <= maxPrice
//   ).sort((a, b) => {
//     if (sortOrder === 'asc') {
//       return a.price - b.price;
//     } else if (sortOrder === 'desc') {
//       return b.price - a.price;
//     } else {
//       return 0;
//     }
//   });

//   return (
//     <div>
//       <h1>Products Page</h1>

//       <div className='filter-container'>
//         <label htmlFor='minPrice'>Enter Minimum:</label>
//         <input
//           type='number'
//           name='minPrice'
//           id='minPrice'
//           value={minPrice}
//           onChange={handlePriceFilter}
//         />

//         <label htmlFor='maxPrice'>Enter Maximum:</label>
//         <input
//           type='number'
//           name='maxPrice'
//           id='maxPrice'
//           value={maxPrice}
//           onChange={handlePriceFilter}
//         />

//         <label htmlFor='sortOrder'>Sort Order:</label>
//         <select name='sortOrder' id='sortOrder' value={sortOrder} onChange={handleSortOrder}>
//           <option value='asc'>Lowest to Highest</option>
//           <option value='desc'>Highest to Lowest</option>
//         </select>
//       </div>

//       <div className='products-container'>
//         {filteredProducts.map((product) => (
//           <div key={product.id}>
//             <img src={product.image} alt={product.name} className='productIMG' />
//             <div className='product-details'>
//               <h2 className='producTitle'>{product.name}</h2>
//               <h3 className='productPrice'>{product.price}</h3>
//               <p className='productDescription'>{product.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8800/products');
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const handlePriceFilter = (e) => {
    const { name, value } = e.target;

    if (name === 'minPrice') {
      setMinPrice(value);
    } else if (name === 'maxPrice') {
      setMaxPrice(value);
    }
  };

  const handleSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts = products
    .filter((product) => product.price >= minPrice && product.price <= maxPrice)
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else if (sortOrder === 'desc') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

  return (
    <div>
      <h1>Products Page</h1>

      <div className='filter-container'>
        <label htmlFor='minPrice'>Enter Minimum:</label>
        <input
          type='number'
          name='minPrice'
          id='minPrice'
          value={minPrice}
          onChange={handlePriceFilter}
        />

        <label htmlFor='maxPrice'>Enter Maximum:</label>
        <input
          type='number'
          name='maxPrice'
          id='maxPrice'
          value={maxPrice}
          onChange={handlePriceFilter}
        />

        <label htmlFor='sortOrder'>Sort Order:</label>
        <select name='sortOrder' id='sortOrder' value={sortOrder} onChange={handleSortOrder}>
          <option value='asc'>Lowest to Highest</option>
          <option value='desc'>Highest to Lowest</option>
        </select>
      </div>

      <div className='products-container'>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <img src={process.env.PUBLIC_URL + '/images/' + product.image} alt={product.name} className='productIMG' />
            <div className='product-details'>
              <h2 className='producTitle'>{product.name}</h2>
              <h3 className='productPrice'>{product.price}</h3>
              <p className='productDescription'>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
