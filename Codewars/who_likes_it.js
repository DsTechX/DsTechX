function likes(names) {
  let users = names.filter(elm => elm); // Remove emply values
	
  if (Array.isArray(users)) {
  	let nbUsers = users.length;
    let peoples = "";
  	
    if (!nbUsers) {
    	return "no one like this";
    } else {
    
    	if (nbUsers === 1) {
      	return users[0] + " like this";
      } else {
      
        for (let i = 0; i < nbUsers; i++) {
        	
          if (nbUsers === 2) {
          	peoples += (!i ? "" : " and ") + users[i];
          } else {          
            //peoples += (!i ? "" : (i <= 1 ? ", " : " and " )) + users[i];  
            peoples += (!i ? "" : (i <= 1 ? ", " : " and " ));
            
            if (i <= 2 && nbUsers <= 3) {
            	peoples += users[i];
              break;
            } else {
            	peoples += (nbUsers - 2) + " others";
              break;
            }  
          } 
        }
        
        return peoples + " likes this";
      }
    }
  }
}

//let names = ["Peter"];
//let names = ["Jacob", "Alex"];
//let names = ["Max", "John", "Mark"];
let names = ["Alex", "Jacob", "Mark", "Max"];

console.log(likes(names));
