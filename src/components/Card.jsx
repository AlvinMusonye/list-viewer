import React from 'react'



function Card() {
  return (
    <div >
        <div className='text-center font-bold text-2xl text-sky-400 m-2 underline'>
        <h1>Examples of Our Books</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8  m-4'>
            <div className='shadow-md items-center'>
               <img src="src/assets/Everything Is F_cked_ A Book About Hope by Mark Manson.jpeg" className='w-50 ml-8'  alt="" />
              
            </div>

            <div className='shadow-md items-center'>
               <img src="src/assets/The Book Thief.jpeg" className='w-50 ml-8'  alt="" />
              
            </div>

            <div className='shadow-md items-center'>
               <img src="src/assets/The Yogi's Bookshelf_ The Alchemist — Shut Up & Yoga.jpeg" className='w-50'  alt="" />
              
            </div>

            <div className='shadow-md items-center '>
               <img src="src/assets/John Green, John Green, John Green_.jpeg" className='w-50 ml-8'  alt="" />

            </div>

           

           

           
        </div>
       
    </div>
    
  )
}

export default Card