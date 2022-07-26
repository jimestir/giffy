import React, { useState } from "react";
import { Form } from "./style";

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ keyword });
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <button type="submit">Search</button>
      </Form>
    </>
  );
}

export default React.memo(SearchForm);
