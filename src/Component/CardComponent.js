import React from 'react'
import desktopimage from "../assets/img/image-product-desktop.jpg"
import iconCart from "../assets/img/icon-cart.svg"

const CardComponent = () => {
  return (
    <>
        <main>
            <div id="container">
              <div className='cardContent'>
                <div className='cardImage'>
                    <img src={desktopimage} alt=""/>
                </div>

                <div className="cardInfo">
                  <p className="title">P E R F U M E</p>
                  <h1>Gabrielle Essence Eau de perfum</h1>
                  <p className='paragraph'>A floral,solar and Voluptous interpretation composed by
                    Oliver Polge, Perfume creator for the house of Channel
                  </p>
                  <div className='price'>
                    <h1>$149.99 </h1>
                    <h5><s>$169.99</s></h5>
                  </div>
                  <div className='cardButton'>
                    <img src={iconCart} alt="cart"/>
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
        </main>
  </>
   
  )
}

export default CardComponent