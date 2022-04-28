import { useAppSelector } from '../../hooks/hooks';
import { selectCurrentQuests } from '../../store/quests-slice/quests-slice';
import QuestsItem from '../quests-item/quests-item';

import * as S from './quests-list.styled';

const QuestsList = () => {
  const quests = useAppSelector(selectCurrentQuests);

  return (
    <S.QuestsList>
      {quests.map((quest) => (
        <QuestsItem quest={quest} key={quest.id} />
      ))}
    </S.QuestsList>
  );
};

export default QuestsList;
