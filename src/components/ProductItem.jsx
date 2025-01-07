import "./ProductItem.css"
import { Link } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function ProductItem(props)
{
    const dispatch=useDispatch();
    const [added,updateadded]=useState(false);
    const [countpro,updatecountpro]=useState(0);

    function AddCart(item)
    {
        dispatch(addItem(item));
        updateadded(true);
        updatecountpro(countpro+1);
    }

    function RemoveItem()
    {
        dispatch(removeItem());
        updatecountpro(countpro-1);
        if(countpro==0){
            updateadded(false);
        }
    }

    if(added==false){
        return(
            <>
            <div className="itemMain">
            <Link to={`/product/${props.data.id}`} className="itemlink">
            <div className="productItemContainer">
                <img src={props.data.thumbnail} alt="ProductIMG" height="400px" width="300px"></img>
                <h1 className="itemtext">{props.data.brand}</h1>
                <h2 className="itemtext">&#8377; {props.data.price}</h2>
                <h3 className="itemtext">{props.data.description}</h3>
                
            </div>
            </Link>
            <button className="addcartbutton" onClick={()=>AddCart(props.data)}>Add To Cart</button> 
            </div>
            </>
        )
    }
    else{
        return(
            <>
            <div className="itemMain">
            <Link to={`/product/${props.data.id}`} className="itemlink">
            <div className="productItemContainer">
                <img src={props.data.thumbnail} alt="ProductIMG" height="400px" width="300px"></img>
                <h1 className="itemtext">{props.data.brand}</h1>
                <h2 className="itemtext">&#8377; {props.data.price}</h2>
                <h3 className="itemtext">{props.data.description}</h3>
            
            </div>
            </Link>
            <div className="buttons">
                <button className="addcartbutton2" onClick={()=>AddCart(props.data)}>+</button>
                <div className="counter">{countpro}</div>
                <button className="addcartbutton2" onClick={RemoveItem}>-</button>
                </div>
                </div>
            </>
        )
    }
    
}

export default ProductItem;