// code your solution here
// index.js

// saturdayFun function
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // mondayWork function
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // wrapAdjective function
  function wrapAdjective(symbol = '*') {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }
  
  // Export functions to be used in the tests
  module.exports = { saturdayFun, mondayWork, wrapAdjective };
  