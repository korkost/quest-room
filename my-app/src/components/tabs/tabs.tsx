import {
  selectFilterType,
  currentFilterType,
} from '../../store/app-slice/app-slice';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { genres } from '../../utils/const';

import * as S from './tabs.styled';

const Tabs = () => {
  const dispatch = useAppDispatch();
  const filterType = useAppSelector(selectFilterType);

  const handleClick = (filterType: string) =>
    dispatch(currentFilterType(filterType));

  return (
    <S.Tabs>
      {genres.map(({ id, title, icon, type }) => {
        const Icon = icon;

        return (
          <S.TabItem key={id}>
            <S.TabBtn
              isActive={filterType === type}
              onClick={() => handleClick(type)}
            >
              <Icon />
              <S.TabTitle>{title}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        );
      })}
    </S.Tabs>
  );
};

export default Tabs;
