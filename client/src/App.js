import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";

import Fileupload from './Fileupload';

export default function App() {
  return (
    <div className="container mt-4">
      <div className="display-4 text-center mb-4">
        <i className="fab fa-react"/> React File Upload
      </div>
     <Fileupload/>
    </div>
  )
}
 