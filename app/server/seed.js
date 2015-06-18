Meteor.startup(function() {
Factory.define('group', Groups, {
  name: function() {
    return Fake.sentence(2);
  },
  about: function() {
    return Fake.sentence(8);
  },
  // keywords: function(){
  //   return [Fake.sentence(2), Fake.sentence(2)];
  // },
  // university: function(){
  //   return Fake.sentence(2);
  // },
  // website: function(){
  //   return Fake.sentence(2);
  // },
  // email: function(){
  //   return [Fake.sentence(2), Fake.sentence(2)];
  // },  
  // telephone: function(){
  //   return [Fake.sentence(2), Fake.sentence(2)];
  // },
  // fax: function(){
  //   return Fake.sentence(2);
  // },

});

// Add this if you want to remove all messages before seeding
// Groups.remove({});

// if (Groups.find({}).count() === 0) {
//   _(10).times(function(n) {
//     Factory.create('group');
//   });
// }
});