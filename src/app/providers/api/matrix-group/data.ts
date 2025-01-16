
/**
 * Models
 */
import { MatrixResponse } from '@model/MatrixResponse';
import { MatrixGroup } from '@model/MatrixGroup';
import { MatrixDimensionResponse } from '@model/MatrixDimensionResponse';

export const data: {
  matrixGroupList: MatrixGroup[],
  maturityMatrix: MatrixGroup[],
  matrixResponseList: MatrixResponse[],
  matrixDimensionResponseList: MatrixDimensionResponse[]
} = {
  matrixGroupList: [{
    id: 1,
    name: 'Evaluación de Madurez',
    created: new Date(),
    updated: new Date()
  },
  {
    id: 2,
    name: 'Capacidad',
    created: new Date(),
    updated: new Date()
  },
  {
    id: 3,
    name: 'Escala',
    created: new Date(),
    updated: new Date()
  }],
  maturityMatrix: [
    {
      id: 1,
      name: 'Evaluación de Madurez',
      created: new Date(),
      updated: new Date(),
      matrixSubgroupList: [
        {
          id: 1,
          name: 'Tecnología',
          matrixGroupId: 1,
          matrixDimensionList: [
            {
              id: 1,
              name: 'Software',
              matrixTopicList: [
                {
                  id: 1,
                  name: 'Especificación y gestión',
                  matrixDimensionId: 1,
                  matrixQuestionList: [
                    {
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
                    }
                  ],
                  created: new Date(),
                  updated: new Date()
                },
                {
                  id: 2,
                  name: 'Multidisciplinar',
                  matrixDimensionId: 1,
                  created: new Date(),
                  updated: new Date()
                },
                {
                  id: 3,
                  name: 'Tema a tratar 3',
                  matrixDimensionId: 1,
                  created: new Date(),
                  updated: new Date()
                },
                {
                  id: 4,
                  name: 'Tema a tratar 4',
                  matrixDimensionId: 1,
                  created: new Date(),
                  updated: new Date()
                },
                {
                  id: 5,
                  name: 'Tema a tratar 5',
                  matrixDimensionId: 1,
                  created: new Date(),
                  updated: new Date()
                },
                {
                  id: 6,
                  name: 'Tema a tratar 6',
                  matrixDimensionId: 1,
                  created: new Date(),
                  updated: new Date()
                },
                {
                  id: 7,
                  name: 'Tema a tratar 7',
                  matrixDimensionId: 1,
                  created: new Date(),
                  updated: new Date()
                },
                {
                  id: 8,
                  name: 'Tema a tratar 8',
                  matrixDimensionId: 1,
                  created: new Date(),
                  updated: new Date()
                }
              ],
              matrixSubgroupId: 1,
              type: 2,
              created: new Date(),
              updated: new Date()
            },
            {
              id: 2,
              name: 'Hardware',
              matrixSubgroupId: 1,
              type: 1,
              created: new Date(),
              updated: new Date()
            },
            {
              id: 3,
              name: 'Red',
              matrixSubgroupId: 1,
              type: 1,
              created: new Date(),
              updated: new Date()
            }
          ],
          created: new Date(),
          updated: new Date()
        },
        {
          id: 2,
          name: 'Procesos',
          matrixGroupId: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          id: 3,
          name: 'Políticas',
          matrixGroupId: 1,
          created: new Date(),
          updated: new Date()
        }
      ]
    },
    {
      id: 2,
      name: 'Capacidad',
      created: new Date(),
      updated: new Date()
    },
    {
      id: 3,
      name: 'Escala',
      created: new Date(),
      updated: new Date()
    }
  ],
  matrixResponseList: [
    {
      matrixQuestionId: 2,
      matrixTopicId: 1,
      userId: 1
    }
  ],
  matrixDimensionResponseList: [
    {
      matrixDimensionId: 1,
      matrixPublishId: 1,
      countProject: 3,
      userId: 1,
    }
  ]
};
