import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
      <Container className='mt-5'>
        <Row className='d-flex justify-content-center align-items-center'>
          <Col sm={12} md={6}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsa maxime, porro alias, quam totam qui cupiditate, repellendus corporis est corrupti aspernatur impedit rerum magnam illo ipsum enim architecto! Reiciendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quod rerum eveniet excepturi id perferendis vel. Reprehenderit quod, officia ipsum aliquam deserunt nulla, aut officiis minima unde tenetur, iste ipsa!</p>
          <Link to={'/Home'}><button className='btn btn-warning mt-4'>Get started</button></Link>
          </Col>

          <Col sm={12} md={6} className='d-flex justify-content-center'>
            <img src="https://cdn.prod.website-files.com/6420a365ce09cdc0a758acfc/6616e8a036e175c000a195a9_theta%20hz.png" alt="No image" className='w-50'/>
          </Col>
        </Row>
      </Container>

      <div className="container-fluid mt-5 mb-4">
        <div className="row">

          <div className="col-md-2"></div>

          <div className="col-md-8">
            <h4 className='text-center'>Features</h4>
            <div className="row">

              <div className="col-md-4">
              <Card style={{ width: '100%' }} className='p-3'>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" className='w-100' height={'300px'}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="col-md-4 mt-4 mt-md-0">
              <Card style={{ width: '100%' }} className='p-3'>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" className='w-100' height={'300px'}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="col-md-4 mt-4 mt-md-0">
              <Card style={{ width: '100%' }} className='p-3'>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" className='w-100' height={'300px'} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
              </div>

            </div>
          </div>

          <div className="col-md-2"></div>

        </div>
      </div>

      <div className="container  d-flex justify-content-center align-items-center">
        <div className='border border-light mt-5'>
          <div className="row">
            <div className="col-md-6">
              <h4 className='text-warning m-4 '>Simple fast and PowerFul</h4>
              <p className='ps-4'><span className='fs-5 '>Play Everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et eaque temporibus corporis id adipisci eum incidunt dolores voluptatibus.</p>
              <p className='ps-4'><span className='fs-5'>Play Everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et eaque temporibus corporis id adipisci eum incidunt dolores voluptatibus.</p>
              <p className='ps-4 mb-4'><span className='fs-5'>Play Everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et eaque temporibus corporis id adipisci eum incidunt dolores voluptatibus.</p>
            </div>

            <div className="col-md-6">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/roz9sXFkTuE?si=xov_s4kSpYtONHgT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className=' m-4'></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landingpage