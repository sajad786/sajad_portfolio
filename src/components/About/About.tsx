import { Container } from "./styles";
import Sajadpic from "../../assets/sajadpic.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import androidStudioIcon from "../../assets/android-studio-icon.svg";
import xcode from "../../assets/Xcode.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          👋 Hi there! I'm a professional React Native developer with a keen eye for detail and a passion 
          for building mobile apps that make a real impact. With nearly 4 years of experience in the IT industry,
           and a strong focus on React Native throughout, I've had the opportunity to work on and maintain large-scale, complex mobile applications that blend robust functionality with seamless user experiences.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <h3>What I bring to the table:</h3>
          <ul style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            <li>
              <p>💡 Creative problem-solving with a focus on scalability.</p>
            </li>
            <li>
              <p>
                🎨 Pixel-perfect UI that balances beauty with functionality.
              </p>
            </li>
            <li>
              <p>🔄 Efficient, reusable code that stands the test of time.</p>
            </li>
          </ul>
          {/* <p>
            But my services go beyond just custom development - I'm also proficient in using CMS systems like WordPress and Shopify, making it easy for my clients to take control of their own websites and keep them up to date.</p> */}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I thrive on turning client visions into reality, keeping my codebase
            clean and optimized, and learning new technologies to stay at the
            cutting edge. Right now, I’m exploring TypeScript and testing
            frameworks to make my apps more robust and scalable.
          </p>
          <p>
            Let’s connect and bring your ideas to life with the power of React
            Native!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={xcode} alt="xcode" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={androidStudioIcon} alt="androidStudio" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={Sajadpic} alt="Sajad Hussain" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
