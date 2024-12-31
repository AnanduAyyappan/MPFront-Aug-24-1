import React, { useState } from 'react'
import Add from '../component/Add'
import { Link } from 'react-router-dom'
import View from '../component/View'
import Category from '../component/Category'
import { Modal } from 'react-bootstrap'
Modal
Category
View
const Home = () => {
  const[deleteResponseFromView,setDeleteResponseFromView]=useState("")
  const[deleteResponseFromCategory,setDeleteResponseFromCategory]=useState("")
  const[addResponseFromHome,setAddResponseFromHome]=useState("")

  return (
    <div style={{paddingTop:'100px'}}>
      <div className='d-flex justify-content-between container mb-5'>
        <Add setAddResponseFromHome={setAddResponseFromHome}/>
        <Link to={'/history'}>Watch History</Link>
      </div>
      <div  className='container-fluid my-5 row'>
        <div className='col-6'>
          <h3>All videos</h3>
          <View setDeleteResponseFromView={setDeleteResponseFromView} deleteResponseFromCategory={deleteResponseFromCategory} addResponseFromHome={addResponseFromHome}/>
        </div>
        <div className='col-lg-6'>
          <Category deleteResponseFromView={deleteResponseFromView} setDeleteResponseFromCategory={setDeleteResponseFromCategory}/>
        </div>
      </div>
    </div>
  )
}

export default Home