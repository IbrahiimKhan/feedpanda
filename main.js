let innerbtn = document.querySelector(".innerbtn")
const btn = document.querySelectorAll(".liBtn")
const winner = document.querySelector(".win_div")
const get_pizza = document.querySelector(".get_pizza")
const restart = document.querySelector(".restart")

//generating winning number
const winRanNum = ()=>{
    return Math.floor(Math.random()*10)+1
}
const randomNum = winRanNum()
console.log(randomNum)

//getting user random number

let inputArr = []
innerbtn.addEventListener("click",(e)=>{
    inputArr.push(e.target.textContent)
    //disbale all button
if (inputArr.length ===4) {
    btn.forEach(e=>console.log(e.setAttribute("disabled","disabled")))
  }
  
})
get_pizza.addEventListener("click",(e)=>{
    if (inputArr.length ===0) {
        alert("Please enter a number")
        return;
    }
    if (inputArr.includes(randomNum.toString())) {
        winner.insertAdjacentHTML("beforeend", `<p>Congrats! You won a Pizza</p><img class="show_img" src="./panda-with-pizza-vector-39719605.jpg" alt="" srcset="">`)
        get_pizza.remove()
       }
    else{
        winner.insertAdjacentHTML("beforeend", `<p>sorry! You guessed ${inputArr}</p> <p>Lucky number was ${randomNum}</p><img class="show_img" src="./sad.png" alt="" srcset="">`)
        get_pizza.remove()
       }
  })

const resetAll= ()=>{
    restart.addEventListener("click",e=>{
        window.location.reload()
    })
}
resetAll()

// let inputArr2 = []
// innerbtn.addEventListener("click",(e)=>{
//     inputArr2.push(e.target.textContent)

// })
