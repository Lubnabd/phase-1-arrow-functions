const foo = function() {
    return 'bar';
  }

  const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  }

  const nums = [1,2,3];
const squares = nums.map(x => x ** 2); 
squares; 
nums; 

finishedItems = overdueTodoItems.map( item => item.className = "complete" );
header.innerText = `You finished ${finishedItems.length} items!`;

lapsedUserAccounts.map( u => sendBillTo(u.address) );
