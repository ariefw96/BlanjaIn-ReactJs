import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Jas } from "../../assets/style";
import Rating from "../components/Rating/Rating";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../utility/Auth";
const getUrl = process.env.REACT_APP_URL;

const SortCategory = ({ history, state }) => {
  const [categories, setCategories] = useState([]);
  const getAllProducts = async () => {
    await axios
      .get(`${getUrl}/products/${history.location.search}`)
      .then((res) => {
        const category = res.data.data.products;
        setCategories(category);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts(history);
  }, [history]);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="mb-3">{history.location.state.cat_name} Category</h1>
        <div className="row d-flex flex-row justify-content-start">
          {categories &&
            categories.map(
              ({
                id,
                id_categories,
                product_name,
                product_img,
                category_name,
                product_price,
                rating,
                dibeli
              }) => {
                return (
                  <Card
                    className="card-style shadow-sm"
                    style={{ width: "18rem" }}
                    key={id_categories}
                  >
                    <Link
                      className="border-bottom"
                      to={{
                        pathname: `/products/${id}`,
                        categories,
                      }}
                    >
                      <img
                        src={API + product_img.split(",")[0]}
                        className="card-img-top"
                        alt="..."
                        style={{ height: "12rem" }}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product_name}</h5>
                      <p className="card-text">{product_price}</p>
                      <p className="card-text2">{category_name}</p>
                      <Rating product_rating={rating} dibeli={dibeli} />
                    </div>
                  </Card>
                );
              }
            )}
        </div>
      </div>
    </>
  );
};

export default SortCategory;

// import React, { Component } from 'react'
// import Navbar from '../components/Navbar'
// import ProductCategory from '../components/Home/ProductCategory'

// export default class SortCategory extends Component {
//     render() {
//         const { location } = this.props;
//         return (
//             <div>
//                 <Navbar />
//                 <ProductCategory />
//             </div>
//         )
//     }
// }
