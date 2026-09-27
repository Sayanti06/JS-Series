const accountId = 144553
let accountEmail = "sayantidas@google.com"
var accountPassword = "12345"
accountCity = " Kolkata" // not allowed
let accountState;
// accountId = 2 // not allowed



accountEmail = "hc@hc.com"
accountPassword = "123456"
accountCity = "Delhi"
// accountState = "Delhi"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);
// console.log(accountEmail);

/*
Prefer not to use var, use let and const instead.
Because var is function scoped and let and const are block scoped.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
 