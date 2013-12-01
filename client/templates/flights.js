Template.flights.helpers({
  flights: function(){
    if(Session.get("search-duration")){
      return flights = [ //mock data for demo
        {_id: "123", avgPrice: "123", count: 123},
        {_id: "456", avgPrice: "456", count: 456}
      ];
    }else{
      return [];
    }
  },
  showQuotes: function(){
    return Session.get("showQuotes");
  }
});

Template.flights.events({
  "click .quotes-btn": function(e, tmpl){
    Session.set("showQuotes", true);
  }
});
