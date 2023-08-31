import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const StandardPage = (props: any) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navigation />
      <div className="">
      {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default StandardPage;
