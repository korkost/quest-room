import React from 'react';
import * as S from './page-title.styled';

interface IPageTitle {
  children: React.ReactNode;
}

const PageTitle = ({ children, ...props }: IPageTitle) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
