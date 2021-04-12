"use strict"

let bannerColor = document.querySelector(".banner")
let img = document.querySelector(".banner-img")
let colorButton = document.querySelector(".color-button")
let gradientButton = document.querySelector(".gradient-button")
let chooseColor = document.querySelector(".choose-color")
let chooseGradient = document.querySelector(".choose-gradient")
let inputColor = document.querySelector(".color-input")
let inputGradient = document.querySelector(".color-gradient")
let inputGradient1 = document.querySelector(".color-gradient1")

colorButton.addEventListener("click", showChooseColor)
gradientButton.addEventListener("click", showChooseGradient)
inputColor.addEventListener("change", changeColorBackground)
inputGradient.addEventListener("change", changeColorBackground)
inputGradient1.addEventListener("change", changeColorBackground)

function showChooseColor() {
    chooseColor.classList.toggle("display-none")
    chooseGradient.classList.add("display-none")
}
function showChooseGradient() {
    chooseGradient.classList.toggle("display-none")
    chooseColor.classList.add("display-none")
}

function changeColorBackground(e) {
    console.log(e.target.className)
    if (e.target.className === "color-input") {

        bannerColor.style.background = inputColor.value
    } else {
        bannerColor.style.background = `linear-gradient(${inputGradient.value}, ${inputGradient1.value})`
    }
}
