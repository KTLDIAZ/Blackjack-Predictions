import { useState } from "react";

export const useForm = (formValues) => {
  const [formState, setFormState] = useState(formValues);

  const reset = () => {
    setFormState(formValues);
  };

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return [formState, handleChange, reset];
};
