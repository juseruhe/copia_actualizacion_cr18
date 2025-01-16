import { Validators } from '@angular/forms';

/**
 * Interfaces
 */
import { IControlField } from '@interface/IControlField';

export const controlField: IControlField = {
  messages: {
    name: {
      required: 'Campo requerido.',
      minlength: 'No es lo suficientemente larga, mínimo 3 caracteres.',
      maxlength: 'Es demasiado larga, máximo 100 caracteres.',
    },
    description: {
      required: 'Campo requerido.',
      minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
      maxlength: 'Es demasiado larga, máximo 455 caracteres.',
    }
  },
  fields: {
    name: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
    description: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(455)])],
    type: [1, Validators.compose([Validators.required])],
    relevance: [0, Validators.compose([])]
  }
};
