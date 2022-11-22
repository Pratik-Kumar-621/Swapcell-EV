import React from "react";
import { features } from "./data";
import Card from "./Card";

const Content = () => {
  return (
    <div className="featureContent">
      {features.map((feature, index) => {
        return (
          <>
            <Card
              image1={feature.image1}
              image2={feature.image2}
              title={feature.title}
              numbering={feature.numbering}
              alt={feature.alt}
              head1={feature.head1}
              head2={feature.head2}
            />
          </>
        );
      })}
    </div>
  );
};

export default Content;
