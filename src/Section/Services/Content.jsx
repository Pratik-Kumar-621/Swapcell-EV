import React from "react";
import Card from "./Card";
import { services } from "./data";

const Content = () => {
  return (
    <div className="contentServices">
      {services.map((service) => {
        return <Card key={service.id} {...service} />;
      })}
    </div>
  );
};

export default Content;
