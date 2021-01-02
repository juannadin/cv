import React, { FC } from 'react';

type SkillLevelBarProps = {
  level: number
};

const SkillLevelBar: FC<SkillLevelBarProps> = ({ level }) => {
  const yPosition = 13;
  const yPositionHalf = 8;
  const width = 212;
  const skillLineStyles = {
    stroke: '#FFFFFF',
    strokeWidth: '4px',
  };
  const baseLineStyles = {
    stroke: '#A1A1A1',
    strokeWidth: '2px',
  };
  const skillPointStyles = {
    fill: '#FFFFFF',
    width: '10px',
    height: '10px',
  }
  const skillLevel = level *  width / 100;
  return (
      <svg className="skill-level-bar">
        <line x1='0' x2={width} y1={yPosition} y2={yPosition} style={baseLineStyles}/>
        <line x1='0' x2={skillLevel} y1={yPosition} y2={yPosition} style={skillLineStyles}/>
        <rect x={skillLevel - 5} y={yPositionHalf} style={skillPointStyles} transform={`rotate(45, ${skillLevel-1}, 12)`}/>
      </svg>
    )
};

export default SkillLevelBar;
