import React from "react";

export default function useSelect(defaultValue = "") {
  const [selectedValue, selectValue] = React.useState(1);

  const handleChange = (event) => {
    selectValue(event.target.value);
  };

  return [selectedValue, handleChange];
}
