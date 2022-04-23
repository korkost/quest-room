import React from 'react';
import * as S from './container.styled';

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: IContainer) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
