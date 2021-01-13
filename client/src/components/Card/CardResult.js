import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const ResultCard = styled.div`
  color: var(--emphasis-color);
  margin: 1.5rem 0;

  h3 {
    margin: 0 0.25rem;
  }

  dd {
    height: 1.9rem;
    margin: 0.7rem 0 0.4rem;
    background: var(--primaryLight);
    border-radius: 15px;

    div {
      display: flex;
      height: 1.9rem;
      width: ${(props) => props.value}%;
      background: var(--primaryDark);
      border-radius: 15px;
      padding-right: 0.5rem;
      align-items: center;
      justify-content: flex-end;
    }
  }
`;

const Scale = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0.25rem;
`;

const Line = styled.hr`
  display: block;
  width: 90%;
  height: 0.18rem;
  border: 0;
  border-top: 0.125rem solid var(--primaryLight);
  border-radius: 15px;
  padding: 0;
  margin-top: 2rem;
`;

export const ResultContainer = ({ title, value, scale, valueDecimal }) => {
  return (
    <ResultCard value={value}>
      <h3>{title}</h3>
      <dd>
        <div>{valueDecimal}</div>
      </dd>
      <Scale>
        <span> {scale[0]}</span>
        <span> {scale[1]}</span>
      </Scale>
      <Line />
    </ResultCard>
  );
};

ResultContainer.propTypes = {
  title: PropTypes.string,

  onClick: PropTypes.func,

  value: PropTypes.number,

  valueDecimal: PropTypes.number,

  scale: PropTypes.array,

  subline: PropTypes.string,
};
