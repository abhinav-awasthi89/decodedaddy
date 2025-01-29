import React from "react";
import styles from "./TechStack.css"; // Assuming you have a CSS module for the component
import Card from "./Card.js";

const TechStack = () => {
  return (
    <div className="techStack">
      <p
        style={{
          fontWeight: "bolder",
          color: "white",
          fontSize: "medium",
          marginBottom: "1%",
        }}
      >
        TECH STACK? ABSOLUTELY
      </p>
      <div className="tech-cards-outer">
        <div className="tech-cards">
          <Card number={1} />
          <Card number={2} />
          <Card number={3} />
          <Card number={4} />
        </div>
        <div className="tech-cards">
          <Card number={5} />
          <Card number={6} />
          <Card number={7} />
          <Card number={8} />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
