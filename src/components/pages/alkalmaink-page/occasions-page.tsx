import React from "react";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import "./occations-page.scss";
import SecondScreen from "../../screens/second-screen/second-screen";

const mainOccasions = [
  {
    title: "Közös alkalmaink",
    iconName: "church",
    content: [
      {
        headTitle: "Vasárnapi Istentiszteletek",
        description: ["10:20 és 16:20 órai kezdéssel a templomunkban"],
      },
      {
        headTitle: "Hétfőtől szombatig áhitatok",
        description: ["8:30-tól a parókián"],
      },
      {
        headTitle: "Szerdai gyülekezeti Bibliaóra",
        description: ["20:00 órai kezdéssel az imateremben"],
      },
      {
        headTitle: "Házi-Istentisztelet",
        description: ["alkalmanként"],
      },
    ],
  },
  {
    title: "Egyéb alkalmak",
    iconName: "house",
    content: [
      {
        headTitle: "Csütörtöki kátéórák",
        description: [
          "15:00 órától az 5.-eseknek",
          "16:00 órától az 6.-osoknak",
          "17:00 órától az 7.-eseknek",
        ],
      },
      {
        headTitle: "Pénteki gyülekezeti vallásóra",
        description: [
          "15 órától az előkészítő osztálynak",
          "és az 1-2. osztályosoknak",
        ],
      },
      {
        headTitle: "Pénteki ifjúsági Bibliaóra",
        description: ["20:00 órai kezdéssel az imateremben"],
      },
      {
        headTitle: "Szombati vallásóras az óvodásoknak",
        description: ["11:00 órai kezdéssel"],
      },
    ],
  },
];

function Occasions() {
  return (
    <div className="occasions-container">
      {mainOccasions.map((occasion, idx) => {
        return (
          <div className="occasion-box" key={occasion.title}>
            <div className="header-section">
              <img
                src={require(`../../../assets/icons/${occasion.iconName}.svg`)}
                alt={occasion.title}
              />

              {occasion.title}
            </div>
            <div className="content-section">
              {occasion.content.map((content) => {
                return [
                  <div className="head-title">{content.headTitle}</div>,
                  <div className="description">
                    {content.description.map((description) => {
                      return <div className="row">{description}</div>;
                    })}
                  </div>,
                ];
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const OccationsPage = () => {
  return (
    <div className="occations-page" id="Occations">
      <Navbar selectedValue="alkalmaink" configuration={routingConfiguration} />
      <div className="content">
        <div className="occations-page-first-screen">
          <Occasions />
        </div>
        <SecondScreen />
      </div>
    </div>
  );
};

export default OccationsPage;
