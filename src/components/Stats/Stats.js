'use client'
import React from 'react';
import Counter from '@/components/Stats/Counter.js';
import '@/components/Stats/Stats.css';

export default function Stats() {

  return (
    <div className="stats">
      <div className="stat-cards-outer">
        <div className="stat-cards-inner">
          <Counter target={96} />
          <span >Success Rate</span>
        </div>
        <div className="stat-cards-inner">
          <Counter target={89} />
          <span >CSAT score</span>
        </div>
        <div className="stat-cards-inner">
          <Counter target={4} />
          <span >Revision Rate</span>
        </div>
      </div>
      <div className="stats-text">
        <div style={{ WebkitTextStroke: '0.3px white' }}>THINK</div>
        <div style={{ color: 'white', opacity: '0.5' }}>&#9679; </div>
        <div style={{ WebkitTextStroke: '0.8px white' }}>TARGET</div>
        <div style={{ color: 'white', opacity: '0.8' }}>&#11044; </div>
        <div style={{ WebkitTextStroke: '2.3px white' }}>TRANSFORM</div>
      </div>
      <p style={{fontWeight: 'bolder', color: 'white', fontSize: 'medium',}}>DIGITAL BRAND ESTABLISHMENT</p>
    </div>
  );
}
