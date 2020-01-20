function ConversionPart1() {

    var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);

    var outputValue;

    if(UnsignedIntBaseFrom != 10){
      v =0;
      l = (UnsignedInt.toString()).length;
      for(i =0;i<l;i++){
        v = (v*UnsignedIntBaseFrom) + parseInt(UnsignedInt.toString().charAt(i));
      }
      outputValue = v;
    }
    else
    {
      outputValue = "";
      var value = UnsignedInt;
    //convert to base
    while(value != 0)
    {
      var nextDigit = value % UnsignedIntBaseTo;
      if(nextDigit >= 10){
        if(nextDigit == 10)
          nextDigit = "A";
        else if(nextDigit == 11)
          nextDigit = "B";
        else if(nextDigit == 12)
          nextDigit = "C";
        else if(nextDigit == 13)
          nextDigit = "D";
        else if(nextDigit == 14)
          nextDigit = "E";
        else if(nextDigit == 15)
          nextDigit = "F";
      }
      else{
        nextDigit = nextDigit.toString();
      }
      outputValue = nextDigit + (outputValue.toString()).charAt(0);
      value = Math.trunc(value / UnsignedIntBaseTo);
    }
    outputValue = parseInt(outputValue);
}

  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
