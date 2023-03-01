let display = document.querySelector(".display")
let buttons = document.querySelectorAll("button")
buttons.forEach(btn => {
   btn.onclick = function(){
      if (btn.innerText == "=") {
         if (display.innerText.includes("+") && display.innerText.split("+")[0].length > 0 && display.innerText.split("+")[1].length > 0) {
            display.innerText += `=${parseInt(display.innerText.split("+")[0]) + parseInt(display.innerText.split("+")[1])}`
         }
         if (display.innerText.includes("-") && display.innerText.split("-")[0].length > 0 && display.innerText.split("-")[1].length > 0) {
            display.innerText += `=${parseInt(display.innerText.split("-")[0]) - parseInt(display.innerText.split("-")[1])}`
         }
         if (display.innerText.includes("X") && display.innerText.split("X")[0].length > 0 && display.innerText.split("X")[1].length > 0) {
            display.innerText += `=${parseInt(display.innerText.split("X")[0]) * parseInt(display.innerText.split("X")[1])}`
         }
         if (display.innerText.includes("/") && display.innerText.split("/")[0].length > 0 && display.innerText.split("/")[1].length > 0) {
            display.innerText += `=${parseInt(display.innerText.split("/")[0]) / parseInt(display.innerText.split("/")[1])}`
         }
         return
      }
      if ((btn.innerText == "X" || btn.innerText == "-" || btn.innerText == "+" || btn.innerText == "/" || btn.innerText == "=") && 
      (display.innerText == "" || (display.innerText.includes("X") || display.innerText.includes("-") || display.innerText.includes("+") || display.innerText.includes("/") || display.innerText.includes("=")))) {
         return
      }
      if (btn.innerText == "C") {
         display.innerText = ""
         return
      }
      display.innerText += btn.innerText
   }
});
