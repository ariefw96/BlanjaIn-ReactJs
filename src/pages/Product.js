import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductName from "../components/Product/ProductName";
import { useSelector } from "react-redux";

const getUrl = process.env.REACT_APP_URL;

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [img, setImg] = useState([]);

  const getProduct = async () => {
    await axios
      .get(`${getUrl}/product/getProductData/` + props.match.params.id)
      .then(({ data }) => {
        console.log(data.data)
        const productId = data.data[0];
        const image = data.data[0].product_img;
        const images = image.split(',');
        // const jumlah = data.data.product_qty / data.data.product_qty;
        // const size = data.data.sizes.map((item) => {
        //   return item.size;
        // });
        // setSizes('XL');
        setProduct(productId);
        setImg(images);
        // setQty(jumlah);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  useEffect(() => {
    getProduct(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <>
      <ProductName
        name={product.product_name}
        brand={product.category_name}
        desc={product.product_desc}
        price={product.product_price}
        condition={product.conditions}
        size_name={product.size_name}
        color_name={product.color_name}
        photo={img}
        rating={product.rating}
        dibeli={product.dibeli}
        id={product.id}
        seller_id={product.user_id}
      />
    </>
  );
};

export default Product;
