import UseFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { useState } from "react";
import Review from "./Review";

function ProductDetails(){
    
    const {data,error,loading}=UseFetch("https://dummyjson.com/products?limit=15");
    const [added,updateadded]=useState(1);
    const [countpro,updatecountpro]=useState(0);
    if(data){
        //console.log(data);
        const param=useParams();
        const dispatch=useDispatch();

        function AddItem(item){
            dispatch(addItem(item));
            updateadded(2);
            updatecountpro(countpro+1);
        }

        function RemoveItem(){
            dispatch(removeItem());
            updatecountpro(countpro-1);
            if(countpro==0){
                updateadded(1);
            }
        }

        const list=data.products.filter((el)=>{
            return el.id==param.id;
        })
        console.log("list",list);
        if(added==1)
        {
            return(
                <>
                 <div className="productDetailsContainer">
                    <div>
                        <img src={list[0].images[0]} alt="productIMG" width="500px" height="450px"></img>
                        <div className="buttons">
                            <button className="detailbutton" onClick={()=>AddItem(list[0])}>Add to cart</button>
                            <button className="detailbutton" onClick={()=>AddItem(list[0])}>Buy now</button>
                        </div>
                        </div>
                        <div>
                        <h1>{list[0].brand}</h1>
                        <div className="rating">{`${list[0].rating} ⭐`}</div>
                        <div className="specialprice">Special price</div>
                        <h2>&#8377; {list[0].price}</h2>
                        <h2>{list[0].description}</h2>
                        <h3>{list[0].warrantyInformation}</h3>
                        <h3>{list[0].shippingInformation}</h3>
                        <div>
                            {
                                list[0].reviews.map((el)=>{
                                    return(
                                        <>
                                        <Review data={el}></Review>
                                        </>
                                    )
                                })
                            }
                        </div>
                        </div>
                </div>
                </>
            )
        }
        else{
            return(
                <>
                 <div className="productDetailsContainer">
                    <div>
                        <img src={list[0].images[0]} alt="productIMG" width="500px" height="450px"></img>
                        <div className="buttons2">
                            <button className="addedbutton" onClick={()=>AddItem(list[0])}>+</button>
                            <div className="middle">{countpro}</div>
                            <button className="addedbutton" onClick={()=>RemoveItem()}>-</button>
                        </div>
                        </div>
                        <div>
                        <h1>{list[0].brand}</h1>
                        <div className="rating">{`${list[0].rating} ⭐`}</div>
                        <div className="specialprice">Special price</div>
                        <h2>&#8377; {list[0].price}</h2>
                        <h2>{list[0].description}</h2>
                        <h3>{list[0].warrantyInformation}</h3>
                        <h3>{list[0].shippingInformation}</h3>
                        </div>
                </div>
                </>
            )
        }
        
    }

    else if(error)
    {
        return <p>Error in loading</p>
    }

    else if(loading)
    {
        return <p>Loading</p>
    }
}

export default ProductDetails;