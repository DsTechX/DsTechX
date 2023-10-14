function likes(names) {
    
    // check if names is an Array
    if (Array.isArray(names)) {
      let users = names.filter(elm => elm); // Remove emply values
      let nbUsers = users.length;
      let peoples = "";
      
      if (!nbUsers) { // No users
          return "no one likes this";
      } else {
      
        if (nbUsers === 1) { // Only one use case
            return users[0] + " likes this";
        } else {
          
          // For more than one user we format output message
          for (let i = 0; i < nbUsers; i++) {
            
            // First part formating, for the first two names 
            if (i <= 1) {
              peoples += (!i ? "" : (nbUsers === 2 ? " and " : ", " )) + users[i]
            } else {
              // Second part formating after the "and" we display the name 
              // if there is three names or "x others" if more than three names
              peoples += " and " + (nbUsers === 3 ? users[i] : (nbUsers - 2) + " others" );
              // The processing is finished, we force the loop to stop
              break;
            }
          }
          
          return peoples + " like this";
        }
      }
    }
  }

//let names = ["Peter"];
//let names = ["Jacob", "Alex"];
//let names = ["Max", "John", "Mark"];
let names = ["Alex", "Jacob", "Mark", "Max"];

console.log(likes(names));
