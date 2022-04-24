import React from 'react';
import * as S from './spinner.styled';

interface ISpinner {
  children: React.ReactNode;
}

const Spinner = ({ children }: ISpinner) => {
  return <S.Container>(children)</S.Container>;
};

export default Spinner;
