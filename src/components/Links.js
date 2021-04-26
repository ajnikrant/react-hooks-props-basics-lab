import React from "react";

function Links(props) {
  return (
    <div id="links">
      <h3>Links</h3>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
      {/* add your <Links /> component here */}
    </div>
  );
}

export default Links;
