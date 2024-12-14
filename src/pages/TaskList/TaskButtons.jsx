import React from 'react'

export default function TaskButtons() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 d-flex justify-content-start gap-2">
          
        </div>
        <div className="col-md-6 d-flex justify-content-end gap-2">
            <button className="btn btn-secondary">
            <span className="me-1">⇅</span> Sort
          </button>
          <button className="btn btn-light">
             Priority  
            <span className="ms-1">∨</span>
          </button>
          <button className="btn btn-light">
            Status
            <span className="ms-1">∨</span>
          </button>
        </div>
      </div>
    </div>
  )
}
