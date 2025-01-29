"use client"

import '@/components/Protocols/Protocols.css';
import React, { useState, useEffect } from "react"

const Protocols = ({ width = 900, height = 700 }) => {
  const steps = [
    "Research",
    "Low Fidelity Design",
    "Revisions",
    "High Fidelity Design",
    "Revision",
    "Development",
    "Testing",
    "Launch",
  ]

  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const calculateControlPoint = (startAngle, endAngle) => {
    const midAngle = (startAngle + endAngle) / 2
    const radius = width * 0.33
    return {
      x: width / 2 + Math.cos(midAngle) * radius,
      y: height / 2 + Math.sin(midAngle) * radius,
    }
  }

  return (
    <div id="aboutUs" className="protocol">
      <div id = 'protocoltText'>
      <p style={{ fontWeight: 'bolder', color: 'white', fontSize: 'medium' }}>OUR PROTOCOL</p>
      </div>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{paddingTop: '2em'}}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {steps.map((step, index) => {
          const angle = (index / steps.length) * Math.PI * 2
          const x = width / 2 + Math.cos(angle) * (width * 0.22)
          const y = height / 2 + Math.sin(angle) * (height * 0.4)
          const isActive = index === activeStep

          return (
            <React.Fragment key={index}>
              {index < steps.length - 1 &&
                (() => {
                  const nextAngle = ((index + 1) / steps.length) * Math.PI * 2
                  const nextX = width / 2 + Math.cos(nextAngle) * (width * 0.22)
                  const nextY = height / 2 + Math.sin(nextAngle) * (height * 0.4)
                  const control = calculateControlPoint(angle, nextAngle)
                  return (
                    <path
                      d={`M${x} ${y} Q${control.x} ${control.y} ${nextX} ${nextY}`}
                      fill="none"
                      stroke={isActive ? "#ffffff" : "#a0a0a0"}
                      strokeWidth="2"
                      markerEnd={`url(#arrowhead${isActive ? "Active" : ""})`}
                    />
                  )
                })()}
              <circle
                cx={x}
                cy={y}
                r={width * 0.067}
                fill="#f0f0f0"
                stroke={isActive ? "#ffffff" : "#a0a0a0"}
                strokeWidth="3"
                filter={isActive ? "url(#glow)" : ""}
                style={{
                  transition: "all 0.3s ease-in-out",
                  transform: isActive ? "scale(1.1)" : "scale(1)",
                  transformOrigin: `${x}px ${y}px`,
                }}
              />
              <foreignObject x={x - width * 0.061} y={y - height * 0.06} width={width * 0.122} height={height * 0.12}>
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: isActive ? "#000000" : "#333333",
                    fontSize: `${width * 0.013}px`,
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.3s ease-in-out",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {step}
                </div>
              </foreignObject>
            </React.Fragment>
          )
        })}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#a0a0a0" />
          </marker>
          <marker id="arrowheadActive" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ffffff" />
          </marker>
        </defs>
      </svg>
      </div>
    </div>
  )
}

export default Protocols

