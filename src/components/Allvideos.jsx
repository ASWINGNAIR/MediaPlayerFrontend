import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideoApi, updateCategoryApi } from '../Services/allApi'


function Allvideos({addStatus , setCategoryVDStatus}) {

  const [video , setVideo] = useState([])

  const [deleteStatus , setDeleteStatus] = useState({})
  

  const getallVideo =async()=>{
    const result = await getVideoApi()
    // console.log(result);

    setVideo(result.data)
  }

  console.log(video);
  

  useEffect(()=>{
    getallVideo()
  },[addStatus , deleteStatus ])

  const dragOver=(e)=>{
    //reload
    e.preventDefault()
  }

  const videoDrop= async(e)=>{
    const {videoDetails,categoryDetails} = JSON.parse(e.dataTransfer.getData("Details"))
    console.log(videoDetails , categoryDetails);
    
    let result = categoryDetails.allVideo.filter((item)=>item.id!=videoDetails.id)

    const reqBody = {
      category:categoryDetails.category,
      allVideo:result,
      id:categoryDetails.id
    }

    const response = await updateCategoryApi(categoryDetails.id , reqBody)
    console.log(response);

    if(response.status>=200 && response.status<300){
      setCategoryVDStatus(result)
    }
    
  }

  return (
    <>
    <h4 className='mt-5'>All Videos</h4>


      {video?.length > 0 ?
        <div className="container-fluid mt-5" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
          <div className="row">
            {video?.map((item) => (
              <div className="col-md-3 p-2" >
                <Videocard videoDetails={item} setDeleteStatus = {setDeleteStatus} />
              </div>
            ))}

        </div>
       </div>

      :

    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <img src="https://wallpapers.com/images/high/empty-shopping-cart3-d-render-v4svsi96bnmdmh0v.png" alt="No image" className='w-100 ' />
          <h5 className='text-center text-danger mt-4'>No Video Added Yet....</h5>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>}
    </>
  )
}

export default Allvideos