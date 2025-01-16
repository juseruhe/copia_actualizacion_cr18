import { Validators } from '@angular/forms';

/**
 * Interfaces
 */
import { IControlField } from '@interface/IControlField';

export const controlField: IControlField = {
  messages: {
    login: {
      email: {
        email: 'Correo electrónico inválido.',
        required: 'Campo requerido.'
      },
      password: {
        required: 'Campo requerida.',
        minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.'
      }
    },
    reset: {
      email: {
        email: 'Correo electrónico inválido.',
        required: 'Campo requerido.'
      }
    }
  },
  fields: {
    login: {
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    },
    reset: {
      email: [null, Validators.compose([Validators.required, Validators.email])],
    }
  }
};
