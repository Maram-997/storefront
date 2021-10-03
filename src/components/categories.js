import { Button } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { activatedCategory, reset } from '../store/categories';

const categories = (props) => {
    return (
        <section>
            <ul>
                {props.categories.map(element =>  
                    <li onClick={() => props.activatedCategory(element.displayName)} key={element.displayName}>{element.displayName}</li>)}
            </ul>
            <Button onClick={props.reset}></Button>
        </section>
    )
}

const mapStateToProps  = (state) => ({
    categories: state.categoriesReducer.categories
})

const mapDispatchToProps  = { activatedCategory, reset }

export default connect(mapDispatchToProps, mapStateToProps)(categories)