import React from 'react';
import ResumeItem from '../ResumeItem';
import { Container } from './styles'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

// import { Container } from './styles';

function Resume({income, expense, total}) {
  return (
    <Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </Container>
  );
}

export default Resume;