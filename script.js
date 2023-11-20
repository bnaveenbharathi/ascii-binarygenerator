const key=document.getElementById("key")
//keydown keypressing event
window.addEventListener("keydown",(event) =>{
  const eventkeycode=event.keyCode
  const eventcode=event.code
// inserted html in page
  key.innerHTML=`
  <div >
  <center>
  <p>Your Pressing Key is <b>${event.key ===" " ? "space" : event.key} </b></p>
  <p>Your ASCII Value is <b>${eventkeycode}</b></p>
  <p>Your Binary value is <b>${event.key.charCodeAt(0).toString(2)} </b></p>
  <p>Your Event Code is <b>${eventcode}</b></p>  
  </div>
  </center>
 `
})