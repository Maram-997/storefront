import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Category from './components/categories'
import Products from './components/product'
import ActiveCategory from './components/activeCategory'
import SimpleCart from './components/cart'
export default props => {
    return (
      <>
        
            <Header />
            <SimpleCart/>
            <ActiveCategory/>
            <Category />
            <Products />
            <Footer />
      </>
    )
  };