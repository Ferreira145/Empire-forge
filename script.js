console.log("Empire Forge iniciou com sucesso!");

alert("Bem vindo ao Empire Forge. Este é um jogo 2D!!!");

window.onload = function(){

    const settingsButton = document.getElementById("settingsButton");
    const settingsMenu = document.getElementById("settingsMenu");
    const backButton = document.getElementById("backButton");

    const music = document.getElementById("menuMusic");
    const musicVolume = document.getElementById("musicVolume");


    settingsButton.onclick = function(){

        settingsMenu.style.display = "block";

    };


    backButton.onclick = function(){

        settingsMenu.style.display = "none";

    };


    musicVolume.oninput = function(){

        music.volume = this.value / 100;

    };

};

const creditsButton = document.getElementById("creditsButton");
const creditsMenu = document.getElementById("creditsMenu");
const backCreditsButton = document.getElementById("backCreditsButton");


creditsButton.onclick = function(){

    creditsMenu.style.display = "block";
    creditsMenu.style.position = "fixed";
    creditsMenu.style.top = "50%";
    creditsMenu.style.left = "50%";
    creditsMenu.style.transform = "translate(-50%, -50%)";
    creditsMenu.style.background = "black";
    creditsMenu.style.color = "white";
    creditsMenu.style.padding = "40px";
    creditsMenu.style.zIndex = "9999";

};


backCreditsButton.onclick = function(){

    creditsMenu.style.display = "none";

};