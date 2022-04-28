import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState
} from 'react';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import {
  changeOrderStatus,
  selectSendOrderStatus,
  sendOrder,
} from '../../store/quests-slice/quests-slice';
import {
  changePopupCondition,
  selectChangePopupСondition,
} from 'src/store/app-slice/app-slice';

import { FetchStatus } from 'src/utils/const';

import * as S from './quest-modal.styled';
import { ReactComponent as IconClose } from '../../assets/img/icon-close.svg';

const REG_EXP_NAME = /^[аА-яЯaA-zZ'][аА-яЯaA-zZ -' ]+[аА-яЯaA-zZ']?$/i;
const REG_EXP_PHONE = /[\d+]{10}/;
const REG_EXP_PEOPLE_COUNT = /[\d+]/;

interface ModalField {
  value: string;
  regexp: RegExp;
  error: boolean;
  errorText: string;
}

type InitialState = { [key: string]: ModalField };

const fields = {
  name: {
    label: 'Ваше Имя',
    type: 'text',
    placeholder: 'Имя',
  },
  tel: {
    label: 'Контактный телефон',
    type: 'tel',
    placeholder: 'Телефон',
  },
  people: {
    label: 'Количество участников',
    type: 'number',
    placeholder: 'Количество участников',
  },
};

const QuestModal = () => {
  const dispatch = useAppDispatch();
  const sendOrderStatus = useAppSelector(selectSendOrderStatus);
  const popupСondition = useAppSelector(selectChangePopupСondition);
  const [isChecked, setIsChecked] = useState(false);
  const [formState, setFormState] = useState<InitialState>({
    name: {
      value: '',
      regexp: REG_EXP_NAME,
      error: false,
      errorText: 'Имя больше одной буквы',
    },
    tel: {
      value: '',
      regexp: REG_EXP_PHONE,
      error: false,
      errorText: 'Длина номера 10 символов',
    },
    people: {
      value: '',
      regexp: REG_EXP_PEOPLE_COUNT,
      error: false,
      errorText: 'Обязательно укажите количество участников',
    },
  });

  useEffect(() => {
    if (sendOrderStatus === FetchStatus.Success) {
      dispatch(changePopupCondition(!popupСondition));
      dispatch(changeOrderStatus(FetchStatus.Idle));
    }
  }, [dispatch, popupСondition, sendOrderStatus]);

  const isPending = sendOrderStatus === FetchStatus.Pending;
  const isValid = Object.values(formState).some(({ error }) => error);

  if (sendOrderStatus === FetchStatus.Failed) {
    toast.error('Неизвестная ошибка. Попробуйте ещё раз!');
  }

  if (sendOrderStatus === FetchStatus.Success) {
    toast.success(
      `Спасибо за обращение! Квест забронирован на имя ${formState.name.value}!`,
    );
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.target;

    const regExp = formState[name].regexp;
    const isValid = regExp.test(value);

    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        error: !isValid,
        value,
      },
    }));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const data = {
      name: formState.name.value,
      peopleCount: Number(formState.people.value),
      phone: formState.tel.value,
      isLegal: isChecked,
    };

    dispatch(sendOrder(data));
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn
          onClick={() => dispatch(changePopupCondition(!popupСondition))}
        >
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleSubmit}
        >
          {Object.entries(fields).map(
            ([name, { label, type, placeholder }]) => (
              <S.BookingField key={name} error={formState[name].error}>
                <S.BookingLabel htmlFor={name}>{label}</S.BookingLabel>
                <S.BookingInput
                  onChange={handleChange}
                  type={type}
                  id={name}
                  name={name}
                  value={formState[name].value}
                  placeholder={placeholder}
                  required
                  disabled={isPending}
                  error={formState[name].error}
                />
                {formState[name].error && (
                  <S.BookingInputError>
                    {formState[name].errorText}
                  </S.BookingInputError>
                )}
              </S.BookingField>
            ),
          )}

          <S.BookingSubmit
            type="submit"
            disabled={isValid || isPending || !isChecked}
          >
            Отправить заявку
          </S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              onChange={handleCheckboxChange}
              checked={isChecked}
              disabled={isPending}
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
            {!isChecked && (
              <S.BookingInputError>
                Не забудьте ознакомиться и подтвердить
              </S.BookingInputError>
            )}
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default QuestModal;
