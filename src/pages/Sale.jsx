import React from "react";
import NavBar from "../components/NavBar";
import Links from "../components/Links";
import FormCard from "../components/FormCard";

const sale = {
  text: "Properties for sale",
  desc: "Search flats and houses for sale in the UK.",
};

const Sale = () => {
  return (
    <div className="font-lora">
      <NavBar />
      <div className="max-w-7xl mx-auto my-3">
        <p className="">
          <Links value="Zoopla" solid={false} location="/" />{" "}
          <i className="fa-light fa-greater-than"></i>
          <Links value="For sale" solid={true} location="/for-sale" />
        </p>
      </div>
      <FormCard text={sale.text} desc={sale.desc} />
    </div>
  );
};

export default Sale;
