import React from 'react'
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './Contact.css'

export const Contact = () => {
  return (
    <div className='contactContainer'>
      <div className='contactInfo'>
        <div className='phoneContact'>
          <PhoneOutlined style={{fontSize: '24px'}}/>
          <span className='phone'>037899999</span>
        </div>
        <div className='emailContact'>
          <MailOutlined style={{fontSize: '20px'}} />
          <span className='email'>simple@gmail.com</span>
        </div>
        <div className='addressContact'>
          <EnvironmentOutlined style={{fontSize: '20px'}} />
          <span className='address'>5 District HoChiMinh VietNam</span>
        </div>
      </div>
      <div className='about'>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio aspernatur reprehenderit sit libero repudiandae repellat dolores laudantium, deleniti nostrum perspiciatis!
        </p>
      </div>
    </div>

  )
}
