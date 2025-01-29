import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si";

export default function Card({ number }) {
  let IconComponent;
  let label;
  let iconColor;

  switch (number) {
    case 1:
      IconComponent = FaReact;
      label = "React";
      iconColor = "#61dafb"; // React Blue
      break;
    case 2:
      IconComponent = SiNextdotjs;
      label = "Next.js";
      iconColor = "black"; // Next.js black
      break;
    case 3:
      IconComponent = SiJavascript;
      label = "JavaScript";
      iconColor = "#f7df1e"; // JavaScript Yellow
      break;
    case 4:
      IconComponent = SiMongodb;
      label = "MongoDB";
      iconColor = "#47A248"; // MongoDB Green
      break;
    case 5:
      IconComponent = SiExpress;
      label = "Express.js";
      iconColor = "gray"; // Express Gray
      break;
    case 6:
      IconComponent = FaNodeJs;
      label = "Node.js";
      iconColor = "#339933"; // Node.js Green
      break;
    case 7:
      IconComponent = FaHtml5;
      label = "HTML5";
      iconColor = "#E34F26"; // HTML5 Orange
      break;
    case 8:
      IconComponent = FaCss3Alt;
      label = "CSS3";
      iconColor = "#1572B6"; // CSS3 Blue
      break;
    default:
      IconComponent = null;
      label = "Unknown";
      iconColor = "black";
      break;
  }

  return (
    <div className="card">
      {IconComponent && (
        <div className="icon-container">
          <IconComponent style={{ color: iconColor }} />
        </div>
      )}
      <div>
        <h1>{label}</h1>
      </div>
    </div>
  );
}
