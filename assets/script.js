let yourName = "Shane Morrison" 

let gb = 0      
let cc = 0      
let sugar = 0   

document.getElementById('credit').textContent = `Created by ${yourName}`


document.getElementById('add-gb').addEventListener('click', function()
   {
    gb++
    getTotal()
document.getElementById('qty-gb').textContent = `${gb}`   
    })
document.getElementById('minus-gb').addEventListener('click', function()
   {
    gb-- 
    getTotal()
document.getElementById('qty-gb').textContent = `${gb}`
    })

document.getElementById('add-cc').addEventListener('click', function()
 {
    cc++
    getTotal()
document.getElementById('qty-cc').textContent = `${cc}`   
    
   
})

document.getElementById('minus-cc').addEventListener('click', function()
 {
    cc--
    getTotal()
document.getElementById('qty-cc').textContent = `${cc}`
    })

document.getElementById('add-sugar').addEventListener('click', function()
 {
    sugar++
    getTotal()
document.getElementById('qty-sugar').textContent = `${sugar}`   
  })

document.getElementById('minus-sugar').addEventListener('click', function()
   {
    sugar--
    getTotal()
document.getElementById('qty-sugar').textContent = `${sugar}`
    })

function getTotal()
  {
    let total=gb+cc+sugar
document.getElementById('qty-total').textContent = `${total}`
    }

