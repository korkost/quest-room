import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NotFound from '../not-found/not-found';
import {
  useAppDispatch,
  useAppSelector
} from 'src/hooks/hooks';
import QuestModal from '../../components/quest-modal/quest-modal';
import { MainLayout } from '../../components/common/common';
import {
  fetchQuestAction,
  selectQuest,
  selectQuestStatus,
} from '../../store/quests-slice/quests-slice';
import {
  selectChangePopupСondition,
  changePopupCondition,
} from 'src/store/app-slice/app-slice';

import {
  adaptGenreTypeForClient,
  adaptLevelNameForClient,
} from 'src/utils/utils';
import { FetchStatus } from 'src/utils/const';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';

const DetailedQuest = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const quest = useAppSelector(selectQuest);
  const questStatus = useAppSelector(selectQuestStatus);
  const popupСondition = useAppSelector(selectChangePopupСondition);

  const selectedQuestId = Number(id);

  useEffect(() => {
    dispatch(fetchQuestAction(selectedQuestId));
  }, [dispatch, selectedQuestId]);

  const handleClick = () => {
    dispatch(changePopupCondition(!popupСondition));
  };

  if (questStatus === FetchStatus.Failed) {
    return <NotFound />;
  }

  if (!quest) {
    return null;
  }

  const { coverImg, title, description, type, level, peopleCount, duration } =
    quest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{adaptGenreTypeForClient(type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${peopleCount[0]}-${peopleCount[1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>
                  {adaptLevelNameForClient(level)}
                </S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={handleClick}>
              Забронировать
              </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {popupСondition && <QuestModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
