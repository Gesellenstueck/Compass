import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components/macro";

const ResultCard = styled.div`
  height: 100px;
  width: 100px;
`;

export const ResultContainer = ({ title, value }) => {
  return (
    <ResultCard>
      <h3>{title}</h3>

      <span>{value}</span>
    </ResultCard>
  );
};

ResultContainer.propTypes = {
  bgColor: PropTypes.oneOf([
    "primaryDark",
    "secondaryDark",
    "primaryLight",
    "secondaryLight",
  ]),

  title: PropTypes.string,

  onClick: PropTypes.func,

  value: PropTypes.string,

  alt: PropTypes.string,

  subline: PropTypes.string,

  iconProps: PropTypes.oneOf(["teamIcon"]),
};
