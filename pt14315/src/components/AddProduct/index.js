import React, { useState } from 'react'
import PropTypes from 'prop-types';
const AddProduct = ({onAdd}) => {
    const [valueInput,setValueInput]= useState({});
    const onHandleChange = (e)=>{
        const {name, value} = e.target;
        setValueInput({
            [name]: value,
            ...valueInput,

        });
    }
        const onHandleSubmit = (e) =>{
            e.preventDefault();
            // console.log(valueInput)
            onAdd(valueInput);
        }
    return (
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Add PRoduct</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={onHandleSubmit} >
                    <div className="form-group">
                      <label htmlFor="inputProductName">Product name</label>
                      <input type="text" className="form-control" name="name" id="inputProductName" onChange={onHandleChange}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputProductImage">Product image</label>
                      <input type="text" className="form-control" name="image" id="inputProductImage" onChange={onHandleChange}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputProductPrice">Product price</label>
                      <input type="text" className="form-control" name="price" id="inputProductPrice" onChange={onHandleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">submit</button>
                    </form>
                </div>
            </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct
