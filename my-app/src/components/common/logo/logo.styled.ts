import styled from 'styled-components';
import { Link as RouterLink } from '../common';

const Logo = styled.a`
  margin-right: 250px;
  @media (max-width: 1300px) {
    margin-right: auto;
  }
`;

const LogoLink = styled(RouterLink)`
  margin-right: 250px;
  @media (max-width: 1300px) {
    margin-right: auto;
  }
`;

const Image = styled.img``;

export { Logo, LogoLink, Image };
