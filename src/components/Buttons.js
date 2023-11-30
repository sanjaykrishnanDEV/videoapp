import React from "react";
import { scrollData } from "../utils/constants"
const Buttons = () => {
  return (
    <div className="p-2 h-fit flex ">
      {scrollData.map((i, index) => (
        <Button data={i} key={index} />
      ))}
    </div>
  );
};

export default Buttons;

function Button({ data }) {
  return (
    <div>
      <span className="p-1 bg-slate-400 rounded-sm mx-2">{data}</span>
    </div>
  );
}
