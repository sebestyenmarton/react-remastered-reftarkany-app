import React from "react";

import { ICardDetail } from "../../typings/global";

import "./detail-card.scss";

interface ICardDetailProps {
  cardDetail: ICardDetail;
  index?: number;
}

const DetailCard = ({ cardDetail, index = 0 }: ICardDetailProps) => {
  return (
    <div className="detail-card-box" key={cardDetail.title + index}>
      <div className="header-section">
        <img
          src={require(`../../assets/icons/${cardDetail.iconName}.svg`)}
          alt={cardDetail.title}
        />

        {cardDetail.title}
      </div>
      <div className="content-section">
        {cardDetail.content.map((content, idx) => {
          return [
            <div className="head-title" key={content.headTitle + idx}>
              {content.headTitle}
            </div>,
            <div className="description" key={"description" + idx}>
              {content.description.map((description) => {
                return (
                  <div className="row" key={description}>
                    {description}
                  </div>
                );
              })}
            </div>,
          ];
        })}
      </div>
    </div>
  );
};

export default DetailCard;
