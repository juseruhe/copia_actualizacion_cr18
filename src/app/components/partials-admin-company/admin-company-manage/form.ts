import { Validators } from '@angular/forms';

/**
 * Interfaces
 */
import { IControlField } from '@interface/IControlField';

export const controlField: IControlField = {
  messages: {
    companyName: {
      minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
      required: 'Campo requerido.',
    },
    nit: {
      minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
      required: 'Campo requerido.',
    },
    inChargeName: {
      minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
      required: 'Campo requerido.',
    },
    charge: {
      minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
      required: 'Campo requerido.',
    },
    email: {
      email: 'Correo electrónico inválido.',
      required: 'Campo requerido.'
    },
    phone: {
      minlength: 'No es lo suficientemente larga, mínimo 7 caracteres.',
      maxlength: 'Demasiado larga, máximo 14 caracteres.',
      required: 'Campo requerido.'
    },
    categoryId: {
      required: 'Campo requerido.'
    },
    sizeCompany: {
      required: 'Campo requerido.'
    },
    cityId: {
      required: 'Campo requerido.'
    },
    allyCamacol: {},
    belongsBim: {}
  },
  fields: {
    companyName: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    nit: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    inChargeName: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    charge: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    email: [null, Validators.compose([Validators.required, Validators.email])],
    phone: [null, Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(14)])],
    categoryId: [null, Validators.compose([Validators.required])],
    sizeCompany: [null, Validators.compose([Validators.required])],
    cityId: [null, Validators.compose([Validators.required])],
    allyCamacol: [null, Validators.compose([])],
    belongsBim: [null, Validators.compose([])],
  }
};
