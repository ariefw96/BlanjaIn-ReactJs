import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Carousell from "../components/Home/Carousell";
import Category from "../components/Category/Category.js";
import NewData from "../components/Home/New";
import Popular from "../components/Home/Popular";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Carousell/>
        <Category />
        <NewData />
        <Popular />
        <div className="pt-5" ></div>
      </>
    );
  }
}
