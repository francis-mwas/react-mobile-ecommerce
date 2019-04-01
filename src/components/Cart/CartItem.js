import React from 'react'

export default function CartItem({item, value}) {
    const { id, title, img, total, count, price} = item;
    const { increment, decrement, removeItem } = value
  return (
    <div className="row my-2 text-center text-capitalize">
     <div className="col-10 mx-auto col-lg-2">
        <img src={img} alt="product" style={{width: '5rem', height:'5rem'}} className="img-fluid"/>
     </div>

     <div className="col-10 mx-auto col-lg-2">
         <span className="d-lg-none">Product: </span> {title}
     </div>
     <div className="col-10 mx-auto col-lg-2">
         <span className="d-lg-none">Product:</span>  ${price}
     </div>
     <div className="col-10 mx-auto col-lg-2 my-2 mg-lg-0">
         <div className="d-flex justify-content-center">
         <div>
            <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>
                -
            </span>
            <span className="btn btn-black mx-1">{count}</span>

            <span className="btn btn-black mx-1" onClick={()=>increment(id)}>
                +
            </span>
         </div>   
         </div>
     </div>

     <div className="col-10 mx-auto col-lg-2">
        <div className="cart-item" onClick={()=>removeItem(id)}>
            <i className="fas fa-trash" />
        </div>
     </div>
    
     <div className="col-10 mx-auto col-lg-2">
        <strong>Item total : ${total}</strong>
     </div>
    </div>
  )
}
