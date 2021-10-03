import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Categories from './components/categories'
import Products from './components/product'


// function App () {
//     return (
//         <>
//         <h1>HeaderTest</h1>
//             <Header />
//             <Categories />
//             <Products />
//             <Footer />
//         </>
//     )
// }

// export default App

export default props => {
    return (
      <>
        <h1>HeaderTest</h1>
            <Header />
            <Categories />
            <Products />
            <Footer />
      </>
    )
  };