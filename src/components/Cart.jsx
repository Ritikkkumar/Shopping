import {useSelector} from "react-redux";
import CartItem from "./CartItem";

function Cart(){
    const cartItems=useSelector(store=>store.cart.items);
    console.log("cart",cartItems);

    const arr=[];
    
    const filtered=cartItems.map((el)=>{
        var aa=true;
        if(arr.includes(el))
        {
            aa=false;
            return 
        }
        arr.push(el);
        if(aa)
        {
            return el;
        }
        
    })

    const filtered2=filtered.filter((el)=>{
        return el!=undefined;
    })
    console.log("filtered",filtered);

    return(
        <>
        <div className="cartItems">
            {filtered2.map((el)=>{
                return(
                <CartItem data={el}></CartItem>
                )
            })}
        </div>
        </>
    )
}

export default Cart;