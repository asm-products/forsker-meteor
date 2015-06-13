Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

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