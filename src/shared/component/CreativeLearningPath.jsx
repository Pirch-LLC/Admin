import React, { useState } from "react";
import steam from "../../assets/images/creative/steam.png";
import art from "../../assets/images/creative/art.png";
import maker from "../../assets/images/creative/maker.png";
import craft from "../../assets/images/creative/craft.png";
import poetry from "../../assets/images/creative/poetry.png";
import pencil from "../../assets/images/creative/pencil.svg";
import flower from "../../assets/images/creative/flower.svg";
import sensory from "../../assets/images/creative/sensory.png";
import custom from "../../assets/images/creative/custom.png";
import lampin from "../../assets/images/lamp.png";
import info from "../../assets/icon/info.svg";

const Card = ({ title, img, content, infoVisible, toggleInfo }) => (
  <div className="creative-card">
    <div className="relative w-full">
      <div className="flex justify-content-between items-center">
        <h5 className="m-0 font-semibold text-base">{title}</h5>
        <img src={info} alt="info icon" onClick={toggleInfo} className="cursor-pointer" />
      </div>
      {infoVisible && (
        <div className="dialog-box absolute z-10 top-full mt-2 left-1/2 -translate-x-1/2 w-64 bg-white shadow-lg border border-gray-200 text-sm text-gray-700 p-4 rounded-xl">
          <button onClick={toggleInfo} className="close-button" aria-label="Close">
            ✕
          </button>
          <h3 className="text-black font-medium">{title}</h3>
          {content}
        </div>
      )}
    </div>
    {img && <img src={img} alt={title} className="m-2" />}
  </div>
);
const ListItem = ({ children, extraClass = "" }) => (
  <>
    <li className={`creative-list ${extraClass}`}>{children}</li>
    <br />
  </>
);

export default function CreativeLearningPath() {
  const [openDialog, setOpenDialog] = useState("");
  const toggleDialog = (key) => {
    setOpenDialog(openDialog === key ? "" : key);
  };

  const cardsData = [
    {
      key: "steam",
      title: "STEAM/ Hands-On Project",
      img: steam,
      content: (
        <>
          <p className="creative-paragraph">
            Combines science, technology, engineering, art, and math into
            playful, purposeful projects that spark curiosity and problem-solving.
          </p>
          <p className="creative-paragraph">Build a weather station to track temperature and rainfall</p>
          <p className="creative-paragraph">Create leaf art while learning about geometry and symmetry</p>
        </>
      ),
    },
    {
      key: "art",
      title: "Art + Maker Projects",
      img: art,
      content: (
        <>
          <p className="creative-paragraph">
            Encourages kids to create meaningful, expressive art using everyday
            materials and nature focused more on process than perfection.
          </p>
          <img src={maker} alt="Maker icon" className="my-2" />
          <ListItem>Make nature mandalas from backyard findings</ListItem>
          <ListItem>Build recycled robots and describe their "functions"</ListItem>
        </>
      ),
    },
    {
      key: "craft",
      title: "Craft & Build Challenge",
      img: craft,
      content: (
        <>
          <p className="creative-paragraph">
            Mini-engineering prompts that turn crafting into learning goals
            ideal for kids who like to build, invent, and make with purpose.
          </p>
          <ListItem>Design and construct a puppet theater</ListItem>
          <ListItem extraClass="mb-8">
            Build a simple shelter from found materials and explain its structure
          </ListItem>
        </>
      ),
    },
    {
      key: "poetry",
      title: "Poetry Playbook",
      img: poetry,
      content: (
        <>
          <p className="creative-paragraph">
            Bite-sized poetry lessons + templates—from acrostic to haiku to free verse.
          </p>
          <p className="creative-paragraph flex gap-2">
            <img src={pencil} alt="" className="mb-5" />
            Choose silly, emotional, or descriptive tones
          </p>
          <p className="creative-paragraph flex gap-2 mb-8">
            <img src={flower} alt="" className="mb-5" />
            Add illustrations, recite aloud, or share
          </p>
        </>
      ),
    },
    {
      key: "sensory",
      title: "Sensory Play Packs",
      img: sensory,
      content: (
        <>
          <p className="creative-paragraph">
            For younger learners or neurodivergent kiddos—lessons built around
            texture, smell, motion, and sensory input while still learning core
            ideas.
          </p>
          <p className="creative-paragraph">Great for self-regulation and sensory breaks</p>
          <p className="creative-paragraph mb-8">
            Tied to themes like seasons, animals, or colors
          </p>
        </>
      ),
    },
    {
      key: "custom",
      title: "Custom Builder",
      img: custom,
      content: <p className="creative-paragraph">Create your own projects combining your favorite themes and formats.</p>,
    },
  ];

  return (
    <>
      <div className="grid mt-4 gap-4">
        {cardsData.map(({ key, ...rest }) => (
          <Card key={key} infoVisible={openDialog === key} toggleInfo={() => toggleDialog(key)} {...rest} />
        ))}
      </div>
      <div className="note-message p-4 bg-white flex m-4 border-round-3xl justify-content-center">
        <img src={lampin} alt="lamp" className="lampin" />
        <h3 className="Note">
          Creativity is a curriculum all its own. Use the Hands-On Project
          Generator to transform their interest into art.
        </h3>
      </div>
    </>
  );
}
