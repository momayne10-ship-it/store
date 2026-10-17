import React from 'react'
import AllCompo from '../Compo/AllCompo'
import Footer from '../Compo/Footer'
import ContactSec from './ContactSec'
import { CartProvider } from 'react-use-cart'

function AllContact() {
  return (
    <CartProvider>

<AllCompo/>
<ContactSec/>
<Footer/>

    </CartProvider>
  )
}

export default AllContact