import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter ,RouterProvider } from 'react-router'
import { AllData } from './Data/AllData.jsx'
import AllCart from './Cart/AllCart.jsx'
import ScrollToTop from 'react-scroll-to-top'
import AllAbout from './About/AllAbout.jsx'
import AllContact from './Contact/AllContact.jsx'
import AllProducts from './Products/AllProducts.jsx'
import AllSingleProducts from './SingleProducts/AllSingleProducts.jsx'
import AllLogin from './Login/AllLogin.jsx'
import AllMenu from './Menu/AllMenu.jsx';


const savedTheme = localStorage.getItem('theme') || 'dark'
document.documentElement.setAttribute('data-bs-theme', savedTheme)

var router = createBrowserRouter([

    {
        path:"/",
element:<App/>
    },
    {
        path:"about",
element:<AllAbout/>
    },
    {
        path:"products",
    element:<AllProducts/>
    },
    {
        path:"contact",
element:<AllContact/>
    },
    {
        path:"singleproduct/:id",
element:<AllSingleProducts/>
    },
    {
        path:"cart",
element:<AllCart/>
    },
    {
        path:"login",
element:<AllLogin/>
    },
    {
        path:"menu",
element:<AllMenu/>
    },

])



createRoot(document.getElementById('root')).render(
    


    <AllData>
<ScrollToTop smooth />
<RouterProvider router={router}/>

    </AllData>

    

)
