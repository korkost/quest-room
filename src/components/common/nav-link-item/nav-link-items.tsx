import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { currentPage, selectCurrentPage } from 'src/store/app-slice/app-slice';
import { menuLinks } from 'src/utils/const';
import * as S from './nav-link-items.styled';

const NavLinkItems = () => {
  const dispatch = useAppDispatch();
  const activePage = useAppSelector(selectCurrentPage);

  const handleClick = (name: string) => {
    dispatch(currentPage(name));
  };

  return (
    <>
      {menuLinks.map(({ name, route }) => (
        <S.LinkItem key={name}>
          <S.Link
            $isActiveLink={activePage === name}
            to={route}
            onClick={() => handleClick(name)}
          >
            {name}
          </S.Link>
        </S.LinkItem>
      ))}
    </>
  );
};

export default NavLinkItems;
