import React from "react";
import { connect } from "react-redux";
import { addItem, resetCart, visiable } from '../store/actions'

const SimpleCart = (props) => {
  return (
    <>
    <div style={{position:"absolute", right:"20px"}}>
      <section >
          <ul>
            { props.visiable&&
            props.cart.map((element, idx) => {
              return (
                <li key={idx}>
                  <span>{element.name}</span>
                </li>
              );
            })}
          </ul>
    
      </section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
   return{cart: state.cartReducer.cart}
};

export default connect(mapStateToProps)(SimpleCart);