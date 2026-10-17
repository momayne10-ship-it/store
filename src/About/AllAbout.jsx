import React from 'react'
import AllCompo from '../Compo/AllCompo'
import Footer from '../Compo/Footer'
import FtcoAbout from './FtcoAbout'
import MainSec from './MainSec'
import { CartProvider } from 'react-use-cart'


function AllAbout() {
  return (
    <CartProvider>
<AllCompo/>
<MainSec/>
<FtcoAbout/>
<Footer/>

    </CartProvider>
  )
}

export default AllAbout