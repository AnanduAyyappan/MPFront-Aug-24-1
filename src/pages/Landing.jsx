import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music.jpg'
import feat1 from '../assets/feature1.jpg'
import feat2 from '../assets/feature2.jpg'
import feat3 from '../assets/feaure3.jpg'
import { Card } from 'react-bootstrap'
Card

const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      <div className='row align-item-center'>
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, cum! Quas unde tempora nihil sequi iure veritatis illum ab impedit commodi, dolor repellat! Soluta pariatur sequi architecto, minima sint distinctio?
            Explicabo quaerat sapiente modi non? Natus atque ipsam dolor autem doloribus dolore aliquid eveniet eaque aperiam quae debitis voluptates quod dolorum enim sunt quis velit neque ipsum, distinctio omnis quidem.
          </p>
          <Link to={'/home'} className='btn btn-info'>Get started</Link>
        </div>
        <div className='col-lg-2'></div>
                {/* Landing image*/}
        <div className='col-lg-3'>          
          <img src={landingImg} className='img-fluid ms-5' alt='noimage'/>
        </div>
        {/* */}
        </div>
        {/*feature */}
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>
          <div className='col-lg-4'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>My Playlist</Card.Title>
        <img src={feat1} className='img-fluid' alt='noimage'/>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className='col-lg-4'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Famous Playlist</Card.Title>
        <img src={feat2} className='img-fluid' alt='noimage'/>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className='col-lg-4'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Create Another</Card.Title>
        <img src={feat3} className='img-fluid' alt='noimage'/>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
        {/*last */}
        <div className='my-5 row align-items-center border rounded p-5'>
          <div className="col-lg-5">
            <h3 className='text-warning'>Simple, Fast and Powerful</h3>
            <p style={{textAlign:"justify"}}><span className='fs-5 fw-bolder'>Play Everything</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque quisquam illo odit aliquam vitae architecto pariatur ea eos mollitia dignissimos fugiat quod reprehenderit 
            </p>
            <p style={{textAlign:"justify"}}><span className='fs-5 fw-bolder'>Categorise Videos</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque quisquam illo odit aliquam vitae architecto pariatur ea eos mollitia dignissimos fugiat quod reprehenderit 
            </p>
            <p style={{textAlign:"justify"}}><span className='fs-5 fw-bolder'>Managing History</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque quisquam illo odit aliquam vitae architecto pariatur ea eos mollitia dignissimos fugiat quod reprehenderit </p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="789" height="444" src="https://www.youtube.com/embed/2FmvtfzLtm8" title="The best beaches in Goa | Agonda &amp; Palolem | Kyat Girl 😎" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='img-fluid'></iframe>
          </div>
        </div>
    </div>
  )
}

export default Landing