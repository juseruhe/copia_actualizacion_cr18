import { Validators } from '@angular/forms';

/**
 * Interfaces
 */
import { IControlField } from '@interface/IControlField';

export const controlField: IControlField = {
  messages: {
    person: {
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
      commercialName: {
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
      password: {
        minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
        required: 'Campo requerido.',
      },
      belongsBim: {}
    },
    company: {
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
      password: {
        minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
        required: 'Campo requerido.',
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
    person: {
      completeName: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      email: [{value: null, disabled: true}, Validators.compose([Validators.required, Validators.email])],
      documentType: [null, Validators.compose([Validators.required])],
      document: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])],
      commercialName: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      cityId: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(14)])],
      belongsBim: [null, Validators.compose([])]
    },
    company: {
      companyName: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      nit: [{value: null, disabled: true}, Validators.compose([Validators.required, Validators.minLength(6)])],
      inChargeName: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      charge: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      email: [{value: null, disabled: true}, Validators.compose([Validators.required, Validators.email])],
      phone: [null, Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(14)])],
      categoryId: [null, Validators.compose([Validators.required])],
      sizeCompany: [null, Validators.compose([Validators.required])],
      cityId: [null, Validators.compose([Validators.required])],
      allyCamacol: [null, Validators.compose([])],
      belongsBim: [null, Validators.compose([])]
    },
    changePassword: {
      currentPassword: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      newPassword: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    }
  }
};
