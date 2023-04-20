import "../styles/About.css";
import m5image from "../assets/m5image.png";

export default function About() {
  return (
    <div className="about">
      <div className="about__title">
        <h2>About the device </h2>
        <p>
          Our project aims to provide a cost-effective solution for people who
          commonly faint due to medical conditions such as diabetes, low blood
          pressure, and dehydration. The Syncope Detector is a portable handheld
          device that uses the gyroscope implemented in the M5 Stack to detect
          changes in angles and trigger an alarm if fainting is detected. When
          the system detects fainting, it will produce a specific message to
          provide procedural instructions to those around the person who has
          fainted. Additionally, an email sender will notify specific persons,
          such as family members, to provide further assistance. Our goal is to
          create a reliable, accurate, and user-friendly system that can
          potentially save lives and reduce the risk of injury due to fainting.
          With this project, we hope to provide an accessible solution to a
          common problem that affects many people.
        </p>
      </div>
      <div className="about__image">
        <img src={m5image} alt="alt" />
      </div>
    </div>
  );
}
