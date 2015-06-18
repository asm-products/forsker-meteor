Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'

  // e.g. of wait on
  // waitOn: function (){return  Meteor.subscribe('posts');} 
});

Router.route('/', {
  name: 'home',
  // data: function (){return Posts.findOne( this.params._id );} 
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

////////////////////////////////////////

Router.route('/groups/create', {
  name: 'createGroup',
  controller: 'GroupsController',
  action: 'create',
  where: 'client'
});

Router.route('/groups', {
  name: 'groupsList',
  controller: 'GroupsController',
  action: 'list',
  where: 'client'
});

Router.route('/groups/:_id', {
  name: 'editGroup',
  controller: 'GroupsController',
  action: 'edit',
  where: 'client'
});

////////////////////////////////////////

Router.route('/positions/create', {
  name: 'createPosition',
  controller: 'PositionsController',
  action: 'create',
  where: 'client'
});

Router.route('/positions', {
  name: 'positionsList',
  controller: 'PositionsController',
  action: 'list',
  where: 'client'
});

Router.route('/positions/:_id', {
  name: 'editPosition',
  controller: 'PositionsController',
  action: 'edit',
  where: 'client'
});