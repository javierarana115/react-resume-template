import {FC, memo, PropsWithChildren} from 'react';
import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold">{name}</span>
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, icon: Icon} = skill;
  
  return (
    <div className="flex flex-col items-center p-2">
      {Icon ? (
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md p-2">
          <Icon className="w-full h-full" />
        </div>
      ) : (
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 shadow-md">
          <span className="text-xs font-medium">{name}</span>
        </div>
      )}
      <span className="mt-1 text-xs font-medium text-center">{name}</span>
    </div>
  );
});

Skill.displayName = 'Skill';