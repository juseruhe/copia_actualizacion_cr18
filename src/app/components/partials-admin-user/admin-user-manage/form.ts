import { Validators } from '@angular/forms';

/**
 * Interfaces
 */
import { IControlField } from '@interface/IControlField';

export const controlField: IControlField = {
  messages: {
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
  fields: {
    completeName: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    email: [null, Validators.compose([Validators.required, Validators.email])],
    documentType: [null, Validators.compose([Validators.required])],
    document: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])],
    area: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    cityId: [null, Validators.compose([Validators.required])],
    phone: [null, Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(14)])],
    regionalId: [null, Validators.compose([Validators.required])],
    roleId: [null, Validators.compose([Validators.required])],
    active: [null, Validators.compose([])],
  }
};
