const next = document.querySelector('.next')
const back = document.querySelector('.back')
const body = document.body
let index = 1

next.addEventListener('click', () =>{

if (index <= 3){
    index ++

    body.style.backgroundImage = `url('./${index}.jpg')`

}else{
    index = 1
    body.style.backgroundImage = `url('./${index}.jpg')`

}
console.log(index)
})
back.addEventListener('click', () =>{

    if (index > 1){
        index --
        body.style.backgroundImage = `url('./${index}.jpg')`


    
    } else if (index = 1){
        index = 4 
        body.style.backgroundImage = `url('./${index}.jpg')`

    }
    
    
    
    console.log(index)
    })
    