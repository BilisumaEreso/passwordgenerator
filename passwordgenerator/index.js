const characters = ["A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R","S","T","U","V",
    "W","X","Y","Z","a","b","c","d","e","f","g","h","i",
    "j","k","l","m","n","o","p","q","r","s","t","u","v",
    "w","x","y","z", "0", "1", "2", "3", "4", "5", "6",
     "7", "8", "9","~","`","!","@","#","$","%","^","&",
     "*","(",")","_","-","+","=","{","[","}","]",",","|",
     ":",";","<",">",".","?","/"];
let passOne=document.getElementById("pass-one")
let passTwo=document.getElementById("pass-two")
function generate(){
    let password=":"
    let pass=":"
   for (let i=0;i<8;i++){
    let char=Math.floor(Math.random()*91)
    password+=characters[char]
   }
    passOne.textContent=password
   for (let i=0;i<8;i++){
    let char=Math.floor(Math.random()*91)
    pass+=characters[char]
   }
   passTwo.textContent=pass
}
