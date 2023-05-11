import React, { useState } from 'react'
import './Cards.css'

function Cards () {
    const[toggle, setToggle] = useState(false)
  
    const products = [
        {name:'Used: Canon 1300D with 18-55mm Lens',price:'R9,000', image:'https://images.unsplash.com/photo-1613235577937-9ac3eed992fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'},
        {name:'Canon EOS 4000D with Lens 18-55mm',price:'R12,000', image:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbm9uJTIwY2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
        {name:'Canon EOS 6D DSLR Camera (Body only)  (Black)',price:'R7,500', image:'https://images.unsplash.com/photo-1488684430052-f2d92fb178c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtZXJhJTIwY2Fub258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        {name:'Used: Canon 750D with 18-55mm STM lens',price:'R10,000', image:'https://images.unsplash.com/photo-1526413115846-4ae102f384d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
        {name:'CANON EOS REBEL T7 DSLR VIDEO CAMERA WITH 18-55MM LENS - BLACK',price:'R8,000', image:'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbWVyYSUyMGNhbm9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
        {name:'Used: Sony Alpha a5100',price:'R7,500', image:'https://images.unsplash.com/photo-1525288953762-38996f06cf0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtZXJhJTIwY2Fub24lMjBTb255fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
        {name:'Used: Sony Cyber-shot DSC-RX100 III Digital Camera',price:'R8,500',image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhJTIwY2Fub24lMjBTb255fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
        {name:'Sony a6400 Mirrorless Camera with 18-135mm Lens',price:'R10,700',image:'https://images.unsplash.com/photo-1615747873253-4c4ad5633311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbm9uJTIwY2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
        

    ]
    return (
      <div>
        <div class='grid-container'>
  
          {
            products.map(product => {
              return (
                <div clasNames="card">
                  <img src={product.image} class="card-img-top" />
                  <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <h3>{product.price}</h3>
                    <a href="#" class="btn btn-primary">Go Cash</a>
                  </div>
                </div>
              )
  
            })
          }
        </div>
      </div>
    )
  }

export default Cards