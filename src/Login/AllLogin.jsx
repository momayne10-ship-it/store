
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import AllCompo from '../Compo/AllCompo';
import { CartProvider } from 'react-use-cart';

function AllLogin() {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

// تحقق بسيط (يمكنك استبداله بـ API الخاص بك لاحقاً)
    if (email === '' || password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!',
        confirmButtonColor: '#d33',
        width: '300px',
      });
      return;
    }

// نجاح تسجيل الدخول
    Swal.fire({
      icon: 'success',
      title: 'Welcome Back!',
      text: 'Logged in successfully.',
      confirmButtonColor: '#0c924d',
      timer: 1500,
      showConfirmButton: false,
    });

    // توجيه المستخدم للصفحة الرئيسية أو المنيو بعد الدخول
    setTimeout(() => {
      navigate('/'); 
    }, 1500);
  };

  return (
    <CartProvider>

    
<AllCompo/>

<div style={{ backgroundColor: '#181818', minHeight: '100vh' }} className="d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 ">
            <div className="card p-4 shadow-lg border-secondary" style={{ backgroundColor: '#242526', color: '#fff', borderRadius: '20px' }}>
              <div className="text-center mb-4">
                <h2 className="text-light fw-bold">Welcome To Coffee Blend</h2>
                <p className="text-muted">Please login to your account</p>
              </div>

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label text-light">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control bg-dark text-light border-secondary" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-light">Password</label>
                  <input 
                    type="password" 
                    className="form-control bg-dark text-light border-secondary" 
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    {/* <input type="checkbox" className="form-check-input" id="rememberMe" /> */}
                    <label className="form-check-label text-muted" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <a href="#!" className="text-primary text-decoration-none small">Forgot password?</a>
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2 mb-3">
                  Login
                </button>

                <div>
                  <p className="text-muted small">
                    Don't have an account? <Link to="/register" className="text-light btn-block btn btn-dark text-decoration-none  ">Sign Up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</CartProvider>
  )

}
export default AllLogin