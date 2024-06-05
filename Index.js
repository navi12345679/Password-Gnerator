const N1=document.getElementById("N1");

function passwordgenerator(length,includeuppercase,includelowercase,includenumbers,includesymbols){
  
   
  const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercasechars="abcdefghijklmnopqrstuvwxyz";
  const numbers="0123456789";
  const symbols="@$";

  let allowedchars= "";
  let password= "";
    
  allowedchars += includeuppercase ? uppercasechars : "";
  allowedchars += includelowercase ? lowercasechars : "";
  allowedchars += includenumbers ? numbers : "";
  allowedchars += includesymbols ? symbols : "";
     
  if(length <= 0){
    window.alert(`password length must be atleast 1`);
  }
if(allowedchars.length === 0){
   window.alert(`At least 1 set of character needs to be selected`);
}

for(i =0; i < length; i++){
    const randomIndex=Math.floor(Math.random()*allowedchars.length);
    password += allowedchars[randomIndex];
}
  //console.log(allowedchars);
    return password;
    
}

const paswordlength = 12;
const includeuppercase = true;
const includelowercase = true;
const includenumbers = true;
const includesymbols = true;

const password=passwordgenerator(paswordlength,
                                includeuppercase,
                                includelowercase,
                                includenumbers,
                                includesymbols);

  console.log(`Generated password is: ${password}`);
  document.getElementById("N1").textContent = password;