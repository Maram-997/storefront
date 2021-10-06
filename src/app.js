import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Category from './components/categories'
import Products from './components/product'
import ActiveCategory from './components/activeCategory'
import SimpleCart from './components/cart'
import ProductDetails from './components/ProductDetails'
import ShoppingCart from './components/ShoppingCart'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
export default props => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
        <Route exact path='/'>
        </Route>
        <Route path='/product/:id'>
            <ProductDetails/>
        </Route>
        <Route path='/cart'>
        <ShoppingCart/>
        </Route>
        <SimpleCart />
        <ActiveCategory />
        <Category />
        <Products />
        </Switch>
        <Footer />
      </Router>
    </>
  )
};