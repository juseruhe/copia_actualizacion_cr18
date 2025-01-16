import { Validators } from '@angular/forms';

/**
 * Interfaces
 */
import { IControlField } from '@interface/IControlField';

export const controlField: IControlField = {
  messages: {
    adminProfile: {
      completeName: {
        minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
        required: 'Campo requerido.',
      },
      email: {
        email: 'Correo electrónico inválido.',
        required: 'Campo requerido.'
      },
      documentType: {
        required: 'Campo requerido.'
      },
      document: {
        minlength: 'No es lo suficientemente larga, mínimo 4 caracteres.',
        maxlength: 'Demasiado larga, máximo 12 caracteres.',
        required: 'Campo requerido.'
      },
      area: {
        minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
        required: 'Campo requerido.',
      },
      cityId: {
        required: 'Campo requerido.'
      },
      phone: {
        minlength: 'No es lo suficientemente larga, mínimo 7 caracteres.',
        maxlength: 'Demasiado larga, máximo 14 caracteres.',
        required: 'Campo requerido.'
      },
      roleId: {
        required: 'Campo requerido.'
      },
      regionalId: {
        required: 'Campo requerido.'
      },
      active: {}
    },
    changePassword: {
      currentPassword: {
        minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
        required: 'Campo requerido.',
      },
      newPassword: {
        minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
        required: 'Campo requerido.',
      },
      confirmPassword: {
        minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
        required: 'Campo requerido.',
      }
    }
  },
  fields: {
    adminProfile: {
      completeName: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      email: [{value: null, disabled: true}, Validators.compose([Validators.required, Validators.email])],
      documentType: [null, Validators.compose([Validators.required])],
      document: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])],
      area: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      cityId: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(14)])],
      regionalId: [null, Validators.compose([Validators.required])],
      roleId: [{value: null, disabled: true}, Validators.compose([Validators.required])],
      active: [{value: null, disabled: true}, Validators.compose([])],
    },
    changePassword: {
      currentPassword: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      newPassword: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    }
  }
};
