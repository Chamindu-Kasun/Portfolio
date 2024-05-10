import Card from "./Card";
import Title from "./Title";
import React, { forwardRef } from "react";

const EducationData = [
  {
    id: 1,
    digree: "MSc. in Computer Science (Reading)",
    institute: "University of Colombo, Sri Lanka",
    date: "2024 - 2026",
    imageURL: "https://storage.googleapis.com/portfolio_ck/UCSC.jpg",
  },
  {
    id: 2,
    digree: "BSc. (Hons) in Management and Information Technology",
    institute: "University of Kelaniya, Sri Lanka",
    date: "2019 - 2023",
    imageURL: "https://storage.googleapis.com/portfolio_ck/Kelaniya.png",
  },
];

const Education = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="education_section" ref={ref}>
      <Title />
      <div className="education_content">
        {EducationData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
});

export default Education;
