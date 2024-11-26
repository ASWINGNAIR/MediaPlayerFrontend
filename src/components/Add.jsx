import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../Services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {

  const [show, setShow] = useState(false);

  const[videoDetails,setVideoDetails]=useState({
      caption:"",
      Imgurl:"",
      emdedLink:""
    })
    console.log(videoDetails);
    

    const handleClose = () => {setShow(false);
    handleCancel()
    }
    const handleShow = () => setShow(true);

    const handleCancel=()=>{
      setVideoDetails({
        caption:"",
        Imgurl:"",
        emdedLink:""
      })
    }

    const handleAdd = async()=>{
      const {caption,Imgurl,emdedLink}=videoDetails

      if(!caption || !Imgurl || !emdedLink){
        toast.info('Please enter the form completely')
      }
      else{

        if(emdedLink.startsWith('https://youtu.be/')){
          //https://youtu.be/DZatDc_DBSU?si=gruNEEPa19Pt7QuX
          
          let link = `https://www.youtube.com/embed/${emdedLink.slice(17,28)}`
          console.log(link);

          const result=await addVideoApi({caption,Imgurl,emdedLink:link})
          console.log(result);

          if(result.status>=200 && result.status<300){
            toast.success('Video added successfully')
            handleClose()
            setAddStatus(result)
          }
          else{
            toast.error('Something went wrong')
            handleCancel()
          }
          
        }
        else{
          //https://www.youtube.com/watch?v=DZatDc_DBSU

          let link = `https://www.youtube.com/embed/${emdedLink.slice(-11)}`
          console.log(link);

          const result=await addVideoApi({caption,Imgurl,emdedLink:link})
          console.log(result);

          if(result.status>=200 && result.status<300){
            toast.success('Video added successfully')
            handleClose()
            setAddStatus(result)
          }
          else{
            toast.error('Something went wrong')
            handleCancel()
          }

        }
      }
    }

  return (
    <>
    <h5><span className='d-md-inline d-none'>Upload New Video</span> <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-3' /></h5>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <FontAwesomeIcon icon={faFilm} className='fa-2x me-2 text-warning'/>
          <Modal.Title className='text-warning'>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please fill the following details</p>
            <form className='border border-secondsry p-3 rounded'>
                <div className="mb-3">
                    <input type="text" value={videoDetails.caption} placeholder='Video Caption' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <input type="text" value={videoDetails.Imgurl} placeholder='Video Image' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,Imgurl:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <input type="text" value={videoDetails.emdedLink} placeholder='Video Url' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,emdedLink:e.target.value})}/>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer  position='top-center' theme="colored" autoClose={2000} />

    </>
  )
}

export default Add