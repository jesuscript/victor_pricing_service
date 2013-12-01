Template.flights.helpers({
  flights: function(){
    if(Session.get("search-duration")){
      return flights = Collections.flights.find().fetch();
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
