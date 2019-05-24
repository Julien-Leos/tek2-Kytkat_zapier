// get a list of disruptions
const listDisruptions = (z, bundle) => {
  const responsePromise = z.request({
    url: 'https://viatransit.fr/api/v1/disruptions',
    params: {
      network: bundle.inputData.name
    }
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content).disruptions);
};

module.exports = {
  key: 'disruption',
  noun: 'Disruption',

  list: {
    display: {
      label: 'Nouvelle Perturbation',
      description: 'Liste les nouvelles perturbations.'
    },
    operation: {
      inputFields: [
        {key: 'name', required: true}
      ],
      perform: listDisruptions
    }
  },

  sample: {
    id: 1,
    name: 'Test'
  },

  outputFields: [
    {key: 'id', label: 'ID'},
    {key: 'name', label: 'Name'}
  ]
};
