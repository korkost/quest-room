import QuestsCatalog from '../../components/quests-catalog/quests-catalog';
import HomeEmpty from '../../components/home-empty/home-empty';
import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from '../../components/common/common';

import { useAppSelector } from 'src/hooks/hooks';
import { selectCurrentQuests } from 'src/store/quests-slice/quests-slice';

import * as S from './home.styled';

const Home = () => {
  const quests = useAppSelector(selectCurrentQuests);

  const isEmpty = quests.length === 0;

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        {isEmpty ? (
          <HomeEmpty />
        ) : (
          <>
            <PageHeading>
              <PageTitle>Выберите тематику</PageTitle>
              <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
            </PageHeading>
            <QuestsCatalog />
          </>
        )}
      </S.Main>
    </MainLayout>
  );
};

export default Home;
