// import { useState } from 'react';

// const products = [
//   {
//     id: 1,
//     name: 'AF 1',
//     description: 'Experience unbeatable style and comfort with our shoes',
//     price: '199.99',
//     image: '../images/shoe1.png',
//     type: 'men',
//   },
//   {
//     id: 2,
//     name: 'AF 2',
//     description: 'Experience unbeatable style and comfort with our shoes',
//     price: '160.99',
//     image: '../images/shoe2.png',
//     type: 'women',
//   },
//   {
//     id: 3,
//     name: 'AF 3',
//     description: 'Experience unbeatable style and comfort with our shoes',
//     price: '229.99',
//     image: '../images/shoe3.png',
//     type: 'men',
//   },
//   // Add more products here...
// ];

// function ProductArray() {
//   const [filterType, setFilterType] = useState('');
//   const [filterPrice, setFilterPrice] = useState('');

//   function handleFilterTypeChange(event) {
//     setFilterType(event.target.value);
//   }

//   function handleFilterPriceChange(event) {
//     setFilterPrice(event.target.value);
//   }

//   const filteredProducts = products.filter((product) => {
//     if (filterType && product.type !== filterType) {
//       return false;
//     }
//     if (filterPrice && parseFloat(product.price) > parseFloat(filterPrice)) {
//       return false;
//     }
//     return true;
//   });

//   return (
//     <div>
//       <h1>Product Array</h1>

//       <div>
//         <label htmlFor="filterType">Filter by Type:</label>
//         <select id="filterType" value={filterType} onChange={handleFilterTypeChange}>
//           <option value="">All</option>
//           <option value="men">Men</option>
//           <option value="women">Women</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="filterPrice">Filter by Price:</label>
//         <input
//           id="filterPrice"
//           type="number"
//           step="0.01"
//           value={filterPrice}
//           onChange={handleFilterPriceChange}
//         />
//       </div>

//       <div>
//         {filteredProducts.map((product) => (
//           <div key={product.id}>
//             <img src={product.image} alt={product.name} />
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductArray;
