const INVOICE = {
  name: 'invoice',
  recordType: 'INVOICE',
  mappingFields: [{
    name: 'discoverySuppress',
    enabled: true,
    path: 'invoice.discoverySuppress',
    value: null,
    booleanFieldAction: 'AS_IS',
    subfields: [],
  }, {
    name: 'hrid',
    enabled: true,
    path: 'invoice.hrid',
    value: '',
    subfields: [],
  }],
};

export default INVOICE;
