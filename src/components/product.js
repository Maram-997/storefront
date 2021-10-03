import { Button } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { activatedProduct, reset } from '../store/products';

const products = (props) => {
    return (
        <section>
            <ul>
                {props.products.map(element =>  
                    <li onClick={() => props.activatedProduct(element.name)} key={element.name}>{element.name}</li>)}
            </ul>
            <Button onClick={props.reset}></Button>
        </section>
    )
}

const mapStateToProps = (state) => ({
    products: state.productsReducer.products
})

const mapDispatchToProps = { activatedProduct, reset }

export default connect(mapDispatchToProps, mapStateToProps)(products)