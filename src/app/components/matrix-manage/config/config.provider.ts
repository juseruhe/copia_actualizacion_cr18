/* Configurations */
import { CRUD_CONFIG } from './crud.config';
import { REDIRECTION_CONFIG } from './redirection.config';

export const MATRIX_MANAGE_CONFIG = [
  {
    provide: 'CRUD_CONFIG',
    useValue: CRUD_CONFIG
  },
  {
    provide: 'REDIRECTION_CONFIG',
    useValue: REDIRECTION_CONFIG
  }
];
