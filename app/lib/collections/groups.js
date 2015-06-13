Groups = new Mongo.Collection('groups');


if (Meteor.isServer) {
  Groups.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

// Groups.deny({
//   insert: function (userId, doc) {
//     return true;
//   },

//   update: function (userId, doc, fieldNames, modifier) {
//     return true;
//   },

//   remove: function (userId, doc) {
//     return true;
//   }
// });
}

Groups.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 100
  },
  about: {
    type: String,
    label: "About",
    max: 1500
  },
  // keywords: {
  //   type: [String],
  //   label: "Research Keywords",
  //   maxCount: 8
  // },
  // university: {
  //   type: String,
  //   label: "University",
  //   max: 100
  // },
  // website: {
  //   type: String,
  //   label: "Website",
  //   max: 300,
  //   optional: true,
  // },
  // email:{
  //   type: [String],
  //   label: "Email(s)",
  //   maxCount: 4,
  //   optional: true,

  // },  
  // telephone: {
  //   type: [String],
  //   label: "Telephone(s)",
  //   maxCount: 4,
  //   optional: true
  // },
  // fax: {
  //   type: String,
  //   label: "Fax",
  //   max: 50,
  //   optional:true
  // }

}));