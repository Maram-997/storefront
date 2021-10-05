import React from 'react';
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { showCart } from "../store/actions";


function Header(props) {
  return (
    <header>
      <h1>OUR STORE</h1>
      <Button color="inherit" onClick={()=>{props.showCart(!props.cart.visiable)}}>Cart ({props.cart.capacity}) </Button>
    </header>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cartReducer };
};
const mapDispatchToProps = { showCart };

export default connect(mapStateToProps, mapDispatchToProps)(Header);