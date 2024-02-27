import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <>
     <MDBNavbar light bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" style={{color:"white"}} className='mb-0 h1'>ToDo List</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    
    
    
    
    
    
    </>
  )
}

export default Header