import React from "react";

export const JournalEntry = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>comentario de pie</p>
    </div>
  );
};