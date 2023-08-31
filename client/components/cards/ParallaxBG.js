import { useContext } from "react";
import { UserContext } from "../../context"
import React from "react";
const ParallaxBG = ({url, children="MERNCAMP"}) => {
  const [state, setState] = useContext(UserContext);
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url(" + url + ")",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "block",
        padding: "100px 0px 75px 0px",
      }}
    >
      {" "}
      <h1 className="display-1 font-weight-bold text-center">{children}</h1>
      <h5 className="display  text-center" >A SOCIAL NETWORK</h5>
    </div>
  );
};
export default ParallaxBG;
