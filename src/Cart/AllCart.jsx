import React from 'react'
import { CartProvider, useCart } from 'react-use-cart'
import AllCompo from '../Compo/AllCompo';
import Footer from '../Compo/Footer';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

function Cart(){
const {items,updateItemQuantity,removeItem,totalItems,totalUniqueItems,cartTotal,emptyCart,isEmpty} =useCart();

  if(isEmpty){
    return(
      <div className="text-center mt-5">
        <h3 className='text-light mb-5 fw-bold'>Your Cart is Empty... </h3>

<div className="mb-4 text-light ">
  <i className="fas fa-shopping-cart fa-5x " style={{color:"#868079",}}></i> 
</div>

        <Link to="/products" className="btn btn-primary px-5 mb-4 py-2 fw-bold">
    Continue Shopping
  </Link>
      </div>
    )
  }

    return(
     
    <div>
      <section className="h-100 h-custom" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">

                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <Link to="/products" className="text-body text-decoration-none">
                          <i className="fas fa-long-arrow-alt-left me-2" />
                          Continue shopping ({totalUniqueItems})
                        </Link>
                      </h5>
                      <hr />
                      
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1 fw-bold">Shopping cart</p>
                          <p className="mb-0 text-muted">You have {totalItems} items in your cart</p>
                        </div>
                        <div>

{/* زر تفريغ السلة بالكامل مع رسالة تأكيد */}

                          <button className="btn btn-outline-danger btn-sm" onClick={() => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You want to clear your entire shopping cart?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Yes, clear it!'
  }).then((result) => {
    if (result.isConfirmed) {
      emptyCart();
      Swal.fire('Cleared!', 'Your cart has been cleared.', 'success');
    }
  });
}}>
                            Clear Cart
                          </button>


                        </div>
                      </div>
                      
                      {items.map((item) => (
                        <div className="card mb-3 shadow-sm" key={item.id}>
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img
                                    src={item.image || `${import.meta.env.BASE_URL}images/menu-1.jpg`}
                                    className="img-fluid rounded-3"
                                    alt={item.title || "Coffee"}
                                    style={{ width: 65, height: 65, objectFit: 'cover' }}
                                  />
                                </div>
                                <div className="ms-3">
                                  <h5 className="text-dark mb-1">{item.title || 'Coffee Item'}</h5>
                                  <p className="small mb-0 text-muted">${item.price || 2.90}</p>
                                </div>
                              </div>

                              <div className="d-flex flex-row align-items-center">
                                <div className="px-2">
                                  <button 
                                    className="btn btn-sm btn-outline-secondary mt-2 px-2"
                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                  >
                                    -
                                  </button>
                                  <span className="mx-2 fw-bold">{item.quantity}</span>
                                  <button 
                                    className="btn btn-sm btn-outline-secondary mt-2 px-2"
                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                  >
                                    +
                                  </button>
                                </div>
                                <div style={{ width: 80 }} className="text-end">
                                  <h5 className="mb-0 text-dark">${((item.price || 2.90) * item.quantity).toFixed(2)}</h5>
                                </div>

       {/* // 2. لزرار حذف منتج فردي (Remove Item): */}
                                
{/* <button 
  className="btn btn-sm text-danger ms-3 border-0 bg-transparent"
  onClick={() => removeItem(item.id)}
>
  <i className="fas fa-trash-alt" />
</button> */}

<button
  onClick={() => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to remove this item from your cart!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, delete it!',
      width: '300px',
      padding: '1em',
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(item.id); // دالة الحذف من مكتبة react-use-cart
        Swal.fire({
          title: 'Deleted!',
          text: 'The item has been removed.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          width: '300px',
          padding: '1em',
        });
      }
    });
  }}
  className="btn btn-sm text-danger ms-3 border-0 bg-transparent p-2 d-inline-flex align-items-center justify-content-center"
  title="Remove item"
  style={{ width: '32px', height: '32px' }}
>
  <i className="fas fa-trash-alt" />
</button>

                              </div>
                            </div>
                          </div>
                        </div>
                      ))}


     <Link to="/products" className="btn btn-primary mt-4 d-block text-light px-5 mb-4 py-2 fw-bold">
    Continue Shopping
  </Link>
                    </div>

                    <div className="col-lg-5">
                      <div className="card bg-dark text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Payment Details</h5>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              className="img-fluid rounded-3"
                              style={{ width: 45 }}
                              alt="Avatar"
                            />
                          </div>

                          <form className="mt-4" onSubmit={(e) => { e.preventDefault(); alert('Order Placed Successfully!'); }}>
                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeName" className="form-control form-control-lg" placeholder="Cardholder's Name" required />
                              <label className="form-label mt-1" htmlFor="typeName">Cardholder's Name</label>
                            </div>
                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeText" className="form-control form-control-lg" placeholder="1234 5678 9012 3457" maxLength={19} required />
                              <label className="form-label mt-1" htmlFor="typeText">Card Number</label>
                            </div>
                          </form>

                          <hr className="my-4 bg-secondary" />
                          
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">${cartTotal.toFixed(2)}</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">Free</p>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2 fw-bold">Total</p>
                            <p className="mb-2 text-warning fw-bold">${cartTotal.toFixed(2)}</p>
                          </div>
                          
                          <button
                            type="button"
                            className="btn btn-primary btn-block btn-lg w-100"
                            onClick={() => alert('Order Placed Successfully!')}
                          >
                            <div className="d-flex justify-content-between px-3">
                              <span>${cartTotal.toFixed(2)}</span>
                              <span>
                                Checkout <i className="fas fa-long-arrow-alt-right ms-2" />
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


    )
}

function AllCart() {
  return (
    <CartProvider>
<AllCompo/>
        
<Cart/>
<Footer/>
    </CartProvider>
  )
}

export default AllCart

