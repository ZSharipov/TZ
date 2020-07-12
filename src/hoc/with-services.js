import React from "react";
import { StoreServicesConsumer } from "../store-services-contex/store-services-contex";

const withService = () => (Wrapped) => {
  return (props) => {
    return (
      <StoreServicesConsumer>
        {(storeServices) => {
          return <Wrapped {...props} storeServices={storeServices} />;
        }}
      </StoreServicesConsumer>
    );
  };
};

export default withService;
