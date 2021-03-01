function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair="*") {
  return function(adj="special") {
    return `You are ${flair}${adj}${flair}!`
  }
}

const Calculator = { 
  add : function(n1, n2) { return n1 + n2 },
  subtract : function(n1, n2) { return n1 - n2 },
  multiply: function(n1, n2) { return n1 * n2 },
  divide: function(n1, n2) { return n1 / n2 }
};

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}
