
import React, { useState } from 'react'
import Product from './components/Products'
import AddProduct from './components/AddProduct'
// import Box from './components/Box';
// import dataFake from './productsFake';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import DetailPro from './components/DetailPro';
  function App(){
    const[products, setProducts] = useState([]);
    // const[products, setProducts] = useState(dataFake);
    const onHandleRemove =(id)=>{
      
      const newarr = products.filter(products=>products.id !== id);
      const confirmDelete = window.confirm('xoa khong em');
      if(confirmDelete)setProducts(newarr);
    }
    const onHandleAdd = (product)=>{
      const newarr = {
        id:products.length +1,
        ...product
      }
      // console.log(product);
      setProducts([
        ...products,
        newarr
        //Spread syntax (...)
      ])
    }
    return (
      <div id="wrapper">
        <Router>
        <Nav />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <Header />
            {/* Begin Page Content */}
            <div className="container-fluid">
              <Switch>
                <Route path="/dashboard">
                <AddProduct onAdd={onHandleAdd}/>
                </Route>
                <Route path="/products">
                <Product products={products} onRemove={onHandleRemove} />
                </Route>
                <Route path="/product/add"><AddProduct onAdd={onHandleAdd}/>
                </Route>
                <Route path="/product/:Id"><DetailPro products={products}/>
                </Route>
              </Switch>
              {/* Page Heading */}
              {/* <button onClick={onShow}></button> */}

            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
          <Footer />
        </div>
        {/* End of Content Wrapper */}
      </div>
      </Router>
      </div>
    )
  }
  export default App;
