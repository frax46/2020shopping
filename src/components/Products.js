import React, { Component } from "react";
import formatCurrency from "../util";

class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product.id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src="#" alt={product.title}></img>
                </a>
                <p>{product.title}</p>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button className="button primary">Add to cart</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Products;
