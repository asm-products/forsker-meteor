Positions = new Mongo.Collection('positions');

if (Meteor.isServer) {
  Positions.allow({
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
}

Positions.attachSchema(new SimpleSchema({
  groubId: {
    type: String,
    autoValue: function() {
        if (this.isInsert) {
          return  Groups.findOne({createdBy: Meteor.userId()})._id;
        } else if (this.isUpsert) {
          return {$setOnInsert: Groups.findOne({createdBy: Meteor.userId()})._id};
        } else {
          this.unset();
        }
    }
  },
  // needed for knowing how posted the position
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
  describtion: {
    type: String,
    max: 1500
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
  // keywords: {
  //   type: [String],
  //   label: "Research Keywords",
  //   maxCount: 8
  // },
}));