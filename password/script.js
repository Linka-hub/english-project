var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital"); // Tetap di-load agar tidak memicu error di kode lama
var number = document.getElementById("number");
var length = document.getElementById("length");
var toggleBtn = document.getElementById("toggleBtn");
var statusText = document.getElementById("status-text");

// Fitur Tambahan: Klik monyet untuk intip password
toggleBtn.addEventListener("click", function() {
  if (myInput.type === "password") {
    myInput.type = "text";
    toggleBtn.textContent = "🐵";
  } else {
    myInput.type = "password";
    toggleBtn.textContent = "🙈";
  }
});

// Sistem validasi saat mengetik
myInput.onkeyup = function() {
  // 1. Validasi Huruf Besar DAN Huruf Kecil (Digabung)
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(lowerCaseLetters) && myInput.value.match(upperCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // 2. Validasi Angka
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // 3. Validasi Panjang Karakter (Minimal 8)
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

// Handle pengiriman form
var myForm = document.getElementById("myForm");
var formContainer = document.getElementById("formContainer");
var submitBtn = document.getElementById("submitBtn");

myForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Cek apakah semua kriteria sudah terpenuhi (memiliki class valid)
  var isAllValid = letter.classList.contains("valid") && 
                   number.classList.contains("valid") && 
                   length.classList.contains("valid");

  if(isAllValid) {
    statusText.textContent = "Password Is Valid!";
    statusText.className = "status-msg valid-text";
    
    submitBtn.value = "Sedang Mengalihkan...";
    submitBtn.style.backgroundColor = "#555"; 
    formContainer.classList.add("fade-out");  
    
    setTimeout(function() {
        window.location.href = "validasi/indexresto.html"; 
    }, 1500);
  } else {
    statusText.textContent = "Password Is Invalid!";
    statusText.className = "status-msg invalid-text";
  }
});