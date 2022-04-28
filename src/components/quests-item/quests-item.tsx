import { generatePath } from 'react-router-dom';

import { Quest } from 'src/types/quest';
import { adaptLevelNameForClient } from 'src/utils/utils';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './quests-item.styled';

interface IQuestsItem {
  quest: Quest;
}

const QuestsItem = ({ quest }: IQuestsItem) => {
  const link = generatePath('/detailed-quest/:id', { id: `${quest.id}` });

  const { id, previewImg, title, peopleCount, level } = quest;

  return (
    <S.QuestItem key={id}>
      <S.QuestItemLink to={link}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={`Квест ${title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${peopleCount[0]}-${peopleCount[1]} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {adaptLevelNameForClient(level)}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
};

export default QuestsItem;
