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



  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
