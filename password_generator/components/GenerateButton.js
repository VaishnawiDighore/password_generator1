const GenerateButton = (props) => {
  const [password, setPassword] = React.useState("");

  const generatePassword = () => {
    //console.log(props.charCount, props.incNumber, props.incSplChars, props.casing);
    let chars = "";
    switch (props.casing) {
      case "lower":
        chars = "abcdefgijklmnopqrstuvwxyz";
        break;
      case "upper":
        chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "mixed":
        chars = "abcdefgijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      default:
        chars = "abcdefgijklmnopqrstuvwxyz";
        break;
    }

    if (props.incNumber) {
      chars = chars + "1234567890";
    }
    if (props.incSplChars) {
      chars = chars + "_&*+@!#$%";
    }
    // console.log(chars);
 

  let charCount = props.charCount;
  if (charCount > 16) {
    charCount = 16;
  }
  if (charCount < 1) {
    charCount = 1;
  }

  let pass = "";
  for (let i = 0; i < charCount; i++) {
    const index = Math.floor(Math.random() * chars.length);
    const singleChar = chars.charAt(index);
    pass = pass + singleChar;
  }
  setPassword(pass);
}
  return (
    <>
      <button className="action_btn" onClick={generatePassword}>
        Generate
      </button>
      {password !=="" ? <p className="op_pass">{password}</p> : false}
      
    </>
  )
}
