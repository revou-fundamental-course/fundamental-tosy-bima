//NAME SCRIPT

/* <script>
    var name = prompt("Masukan nama kamu");
    document.getElementById("nama").innerText = name;
</script> */

//IMAGE SLIDES SCRIPT
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs((slideIndex += n));
}

function showDivs(n) {
var i;
var imgList = document.getElementsByClassName("img-slideshow");
if (n > imgList.length) slideIndex = 1;
else if (n < 1) slideIndex = imgList.length;

for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
}

imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
plusDivs(1);
}, 2000);

//FUNCTION FORM SCRIPT

  // Form Validation
  document.getElementById('userForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting normally
  
      const name = document.getElementById('name').value;
      const dob = document.getElementById('dob').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const message = document.getElementById('message').value;
      const currentTime = new Date().toLocaleString();
  
      const output = document.getElementById('output');
      output.innerHTML = `
          <p>Current Time: ${currentTime}</p>
          <p>Name: ${name}</p>
          <p>Date Of Birth: ${dob}</p>
          <p>Gender: ${gender}</p>
          <p>Message: ${message}</p>
      `;
  });

  // HEADER PROMPT
  window.onload = function () {
    
  const btnMenu = document.getElementById("btn-nav")
  const nav = document.getElementById("nav")

  btnMenu.addEventListener("click", onClickMenu);

  function onClickMenu(event) {
      event.preventDefault()
      nav.classList.toggle("active")
      if (nav.className == "active") {
          btnMenu.textContent = "x"
      } else {
          btnMenu.textContent = "menu"
      }
  }


}
