const ORDER = {
  name: 'order',
  recordType: 'ORDER',
  mappingFields: [{
    name: 'discoverySuppress',
    enabled: true,
    path: 'order.discoverySuppress',
    value: null,
    booleanFieldAction: 'AS_IS',
    subfields: [],
  }, {
    name: 'hrid',
    enabled: true,
    path: 'order.hrid',
    value: '',
    subfields: [],
  }],
};

export default ORDER;
