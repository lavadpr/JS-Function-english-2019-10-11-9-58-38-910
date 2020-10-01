function reverseString(message){
  var temp="";
  for(var i=1; i<message.length+1; i++){
    temp = temp + message[message.length-i];
  }
  console.log(temp)
}
reverseString('hello');
