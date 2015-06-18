Groups = new Mongo.Collection('groups');


function checkAuthor (userId, doc) {
  // http://stackoverflow.com/questions/7310109/whats-the-difference-between-and-in-javascript
  return (userId && doc.createdBy === userId);
}

if (Meteor.isServer) {

  Groups.allow({
    insert: function (userId, doc) {
      return checkAuthor(userId, doc);
    },

    update: function (userId, doc, fieldNames, modifier) {
      return checkAuthor(userId, doc);
    },

    remove: function (userId, doc) {
      return checkAuthor(userId, doc);
    }
  });
}

Groups.attachSchema(new SimpleSchema({
  createdBy: {
    type: String,
    autoValue: function() {
      return this.userId
    }
  },
  name: {
    type: String,
    max: 100
  },
  about: {
    type: String,
    max: 1500
  },
  // keywords: {
  //   type: [String],
  //   label: "Research Keywords",
  //   maxCount: 8
  // },
  // university: {
  //   type: String,
  //   max: 100
  // },
  // website: {
  //   type: String,
  //   max: 300,
  //   optional: true,
  // },
  // email:{
  //   type: [String],
  //   label: "Email(s)",
  //   regEx: SimpleSchema.RegEx.Email
  //   maxCount: 4,
  // },  
  // telephone: {
  //   type: [String],
  //   label: "Telephone(s)",
  //   maxCount: 4,
  //   optional: true
  // },
  // fax: {
  //   type: String,
  //   max: 50,
  //   optional:true
  // },
  authors: {
    type: [String],
    autoValue: function() {return [this.userId];}
  },
   createdAt: {
    type: Date,
      autoValue: function() {
        if (this.isInsert) {
          return new Date;
        } else if (this.isUpsert) {
          return {$setOnInsert: new Date};
        } else {
          this.unset();
        }
      }
  },

}));