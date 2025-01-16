import { Validators } from '@angular/forms';

/**
 * Interfaces
 */
import { IControlField } from '@interface/IControlField';

export const controlField: IControlField = {
  messages: {
    name: {
      required: 'Campo requerido.',
      minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
      maxlength: 'Es demasiado larga, máximo 450 caracteres.',
    },
    matrixCategoryId: {
      required: 'Campo requerido.'
    }
  },
  fields: {
    name: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(450)])],
    matrixCategoryId: [null, Validators.compose([Validators.required])]
  }
};
