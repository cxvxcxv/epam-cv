import { Box } from '@/components/Box';
import { Contacts } from '@/components/Contacts';
import { Expertise } from '@/components/Expertise';
import { Feedback } from '@/components/Feedback';
import { Portfolio } from '@/components/Portfolio';
import { Skills } from '@/components/Skills';
import { Timeline } from '@/components/Timeline';
import { EXPERTISE_DATA } from '@/constants/expertise.constants';
import { FEEDBACK_DATA } from '@/constants/feedback.constants';
import { APP_SECTIONS } from '@/constants/navigation.constants';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchEducation } from '@/store/education/thunk';
import { selectEducations } from '@/store/selectors';
import { useEffect } from 'react';

export const Inner = () => {
  const {
    entities: educations,
    loading: educationsLoading,
    error: educationsError,
  } = useAppSelector(selectEducations);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEducation());
  }, [dispatch]);
  return (
    <>
      <Box title="About me" id={APP_SECTIONS.ABOUT} className="mt-16">
        <p>
          A budding front-end developer building highly efficient, performant,
          and accessible web interfaces using React, TypeScript, and modern
          JavaScript ecosystems. I am deeply committed to writing clean,
          maintainable, and semantically correct code and have a deep
          understanding of component architecture, effective UI state management
          strategies, and modern styling solutions like Tailwind CSS. Guided by
          user-centered design principles, I focus on bridging the gap between
          complex back-end logic and seamless, intuitive user interfaces,
          actively applying industry best practices such as version control
          systems and modular web design.
        </p>
      </Box>
      <Box title="Education" id={APP_SECTIONS.EDUCATION}>
        <Timeline
          data={educations}
          loading={educationsLoading}
          error={educationsError}
        />
      </Box>
      <Box title="Experience" id={APP_SECTIONS.EXPERIENCE}>
        <Expertise data={EXPERTISE_DATA} />
      </Box>
      <Box title="Skills" id={APP_SECTIONS.SKILLS}>
        <Skills />
      </Box>
      <Box title="Portfolio" id={APP_SECTIONS.PORTFOLIO}>
        <Portfolio />
      </Box>
      <Box title="Contacts" id={APP_SECTIONS.CONTACTS}>
        <Contacts />
      </Box>
      <Box title="Feedbacks" id={APP_SECTIONS.FEEDBACKS}>
        <Feedback data={FEEDBACK_DATA} />
      </Box>
    </>
  );
};
