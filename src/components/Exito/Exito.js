import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//STYLED COMPONENTS

const MensajeExito = styled.p`
  width: 80%;
  height: 40px;
  font-size: 20px;
  background-color: green;
  text-align: center;
  font-weight: 700;
  display: grid;
  align-items: center;
  margin: 0 auto;
`;

const Exito = ({ mensaje }) => {
  return <MensajeExito>{mensaje}</MensajeExito>;
};

Exito.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Exito;
