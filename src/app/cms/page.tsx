"use client";
import Input from "@/components/Input";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { add, update } from "../api/firebaseAPI";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import {
  AcademicSVG,
  AvatarSVG,
  BookmarkSVG,
  BriefcaseSVG,
  RocketSVG,
  ScrewdriverSVG,
  ServerstackSVG,
} from "@/components/icons";
import MultiSelectDropdown from "@/components/MultiSelectDropdown";

export default function Home() {
  const [values, setValues] = useState({
    id: "1",
    name: "",
    position: "",
    pitch: "",
    email: "",
    address: "",
    skills: [
      {
        level: "Beginner",
        stacks: ["ReactJS", "NextJS"],
      },
      {
        level: "Intermediate",
        stacks: ["Javascript", "PHP"],
      },
      {
        level: "Advance",
        stacks: ["Javascript", "PHP", "HTML/CSS", "ReactJS", "NextJS"],
      },
    ],
    softwarePreferences: [
      {
        name: "AWS",
        logo: "",
      },
      {
        name: "GitHub",
        logo: "",
      },
      {
        name: "GitLab",
        logo: "",
      },
      {
        name: "VS Code",
        logo: "",
      },
    ],
    experiences: [
      {
        period: "Feb 2023 - Present",
        company: "ACS Digital Berhad",
        position: "Front End Engineer",
        logo: "",
        desc: [
          "Staying up-to-date with emerging trends and technologies in front-end development, such as ReactJS, NextJS, and build tools.",
          "Communicating project progress, challenges, and solutions to team members and stakeholders in a timely and professional manner.",
          "Working with backend developers to integrate frontend components with backend APIs, databases, and services.",
        ],
      },
      {
        period: "July 2021 - February 2023",
        company: "Carsome Sdn Bhd",
        position: "Full Stack Engineer",
        logo: "",
        desc: [
          "Staying up-to-date with emerging trends and technologies in front-end development, such as ReactJS, NextJS, and build tools.",
          "Communicating project progress, challenges, and solutions to team members and stakeholders in a timely and professional manner.",
          "Working with backend developers to integrate frontend components with backend APIs, databases, and services.",
        ],
      },
    ],
    educations: [
      {
        period: "March 2021 - Present",
        school: "Universiti Teknologi MARA",
        program: "Master of Science (Information Technology)",
        logo: "",
        desc: [
          "Staying up-to-date with emerging trends and technologies in front-end development, such as ReactJS, NextJS, and build tools.",
          "Communicating project progress, challenges, and solutions to team members and stakeholders in a timely and professional manner.",
          "Working with backend developers to integrate frontend components with backend APIs, databases, and services.",
        ],
      },
      {
        period: "2016-2020",
        school: "Universiti Teknologi MARA",
        program: "Bachelor of Information Technology in Business Computing",
        logo: "",
        desc: [
          "Staying up-to-date with emerging trends and technologies in front-end development, such as ReactJS, NextJS, and build tools.",
          "Communicating project progress, challenges, and solutions to team members and stakeholders in a timely and professional manner.",
          "Working with backend developers to integrate frontend components with backend APIs, databases, and services.",
        ],
      },
    ],
    publications: [
      {
        logo: "",
        publisher: "International Journal of Innovative Computing",
        publishedAt: "Nov 20, 2022",
        title: "Adoption of Cyber Insurance in Malaysian Organisations",
        url: "https://ijic.utm.my/index.php/ijic/article/view/380",
      },
      {
        logo: "",
        publisher: "Asian Journal of University Education",
        publishedAt: "Jul 31, 2022",
        title:
          "Cyber Security Awareness in Using Digital Platforms Among Students in A Higher Learning Institution",
        url: "https://myjms.mohe.gov.my/index.php/AJUE/article/view/18967",
      },
      {
        logo: "",
        publisher: "IJATCSE",
        publishedAt: "Nov 1, 2019",
        title: "Mobile Complaint Management System (MOCAS)",
        url: "http://www.warse.org/IJATCSE/static/pdf/file/ijatcse26815sl2019.pdf",
      },
    ],
    portfolios: [
      {
        name: "Dad Jokes",
        url: "https://hidayahrah-dadjokes.netlify.app/",
        desc: "Retrieving dad jokes site...",
        img: "",
      },
      {
        name: "Note App",
        url: "https://hidayahrah-notes.netlify.app/",
        desc: "Retrieving notes...",
        img: "",
      },
    ],
  });
  const skills = ["Javascript", "PHP", "HTML/CSS", "ReactJS", "NextJS"];
  const [activeTab, setActiveTab] = useState("About");
  const tabs = [
    {
      tab: "About",
      icon: <AvatarSVG />,
    },
    {
      tab: "Skill",
      icon: <ServerstackSVG />,
    },
    {
      tab: "Software Preference",
      icon: <ScrewdriverSVG />,
    },
    {
      tab: "Experience",
      icon: <BriefcaseSVG />,
    },
    {
      tab: "Education",
      icon: <AcademicSVG />,
    },
    {
      tab: "Publication",
      icon: <BookmarkSVG />,
    },
    {
      tab: "Portfolio",
      icon: <RocketSVG />,
    },
  ];

  useEffect(() => {
    const q = query(collection(db, "profile"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setValues({
        id: querySnapshot.docs[0].id,
        ...(querySnapshot.docs[0].data() as any),
      });
      return () => unsubscribe();
    });
  }, []);
  console.log("Q:", values);

  // const addValues = async (e: any) => {
  //   e.preventDefault();
  //   await add(e, values);
  // };

  const updateValues = async (e: any) => {
    e.preventDefault();
    await update(e, values);
  };

  return (
    <div className="my-10 mx-[400px] flex flex-row place-items-start gap-6">
      <div className="flex flex-col gap-4 lg:gap-8 overflow-auto w-fit">
        {tabs &&
          tabs.map(({ icon, tab }, i) => (
            <button
              key={i}
              className={`font-semibold cursor-pointer px-4 py-2 rounded-xl flex flex-row gap-2 ${
                activeTab === tab
                  ? "bg-black-700 text-slate-300"
                  : "bg-white hover:bg-slate-300 text-slate-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <div className="w-6 h-6">{icon}</div>
              <div className="text-start">{tab}</div>
            </button>
          ))}
      </div>

      <form className="w-96 lg:w-full rounded-lg bg-black-700 border-slate-600 p-6 flex flex-col gap-4">
        <div className="font-bold text-xl text-white">{activeTab}</div>

        {/* ABOUT */}
        <div
          className={`flex-col place-items-center gap-4 transition-all duration-500 ease-out ${
            activeTab === "About" ? "flex" : "hidden"
          }`}
        >
          <Input
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={(e) => {
              setValues({ ...values, name: e.target.value });
            }}
          />
          <Input
            type="text"
            placeholder="Email"
            value={values.email}
            onChange={(e) => {
              setValues({ ...values, email: e.target.value });
            }}
          />
          <Input
            type="text"
            placeholder="Address"
            value={values.address}
            onChange={(e) => {
              setValues({ ...values, address: e.target.value });
            }}
          />
          <Input
            type="text"
            placeholder="Position"
            value={values.position}
            onChange={(e) => {
              setValues({ ...values, position: e.target.value });
            }}
          />
          <textarea
            className="w-full h-32 resize-y appearance-none rounded-lg p-2 text-md shadow-sm shadow-slate-300 text-slate-300 bg-transparent"
            value={values.pitch}
            onChange={(e) => {
              setValues({ ...values, pitch: e.target.value });
            }}
          />
        </div>

        {/* SKILLS */}
        <div
          className={`flex-col place-items-start gap-4 transition-all duration-500 ease-in-out ${
            activeTab === "Skill" ? "flex" : "hidden"
          }`}
        >
          {values?.skills?.map((skill: any, i: number) => (
            <ul key={i} className="min-w-full">
              {skill.level}
              {skills.map((item, i) => (
                <li key={i}>
                  <label className="flex flex-nowrap gap-2 cursor-pointer px-2 py-1 text-black-300">
                    <input
                      type="checkbox"
                      value={item}
                      checked={skill.stacks.includes(item)}
                      className="cursor-pointer"
                      onChange={(e) => {
                        const updateArr = values?.skills?.map(
                          (obj: any, i: number) => {
                            if (obj.level === skill.level) {
                              return {
                                ...skill,
                                stacks: [...skill?.stacks, e.target.value],
                              };
                            }
                            return obj;
                          }
                        );
                        setValues({ ...values, skills: updateArr });
                      }}
                    />
                    <span className="ml-1">{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/*  SOFTWARE PREFERENCE */}
        <div
          className={`flex-col place-items-start gap-4 transition-all duration-500 ease-in-out ${
            activeTab === "Software Preference" ? "flex" : "hidden"
          }`}
        >
          {values?.softwarePreferences.map((software: any, i: number) => (
            <div
              key={i}
              className="flex flex-col justify-between gap-4 w-full shadow-sm rounded-xl shadow-black-300 p-2"
            >
              <Input
                type="text"
                placeholder="Name"
                value={software.name}
                onChange={(e) => {
                  console.log(e.target.value);
                  // setValues({ ...values, name: e.target.value });
                }}
              />
              <input
                name="Image"
                placeholder="Choose image"
                accept="image/png,image/jpeg"
                type="file"
                onChange={(e) => {
                  console.log(
                    values.id,
                    e.target.files ? e.target.files[0] : null
                  );
                }}
              />
            </div>
          ))}
        </div>
        <button
          onClick={updateValues}
          type="submit"
          className="px-4 py-2 rounded-xl bg-white hover:bg-slate-300 text-slate-700 font-semibold"
        >
          Save
        </button>
        {/* <button
          onClick={addValues}
          type="submit"
          className="px-4 py-2 rounded-xl bg-white hover:bg-slate-300 text-slate-700 font-semibold"
        >
          New
        </button> */}
      </form>
    </div>
  );
}
