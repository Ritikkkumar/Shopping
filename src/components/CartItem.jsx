import "./CartItem.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { addItem } from "../utils/cartSlice";
import { sliceItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


function CartItem(props){

    const dispatch=useDispatch();
const cartItems=useSelector(store=>store.cart.items);
const filtered=cartItems.filter((el)=>{
    return el.brand==props.data.brand;
})
const [counts,updatecounts]=useState(filtered.length);

function add(){
    updatecounts(counts+1);
    dispatch(addItem(props.data));

}

function subtract(){
    let i;
    for(i=0;i<cartItems.length;i++)
    {
        if(props.data.brand==cartItems[i].brand){
            dispatch(sliceItem(i));
            break;
        }
    }
    updatecounts(counts-1);
    console.log("cart",cartItems);
}

    return (
        <>
        <div className="cartitemcontainer">
            <div className="cartimage">
            <img src={props.data.thumbnail} alt="" height="" width=""></img>
            </div>
            <div className="cartitemdetails">
                <h2>{props.data.brand}</h2>
                <div className="stock">In stock</div>
                <div>&#8377; {props.data.price}</div>
                <div> Quantity : {counts}</div>
                <div className="addbuttons" onClick={add}>+</div>
                <div className="addbuttons" onClick={subtract}>-</div>
            </div>
        </div>
        </>
    )
}

export default CartItem;