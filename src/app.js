import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Category from './components/categories'
import Products from './components/product'
import ActiveCategory from './components/activeCategory'

export default props => {
    return (
      <>
        
            <Header />
            <ActiveCategory/>
            <Category />
            <Products />
            <Footer />
      </>
    )
  };