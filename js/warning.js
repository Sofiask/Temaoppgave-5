function WarningMessage () {
    const warning = document.querySelector(".warning");
    const information = document.querySelector(".information");
    const success = document.querySelector(".success");
    const yellowBox = document.querySelector(".messageBoxYellow");
    const iconBox = document.querySelector(".messageBoxYellowIcon");
    const icons = document.querySelector(".icons");
    const correctMessage = document.querySelector(".gifContainer");
    const wrongMessage = document.querySelector(".messageContainer");
    const nextPage = document.querySelector(".bottomBar");
 
 warning.addEventListener('click', () => {
     yellowBox.classList.add("hidden");
     icons.classList.add("hidden");
     correctMessage.classList.remove("hidden");
     iconBox.classList.remove("hidden");
     nextPage.classList.remove("hidden");
     wrongMessage.classList.add("hidden");
 
 }); 
 
 success.addEventListener('click', () =>{
     wrongMessage.classList.remove("hidden");
 });
 
 information.addEventListener('click', () => {
     wrongMessage.classList.remove("hidden");
 });
 };
 
 WarningMessage();