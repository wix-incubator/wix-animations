'use strict';

const experiments = {

};

module.exports = {
  title: 'Wix Stack React Example Application',
  debug: true,
  experiments: JSON.stringify(experiments),
  locale: 'en',
  basename: '/',
  clientTopology: {
    staticsBaseUrl: '//localhost:3200/'
  },
  newRelicEndUserHeader: '',
  newRelicEndUserFooter: ''
};
