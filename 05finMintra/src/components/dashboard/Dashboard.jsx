import React from 'react'
import "../dashboard.css"

function Dashboard() {
  return (
    <div className='card-container'>

      <div className='child-card-container' >
        <div className='total-disbursment'>
          <h2>Total Disbursment</h2>
          <h1>Rs. 310435</h1>
        </div>

        <div id='total-collection' className='total-disbursment'>
          <h2>Total Collection</h2>
          <h1>Rs. 220035</h1>
        </div>
      </div>

      <div className='child-card-container-two'>
        <div className='collection-Card'></div>
        <div className='collection-Card'></div>
        <div className='collection-Card'></div>
      </div>

      <div className='child-card-container-three'>
        <div className='Customers-Overview'>
          <h3>Customers Overview</h3>
        </div>
        <div className='Today-Working-List'>
          <h3>Today-Working-List</h3>
        </div>
      </div>


      <div className='child-card-container-four'>
        <div className='Active-Customers'>
          <h3>Active Customers</h3>
        </div>
      </div>





    </div>
  )
}

export default Dashboard



// two box color #5882f0
//all box color and sidebar color #16142a
// body backgroung color #0c0d1f
// font color #fdfcf9