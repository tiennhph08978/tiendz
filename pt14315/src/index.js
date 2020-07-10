import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const firstName = "Tien";
// const lastName = "Huu";

// const element = <div>Xin Chao {firstName} {lastName}</div>



// var productlist =[
//   {
//     id:1,
//     name : 'Banh ngot',
//     price : 15000,
//     status: true
//   },
//   {
//     id:2,
//     name : 'Banh chung',
//     price : 55000,
//     status: true
//   } 
// ];
// const showProduct = (productlist) =>{
//   return productlist.map((product, index) => (
//     <div key={index}>
//     <h3>{product.name}</h3>
//     <p>{product.price}</p>
//     <p>{product.status? 'con hang' : 'het hang'}</p>
//     <button>Cart</button>
//     </div>
//   ))
// }
// const element = <div>
//       {showProduct(productlist)}
// </div>
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  // element,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
