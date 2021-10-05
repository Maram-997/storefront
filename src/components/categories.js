import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import { activatedCategory } from  '../store/actions'
import { connect } from "react-redux";

const categories = (props) => {
  return (
    <section>
    <Breadcrumbs>
        {  props.categories.map(item=>{
           return(
             <Link color="inherit" onClick={()=>props.activatedCategory(item.normalizedName)}>
            {item.normalizedName}
          </Link>
           ) 
          })}
    </Breadcrumbs>
  </section>
  );
};
const mapStateToProps = (state) => ({
  categories:state.categoriesReducer.categories
});

const mapDispatchToProps = { activatedCategory };

export default connect(mapStateToProps, mapDispatchToProps)(categories);

