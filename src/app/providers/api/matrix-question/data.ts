
/**
 * Models
 */
import { MatrixQuestion } from '@model/MatrixQuestion';

export const data: {
  matrixQuestionList: MatrixQuestion[]
} = {
  matrixQuestionList: [{
    id: 1,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    matrixTopicId: 1,
    matrixCategoryId: 1,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 2,
    name: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
    matrixTopicId: 1,
    matrixCategoryId: 2,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 3,
    name: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    matrixTopicId: 1,
    matrixCategoryId: 3,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 4,
    name: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',
    matrixTopicId: 1,
    matrixCategoryId: 4,
    created: new Date(),
    updated: new Date()
  }]
};
