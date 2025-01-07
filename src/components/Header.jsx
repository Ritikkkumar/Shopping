import "./Header.css"
import { useSelector } from "react-redux";
import { useState } from "react";
import UseFetch from "../utils/useFetch";
import { Link } from "react-router-dom";

function Header(){

    const count=useSelector(store=>store.cart.items)
    console.log(count);
    return(
        <>
        <div className="headercontainer">
        <h1 className="title">Shhopy Global</h1>
        <div className="cart">
            <div className="counter">{count.length}</div>
            <Link to="/cart">
            <img src="https://t4.ftcdn.net/jpg/01/86/94/37/360_F_186943704_QJkLZaGKmymZuZLPLJrHDMUNpAwuHPjY.jpg" alt="cartlogo" height="50px" width="50px"></img>
            </Link>
        </div>
        </div>
        <div className="headercontainertwo">
        </div>
        </>
    )
}

export default Header;