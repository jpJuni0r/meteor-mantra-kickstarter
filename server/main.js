import publications from './publications';
import methods from './methods';
import addInitialUsers from './configs/initial_users.js';
import { initPosts, initColors, initWidgets } from './configs/initial_adds.js';

import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from '/lib/graphql/schema';
import resolvers from '/lib/graphql/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({
  graphiql: true,
  pretty: true,
  schema
});


Meteor.startup(function () {

  if ( process.env.LOGGLY_TOKEN &&
       process.env.LOGGLY_TOKEN.length &&
       process.env.LOGGLY_TOKEN.length === 36 ) {
    return;
  }

  if ( Meteor.settings.LOGGLY_TOKEN &&
       Meteor.settings.LOGGLY_TOKEN.length &&
       Meteor.settings.LOGGLY_TOKEN.length === 36 ) {
    return;
  }

/* eslint-disable no-console   */
  console.log('\n\n **STOPPED **\n' +
    '     Please ensure that your execution environment or the file, "settings.json", ' +
                             'has a valid Loggly authentication token named LOGGLY_TOKEN.\n' +
    '     either use `export LOGGLY_TOKEN=""` in the environment, or make a copy of ' +
                 '"settings.json.example", and correct the provided configuration fields.\n' +
    '     Then you can restart Meteor with the command : `meteor --settings=settings.json`\n');
/* eslint-enable console   */
  process.exit();

});

publications();
methods();
initPosts();
initColors();
initWidgets();
addInitialUsers();
