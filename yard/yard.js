Sale = new Mongo.Collection('sale');

if (Meteor.isClient) {
  Meteor.subscribe('sale');
  Template.yard.rendered = function() {

  };
Template.yard.helpers({
  addSale: function(){
     return Sale.find();

  },

});

Template.yard.events({
  "submit form": function(event, template){
     event.preventDefault();
     var saleName = event.target.saleName.value;
     var saleLoc = event.target.saleLoc.value;
     var add = event.target.add.value;
     var add2 = event.target.add2.value;
     var zip = event.target.zip.value;
     var desc = event.target.desc.value;

  Sale.insert({
    saleName:saleName,
    location:saleLoc,
    address:add,
    address2:add2,
    zip:zip,
    description:desc
  });
  event.target.saleName.value ="";
  event.target.saleLoc.value ="";
  event.target.add.value ="";
  event.target.add2.value ="";
  event.target.zip.value ="";
  event.target.desc.value = "";
  return false;
  }
});
}

if(Meteor.isServer){
    Meteor.publish('sale', function(){
      return Sale.find();
    });
}
