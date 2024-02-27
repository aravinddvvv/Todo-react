import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
        <MDBFooter bgColor='black' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='/' style={{color:"white"}}>
          ToDo List.com Made with React
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer