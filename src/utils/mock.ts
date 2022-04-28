import { image, name, datatype, lorem, phone } from 'faker';
import { Quest } from 'src/types/quest';
import { Order } from 'src/types/order';

export const mockQuest: Quest = {
  id: 123,
  title: lorem.words(),
  description: lorem.sentence(),
  previewImg: image.imageUrl(),
  coverImg: image.imageUrl(),
  type: lorem.word(),
  level: 'hard',
  peopleCount: [1, 3],
  duration: 0,
};

export const mockOrder: Order = {
  name: name.findName(),
  peopleCount: datatype.number(5),
  phone: phone.phoneNumber(),
  isLegal: true,
}
