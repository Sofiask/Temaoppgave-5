function InformationMessage () {
    const information = document.querySelector(".information");
    const warning = document.querySelector(".warning");
    const success = document.querySelector(".success");
    const blueBox = document.querySelector(".messageBoxBlue");
    const iconBox = document.querySelector(".messageBoxBlueIcon");
    const icons = document.querySelector(".icons");
    const correctMessage = document.querySelector(".gifContainer");
    const wrongMessage = document.querySelector(".messageContainer");
    const nextPage = document.querySelector(".bottomBar");
 
 information.addEventListener('click', () => {
     blueBox.classList.add("hidden");
     icons.classList.add("hidden");
     correctMessage.classList.remove("hidden");
     iconBox.classList.remove("hidden");
     nextPage.classList.remove("hidden");
     wrongMessage.classList.add("hidden");
 
 }); 
 
 success.addEventListener('click', () =>{
     wrongMessage.classList.remove("hidden");
 });
 
 warning.addEventListener('click', () => {
     wrongMessage.classList.remove("hidden");
 });
 };
 
 InformationMessage();