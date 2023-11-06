import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import SchduleListMain from "../components/schduleList";
import { mustBeLoggedInServer } from "../lib/authorization";
import { AppContext } from "../context/AppContext";

const index = (props) => {
  const { setCurrentUser } = useContext(AppContext);
  setCurrentUser(props.userData);

  return (
    <Wrapper>
      <SEO pageTitle={"Events"} />
      <SchduleListMain />
    </Wrapper>
  );
};

export const getServerSideProps = async (context) => {
  return mustBeLoggedInServer(context);
};

export default index;
