module.exports = function longestConsecutiveLength(array) {
  // your solution here
    // your solution here
    array.sort((a,b)=>a-b);
    console.log(array);
    var maxSeq = 0, tempSeq = 0;
    if(array.length == 0){
      return 0;
    }
    for(let i = 0; i < array.length-1; i++){
        var resultVal = array[i+1]-array[i];
        if(resultVal==1){
            tempSeq++;
        }else if(resultVal!=0){
            if(tempSeq > maxSeq){
                maxSeq = tempSeq;
                tempSeq = 0;
            }
            tempSeq = 0;
        }
    }
    if(maxSeq ==0){
      
        maxSeq = tempSeq;
    }
  return maxSeq+1;
}
