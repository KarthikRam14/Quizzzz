document.addEventListener('DOMContentLoaded', function() {
    var nickNameValue = window.localStorage.getItem('nickNameInput')

    var output = document.getElementById('append')
    output.innerHTML = `Hey, ${nickNameValue}`
})

var backButton = document.getElementById("getstartbackbtn")
backButton.addEventListener('click', function(e) {
    location.href = './namepage.html'
    e.preventDefault()
})