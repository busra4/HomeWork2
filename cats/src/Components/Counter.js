import React from "react";

export default function Counter(props) {
  let { counts, increase } = props;
  return <button onClick={counts}>{increase}</button>;
}
