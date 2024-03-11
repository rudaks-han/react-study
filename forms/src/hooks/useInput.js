import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [value, setValue] = useState(defaultValue);
  const valueIsValid = validationFn(value);

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    handleInputChange,
    hasError: !valueIsValid,
  };
}
