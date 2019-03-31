import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

const PageLoader = () => {
  return (
    <Dimmer active inverted>
      <Loader inverted content="Loading" />
    </Dimmer>
  );
};

export default PageLoader;
