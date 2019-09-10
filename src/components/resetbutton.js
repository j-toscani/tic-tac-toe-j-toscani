import React from "react";

export default function RefreshButton(props) {
  return (
    <button className="refresh-button" onClick={() => props.onClick()}>
      New Game?
    </button>
  );
}
