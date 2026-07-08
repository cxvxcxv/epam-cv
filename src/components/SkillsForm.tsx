import { useAppDispatch } from '@/store';
import { addSkill } from '@/store/skills/thunk';
import { validateSkillsForm } from '@/utils/validateSkillsForm';
import { Formik } from 'formik';
import { Button } from './Button';
import { Input } from './Input';

export const SkillsForm = () => {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{ name: '', range: 0 }}
      validate={validateSkillsForm}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await dispatch(addSkill(values)).unwrap();
          resetForm();
        } catch (error) {
          console.error('failed to add skill:', error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          onSubmit={handleSubmit}
          className="border-primary flex flex-col gap-4 rounded-lg border-2 p-6"
        >
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Git"
            error={errors.name && touched.name ? errors.name : undefined}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />

          <Input
            type="number"
            name="range"
            label="Range"
            error={errors.range && touched.range ? errors.range : undefined}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.range}
          />

          <Button
            type="submit"
            disabled={isSubmitting || !!Object.keys(errors).length}
            className="w-fit"
          >
            Add skill
          </Button>
        </form>
      )}
    </Formik>
  );
};
