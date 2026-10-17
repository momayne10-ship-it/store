import React from 'react'
import { CartProvider } from 'react-use-cart'
import AllCompo from '../Compo/AllCompo'
import Footer from '../Compo/Footer'
import FtcoSec from './FtcoSec'
import FtcoIntro from './FtcoIntro'
import MenuSec from './MenuSec'

function AllMenu() {
  return (
    <CartProvider>
<AllCompo/>
<FtcoSec/>
<FtcoIntro/>
<MenuSec/>
<Footer/>
    </CartProvider>
  )
}

export default AllMenu