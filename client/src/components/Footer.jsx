import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__item'>
          <p>© 2023. All Rights Reserved.</p>
        </div>
        <div className='footer__item'>
          <p>
            <a href='connectto:kicksgalore.com' className='text-white'>
              connect@kicksgalore.com
            </a>
          </p>
        </div>
        <div className='footer__item'>
          <div className='footer__social'>
            <a href='https://www.instagram.com/' target='_blank'>
              <img
                src='https://www.pngmart.com/files/22/Black-And-White-Instagram-Logo-PNG-File.png'
                width={50}
                height={50}
                alt='ig logo'
              />
            </a>
            <a href='https://twitter.com/' target='_blank'>
              <img
                src='https://www.freepngimg.com/download/uber/75997-uber-city-lyft-twitter-ridesharing-black-york.png'
                width={50}
                height={50}
                alt='Twitter'
              />
            </a>
            <a href='https://www.snapchat.com/' target='_blank'>
              <img
                src='https://dk2dv4ezy246u.cloudfront.net/widgets/sSr8ddfWedg_large.jpg'
                width={50}
                height={50}
                alt='Snapchat logo'
              />
            </a>
            <a href='https://www.facebook.com/' target='_blank'>
              <img
                src='https://www.nicepng.com/png/full/23-238077_facebook-icon-png-transparent-background-download-transparent-background.png'
                width={50}
                height={50}
                alt='FB logo'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
