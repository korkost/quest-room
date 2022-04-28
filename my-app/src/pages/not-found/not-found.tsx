import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../../components/common/common';

import * as S from './not-found.styled';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <S.PageSection>
        <S.PageTitle>404</S.PageTitle>
        <S.PageDescription>Страница не найдена!</S.PageDescription>
        <S.PageButtonGroup>
          <S.PageButton onClick={() => navigate('/', { replace: true })}>
            На главную
          </S.PageButton>
          <S.PageButton onClick={() => navigate(-1)}>Назад</S.PageButton>
        </S.PageButtonGroup>
      </S.PageSection>
    </MainLayout>
  );
};

export default NotFound;
