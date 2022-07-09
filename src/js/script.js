let secaoPrincipal = document.querySelector("secPrin");
let secaoSecundaria = document.querySelector("secSec");
console.log(secaoPrincipal);
console.log(secaoSecundaria);

//src
let srcImgPrin = "../img/prin/";
let srcImgSec = "../img/sec/";

function createCard(card) {
  nome = card.nome;
  especie = card.especie;
  imgUrl = card.imgUrl;
  type = card.type;

  let tagLi = document.createElement("li");
  let tagImg = document.createElement("img");
  let tagDivPrin = document.createElement("div");
  let tagDivSec = document.createElement("div");
  let tagDivText = document.createElement("div");
  let tagEm = document.createElement("em");
  let tagName = document.createElement("h2");
  let tagButton = document.createElement("button");

  if (card.type == "Principal") {
    tagDivPrin.classList.add("imagemprin");
    tagImg.src = `${srcImgPrin}${imgUrl}`;
    tagLi.appendChild(tagDivPrin);
    tagDivPrin.appendChild(tagImg);

    return tagLi;
  } else if (card.type == "Secondary") {
    tagDivSec.classList.add("othertrees");
    tagImg.classList.add("imgsec");
    tagImg.src = `${srcImgSec}${imgUrl}`;
    tagName.innerText = nome;
    tagEm.innerText = especie;

    tagLi.appendChild(tagDivSec);
    tagDivSec.appendChild(tagImg);
    tagDivSec.appendChild(tagDivText);
    tagDivText.appendChild(tagName);
    tagDivText.appendChild(tagName);
    tagName.appendChild(tagEm);
    tagDivSec.appendChild(tagButton);

    return tagLi;
  }
}

function listCards(list, types) {
  for (let i = 0; i < list.length; i++) {
    let card = list[i];
    console.log(card);
    let cardCreate = createCard(card);
    if (types == "p") {
      secaoPrincipal.appendChild(cardCreate);
    } else if (types == "s") {
      secaoSecundaria.appendChild(cardCreate);
    }
  }
}

listCards(imgsSec, "s");
