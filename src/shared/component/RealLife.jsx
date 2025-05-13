import React from "react";
import trip from "../../assets/images/RealLife/TripPlanner.png";
import Outdoor from "../../assets/images/RealLife/Outdoor.png";
import sun from "../../assets/images/RealLife/sun.svg";
import flow from "../../assets/images/RealLife/flow.svg";
import tracker from "../../assets/images/RealLife/tracker.png";
import lamp from "../../assets/images/icons/lamp.svg";
import calender from "../../assets/images/RealLife/calender.svg";
import cooking from "../../assets/images/RealLife/cooking.png";
import sensory from "../../assets/images/RealLife/sensory.png";
import community from "../../assets/images/RealLife/community.png";
import custom from "../../assets/images/RealLife/custombuilder.png";
import lampin from "../../assets/images/lamp.png";
import info from "../../assets/icon/info.svg";

const Card = ({ title, img, children }) => (
  <div className="creative-card">
    <h5 className="m-0 font-semibold text-base text-center flex justify-center items-center gap-2">
      {title}
      <img src={info} alt="info" />
    </h5>
    {img && <img src={img} alt="" className="m-2" />}
    {children}
  </div>
);

const ListItem = ({ children, extraClass = "" }) => (
  <>
    <li className={`creative-list ${extraClass}`}>{children}</li>
    <br />
  </>
);

export default function RealLife() {
  return (
    <>
      <div className="structured">
        <h2 className="font-semibold m-0 text-white">Real Life Learning Path</h2>
        <p className="m-0 creative-text">
          Hands-on projects, crafts, and playful learning experiences that inspire curiosity, creativity, and joy.
        </p>
      </div>

      <div className="grid mt-4 gap-4">
        <Card title="Field Trip Planner" img={trip}>
          {/* <p className="creative-paragraph">
            Suggests local or thematic field trip ideas tied to subjects or interests, with a printable guide to turn the outing into a lesson.
          </p>
          <br />
          <ListItem>Includes pre-and post-trip writing/discussion prompts</ListItem>
          <ListItem>Optional "Field Trip Reflection Page" for portfolios</ListItem> */}
        </Card>

        <Card title="Outdoor Learning Prompt" img={Outdoor}>
          {/* <p className="creative-paragraph">
            A simple, beautiful lesson that gets kids outside—nature walks, weather tracking, observation journals, garden math, etc.
          </p>
          <br />
          <p className="creative-paragraph flex gap-2">
            <img src={sun} alt="" className="mb-4" />
            Seasonal options available
          </p>
          <p className="creative-paragraph flex gap-2 mb-8">
            <img src={flow} alt="" className="mb-4" />
            Great for morning rhythm or calming afternoon flow
          </p> */}
        </Card>

        <Card title="Life Skills Tracker" img={tracker}>
          {/* <p className="creative-paragraph">
            Lessons that teach practical independence—from doing laundry to measuring ingredients, budgeting, or planning a meal
          </p>
          <br />
          <p className="creative-paragraph flex gap-2">
            <img src={lamp} alt="" className="mb-6" />
            Aligned with real-world standards & confidence-building
          </p>
          <p className="creative-paragraph flex gap-2 mb-8">
            <img src={calender} alt="" className="mb-4" />
            Printable tracker included
          </p> */}
        </Card>

        <Card title="Cooking & Math Projects" img={cooking}>
          {/* <p className="creative-paragraph">
            Turn everyday recipes into math lessons using measurement, multiplication, and sequencing.
          </p>
          <br />
          <ListItem>Double a pancake recipe and measure ingredients</ListItem>
          <ListItem>Calculate cost per serving for a family dinner</ListItem>
          <br />
          <br /> */}
        </Card>
{/* 
        <div className="real-life-ideal">
          <h4 className="m-0 font-semibold text-lg text-center">💡 Ideal For:</h4>
          <br />
          <ListItem>Kids who are imaginative, dramatic, or deeply thoughtful</ListItem>
          <ListItem>Families who value emotional learning, creativity, and voice</ListItem>
          <ListItem>Learners who need alternative ways to process what they’ve learned</ListItem>
          <ListItem>Parents who want to build confidence without pushing perfection</ListItem>
        </div> */}

        <Card title="Real-Life Sensory" img={sensory}>
          {/* <p className="creative-paragraph">
            Use your senses to connect, calm, and explore.
          </p>
          <br /> */}
        </Card>

        <Card title="Community Connection Ideas" img={community}>
          {/* <p className="creative-paragraph">
            Help your child understand their community through observation, kindness, and outreach.
          </p>
          <br />
          <ListItem>Interview a community helper and write about their role</ListItem>
          <ListItem>Create thank-you cards for local volunteers</ListItem>
          <br />
          <br /> */}
        </Card>

        <Card title="Custom Builder" img={custom} />
      </div>

      <div className="note-message p-4 bg-white flex m-4 border-round-3xl justify-content-center">
        <img src={lampin} alt="lamp" className="lampin" />
        <h3 className="Note">
          Every routine holds a lesson — just add intention. Try the Life Skill Tracker to generate life long skills
        </h3>
      </div>
    </>
  );
}
