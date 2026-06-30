import { Box } from '@/components/Box';
import { Contacts } from '@/components/Contacts';
import { Expertise } from '@/components/Expertise';
import { Feedback } from '@/components/Feedback';
import { Portfolio } from '@/components/Portfolio';
import { Timeline } from '@/components/Timeline';
import { EXPERTISE_DATA } from '@/constants/expertise.constants';
import { FEEDBACK_DATA } from '@/constants/feedback.constants';
import { APP_SECTIONS } from '@/constants/navigation.constants';
import { TIMELINE_DATA } from '@/constants/timeline.constants';

export const Inner = () => {
  return (
    <>
      <Box title="About me" id={APP_SECTIONS.ABOUT} className="mt-16">
        <p>
          Entry-level Front-End Developer focused on building responsive and
          accessible web interfaces using React and modern JavaScript. Strong
          foundation in UI state management, component-based architecture, and
          clean, maintainable code.
        </p>
      </Box>
      <Box title="Education" id={APP_SECTIONS.EDUCATION}>
        <Timeline data={TIMELINE_DATA} />
      </Box>
      <Box title="Experience" id={APP_SECTIONS.EXPERIENCE}>
        <Expertise data={EXPERTISE_DATA} />
      </Box>
      <Box title="Portfolio" id={APP_SECTIONS.PORTFOLIO}>
        <Portfolio />
      </Box>
      <Box title="Contacts" id={APP_SECTIONS.CONTACTS}>
        <Contacts />
      </Box>
      <Box title="Feedbacks">
        <Feedback data={FEEDBACK_DATA} />
      </Box>
    </>
  );
};
