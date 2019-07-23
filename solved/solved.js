function translatePigLatin(str) {
    var vawels = ["a", "e", "i", "o", "u"];
    var found = false;
    var indx = null;
    for(var i = 0 ; i < str.length; i++){
      
      if(vawels.includes(str[i])){
            if(!found){
              found = true;
              indx = i;
            }
      }
  
    }
        if(indx == 0){
          //way
          str = str + "way";
        }else if (indx > 0){
          //ay
          var st = str.substr(indx);
          var en = str.substr(0,indx);
          str = st+en + "ay";
  
        }else{
          str = str + "ay";
        }
  
    return str;
  }
  
  translatePigLatin("consonant");