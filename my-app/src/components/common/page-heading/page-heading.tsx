import React from 'react';
import * as S from './page-heading.styled';

interface IPageHeading {
  children: React.ReactNode;
}

const PageHeading = ({ children, ...props }: IPageHeading) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
