import { ReactComponent as PokerFaceEmoji } from '../../assets/img/poker-face-emoji.svg';
import * as S from './home-empty.styled';

const HomeEmpty = () => (
  <S.Container>
    <PokerFaceEmoji
      width="200"
      height="200"
      style={{ marginBottom: '100px' }}
    />
    <S.Text>Что-то пошло не так. Попробуйте обновить страницу</S.Text>
  </S.Container>
);

export default HomeEmpty;
