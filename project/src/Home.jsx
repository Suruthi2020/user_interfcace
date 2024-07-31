import React, {useState} from 'react'
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {faCircleDot} from '@fortawesome/free-solid-svg-icons'

import image1 from './assests/logo1.png';
import image2 from './assests/banner-1.png';
import image3 from './assests/banner-1-1.png';
import image4 from './assests/product-1.png';
import image5 from './assests/product-2.png';
import image6 from './assests/product-3.png';
import image7 from './assests/product-4.png';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');
function Home() {

  const toggleNavbar = function () {
    var items = document.querySelector('.togglebutton');
    if (items.style.display === 'flex') {
        items.style.display = 'none';
    } else {
        items.style.display = 'flex';
    }
}


const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    devicesManaged: '',
    comments: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validateEmail = (email) => {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!email) {
      return 'Email ID required';
    } 
    else if (!gmailPattern.test(email)) {
      return 'Please fill in a correct Gmail address';
    } else {
      return '';
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    const errorMsg = validateEmail(email);
    setEmailError(errorMsg);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validateEmail(email);
    if (!errorMsg) {
      setIsModalOpen(true);
    } else {
      setEmailError(errorMsg);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!formData.businessEmail) {
      errors.businessEmail = 'Business email is required';
    }
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted with data:', formData);
      setIsModalOpen(false);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
       <header className='head'>
      <div className="headmain">
      <img src={image1} alt={"err"} height={'92px'} width={'191px'} />
      <div className="fnav">
      <button className='hamburger' onClick={toggleNavbar}>☰</button>
      <div className="togglebutton" >
      <button className="closeButton" onClick={toggleNavbar}>✕</button>
     <div className='nav1'>
     <Link className='nav' to='#' >Product <span><FontAwesomeIcon icon={faAngleDown} /></span></Link>
          <Link className='nav' to='#'>Pricing</Link>
          
          <Link className='nav' to='#'>Company <span><FontAwesomeIcon icon={faAngleDown} /></span></Link>
        
          <Link className='nav' to='#' >Why QUANTEM?</Link>
          
     </div>
     <div className="rnav">
    <div className='navbtn'>
          <button id='btn1'>SCHEDULE DEMO</button>
          <button id='btn2'>TRY FOR FREE</button>
        </div>
      </div>
      </div>
      </div>
      
    </div>
   </header>

   <body>

    <section className='mainsec1'>
    <div className='moto'>
        <p id='title'>Remote Device Management Platform Built for Future</p>
        <p id='title1'>Everything you need to manage & secure your mission critical devices. <span id='sbold'> Modern MDM Platform.</span></p>
   
        <div>
      <form className='eform' onSubmit={handleEmailSubmit}>
        <div>
          <input id='eid1' placeholder='Enter your work mail'
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <button id='freebtn' type="submit"> START FREE TRIAL</button>
      
       
      </form>
      <section className='bulletins'>
        <div>
        <p  className='bullet'><FontAwesomeIcon icon={faCircleDot}   size="sm"/> No credit card required</p>
        </div>        
        <div>
        <p className='bullet'><FontAwesomeIcon icon={faCircleDot}   size="sm"/> Easy set-up</p>
        </div>
        <div>
        <p className='bullet'><FontAwesomeIcon icon={faCircleDot}  size="sm"/>Highly Secure</p>
        </div>
        </section>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Second Form"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <form className='modalform' onSubmit={handleFormSubmit}>
          <section className='flname'>
          <div>
            <label className='bnames'>First Name</label>
            <br />
            <input className='inpfeild' placeholder='first name'
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {formErrors.firstName && <p style={{ color: 'red' }}>{formErrors.firstName}</p>}
          </div>
          <div id='lastname'>
            <label className='bnames'>Last Name </label>
            <br />
            <input className='inpfeild' placeholder='last name'
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          </section>
          <section className='bdname'>
          <div>
            <label className='bnames'>Business Email</label>
            <br />
            <input className='inpfeild' placeholder='Business Email'
              type="email"
              name="businessEmail"
              value={formData.businessEmail}
              onChange={handleInputChange}
            />
            {formErrors.businessEmail && <p style={{ color: 'red' }}>{formErrors.businessEmail}</p>}

          </div>
          <div id='devicemgmt'>
            <label className='bnames'>Devices Managed</label>
            <br />
            <input className='inpfeild' placeholder='Devices Managed'
              type="text"
              name="devicesManaged"
              value={formData.devicesManaged}
              onChange={handleInputChange}
            />
          </div>
          </section>
          <div id='comments'>
            <label className='bnames'>Comments</label>
            <br />
            <textarea id='txtarea'
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button id='lbtn' type="submit">Submit</button>

          <p id='lpara'>
            By submitting your information, you agree to be <br /> contacted by a Quantem representative
          </p>
        </form>
      </Modal>
    </div>

    </div>   
    <div className='qman'>
        <img className='banner1' src={image2} alt={'err'} height={'550px'} width={'500px'} />
        <img  className='banner1-1' src={image3} alt={'errr'} height={'150px'} width={'200px'} />
        
    </div>
   </section>

   <section className='mainsec2'>
    <div className='segments' id='segment1'>
      <p className='heading'>Modern Device <br /> Management</p>
    <img className='blocks' src={image4} alt={'err'} width={'200px'} height={'300px'} />
    <div className='thought'>
      <p className='paragraph'>
      Simple interface, powerful automation, and frictionless experiences. Your all in one device fleet management platform.
      </p>
      <button className='quotebtn'>Quantem in action</button>
    </div>
    </div>
    <div className='segments' id='segment2'>
    <p className='heading'>Application Management</p>
    <img className='blocks' src={image5} alt={'err'}  width={'200px'} height={'300px'} />
    <div className='thought1'>
      <p className='paragraph'>
      No matter the app or patch management Quantem does it with the push of a button.
      </p>
      <button className='quotebtn1'>Quantem in action</button>
    </div>
    </div>
    <div className='segments' id='segment3'>
    <p className='heading'>Kiosk Solution</p>
    <img className='blocks' src={image6} alt={'err'}  width={'200px'} height={'300px'} />
    <div className='thought2'>
      <p className='paragraph'>
      Lockdown any device to Single application or specific purpose. Convert off-the shelf device to Kiosk in minutes.
      </p>
      <button className='quotebtn'>Quantem in action</button>
    </div>
    </div>
    <div className='segments' id='segment4'>
    <p className='heading'> Work-profile / BYOD</p>
    <img className='blocks' src={image7} alt={'err'}  width={'200px'} height={'300px'} />
    <div className='thought3'>
      <p className='paragraph'>
      Enterprise grade data security and ultimate employee privacy under one device.
      </p>
      <button className='quotebtn1'>Quantem in action</button>
    </div>
    </div>

   </section>
   </body>
    </>
  )
}

export default Home