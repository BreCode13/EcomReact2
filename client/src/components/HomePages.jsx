import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePages.css";



    
    function HomePages() {
      return (
        <div className="home-page">
          <section className="hero">
            <div className="hero-content">
              <h1>Shop the latest kicks</h1>
              <p>Find your perfect pair of shoes from our huge selection of styles and brands.</p>
              <Link to="/product"><button className="btn-primary">Shop now</button></Link>
            </div>
          </section>
          <section className="featured-products">
         
            <div className="product-grid">
            
              <article className="product">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-8c23e151-3f4d-4202-9e5b-e57dfbf07ce9/air-max-2090-mens-shoes-3pVM46.png" alt="Product 1" style={{width: '400px', height: '400px'}} />
                <h3>Nike Air Max 2090</h3>
                <p>Experience the futuristic look and feel of the Nike Air Max 2090. Inspired by the iconic Air Max 90, this shoe features a sleek, modern design and cutting-edge technology for ultimate comfort and style.</p>
                <Link to="/product"><button className="btn-primary">Shop now</button></Link>
              </article>
              <article className="product">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/air-force-1-07-mens-shoes-xDpsTk.png" alt="Product 2" style={{width: '400px', height: '400px'}} />
                <h3>Air Force 1</h3>
                <p>Get ready to take your running game to the next level! This shoe features an innovative design that delivers unparalleled comfort, support, and energy return, making it the perfect choice for serious runners.</p>
                <Link to="/product"><button className="btn-primary">Shop now</button></Link>
              </article>

              <article className="product">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00fcbfdd-9d61-43de-8797-3ca28ff9a6e0/air-jordan-1-retro-high-og-mens-shoes-VdpsB7.png" alt="Product 2" style={{width: '400px', height: '400px'}} />
                <h3>Jordan 1</h3>
                <p>Get ready to take your running game to the next level! This shoe features an innovative design that delivers unparalleled comfort, support, and energy return, making it the perfect choice for serious runners.</p>
                <Link to="/product"><button className="btn-primary">Shop now</button></Link>
              </article>
            </div>
          </section>
          
    
    </div>

  );
}

export default HomePages;
