import React from "react";
import journal from "../../assets/images/Expression/journal.png";
import rainbow from "../../assets/images/Expression/rainbow.svg";
import flow from "../../assets/images/RealLife/flow.svg";
import poetry from "../../assets/images/creative/poetry.png";
import pencil from "../../assets/images/creative/pencil.svg";
import flower from "../../assets/images/creative/flower.svg";
import speech from "../../assets/images/RealLife/Speech.png";
import audio from "../../assets/images/Expression/audio.png";
import Headphone from "../../assets/images/Expression/Headphone.svg";
import colorfilter from "../../assets/images/icons/colorfilter.svg";
import character from "../../assets/images/Expression/charactter.png";
import facemask from "../../assets/images/Expression/facemask.svg";
import colorpallete from "../../assets/images/Expression/colorpallete.svg";
import custom from "../../assets/images/RealLife/custombuilder.png";
import lampin from "../../assets/images/lamp.png";

const Card = ({ title, img, children }) => (
  <div className="creative-card">
    <h5 className="m-0 font-semibold text-base text-center">{title}</h5>
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

export default function Expression() {
  return (
    <>
      <div className="structured">
        <h2 className="font-semibold m-0 text-white">
          Expression Learning Path
        </h2>
        <p className="m-0 creative-text">
          Hands-on projects, crafts, and playful learning experiences that
          inspire curiosity, creativity, and joy.
        </p>
      </div>

      <div className="grid mt-4 gap-4">
        <Card title="Journal Prompt Pack" img={journal}>
          {/* <p className="creative-paragraph">
            Reflective prompts designed to build emotional awareness, gratitude,
            and communication- great for morning time or winding down.
          </p>
          <br />
          <p className="creative-paragraph flex gap-2">
            <img src={rainbow} alt="" className="mb-4" />
            Includes silly, deep, and observational options
          </p>
          <p className="creative-paragraph flex gap-2">
            <img src={flow} alt="" className="mb-5" />
            Includes silly, deep, and observational options
          </p> */}
        </Card>

        <Card title="Journal Prompt Pack" img={poetry}>
          {/* <p className="creative-paragraph">
            Bite-sized poetry lessons + templates - from acrostic to haiku to
            free verse.
          </p>
          <br />
          <p className="creative-paragraph flex gap-2">
            <img src={pencil} alt="" className="mb-4" />
            Choose silly, emotional, or descriptive tones
          </p>
          <br />
          <p className="creative-paragraph flex gap-2">
            <img src={flower} alt="" className="mb-8" />
            Add illustrations, recite aloud, or share
          </p> */}
        </Card>

        <Card title="Speech & Debate Challenge" img={speech}>
          {/* <p className="creative-paragraph">
            Learner chooses a topic and gets a mini lesson on how to share their
            point of view. Includes outlines, persuasive writing starters, and
            speaking tips
          </p>

          <ListItem extraClass="mt-4">
            Helps build confidence + structure
          </ListItem>
          <ListItem> Good for kids who love to talk (or argue 🙂)</ListItem> */}
        </Card>

        <Card title="Podcast or Audio Story Builder" img={audio}>
          {/* <p className="creative-paragraph">
            A guided outline that helps kids record their own short podcast or
            tell a story out loud (with or without writing it first).
          </p>{" "}
          <br />
          <p className="creative-paragraph flex gap-2">
            <img src={Headphone} alt="" className="mb-6" />
            Can be done with just a phone and their voice
          </p>{" "}
          <br />
          <p className="creative-paragraph  flex gap-2">
            <img src={colorfilter} alt="" className="mb-5" />
            Optional sound effect & jingle prompts included
          </p> */}
        </Card>

        {/* <div className="Expression-ideal">
          <h4 className="m-0 font-semibold text-lg text-center">
            💡 Ideal For:
          </h4>
          <ListItem extraClass="mt-4">
            Families that learns best by doing, observing, and exploring
          </ListItem>
          <br />
          <ListItem>
            value quiet growth, nature walks, living stories, and daily habits
            that nourish the whole child.
          </ListItem>
          <br />
          <ListItem>Align with eclectic, or un-schoolish rhythms.</ListItem>
          <br />
        </div> */}

        <Card title="Create-a-Character Prompt" img={character}>
          {/* <p className="creative-paragraph">
            A writing or drawing prompt where kids invent a new character -
            often paired with world-building, short stories, or costumes.
          </p>{" "}
          <br />
          <p className="creative-paragraph flex gap-2">
            <img src={facemask} alt="" className="mb-6" />
            Pairs with creative writing and storytelling
          </p>{" "}
          <br />
          <p className="creative-paragraph  flex gap-2">
            <img src={colorpallete} alt="" className="mb-5" />
            Optional printable character card + story map
          </p> */}
        </Card>

        <Card title="Custom Builder" img={custom}></Card>
      </div>
      <div className="note-message p-4 bg-white flex m-4 border-round-3xl justify-content-center">
        <img src={lampin} alt="lamp" />
        <h3 className="Note">
          Expression is where learning meets the heart. Try the Journal Prompt
          Pack for a personal writing touch
        </h3>
      </div>
    </>
  );
}
