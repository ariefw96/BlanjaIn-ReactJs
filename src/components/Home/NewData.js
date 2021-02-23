import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import axios from "axios";
import Loader from "../Loader/Loader";
const getUrl = process.env.REACT_APP_URL;

const NewData = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get(`${getUrl}/products?limit=5`)
      .then((res) => {
        console.log(res.data.data.products)
        const newProduct = res.data.data.products;
        setProducts(newProduct);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (!products.length) {
    return <Loader />;
  }

  return (
    <>
      {products.map(
        ({
          id,
          product_name,
          product_img,
          category_name,
          product_price,
          color_name,
          size_name,
          rating,
          dibeli
        }) => {
          return (
            <Card
              className="card-style shadow-sm"
              style={{ width: "18rem", marginRight: "12px" }}
              key={id}
            >
              <Link
                to={{
                  pathname: `/products/${id}`,
                  products,
                }}
              >
                <img
                  src={getUrl + product_img.split(',')[0]}
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{ height: "12rem" }}
                />
              </Link>

              <div className="card-body" style={{ bottom: 0 }}>
                <h5 className="card-title">{product_name}</h5>
                <p className="card-text">Rp. {product_price}</p>
                <p className="card-text2">{category_name} ({size_name + "-" + color_name})</p>
                <Rating product_rating={rating} dibeli={dibeli} />
              </div>
            </Card>
          );
        }
      )}
    </>
  );
};

export default NewData;
