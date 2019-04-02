import React, { useContext } from "react";

import { ContactFormContext } from "./ContactFormContext";

function CategoriesStep({ categories }) {
  const { dispatch } = useContext(ContactFormContext);

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

      <form>
        {availableCategories.map(category => (
          <div key={category}>
            <label htmlFor={category}>{category}</label>
            <input
              type="checkbox"
              name={category}
              id={category}
              value={category}
              onChange={() => handleChange(category)}
              checked={categories.includes(category)}
            />
          </div>
        ))}
      </form>
    </>
  );
}

export default CategoriesStep;
