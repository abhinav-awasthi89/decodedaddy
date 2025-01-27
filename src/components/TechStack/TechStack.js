import React from 'react';
import styles from './TechStack.css'; // Assuming you have a CSS module for the component
import Card from './Card.js';

const TechStack = () => {
  return (
    <div className='techStack'>
        <p style={{fontWeight: 'bolder', color: 'white', fontSize: 'medium', marginBottom: '1%'}}>TECH STACK? ABSOLUTELY</p>
        <div className='tech-cards-outer'>
          <div className='tech-cards'>
              <Card key={1}/>
              <Card key={2}/>
              <Card key={3}/>
              <Card key={4} className='three'/>
              {/* <Card /> */}
          </div>
          <div className='tech-cards'>
              {/* <Card /> */}
              <Card key={1}/>
              <Card key={2}/>
              <Card key={3}/>
              <Card key={4} className='three'/>
          </div>
        </div>
    </div>
  );
};

export default TechStack;
