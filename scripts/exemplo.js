let i = 4;
document.getElementById('add-item').addEventListener('click', () => {
    const ul = document.getElementById('ul');

    const novaLi = document.createElement('li');
    novaLi.textContent = "Novo item "+i;
    ul.appendChild(novaLi);
    i++;
})

const exemploH2 = document.getElementById("exemplo-h2");
exemploH2.style.color = 'blue';

const novaH1 = document.createElement('h1');
novaH1.textContent = "NOVO ELEMENTO H1 NA TELA";
// console.log("novaH1 ====>", novaH1);
exemploH2.appendChild(novaH1);

// Mude a cor de fundo do header
// const header = document.getElementById("header");
// header.style.backgroundColor = 'red';

// Mude o tamanho da letra do footer
// const batataFooter = document.getElementById("batata-footer");
// batataFooter.style.fontSize = "20px";

const buttonExemploJS = document.getElementById('buttonExemploJS');
buttonExemploJS.addEventListener('click', () => {
    alert("Digite um número:");
});


const form = document.querySelector("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Batatata')
});

const header = document.getElementById("header");
header.addEventListener('mouseover', () => {
    //  alert("não pode")
})

document.addEventListener('keydown', (event) => {
    console.log(`Tecla clicada ${event.key}`)
    // console.log("Tecla clicada" + event.key)
    // console.log("Tecla clicada", event.key)
})