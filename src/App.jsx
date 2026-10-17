import React from 'react'
import AllCompo from './Compo/AllCompo'
import Footer from './Compo/Footer'
import Silder from './Home/Silder'
import FtcoIntro from './Home/FtcoIntro'
import FtcoAbout from './Home/FtcoAbout'
import FtcoSection from './Home/FtcoSection'
import FtcoSec from './Home/FtcoSec'
import FtcoCounter from './Home/FtcoCounter'
import FtcoSec7 from './Home/FtcoSec7'
import FtcoGallery from './Home/FtcoGallery'
import FtcoMenu from './Home/FtcoMenu'
import FtcoTestimony from './Home/FtcoTestimony'
import FtcoSec11 from './Home/FtcoSec11'
import FtcoAppointment from './Home/FtcoAppointment'
import Animate from './Compo/Animate'
import { CartProvider } from 'react-use-cart'


function App() {
  return (
    <CartProvider>
<AllCompo/>
<Silder/>
<FtcoIntro/>
<FtcoAbout/>
<FtcoSection/>
<FtcoSec/>
<FtcoCounter/>
<FtcoSec7/>
<FtcoGallery/>
<FtcoMenu/>
<FtcoTestimony/>
<FtcoSec11/>
<FtcoAppointment/>
<Footer/>
<Animate/>
    </CartProvider>
  )
}

export default App