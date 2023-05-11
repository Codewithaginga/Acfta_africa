import { useState } from "react";
import Head from "./head";
import LandingPage from "./landing";
import SecondPage from "./secondpage";
import afri from "../src/africa (4).png";
import todo from "../src/to-do-list.png";
import popu from "../src/crowd.png";
import grow from "../src/growth.png";
import Updates from "./updates";
import UpdatePhotos from "./update-photos";
import forumm from "../src/forum.webp";
import forum1 from "../src/forum2.webp";
import mediaa from "../src/media.webp";
import posst from "../src/poster.webp";
import Buttons from "./buttons";
import ne from "../src/news.webp";
import uneca from "../src/UNECA.jpg.webp";
import asst from "../src/Asset-8.png.webp";
import mia from "../src/mia.png.webp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="head headd">
        <Head />
      </header>
      <section className="section-1">
        <LandingPage />
      </section>
      <section className="section-2">
        <div className="data-rows">
          <SecondPage
            image={afri}
            number={54}
            paragraph={`AU MEMBER STATES HAVE SIGNED THE AfCFTA AGREEMENT AS OF APRIL 2023 `}
          />
          <SecondPage
            image={todo}
            number={46}
            paragraph="THE AfCFTA HAS 46 STATE PARTIES AS OF APRIL 2023"
          />
          <SecondPage
            image={popu}
            number={`${30}M`}
            paragraph="PEOPLE WILL POTENTIALLY BE LIFTED OUT OF EXTREME POVERTY"
          />
          <SecondPage
            image={grow}
            number={`$ ${450} B`}
            paragraph="INCOME BOOST IN AFRICA BY 2035: A 7% GAIN"
          />
        </div>
        <div className="the-updates ">
          <Updates
            updat1="The AfCFTA Updates"
            updat2="The latest update on events and activities from the AfCFTA Secretariat. "
          />
          <div className="updates-session">
            <UpdatePhotos
              imgg={forumm}
              day="AfCFTA Business Forum Recap: Day 2"
              date="April 24, 2023"
            />
            <UpdatePhotos
              imgg={forum1}
              day="AfCFTA Business Forum Recap: Day 1"
              date="April 24, 2023"
            />
            <UpdatePhotos
              imgg={mediaa}
              day="MEDIA RELEASE"
              date="April 13, 2023"
            />
            <UpdatePhotos
              imgg={posst}
              day="Discounted flights to the AfCFTA Business Forum"
              date="April 12, 2023"
            />
          </div>
          <div className="more-btn">
            <Buttons more="MORE UPDATES" />
          </div>
        </div>
      </section>

      {/* section 3 */}

      <section className="section-3">
        <div className="the-updates-1 ">
          <Updates
            updat1="The AfCFTA in the News"
            updat2="The latest activities of the AfCFTA are featured in the media, including press releases, communiques, statements and news. "
          />
          <div className="updates-session">
            <UpdatePhotos
              imgg={asst}
              day="Kenya can be a hub for USA to enhance trade, investment relationship with Africa through AfCFTA"
              date="May 3, 2023"
            />
            <UpdatePhotos
              imgg={mia}
              day="ITC and partners tp propel Made in Africa label and boost trade under AfCFTA"
              date="May 3, 2023"
            />
            <UpdatePhotos
              imgg={uneca}
              day="UN agency supports Benin to Develop AfCFTA national strategy"
              date="May 3, 2023"
            />
            <UpdatePhotos
              imgg={ne}
              day="Creating one currency for Africa difficult, it will take time - AfCFTA"
              date="April 24, 2023"
            />
          </div>
          <div className="more-btn">
            <Buttons more="MORE NEWS" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
