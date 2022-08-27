let body = document.querySelector('body') ;
body.style.background = 'teal' ;

let div = document.createElement('div') ;
body.append(div) ;
let h1 = document.createElement('h1') ;
h1.innerText = '0' ;
h1.style.fontSize = '48px' ;
h1.style.color = 'white' ;
div.append(h1) ;

// ChildDiv
let divChild = document.createElement('div') ;
divChild.style = 'width : 100vw, textAligh : center' ;
div.append(divChild) ;

// Button
let btn1 = document.createElement('button') ;
btn1.innerText = 'Increment' ;
btn1.style.width = '150px'
btn1.style.height = '50px'
btn1.style.fontSize = '24px' ;
let btn2 = document.createElement('button') ;
btn2.innerText = 'Decrement' ;
btn2.style.height = '50px'
btn2.style.fontSize = '24px' ;
btn2.style.width = '150px'
let btn3 = document.createElement('button') ;
btn3.innerText = 'Reset' ;
btn3.style.width = '150px'
btn3.style.height = '50px'
btn3.style.fontSize = '24px' ;

divChild.append(btn1,btn2,btn3) ;
div.style.textAlign = 'center' ;

main() ;

function main(){
    let count = 0 ;
    btn1.addEventListener('click', function(){
        count = count + 1 ;
        h1.innerText = count ;
    })
    
    btn2.addEventListener('click', function(){
        count = count - 1 ;
        h1.innerText = count ;
    })
    
    btn3.addEventListener('click', function(){
        h1.innerText = "0" ;
    })
}