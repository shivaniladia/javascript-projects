function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }
  console.log(makeLine(5));

  
  for (let i = 1; i <= 9; i++){
    console.log(makeLine(i));
   /* if (i == 9){
        for (let i = 9; i>=1; i - 2){
            console.log(makeLine(i));
        }
    } 
  }
  

