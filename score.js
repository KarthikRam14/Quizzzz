document.addEventListener('DOMContentLoaded', function(e) {
    e.preventDefault()
    var scr = document.querySelector('.display')
    var score = localStorage.getItem('scrr')
    scr.innerHTML = `Score: ${score}`
})
