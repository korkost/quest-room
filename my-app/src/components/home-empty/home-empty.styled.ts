import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 150px;
`;

const Text = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.font.formsHeading};
`;

export { Container, Text };
