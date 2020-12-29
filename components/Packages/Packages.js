import React from "react";
import styled from "styled-components";

const StyledPackages = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
`;

const Packages = () => {
  return <StyledPackages>Halla</StyledPackages>;
};

export default Packages;
