import React from "react";
import ExperiencePart from "./ExperiencePart";

const CourseHighlight = (props: any) => {
  return (
    <div className="p-8 md:p-16 bg-webGreen text-white" id="Course Highlight">
      <h2 className="rockwell text-3xl">Course Highlight</h2>
      <div className="w-12 h-1 bg-webBlue rounded-sm"></div>
      <br></br>
      <p>
        In Spring 2018. my Urban Society students and I worked with two local
        organizations—Housing Opportunities Made Equal and Legal Aid Society of
        Southwest Ohio—to create a report on the geography of evictions in
        Hamilton County, Ohio, using data from nearly 50,000 eviction court
        records and census data. I taught students how to access, code, and
        manage quantitative data, use ArcGIS software to map eviction records
        and calculate tract eviction filing rates, and finally, write about our
        findings in a report. Our work was featured by the local ABC affiliate
        (see <a href="https://tinyurl.com/ycppkvjf">https://tinyurl.com/ycppkvjf</a> and <a href="https://tinyurl.com/ybv7mq8a">https://tinyurl.com/ybv7mq8a</a>) and
        appeared in an exhibit on women of color in downtown Cincinnati. As a
        result of our report and my community partners’ efforts, Cincinnati City
        Council approved a budget for a pilot eviction prevention program, and
        recently passed new legislation to bolster tenants’ rights. I was
        subsequently honored as the “Advocate of the Year” by the Cincinnati
        Affordable Housing Advocates organization for this work.{" "}
      </p>
      <br></br>
    </div>
  );
};

export default CourseHighlight;
