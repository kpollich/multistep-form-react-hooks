import React from "react";

import { Form, FormField } from "../../ui";
import { useContactFormState } from "../ContactFormContext";

export function CategoriesStep() {
  const {
    state: { categories },
    dispatch
  } = useContactFormState();

  const availableCategories = [
    "Blog Posts",
    "Tutorials",
    "Bug Fixes",
    "New Releases"
  ];

  const handleChange = category => {
    const isSelected = categories.includes(category);
    let payload = categories;

    if (isSelected) {
      payload = categories.filter(c => c !== category);
    } else {
      payload = [...categories, category];
    }

    dispatch({
      type: "CATEGORIES_CHANGE",
      payload
    });
  };

  return (
    <>
      <h1>Which categories of content interest you most?</h1>
      <p>
        <em>Check all that apply</em>
      </p>

      <Form>
        {availableCategories.map(category => (
          <FormField key={category} label={category} name={category}>
            <input
              type="checkbox"
              name={category}
              id={category}
              value={category}
              onChange={() => handleChange(category)}
              checked={categories.includes(category)}
            />
          </FormField>
        ))}
      </Form>
    </>
  );
}
