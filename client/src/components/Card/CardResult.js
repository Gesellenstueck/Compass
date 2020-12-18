import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const ResultCard = styled.div`
  color: black;
  margin-bottom: 2rem;

  dd {
    width: 100%;
    margin: 0;
    background: lightblue;
    border-radius: 15px;
    div {
      width: ${(props) => props.value}%;
      background: red;
      border-radius: 15px;
      text-align: right;
    }
  }
`;

const Scale = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ResultContainer = ({ title, value, scale }) => {
  return (
    <ResultCard value={value}>
      <h3>{title}</h3>
      <dd>
        <div>{value}%</div>
      </dd>
      <Scale>
        <span> {scale[0]}</span>
        <span> {scale[1]}</span>
      </Scale>
    </ResultCard>
  );
};

ResultContainer.propTypes = {
  title: PropTypes.string,

  onClick: PropTypes.func,

  value: PropTypes.number,

  scale: PropTypes.array,

  subline: PropTypes.string,
};
