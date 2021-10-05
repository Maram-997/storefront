import React from "react";
import { connect } from "react-redux";

const ActiveCategory = (props) => {
  return <div>
  <h1>{props.activeCategory.normalizedName}</h1>
  <span>{props.activeCategory.description}</span>
  </div>
};


const  mapStateToProps = state => ({
  activeCategory: state.categoriesReducer.activeCategory
})

export default connect(mapStateToProps)(ActiveCategory);
