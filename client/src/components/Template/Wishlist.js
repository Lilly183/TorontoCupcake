import React from 'react';
import imgRelPath from './ImgRelPath';
import Breadcrumb from './Breadcrumb';

const Wishlist = () => 
{
  return (
    <div>
        <Breadcrumb 
            text = "Wishlist" 
        />

        {/* <!-- Wishlist Section Begin --> */}
        <section className="wishlist spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wishlist__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Unit Price</th>
                                        <th>Stock</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="product__cart__item">
                                            <div className="product__cart__item__pic">
                                                <img src={imgRelPath + "shop/cart/cart-1.jpg"} alt=""/>
                                            </div>
                                            <div className="product__cart__item__text">
                                                <h6>Vanilla Salted Caramel</h6>
                                            </div>
                                        </td>
                                        <td className="cart__price">$ 15.00</td>
                                        <td className="cart__stock">In stock</td>
                                        <td className="cart__btn"><a href="/" className="primary-btn">Add to cart</a></td>
                                        <td className="cart__close"><span className="icon_close"></span></td>
                                    </tr>
                                    <tr>
                                        <td className="product__cart__item">
                                            <div className="product__cart__item__pic">
                                                <img src={imgRelPath + "shop/cart/cart-2.jpg"} alt=""/>
                                            </div>
                                            <div className="product__cart__item__text">
                                                <h6>German Chocolate</h6>
                                            </div>
                                        </td>
                                        <td className="cart__price">$ 32.50</td>
                                        <td className="cart__stock">In stock</td>
                                        <td className="cart__btn"><a href="/" className="primary-btn">Add to cart</a></td>
                                        <td className="cart__close"><span className="icon_close"></span></td>
                                    </tr>
                                    <tr>
                                        <td className="product__cart__item">
                                            <div className="product__cart__item__pic">
                                                <img src={imgRelPath + "shop/cart/cart-3.jpg"} alt=""/>
                                            </div>
                                            <div className="product__cart__item__text">
                                                <h6>SWEET AUTUMN LEAVES</h6>
                                            </div>
                                        </td>
                                        <td className="cart__price">$ 23.50</td>
                                        <td className="cart__stock">In stock</td>
                                        <td className="cart__btn"><a href="/" className="primary-btn">Add to cart</a></td>
                                        <td className="cart__close"><span className="icon_close"></span></td>
                                    </tr>
                                    <tr>
                                        <td className="product__cart__item">
                                            <div className="product__cart__item__pic">
                                                <img src={imgRelPath + "shop/cart/cart-4.jpg"} alt=""/>
                                            </div>
                                            <div className="product__cart__item__text">
                                                <h6>Gluten Free Mini Dozen</h6>
                                            </div>
                                        </td>
                                        <td className="cart__price">$ 32.50</td>
                                        <td className="cart__stock">In stock</td>
                                        <td className="cart__btn"><a href="/" className="primary-btn">Add to cart</a></td>
                                        <td className="cart__close"><span className="icon_close"></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Wishlist Section End --> */}
    </div>
  )
}

export default Wishlist;