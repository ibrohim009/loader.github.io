// setTimeout(function() {
//     alert('hi')
// }, 1000) 

window.addEventListener('DOMContentLoaded', ()=>{
    const loader = document.querySelector('.loader')

    setTimeout( ()=>{
        loader.style.opacity = '0'
        setTimeout(()=>{
            loader.style.display = 'none'
        }, 5000)
    }, 2000)
})