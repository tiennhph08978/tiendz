import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";
const DetailPro = ({products}) => {
    const {Id} = useParams();
    const product = products.find(products=>products.id===Id);
    console.log(product);
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
              <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>
              {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>stt</th>
                          <th>name</th>
                          <th>image</th>
                          <th>price</th>
                          <th>action</th>
                        </tr>
                      </thead>
                      <tbody>
                            <tr>
                                <td>{product.name}</td>
                            </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
    )
}

DetailPro.propTypes = {

}

export default DetailPro
