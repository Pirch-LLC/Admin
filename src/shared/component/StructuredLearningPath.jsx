import React, { useState } from "react";
import singlelesson from "../../assets/images/singlelesson.png";
import timer from "../../assets/images/icons/timer.svg";
import printer from "../../assets/images/icons/printer.svg";
import booklist from "../../assets/images/booklist.png";
import unitstudy from "../../assets/images/unitstudy.png";
import right from "../../assets/images/icons/right.svg";
import writing from "../../assets/images/writing.png";
import star from "../../assets/images/icons/star.svg";
import pallete from "../../assets/images/icons/pallete.svg";
import folder from "../../assets/images/icons/folder.svg";
import archery from "../../assets/images/icons/archery.svg";
import assesment from "../../assets/images/assesment.png";
import lamp from "../../assets/images/icons/lamp.svg";
import fort from "../../assets/images/icons/fort.svg";
import custombuilder from "../../assets/images/custombuilder.png";
import lock from "../../assets/images/icons/lock.svg";
import colorfilter from "../../assets/images/icons/colorfilter.svg";
import lampin from "../../assets/images/lamp.png";
import CustomOverlayPanel from "./CustomOverlayPanel";
import { useNavigate } from "react-router-dom";
import info from "../../assets/icon/info.svg";
import { toSlug } from "../../utils/commonFunctions";

const cardsData = [
  {
    key: "singleLesson",
    title: "Single lesson",
    img: singlelesson,
    content: (
      <>
        <p>One lesson, one topic—quick, clean, and done-for-you.</p>
        <p>Use for fill-in-the-gap days or last minute plans.</p>
        <p className="flex gap-2 align-items-start">
          <img src={timer} alt="" /> Choose by subject, grade, or interest
        </p>
        <p className="flex gap-2 align-items-start">
          <img src={printer} alt="" /> Print or assign directly to a calendar
        </p>
      </>
    ),
  },
  {
    key: "bookList",
    title: "Book List Generator",
    img: booklist,
    content: (
      <>
        <p>
          Get five fiction & nonfiction books based on interest, Lexile, and
          grade.
        </p>
        <p>Pairs with Unit Studies or themes.</p>
        <p>Includes Lexile, genre, and subject tags.</p>
      </>
    ),
  },
  {
    key: "unitStudy",
    title: "Unit Study",
    img: unitstudy,
    path: "unit-study",
    content: (
      <>
        <p>
          Full package around one theme: reading, writing, projects, and more.
        </p>
        <p className="flex gap-2 align-items-start">
          <img src={right} alt="" /> Ideal for weekly or monthly planning
        </p>
        <p className="flex gap- align-items-start">
          <img src={right} alt="" /> Covers multiple subjects
        </p>
      </>
    ),
  },
  {
    key: "writing",
    title: "Writing Prompt",
    img: writing,
    content: (
      <>
        <p>Creative/academic prompts by age, genre, and subject.</p>
        <p className="flex gap-2 align-items-start">
          <img src={star} alt="" /> Open-ended and structured
        </p>
        <p className="flex gap-2 align-items-start">
          <img src={pallete} alt="" /> Some paired with art or history
        </p>
      </>
    ),
  },
  {
    key: "vocabulary",
    title: "Vocabulary/ ELA",
    img: writing,
    content: (
      <>
        <p>Spelling, grammar, and vocabulary based on lesson topic.</p>
        <p className="flex gap-2 align-items-start">
          <img src={folder} alt="" /> Word cards or worksheets
        </p>
        <p className="flex gap-2 align-items-start">
          <img src={archery} alt="" /> Great for test prep and review
        </p>
      </>
    ),
  },
  {
    key: "assessment",
    title: "Assessment/ Quiz",
    img: assesment,
    content: (
      <>
        <p>Auto-generated quiz to assess understanding.</p>
        <p className="flex gap-2 align-items-start">
          <img src={lamp} alt="" /> MCQ, short answer, drawing
        </p>
        <p className="flex gap-2 align-items-start">
          <img src={fort} alt="" /> Add to portfolio or log
        </p>
      </>
    ),
  },
  {
    key: "custom",
    title: "Custom Builder",
    img: custombuilder,
    content: (
      <>
        <p>Build your own lesson—Pirch helps fill the rest.</p>
        <p className="flex gap-2 align-items-start">
          <img src={lock} alt="" /> Great for advanced planners
        </p>
        <p className="flex gap-2 align-items-start">
          <img src={colorfilter} alt="" /> Mix & match formats
        </p>
        <p className="flex gap-2 align-items-start">
          <img src={fort} alt="" /> Add to portfolio
        </p>
      </>
    ),
  },
];

const Card = ({ title, img, infoVisible, toggleInfo, content, path }) => {
  const navigate = useNavigate();
  return (
    <div
      className="creative-card cursor-pointer"
      onClick={() => navigate(toSlug(title))}
    >
      <div className="relative w-full">
        <div className="flex justify-content-between items-center">
          <h3 className="font-medium text-base">{title}</h3>
          <CustomOverlayPanel
            trigger={
              <img src={info} alt="info icon" className="cursor-pointer " />
            }
          >
            <div className="py-2 px-3">
              <h3 className="text-black font-medium">{title}</h3>
              {content}
            </div>
          </CustomOverlayPanel>
        </div>
      </div>
      <img src={img} alt={title} className="" />
    </div>
  );
};

export default function StructuredLearningPath() {
  const [openDialog, setOpenDialog] = useState("");
  const toggleDialog = (key) => {
    setOpenDialog(openDialog === key ? "" : key);
  };
  return (
    <>
      <div className="flex xl:flex-row sm:flex-column structure-grid p-4">
        <div className="structured-learning-path  grid gap-4">
          {cardsData.map(({ key, ...rest }) => (
            <Card
              key={key}
              infoVisible={openDialog === key}
              toggleInfo={() => toggleDialog(key)}
              {...rest}
            />
          ))}
        </div>
      </div>
      <div className="note-message p-4 bg-white flex m-4 border-round-3xl justify-content-center">
        <img src={lampin} alt="lamp" className="lampin" />
        <h3 className="Note">
          Not sure where to begin? Try the Unit Study Generator—it builds
          everything for you from one theme.
        </h3>
      </div>
    </>
  );
}
