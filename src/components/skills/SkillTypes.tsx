"use client";
import { getSkills } from "@src/services/skills";
import Card from "./Card";
import { useEffect, useState } from "react";
import SkillInfo from "./SkillInfo";

const SkillTypes: React.FC = () => {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSkills();
        setSkills(data);
        setSelectedSkill(data[0]);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchData();
  }, []);

  const handleSelection = (data: any) => {
    setSelectedSkill(data);
  };

  return (
    <div className="skills_container">
      <div className="skills_content">
        <div className="skills">
          {skills.length > 0 &&
            skills.map((item: any) => (
              <Card
                key={item.title}
                title={item.title}
                iconUrl={item.icon}
                isActive={selectedSkill.title === item.title}
                handleSelection={() => handleSelection(item)}
              />
            ))}
        </div>
        <div className="skills_info">
          {selectedSkill && (
            <SkillInfo
              heding={selectedSkill.title}
              skills={selectedSkill.skills}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillTypes;
