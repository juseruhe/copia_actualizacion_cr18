import { Validators } from '@angular/forms';

/**
 * Interfaces
 */
import { IControlField } from '@interface/IControlField';

export const controlField: IControlField = {
  messages: {
    password: {
      required: 'Campo requerida.',
      minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.'
    }
  },
  fields: {
    password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
  }
};
