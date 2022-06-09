function successMessage () {
    const success = document.querySelector(".success");
    const warning = document.querySelector(".warning");
    const information = document.querySelector(".information");
   const greenBox = document.querySelector(".messageBoxGreen");
   const iconBox = document.querySelector(".messageBoxGreenIcon");
   const icons = document.querySelector(".icons");
   const correctMessage = document.querySelector(".gifContainer");
   const wrongMessage = document.querySelector(".messageContainer");
   const nextPage = document.querySelector(".bottomBar");

success.addEventListener('click', () => {
    greenBox.classList.add("hidden");
    icons.classList.add("hidden");
    correctMessage.classList.remove("hidden");
    iconBox.classList.remove("hidden");
    nextPage.classList.remove("hidden");
    wrongMessage.classList.add("hidden");
}); 

warning.addEventListener('click', () =>{
    wrongMessage.classList.remove("hidden");
});

information.addEventListener('click', () => {
    wrongMessage.classList.remove("hidden");
});
};
successMessage();