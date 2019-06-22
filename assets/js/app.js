var goalTree = {
  goals: [1,2,3,4],

  addGoalToEnd: function(goalText) {
    this.goals.push(goalText);
  },

  addGoal: function(goalText, depth) {
    this.goals.splice(depth, 0, goalText);
  },

  renameGoal: function(goalText, depth) {
    this.goals[depth] = goalText;
  },

  deleteGoal: function(depth) {
    this.goals.splice(depth, 1);
  },

  moveGoal: function(currentDepth, targetDepth) {
    var goalText = this.goals[currentDepth]; // locally stores goal
    this.deleteGoal(currentDepth); // removes goal from current location
    this.addGoal(goalText, targetDepth); // adds goal at new location
  }
}

document.getElementById("inputForm").addEventListener("submit", function(evt){
  evt.preventDefault();
  goalTree.addGoalToEnd(evt.value);
  console.log(evt);
});
