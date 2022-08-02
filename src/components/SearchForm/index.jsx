import React, { useReducer } from "react";
import { useLocation } from "wouter";
import { Form } from "./style";

const RATINGS = ["g", "pg", "pg-13", "r"];

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
};

// const ACTIONS_REDUCERS = {
//   [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
//     ...state,
//     keyword: action.payload,
//     times: state.times + 1,
//   }),

//   [ACTIONS.UPDATE_RATING]: (state, action) => ({
//     ...state,
//     rating: action.payload,
//   }),
// };

const reducer = (state, action) => {
  // const actionReducer = ACTIONS_REDUCERS[action.payload];
  // return actionReducer ? actionReducer(state, action) : state;

  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1,
      };
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};

function SearchForm({ initialKeyword, initialRating }) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0,
  });

  const [, pushLocation] = useLocation();

  const { keyword, rating, times } = state;

  const handleChange = (event) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
    // setKeyword("");
  };
  const handleChangeRating = (event) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: event.target.value });
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
        <select onChange={handleChangeRating} value={rating}>
          <option disabled>Rating type</option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
        <button type="submit">Search</button>
        <small>{times}</small>
      </Form>
    </>
  );
}

export default React.memo(SearchForm);
