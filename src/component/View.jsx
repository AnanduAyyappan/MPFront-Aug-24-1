import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, saveVideoAPI, updateCategoryAPI } from '../services/allAPI'


const View = (addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView) => {

const  [deleteVideoResponseFromVideoCard,setDeleteVideoResponseFromVideoCard]=useState('')

const [allVideos,setAllVideos]=useState([])

  useEffect(()=>{
       getAllVideos()
  },[addResponseFromHome,deleteVideoResponseFromVideoCard,deleteResponseFromCategory])
  console.log(`allVideos: ${allVideos}`);
  
const getAllVideos= async()=>{
try{
const result=await getAllVideosAPI()
setAllVideos(result.data)
if(result.status>=200 && result.status<300){
console.log(result.data);

}else{
  console.log("API call failed");
  
}

      
  }catch(err){
    console.log(err);
    
  }
}

const dragOverView=(e)=>{
  e.preventDefault()
}

const categoryVideoDragOverView= async (e)=>{
  console.log("inside categoryVideoDragOverView");
  // e.dataTransfer.getData("dragData")
  const {video,categoryDetails}=JSON.parse(e.dataTransfer.getData("dragData"))
  console.log(video,categoryDetails);
  const updateCategoryVideoList=categoryDetails?.allVideos?.filter(item=>item.id!=video?.id)
  const updateCategory={...categoryDetails,allVideos:updateCategoryVideoList}
  console.log(updateCategory);
  
  //updating the category by delete video from category
 const result=await updateCategoryAPI(updateCategory)
  //use statelifting to communicate data from view to category
setDeleteResponseFromView(result)
  //use api to upload video
await saveVideoAPI(video)
  //call getAllVideos function
  getAllVideos()
}


  return (
    <>
    <Row droppable={true} onDragOver={dragOverView} onDrop={e=>categoryVideoDragOverView(e)}>
      {
        allVideos?.length>0?
        allVideos.map(video=>(
    <Col key={video?.id}className='mb-2 me-2' sm={12} md={6} lg={4}>
      <VideoCard  setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displayData={video}/>
      </Col>
      ))
      :<div className='fw-bolder text-danger fs-5'>No videos are uploaded</div>
    }
    </Row>
    </>
  )

}

export default View