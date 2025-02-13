// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Popup from '../../components/Popup/Popup'




// eslint-disable-next-line react/prop-types
const Layout = ({handle, loml, handle2, cart}) => {
  return (
    <div>
      <Navbar handleOrderPopup={handle}/>
      <Outlet/>
      <Footer/>
      <div>
        <Popup show={loml} handleOrderPopup={handle2} cart={cart}/>
      </div>
    </div>
  )
}

export default Layout
