import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
Navbar
const Header = () => {
  return (
  
    // <Navbar style={{zIndex:1}} className="bg-info position-fixed w-100">
    //     <Container>
    //       <Navbar.Brand href="#home">
    //      <Link to={'/'} style={
    //       {
    //         textDecoration:'none'
    //       }
    //      }>
    //       <Navbar.Brand style={{color:'white'}}
    //       className='fs-5 fw-bolder'>
    //       <i className="fa-solid fa-music me-3"></i>Media player
    //       </Navbar.Brand>
    //      </Link>
    //       </Navbar.Brand>
    //     </Container>
    //   </Navbar>
    <Navbar style={{ zIndex: 1 }} className="bg-info position-fixed w-100">
      <Container>
        {/* Use 'as={Link}' to avoid the nested <a> issue */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fs-5 fw-bolder" 
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <i className="fa-solid fa-music me-3"></i>Media Player
        </Navbar.Brand>
      </Container>
    </Navbar>

  )
}

export default Header