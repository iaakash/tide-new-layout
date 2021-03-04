export enum Layouts {
  Minimal,
  Main,
}

export const APP_CONFIG = {
  'overview' : {
    title : 'Overview',
    layout: Layouts.Main
  },
  'customer' :{
    title : 'Customer',
    layout: Layouts.Main
  },
  'create-invoice' :{
    title : 'Create Invoice',
    layout: Layouts.Minimal
  }
}
