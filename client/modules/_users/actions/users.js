/* eslint-disable no-console */
export default {

  add({Meteor, LocalState, FlowRouter}, data) {
    // console.log('actions._users.add data', data);
    const userObject = {
      email: data.email,
      password: data.password1,
      profile: {
        firstName: data.firstName,
        lastName: data.lastName
      },
      role: data.role
    };

    Meteor.call('_users.add', userObject, (err, response) => {
      if (err) {
        return LocalState.set('_users.SAVE_ERROR', err.message);
      }
      if (response._idNew) {
        FlowRouter.go('/users/' + response._idNew);
      }
    });

  },

  update({Meteor, LocalState, FlowRouter}, data, _id) {
    // console.log ('actions._users.update _id', _id);
    // console.log ('actions._users.update data', data);

    Meteor.call('_users.update', data, _id, (err) => {
      if (err) {
        return LocalState.set('_users.SAVE_ERROR', err.message);
      }
      FlowRouter.go(`/users/`);
    });
  },

  delete({Meteor, LocalState, FlowRouter}, _id) {
    // console.log('actions._users.delete _id', _id);
    // console.log('actions._users.delete Meteor.userId()', Meteor.userId());

    Meteor.call('_users.delete', _id, (err) => {
      if (_id === Meteor.userId()) {
        // console.log('cant delete self');
        return LocalState.set('_users.DELETE_ERROR', 'Seppuku :-) ');
      }
      if (err) {
        return LocalState.set('_users.DELETE_ERROR', err.message);
      }
      FlowRouter.go(`/users`);

    });
  },

  clearErrors({LocalState}) {
    LocalState.set('_users.DELETE_ERROR', null);
    return LocalState.set('_users.SAVE_ERROR', null);
  }

};
