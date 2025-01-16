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
        minlength: 'No es lo suficientemente larga',
        maxlength: 'Demasiado larga',
        required: 'Campo requerido.',
        max: "Demasiado largo",
        min: "Demasiado corta"
      },
      document2:{
        minlength: 'No es lo suficientemente larga, mínimo 1 caracter.',
        maxlength:'Demasiado larga, máximo 1 caracter.',
        max: "Demasiado largo",
        min: "Demasiado corta",
        required: "Campo requerido"
      },
      commercialName: {
        minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
        required: 'Campo requerido.',
      },
      city: {
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
      belongsBim: {},
      terms: {
        required: 'Campo requerido.'
      }
    },
    company: {
      companyName: {
        minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.',
        required: 'Campo requerido.',
      },
      nit: {
        minlength: 'No es lo suficientemente larga, mínimo 9 caracteres.',
        maxlength: 'Demasíado larga, máximo 9 carácteres',
        required: 'Campo requerido.',
        max: 'Es demasíado Largo',
        min: 'Mínimo 9 carácteres'
      },
      nit2: {
        minlength: 'No es lo suficientemente larga, mínimo 1 caracter.',
        maxlength: 'Demasíado larga, máximo 1 carácter',
        required: 'Campo requerido.',
        max: 'Es demasíado Largo',
        min: 'Mínimo 1 carácter'
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
      category: {
        required: 'Campo requerido.'
      },
      sizeCompany: {
        required: 'Campo requerido.'
      },
      city: {
        required: 'Campo requerido.'
      },
      allyCamacol: {},
      belongsBim: {},
      terms: {
        required: 'Campo requerido.'
      }
    }
  },
  fields: {
    person: {
      completeName: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      documentType: [null, Validators.compose([Validators.required])],
      document: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])],
      document2:[null, Validators.compose([])],
      commercialName: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      city: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(14)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      belongsBim: [null, Validators.compose([])],
      terms: [null, Validators.compose([Validators.required])],
      recaptcha: [null, Validators.compose([])]
    },
    company: {
      companyName: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      nit: [null, Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9),
        Validators.min(100000000), Validators.max(999999999)
     ]) ],
      nit2: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1),
        Validators.min(0),Validators.max(9)])],
      inChargeName: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      charge: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      phone: [null, Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(14)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      category: [null, Validators.compose([Validators.required])],
      sizeCompany: [null, Validators.compose([Validators.required])],
      city: [null, Validators.compose([Validators.required])],
      allyCamacol: [null, Validators.compose([])],
      belongsBim: [null, Validators.compose([])],
      terms: [null, Validators.compose([Validators.required])],
      recaptcha: [null, Validators.compose([])]
    }
  }

  
};
