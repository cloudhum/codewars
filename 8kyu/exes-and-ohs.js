function XO(str) {
  
    let xs = 0;
    let os = 0;
    
    for (let i = 0; i < str.length; i++){
      if (str[i] == "x"|| str[i] == "X"){
        xs++;
      }
      
      if(str[i] == "o" || str[i] == "O"){
        os++;
      }
    }
   
    return (xs == os);
    
  }