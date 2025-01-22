import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
    <Header/>

    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
          <div>
            <img className='ms-40' width={'350px'} height={'250px'} src="https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg" alt="" />
            <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 rounded text-white p-2'>Add to wishlist</button>
              <button className='bg-green-600 rounded text-white p-2'>Add to cart</button>
            </div>
          </div>
        <div>
          <h3 className='font-bold'>PID:Id</h3>
          <h1 className='text-5xl font-bold'>Title</h1>
          <h4 className='font-bold text-red-600 text-2xl'></h4>
          <h4>Category: category</h4>
          <p>
            <span className='font-bold'>Discription</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore aperiam omnis voluptatibus. Magnam, deleniti aliquam, neque labore dolores recusandae, odit asperiores voluptates necessitatibus vero nihil expedita eaque doloribus rerum?
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default View