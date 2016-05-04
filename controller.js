angular.module("ToDoList", ["LocalStorageModule"])
.controller("ToDoListController", ["$scope", "localStorageService", function(s,l) {
  if (l.get("ToDoList")) {
    s.todo = l.get("ToDoList");
  } else {
    s.todo = [];
  }

  s.$watchCollection("todo", function(){
    l.set("ToDoList", s.todo);
  });

  s.addAct = function() {
    s.todo.push(s.newAct);
    s.newAct = {};
  }
}]);
