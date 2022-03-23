import React from "react";

export default function Reset(props) {
  let { counts, increase } = props;
  return <button onClick={counts}>{increase}</button>;
}