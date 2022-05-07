// Dark , light and normal mode
let mode= document.querySelector('#ctrlMode')
mode.addEventListener("input", () => {
   console.log(mode.value)
   //let cal= document.getElementsByClassName(".calculator")
   if (mode.value == 1) {
      document.body.style.background= "#6a6fa6"
      document.querySelector('.calculator').style.background= "#6a6fa6"
      document.querySelector('.settingBar').style.color= "#fff"
      document.querySelector('#numbers').style.background= "#000"
      document.querySelector('.keys').style.background= "#2c348e"
      document.querySelector('#reset').style.background= "#6a6fa6"
      document.querySelector('#sum').style.background= "#ff0000"
      
      let keys= document.getElementsByName('tab')
      for (let c in keys) {
         document.getElementsByName('tab')[c].style.background= "#e5e5e5"
         document.getElementsByName('tab')[c].style.color= "#4f4f4f"
         document.getElementsByName('tab')[3].style.background= "#6a6fa6"
         document.getElementsByName('tab')[3].style.color= "#fff"
      }
      
   } else if (mode.value == 2) {
      
      document.body.style.background= "black"
      document.querySelector('.calculator').style.background= "black"
      document.querySelector('.settingBar').style.color= "#fff"
      document.querySelector('#numbers').style.background= "#242424"
      document.querySelector('.keys').style.background= "#242424"
      document.querySelector('#reset').style.background= "#535784"
      document.querySelector('#sum').style.background= "#d32121"
      
      let keys= document.getElementsByName('tab')
      for (let c in keys) {
         document.getElementsByName('tab')[c].style.background= "#959595"
         document.getElementsByName('tab')[c].style.color= "#fff"
         document.getElementsByName('tab')[3].style.background= "black"
         document.getElementsByName('tab')[3].style.color= "#fff"
      }
      
   } else if(mode.value == 3){
      
      document.body.style.background= "white"
      document.querySelector('.calculator').style.background= "white"
      document.querySelector('.settingBar').style.color= "#000"
      document.querySelector('#numbers').style.background= "#4c4c4c"
      document.querySelector('.keys').style.background= "#549ee5"
      document.querySelector('#reset').style.background= "#3073ff"
      document.querySelector('#sum').style.background= "#ff0101"
      
      let keys= document.getElementsByName('tab')
      for (let c in keys) {
         document.getElementsByName('tab')[c].style.background= "#fff"
         document.getElementsByName('tab')[c].style.color= "#000"
         document.getElementsByName('tab')[3].style.background= "black"
         document.getElementsByName('tab')[3].style.color= "#fff"
      }
   }
})


let inpNumber= document.querySelector('#numbers')
//fazer as teclas funcionarem
let t7= document.getElementsByName('tab')[0]
t7.addEventListener("click", () => {
   inpNumber.value+= 7
})
let t8= document.getElementsByName('tab')[1]
t8.addEventListener("click", () => {
   inpNumber.value+= 8
})
let t9= document.getElementsByName('tab')[2]
t9.addEventListener("click", () => {
   inpNumber.value+= 9
})
let tDel= document.getElementsByName('tab')[3]
tDel.addEventListener("click", () => {
  inpNumber.value= inpNumber.value.substr(0, inpNumber.value.length-1);
})
let t4= document.getElementsByName('tab')[4]
t4.addEventListener("click", () => {
   inpNumber.value+= 4
})
let t5= document.getElementsByName('tab')[5]
t5.addEventListener("click", () => {
   inpNumber.value+= 5
})
let t6= document.getElementsByName('tab')[6]
t6.addEventListener("click", () => {
   inpNumber.value+= 6
})
let tAd= document.getElementsByName('tab')[7]
tAd.addEventListener("click", () => {
   inpNumber.value+= "+"
})
let t1= document.getElementsByName('tab')[8]
t1.addEventListener("click", () => {
   inpNumber.value+= 1
})
let t2= document.getElementsByName('tab')[9]
t2.addEventListener("click", () => {
   inpNumber.value+= 2
})
let t3= document.getElementsByName('tab')[10]
t3.addEventListener("click", () => {
   inpNumber.value+= 3
})
let tSub= document.getElementsByName('tab')[11]
tSub.addEventListener("click", () => {
   inpNumber.value+= "-"
})
let tDot= document.getElementsByName('tab')[12]
tDot.addEventListener("click", () => {
   inpNumber.value+= "."
})
let t0= document.getElementsByName('tab')[13]
t0.addEventListener("click", () => {
   inpNumber.value+= 0
})
let tDiv= document.getElementsByName('tab')[14]
tDiv.addEventListener("click", () => {
   inpNumber.value+= "÷"
})
let tMult= document.getElementsByName('tab')[15]
tMult.addEventListener("click", () => {
   inpNumber.value+= "x"
})
// botão somar
document.querySelector('#sum').addEventListener("click", () => {
   inpNumber.value= eval(inpNumber.value.replace("÷", "/").replace("x", "*"))
})
// botão resetar
document.querySelector('#reset').addEventListener("click", () => {
   inpNumber.value=""
})