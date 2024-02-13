import React from "react";

type SkillInfoProps = {
  heding: string;
  skills: { skill: string; presentage: number }[];
};

const SkillInfo: React.FC<SkillInfoProps> = (props) => {
  const { heding, skills } = props;
  return (
    <div className="skills-info-card">
      <div className="skills_info_content">
        {skills.map(
          (item: { skill: string; presentage: number }, index: number) => (
            <div key={`skill_${index}`} className="skills_info_skill">
              <div className="skill-info-values">
                <p>{item.skill}</p>
                <span className="persentage">{`${item.presentage}%`}</span>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress"
                  style={{ width: `${item.presentage}%` }}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SkillInfo;
