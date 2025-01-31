import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
      <div style={{height:'300px'}} className='mt-5 container w-full bg-violet-600 text-white'>
        <div className='d-flex justify-content-between'>
            {/* intro */}
            <div style={{width:'400px'}}>
                <h5><i class="fa-solid fa-music me-3 "></i>
                Media Player</h5>
                <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
                <p>Code licensed MIT, docs CC BY 3.0.</p>
                <p>Currently v5.3.3.</p>
            </div>
            {/* links */}
            <div className='d-flex flex-column'>
                <h5>Links</h5>
                <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing page</Link>
                <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home page</Link>
                <Link to={'/history'} style={{textDecoration:'none', color:'white'}}>History page</Link>
            </div>
            {/* guide */}
            <div className='d-flex flex-column'>
                <h5>Guides</h5>
                <a href='https://react.dev/' style={{textDecoration:'none', color:'white'}}>React</a>
                <a href='https://react-bootstrap.github.io/'style={{textDecoration:'none', color:'white'}}>React Bootstrap</a>
                <a href='https://reactrouter.com/' style={{textDecoration:'none', color:'white'}}>React Router</a>
            </div>
            {/* contact */}
            <div className='d-flex flex-column'>
                <h5>Contact US</h5>
                <div className='d-flex'>
                    <input type="text" placeholder='Enter your email !!' className='form-control me-2' />
                    <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
                </div>   
                 <div className='d-flex justify-content-between mt-3'>
                    <a href="https://www.instagram.com/" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.instagram.com/" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.instagram.com/" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/ " style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-phone"></i></a>

                    
                </div>
            </div>
        </div>
      </div>
    
  )
}

export default Footer