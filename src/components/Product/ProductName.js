import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import Newdata from "../Home/PopularData";
import Review from "../Review/Review.js"
import "../../assets/style/product.css";
import Rating from "../Rating/Rating";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/product";
import { API } from "../../utility/Auth";

const ProductName = (props) => {
  const {
    name,
    price,
    brand,
    condition,
    desc,
    size_name,
    photo,
    qty,
    color_name,
    rating,
    id,
    seller_id,
    dibeli
  } = props;

  const [jumlah, setJumlah] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [arrImg, setArrImg] = useState(0)

  const history = useHistory();

  const { carts: stateCarts } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const kirim = () => {
    const sendData = {
      brand: brand,
      id: id,
      photo: photo[0],
      name: name,
      price: Number(price),
      qty: jumlah,
      seller_id: seller_id,
      selected: true,
    };
    dispatch(addToCart(sendData));
    history.push("/mybag");
  };

  const optCatcher = (e) => {
    const { id, value } = e.target
    if (id == 'size') {
      setSize(value)
    } else {
      setColor(value)
    }
  }

  const index = stateCarts.findIndex((item) => {
    return item.id === id;
  });

  const toPrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  console.log(size, color)

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 col-lg-5">
            <img
              className="img-fluid rounded"
              src={API + photo[arrImg]}
              style={{ height: "25rem", width: "100%" }}
              alt=""
            />
            <div className="d-flex justify-content-between">
              {
                photo.map((items, index) => {
                  return (
                    <img
                      onClick={() => setArrImg(index)}
                      className="img-fluid rounded mt-2"
                      src={API + items}
                      alt="img"
                      style={{ width: "20%", margin: "1px", height: "80px" }}
                    />
                  )
                })
              }
            </div>
          </div>
          <div className="col-12 col-md-7 col-l-7">
            <h3 className="name">{name}</h3>
            <p className="brand">{brand}</p>
            <Rating product_rating={rating} dibeli={dibeli} />
            <h3 className="tag-price mt-5">Price</h3>
            {
              price != undefined ? (
                <p className="price">Rp. {toPrice(price)}</p>
              ) : (
                  <p className="price">Rp. 0</p>
                )
            }
            <h4>Color</h4>
            <div>
              <select id="color" className="form-control col-6" onChange={optCatcher}>
                <option value="" selected hidden>Pilih warna</option>
                <option value={color_name}>{color_name}</option>
              </select>
            </div>
            <h4 className="mt-3">Size</h4>
            <div>
              <select id="size" className="form-control col-6" onChange={optCatcher}>
                <option value="" selected hidden>Pilih ukuran</option>
                <option value={size_name}>{size_name}</option>
              </select>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-sm-3 mt-2">
                <Link
                  to={{
                    pathname: "/chat",
                    seller_id,
                  }}
                >
                  <button className="chat rounded-pill">Chat</button>
                </Link>
              </div>
              <div className="col-12 col-sm-3 mt-2">
                {index >= 0 ? (
                  <button
                    className="rounded-pill"
                    style={{
                      backgroundColor: "#222222",
                      color: "white",
                      fontSize: "10px",
                      width: "100%",
                      height: "48px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                  >
                    Item already in bag
                  </button>
                ) : (
                    <button
                      className="rounded-pill"
                      style={{
                        backgroundColor: "white",
                        color: "Black",
                        fontSize: "15px",
                        width: "100%",
                        height: "48px",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                      }}
                      onClick={() => {
                        dispatch(
                          addToCart({
                            brand: brand,
                            id: id,
                            photo: photo[0],
                            name: name,
                            price: Number(price),
                            qty: 1,
                            seller_id: seller_id,
                            selected: false,
                          })
                        );
                      }}
                    >
                      Add bag
                    </button>
                  )}
              </div>
              {/* <Link to={{
                    pathname:"/checkout",
                    state: this.state,
                    }}> */}
              <div className="col-12 col-sm-6  mt-2">
                <button className="buy rounded-pill" onClick={kirim}>
                  Buy Now
                </button>
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <h3 className="informasi">Informasi Produk</h3>
        {/* <h3 className="tag-condition mt-5">Condition</h3>
        <p className="condition">{condition}</p> */}
        <h3 className="tag-desc">Description</h3>
        <p className="desc">{desc}</p>
        <p className="informasi">Product review</p>
        <div className="d-flex">
          <p className="rate">{rating}</p>
          <p className="five">/5</p>
        </div>
        <div className="star">
          <Rating product_rating={rating} dibeli={dibeli} />
          <Review id={id} rating={rating} />
        </div>
        <div>
          <hr />
          <h2 className="part-section mt-5">You can also like this</h2>
          <p>Most popular items.</p>
        </div>
        <article>
          <div className="row d-flex flex-row justify-content-start">
            <Newdata />
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductName;
