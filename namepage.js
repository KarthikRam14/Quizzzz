var submitnamebtn = document.getElementById("namesubbtn");
submitnamebtn.addEventListener("click", function (e) {

  var nameValue = document.getElementById("Name").value;
  console.log(nameValue);
  localStorage.setItem("nameInput", nameValue);

  var nickNameValue = document.getElementById("NickName").value;
  localStorage.setItem("nickNameInput", nickNameValue);
  console.log(nickNameValue);

  if (nickNameValue.length > 0 && nameValue.length > 0) {
      console.log("navigating")
      window.location.href = "./getstarted.html"
  } else{
      alert('fill the requirments')
  }

  e.preventDefault()  //this is mandatory to use as it prevents the default behaviour of form submission and navigating to another page and allows to perform custom actions. 
});

var bckbtn = document.querySelector('.namepagebackbtn')
bckbtn.onclick = () => {
  location.href = './firstpage.html'
}