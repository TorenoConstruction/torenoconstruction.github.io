import React from 'react';
import './Cards.css';
import image from '../assets/project1.jpg';
import image2 from '../assets/project2.jpg';
import image3 from '../assets/project3.jpg';
import image4 from '../assets/project4.jpg';
import image5 from '../assets/project5.jpg';
import image6 from '../assets/project6.jpg';
import CardItem from './CardItem';

function Card() {
  return (
    <div className='cards'>
        <h1>Check out this epic destiantions</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src={image}
                        text='Explore the Amazon'
                        lable='Adventure'
                        path='/services'
                    />
                    <CardItem 
                        src={image2}
                        text='Explore the Amazon'
                        lable='Adventure'
                        path='/services'
                    />
                    </ul>
                    <ul className='cards__items'>
                    <CardItem 
                        src={image3}
                        text='Explore the Amazon'
                        lable='Adventure'
                        path='/services'
                    />
                    <CardItem 
                        src={image4}
                        text='Explore the Amazon'
                        lable='Adventure'
                        path='/services'
                    />
                    <CardItem 
                        src={image5}
                        text='Explore the Amazon'
                        lable='Adventure'
                        path='/services'
                    />
                    <CardItem 
                        src={image6}
                        text='Explore the Amazon'
                        lable='Adventure'
                        path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card