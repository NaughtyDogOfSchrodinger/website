import {FC, memo} from 'react';

import {customizeMode, education, experience, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <h2 className="self-center text-center text-2xl font-bold text-black">商业模式</h2>
        <br />
        <ResumeSection title="订阅模式">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="授权模式">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="定制模式">
          {customizeMode.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        {/*<ResumeSection title="Skills">*/}
        {/*  <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>*/}
        {/*  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">*/}
        {/*    {skills.map((skillgroup, index) => (*/}
        {/*      <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</ResumeSection>*/}
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
