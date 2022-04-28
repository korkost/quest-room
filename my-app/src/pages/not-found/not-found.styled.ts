import styled from 'styled-components';
import { Button } from '../../components/common/common';
import notFoundBg from '../../assets/img/404.jpg';

const PageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  max-width: 100%;
  color: ${({ theme }) => theme.color.pinkSwan};
  background-image: url(${notFoundBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const PageTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 110px;
  font-size: ${({ theme }) => theme.font.large};
`;

const PageDescription = styled.p`
  margin-top: 0;
  margin-bottom: 70px;
  font-size: ${({ theme }) => theme.font.semilarge};
`;

const PageButtonGroup = styled.div`
  display: flex;
`;

const PageButton = styled(Button)`
  align-self: center;
  padding-top: 15px;
  padding-right: 34px;
  padding-bottom: 16px;
  padding-left: 34px;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }
  &:nth-child(1) {
    margin-right: 50px;
  }
`;

export { PageSection, PageTitle, PageDescription, PageButtonGroup, PageButton };
