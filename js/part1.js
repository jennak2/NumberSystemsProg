function ConversionPart1() {

    var UnsignedInt = document.getElementById("1_UnsignedInt").value;
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);

    var outputValue="";
    var o = "";

      var v =0;
      l = UnsignedInt.split("");
      for(i =0;i<l.length;i++){
        var t = letter(l[i]);
        v = (v*UnsignedIntBaseFrom) + t;
      }
      o = v;

    while (o != 0) {
    var t2 = o % UnsignedIntBaseTo;
    if (UnsignedIntBaseTo > 10){
      t2 = letter2(temp2);
    }
    outputVal = t2 + outputValue;
    output = Math.trunc(o / UnsignedIntBaseTo);
  }

  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);
}
    function letter(expression){
      switch (expression){
        case "A":
          return 10;
          break;
        case "B":
          return 11;
          break;
        case "C":
          return 12;
          break;
        case "D":
          return 13;
          break;
        case "E":
          return 14;
          break;
        case "F":
          return 15;
          break;
        default:
            return parseInt(expression);
            break;

  }
}
    function letter2(expression) {
  switch (expression) {
    case 10:
      return "A";
      break;
    case 11:
      return "B";
      break;
    case 12:
      return "C";
      break;
    case 13:
      return "D";
      break;
    case 14:
      return "E";
      break;
    case 15:
      return "F";
      break;
    default:
      return parseInt(expression);
      break;
    }
      }


  // Show the output on the screen
