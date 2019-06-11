var goalTree = {
  /* We need a way to store goals */
  goals: [],

  addGoal: function(goalText, depth) {
    this.goals.splice(depth, 0, goalText);
  },

  renameGoal: function(goalText, depth) {
    this.goals[depth] = goalText;
  },

  deleteGoal: function(depth) {
    /* This deletes the target goal + all goals below it */
    this.goals.splice(depth, this.goals.length-depth);
  },

  moveGoal: function(startingDepth, targetDepth) {
    /* code */
  }
}
