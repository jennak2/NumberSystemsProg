function ConversionPart2() {
    //
    var SignedDecimalInt = document.getElementById("2_SignedInt").value;
    var positive = true;
    if (SignedDecimalInt.charAt(0) == "-") {
    positive = false;
    }

    if (positive == false) {
      var unsigned = parseInt(SignedDecimalInt.substring(1));
    } else {
      unsigned = parseInt(SignedDecimalInt);
    }
    var outputValue = "";
    //converts to base2
    while (unsigned != 0) {
      var t = unsigned % 2;
      outputValue = t + outputValue;
      unsigned = Math.trunc(unsigned / 2);
    }
    while (outputValue.length < 7) {
      outputValue += outputValue;
    }
    if (positive == false) {
      outputValue = 1 + outputValue;
    } else {
      outputValue += outputValue;
    }


    var l = outputValue.split("");
    var o = "";
    for(i = 0; i<l.length;i++){
      if(l[i] == 0){
        l[i] = 1;
      }
      else {
        l[i] = 0;
      }
      o +=l[i];
    }

    if(l[l.length-1]==0){
      l[l.length-1] = 1;
    } else{
      a = l.length -1;
      while(l[a]==1){
        a--;
      }
      l[a]=1;
      for(i=a+1;i<l.length;i++){
        l[i]=0;
      }
    }
    var o3;
    for(i = 0; i<l.length;i++){
      o3+=l[i];
    }
    


    // Show the output on the screen
    FormatAndShowOutput([o3, o, SignedDecimalInt], 2);
}
