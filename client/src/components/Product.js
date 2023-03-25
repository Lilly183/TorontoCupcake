import React from 'react';
import imgRelPath from './template/ImgRelPath';
import '../css/Product.css';

const Product = ({prod}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="product__item">
            <div className="product__item__pic set-bg" data-setbg={imgRelPath + prod.imgSrc}>
                <div className="product__label">
                    <span>Cupcake</span>
                </div>
            </div>
            <div className="product__item__text">
                <h6><a href="/">{prod.name}</a></h6>
                <div className="product__item__price">{"$" + prod.price}</div>
                <div className="cart_add">
                    <a href="/">Add to cart</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product;