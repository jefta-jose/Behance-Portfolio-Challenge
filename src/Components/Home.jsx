import "./Home.scss";
import bckimg from "../assets/background.jpg";
import chevron from "../assets/chevron-down.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="back-image">
        <img src={bckimg} alt="" />
      </div>
      <div className="home-details">
        <h1>Based in Kenya</h1>
        <h1>Am a Full Stack Web developer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laborum ratione impedit incidunt eius fugiat optio consectetur animi
          nihil asperiores similique mollitia tempora ad aperiam, qui amet
          voluptas cupiditate iure.
        </p>
        <button>view my works</button>
      </div>
      <button className="chevron-down">
        <img src={chevron} alt="" />
      </button>
      <div className="bottom-bar">
        <p>discuss your ideas</p>
        <p>enjoy the result</p>
        <p>realize your ideas</p>
        <p>discuss your ideas</p>
        <p>enjoy the result</p>
        <p>realize your ideas</p>
      </div>
      <div className="About">
        <div className="left-right">
          <div className="left">
            <h3>About Me</h3>
            <p className="about-det">
              You can't use up creativity
              <br /> The more you use. The
              <br /> you have.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
              est porro officiis odit consectetur eum reiciendis a praesentium
              nobis commodi excepturi corrupti animi rem tempore molestias,
              culpa pariatur, iusto totam? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Sequi, est porro officiis odit
              consectetur eum reiciendis a praesentium nobis commodi excepturi
              corrupti animi rem tempore molestias, culpa pariatur, iusto totam?
            </p>
          </div>

          <div className="right">
            <p className="about-det">
              Any type of discussion
              <br /> & Query
            </p>

            <a href="#">ndegwajeff4@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
