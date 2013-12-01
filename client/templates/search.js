Template.search.events({
  "click .search-btn": function(e,tmpl){
    Session.set("search-duration", $(tmpl.find("#search-duration")).val());
  }
});
