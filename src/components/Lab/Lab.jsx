import React from "react";
import { useState } from "react";
import { useTransition ,animated} from "react-spring";
import LabCompleteDetail from "../LabCompleteDetail/LabCompleteDetail";
import LabDetailCard from "../LabDetailCard/LabDetailCard";

const Lab = ({ color }) => {
  const [showDetails, setshowDetails] = useState(false);
  const transition = useTransition(showDetails, {
    from: {
      opacity:0,
      clipPath: "polygon(0% 0%,100% 0%,0% 0%,0% 0%)"
    },
    enter: {
      opacity:1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"},
    leave: {
      clipPath: 'polygon(0% 0%,100% 0%,0% 0%,0% 0%)',
    },config: {
      duration: 400
    },
  });
  return (
    <>
      {showDetails ? (
        transition((style, item) => (
          item?
          <animated.div style={style}>
            <LabCompleteDetail color={color} setshowDetails={setshowDetails} />
          </animated.div>:
          ''
        ))
      ) : (
        <LabDetailCard color={color} setshowDetails={setshowDetails} />
      )}
    </>
  );
};

export default Lab;
