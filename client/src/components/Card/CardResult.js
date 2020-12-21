import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const ResultCard = styled.div`
  color: black;
  margin: 1.5rem 0;
  text-align: center;

  dd {
    width: 90%;
    margin: 0.5rem 1rem 0.1rem;

    background: lightblue;
    border-radius: 15px;
    div {
      width: ${(props) => props.value}%;
      background: #70af85;
      border-radius: 15px;
      text-align: right;
      padding-right: 0.5rem;
    }
  }
`;

const Scale = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
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
