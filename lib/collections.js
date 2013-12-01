Collections = {
  flights: new Meteor.Collection("flights"),
  quotes: new Meteor.Collection("quotes")
};


if(Meteor.isServer){//mocking some data
  if(!Collections.flights.findOne({})){ 
    Collections.flights.insert({_id: "123", avgPrice: "123", count: 123});
    Collections.flights.insert({_id: "456", avgPrice: "456", count: 456});
  }
  if(!Collections.quotes.findOne({})){ 
    Collections.quotes.insert({
      aircraftType: "abc",
      deptAirport: "abc",
      destAirport: "abc",
      duration: 123,
      nettPrice: 123,
      id: "abc"
    });
    Collections.quotes.insert({
      aircraftType: "xyz",
      deptAirport: "xyz",
      destAirport: "xyz",
      duration: 456,
      nettPrice: 456,
      id: "xyz"
    });
  }
}
