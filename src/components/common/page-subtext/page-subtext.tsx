import React from 'react';
import * as S from './page-subtext.styled';

interface IPageSubtext {
  children: React.ReactNode;
}

const PageSubtext = ({ children, ...props }: IPageSubtext) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
