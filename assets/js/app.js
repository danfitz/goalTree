var goalTree = {
  goals: [],

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

var loadGoals = function() {
  // 1. Removes any previously present elements in goalTree div
  var goalTreeDiv = document.getElementById("goalTree");
  while (goalTreeDiv.firstChild) {
    goalTreeDiv.removeChild(goalTreeDiv.firstChild);
  }

  // 2. Adds every goal into the now empty GoalTree div
  for (i = 0; i < goalTree.goals.length; i++) {
    var goalBranch = document.createElement("div"); // new branch
    goalBranch.classList.add("goalBranch"); // styling for branch
    var goalText = document.createElement("h2"); // new text
    goalText.innerHTML = goalTree.goals[i]; // contents of text
    goalBranch.appendChild(goalText); // append text to branch
    goalTreeDiv.appendChild(goalBranch); // append branch to tree
  }
  // document.getElementById("goalForm").style.display = "none";
}

document.getElementById("goalForm").addEventListener("submit", function(evt){
  evt.preventDefault();
  var goalInput = document.getElementById("goalInput");
  goalTree.addGoalToEnd(goalInput.value);
  goalInput.value = "";
  loadGoals();
});
