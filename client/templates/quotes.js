Template.quotes.helpers({
  quotes: function(){
    return Collections.quotes.find().fetch();
  }
});

Template.quotes.events({
  "click .close": function(e,tmpl){
    Session.set("showQuotes");
  }
});

