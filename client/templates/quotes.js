Template.quotes.helpers({
  quotes: function(){
    return [{
      aircraftType: "abc",
      deptAirport: "abc",
      destAirport: "abc",
      duration: 123,
      nettPrice: 123,
      id: "abc"
    },{
      aircraftType: "xyz",
      deptAirport: "xyz",
      destAirport: "xyz",
      duration: 456,
      nettPrice: 456,
      id: "xyz"
    }];
  }
});

Template.quotes.events({
  "click .close": function(e,tmpl){
    Session.set("showQuotes");
  }
});

