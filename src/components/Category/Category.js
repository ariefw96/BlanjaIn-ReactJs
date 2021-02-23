import React, { Component } from 'react'
import './category.css'
import './style.css'
import { Link } from 'react-router-dom';
import Jacket from '../../assets/image/category/jacket.png'
import Tshirt from '../../assets/image/category/shirt.png'
import Pants from '../../assets/image/category/pants.png'
import Short from '../../assets/image/category/short.png'
import Shoes from '../../assets/image/category/shoes.png'

class Category extends Component{

    render(){   
      
        return(
            <div className="container mt-5 mb-5">
                <h1>Category</h1>
                <small className="text-muted">What are you currently looking for</small>

                <div className="row d-flex justify-content-center mt-3">
                    <Link 
                    className="col-lg col-md col-sm col ml-0 mr-3 d-flex justify-content-center align-items-center" 
                    style={{backgroundColor:'#CC0B04', borderRadius:10}}
                    id="tshrit"
                    to={{
                        pathname:'/category',
                        search: "?category=1",
                        state: {cat_name:'T-shirt'}
                        }}>
                        <div className="position-relative pt-4 pb-4">
                            <img src={Tshirt} height="146px" width="116px" alt="" />
                        </div>
                        <div className="position-absolute">
                            <h2 className="text-white text-weight-bold">T-Shirt</h2>
                        </div>
                    </Link>
                    <Link  className="col-lg col-md col-sm col mr-3 d-flex justify-content-center align-items-center" 
                    id="short"  
                    style={{backgroundColor:'#1C3391', borderRadius:10}}
                    to={{
                        pathname:'/category',
                        search: "?category=2",
                        state: {cat_name:'Short'}
                        }}>
                        <div className="position-relative">
                            <img src={Short} height="146px" width="158px" alt="" />
                        </div>
                        <div className="position-absolute">
                            <h2 className="text-white text-weight-bold">Shorts</h2>
                        </div>
                    </Link>
                    <Link href="" className="col-lg col-md col-sm col mr-3 d-flex justify-content-center align-items-center"  
                    id="jacket" 
                    style={{backgroundColor:'#F67B02', borderRadius:10}}
                    to={{
                        pathname:'/category',
                        search: "?category=3",
                        state: {cat_name:'Jacket'}
                        }}>
                        <div className="position-relative">
                            <img src={Jacket} height="131px" width="131px" alt="" />
                        </div>
                        <div className="position-absolute">
                            <h2 className="text-white text-weight-bold">Jacket</h2>
                        </div>
                    </Link>
                    <Link href="" className="col-lg col-md col-sm col mr-3 d-flex justify-content-center align-items-center" 
                    id="pants"
                    style={{backgroundColor:'#E31F51', borderRadius:10}} 
                    to={{
                        pathname:'/category',
                        search: "?category=4",
                        state: {cat_name:'Pants'}
                        }}>
                        <div className="position-relative">
                            <img src={Pants} height="131px" width="76px" alt=""/>
                        </div>
                        <div className="position-absolute">
                            <h2 className="text-white text-weight-bold">Pants</h2>
                        </div>
                    </Link>
                    <Link href="" className="col-lg col-md col-sm col d-flex justify-content-center align-items-center" 
                    id="shoes" 
                    style={{backgroundColor:'#57CD9E', borderRadius:10}} 
                    to={{
                        pathname:'/category',
                        search: "?category=5",
                        state: {cat_name:'Shoes'}
                        }}>
                        <div className="position-relative">
                            <img src={Shoes} height="109px" width="169px" alt="" />
                        </div>
                        <div className="position-absolute">
                            <h2 className="text-white text-weight-bold">Shoes</h2>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Category;