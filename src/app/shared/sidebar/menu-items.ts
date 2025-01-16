import { ERole } from '@enum/role.enum';
import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
/*   {
    path: '',
    title: 'Personal',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  }, */
  {
    path: '/dashboard',
    title: 'Resultados',
    icon: 'fa-columns',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/profile',
    title: 'Mi perfil',
    icon: 'fa-user',
    class: '',
    roleId: [ERole.USER],
    extralink: false,
    submenu: []
  },
  {
    path: '/admin-profile',
    title: 'Mi perfil',
    icon: 'fa-user',
    class: '',
    roleId: [ERole.SUPERADMIN, ERole.ADMIN, ERole.QUERY],
    extralink: false,
    submenu: []
  },
  {
    path: '/admin-user',
    title: 'Usuarios',
    icon: 'fa-users',
    class: '',
    roleId: [ERole.SUPERADMIN],
    extralink: false,
    submenu: []
  },
  {
    path: '/admin-client',
    title: 'Empresas y personas',
    icon: 'fa-object-group',
    class: '',
    roleId: [ERole.SUPERADMIN, ERole.ADMIN, ERole.QUERY],
    extralink: false,
    submenu: []
  },
  {
    path: '/matrix',
    title: 'Evaluación',
    icon: 'fa-crosshairs',
    class: 'has-arrow',
    extralink: false,
    roleId: [ERole.SUPERADMIN, ERole.ADMIN, ERole.QUERY],
    submenu: [
      {
        path: '/matrix',
        title: 'Administración',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/matrix-preview',
        title: 'Previsualización',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/matrix-category',
        title: 'Categorias',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '/maturity-matrix',
    title: 'Evaluación',
    icon: 'fa-crosshairs',
    class: '',
    roleId: [ERole.USER],
    extralink: false,
    submenu: []
  },
  /*{
    path: '/instructive',
    title: 'Antes de empezar',
    icon: 'fa-address-card',
    class: '',
    roleId: [ERole.USER],
    extralink: false,
    submenu: []
  },*/
  {
    path: '/road-map',
    title: 'Mapa de ruta',
    icon: 'fa-map-marker-alt',
    class: '',
    roleId: [ERole.USER],
    extralink: false,
    submenu: []
  },
  /*{
    path: '/where-are-you',
    title: 'Donde estoy respecto a BIM',
    icon: 'fa-ellipsis-h',
    class: '',
    roleId: [ERole.USER],
    extralink: false,
    submenu: []
  },*/
  /*{
    path: '/bim-presentation',
    title: 'Presentación BIM',
    icon: 'fa-desktop',
    class: '',
    roleId: [ERole.USER],
    extralink: false,
    submenu: []
  },*/
  {
    path: '/admin-download',
    title: 'Descargar bases',
    icon: 'fa-download',
    class: '',
    roleId: [ERole.SUPERADMIN, ERole.ADMIN, ERole.QUERY],
    extralink: false,
    submenu: []
  },
  {
    path: '/admin-result-period',
    title: 'Resultado por período',
    icon: 'fa-file-alt',
    class: '',
    roleId: [ERole.SUPERADMIN, ERole.ADMIN, ERole.QUERY],
    extralink: false,
    submenu: []
  }
  /* {
    path: '',
    title: 'UI',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'UI Elements',
    icon: 'icon-Paint-Brush',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/component/accordion',
        title: 'Accordion',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/alert',
        title: 'Alert',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/carousel',
        title: 'Carousel',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/dropdown',
        title: 'Dropdown',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/modal',
        title: 'Modal',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/pagination',
        title: 'Pagination',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/poptool',
        title: 'Popover & Tooltip',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/progressbar',
        title: 'Progressbar',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/rating',
        title: 'Ratings',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/tabs',
        title: 'Tabs',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/timepicker',
        title: 'Timepicker',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/buttons',
        title: 'Button',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Menu Levels',
    icon: 'mdi mdi-notification-clear-all',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '',
        title: 'Second Level',
        icon: '',
        class: '',
        extralink: true,
        submenu: []
      },
      {
        path: '',
        title: 'Second Child',
        icon: '',
        class: 'has-arrow',
        extralink: false,
        submenu: [
          {
            path: '',
            title: 'Third 1.1',
            icon: '',
            class: '',
            extralink: false,
            submenu: []
          },
          {
            path: '',
            title: 'Third 1.2',
            icon: '',
            class: '',
            extralink: false,
            submenu: []
          }
        ]
      }
    ]
  } */
];
