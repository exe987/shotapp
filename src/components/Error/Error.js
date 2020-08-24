import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//STYLED COMPONENTS

const MensajeError = styled.p`
  width: 100%;
  height: 40px;
  font-size: 25px;
  background-color: red;
  text-align: center;
  display: grid;
  align-items: center;
  margin: 0 auto;
  font-weight: 700;
`;

const Error = ({ mensaje }) => {
  return <MensajeError>{mensaje}</MensajeError>;
};

Error.propTypes = {
     mensaje: PropTypes.string.isRequired
};

export default Error;
