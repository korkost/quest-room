import QuestsList from '../quests-list/quests-list';
import Tabs from '../tabs/tabs';
import Spinner from '../../components/common/spinner/spinner';

import { useAppSelector } from '../../hooks/hooks';
import { selectQuestsStatus } from '../../store/quests-slice/quests-slice';

import { FetchStatus } from '../../utils/const';
import { Loader } from '../../components/common/spinner/spinner.styled';

const QuestsCatalog = () => {
  const questsStatus = useAppSelector(selectQuestsStatus);

  if (questsStatus === FetchStatus.Pending) {
    return (
      <Spinner>
        <Loader />
      </Spinner>
    );
  }

  return (
    <>
      <Tabs />
      <QuestsList />
    </>
  );
};

export default QuestsCatalog;
