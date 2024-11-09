import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                {/* <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>BiteTrucks The Ecoomenrce Application</h3>
              <p>
                implemented MapView and showed the trucks moving on map , based
                on vendor status if closed , onMove . implemented sockets to get
                the updated lat long of vendors based on the change of vendors
                lat longs. Bite trucks application designed for food and
                delivery .
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Javascript</li>
                <li>Android studio | Xcode </li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                {/* <a href="https://github.com/CodeVinayak/AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a> */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.sabroson.orders"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit play store" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>
                Sabroson User - Eccomerce application | Delivery & Ride flow
              </h3>
              <p>
                This application is developed in React native and is available
                on both playstore and app store. The purpose of this application
                to meet the needs of users in terms of grocerry Delivery, food
                delivery or even ride booking for trip.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Javascript</li>
                <li>Android studio | Xcode </li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a
                  href=""
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a
                  href=""
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Perucabs - taxi Flow application</h3>
              <p>
              Pick and Drop flow ;- Designed for customers and drivers . implemented razorPay payment integration
              Deployed application on play store and app store connect.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Javascript</li>
                <li>Android studio | Xcode </li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>
              RoyoOrders / RoyoDispatcher(Product)
              </h3>
              <p>
              Multiple Vendor Modes : The royoOrders app supports various vendor modes, providing a versatile experience to customers: like Takeaway, Dine-in, Appointment, P2P, book and ride etc
              RoyoDispatcher has multiple functions like Order Assignment, Driver Acceptance, Navigation, Order Details, Real-time Tracking, Communication etc
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Javascript</li>
                <li>Android studio | Xcode </li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Tailery - House constructional Mamagenmet </h3>
              <p>
              This application enables both group and one-on-one messaging for users involved in specific house construction projects, with real-time message tracking powered by sockets. The dashboard provides a clear view of the various project stages, helping users stay informed on progress. Additionally, the admin can post updates, which other users can engage with through likes and comments.
              </p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>React Native</li>
                <li>Javascript</li>
                <li>Android studio | Xcode </li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>xborne - Ride and Delivery Flow</h3>
              <p>
                 Application was mainly develpoed for Delivery and Ride flow. Google map is implented for real time tracking of the Driver for a delivery and trip. payments gateways like RazorPay - stripe implemeted. 
              </p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>React Native</li>
                <li>Javascript</li>
                <li>Android studio | Xcode </li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
