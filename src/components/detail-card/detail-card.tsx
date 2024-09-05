import React from "react";

import { ICardDetail } from "../../typings/global";

import "./detail-card.scss";
import { hasValidArrayField } from "../../utils/utils";

interface ICardDetailProps {
  cardDetail: ICardDetail;
  floating?: "right" | "left" | "center";
  image?: string;
  index?: number;
}

const DetailCard = ({
  cardDetail,
  floating = "center",
  index = 0,
}: ICardDetailProps) => {
  const ImageRender = (image: string) => {
    return (
      <div className="card-image">
        <img
          className="detail-card-image"
          src={require(`../../assets/detailCard/${image}.jpg`)}
          alt="hiányzó kép"
        />
      </div>
    );
  };

  const IconRender = (icon: string | undefined, alt: string) => {
    return <img src={require(`../../assets/icons/${icon}.svg`)} alt={alt} />;
  };

  const HeadTitleRender = (headTitle: string | undefined) => {
    return (
      <div className="head-title" key={headTitle}>
        {headTitle}
      </div>
    );
  };

  const DescriptionRender = (
    description: string[] | undefined,
    index: number
  ) => {
    return (
      <div className="description" key={"description" + index}>
        {description?.map((value) => (
          <div className="row" key={value}>
            {value}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`detail-card-box ${floating}`}
      key={cardDetail.title + index}
    >
      <div className="card-content">
        <div className="header-section">
          {cardDetail.iconName &&
            IconRender(cardDetail.iconName, cardDetail.title)}
          {cardDetail.title}
        </div>
        <div className="content-section">
          {hasValidArrayField(cardDetail, "content") &&
            cardDetail.content?.map((content, idx) => (
              <React.Fragment key={content.headTitle || idx}>
                {content.headTitle && HeadTitleRender(content.headTitle)}
                {hasValidArrayField(content, "description") &&
                  DescriptionRender(content.description, idx)}
              </React.Fragment>
            ))}
        </div>
      </div>
      {cardDetail.image && ImageRender(cardDetail.image)}
    </div>
  );
};

export default DetailCard;
