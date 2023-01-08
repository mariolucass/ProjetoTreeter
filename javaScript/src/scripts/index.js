const secaoPrincipal = document.querySelector(".secprin__imglist");
const secaoSecundaria = document.querySelector(".secseg__list");

function createCard(card, secao) {
  let nome = card.nome;
  let especie = card.especie;
  let imgUrl = card.imgUrl;

  let tagLi = document.createElement("li");
  let tagDivPrin = document.createElement("div");
  let tagDivSec = document.createElement("div");
  let tagDivText = document.createElement("div");
  let tagImg = document.createElement("img");
  let tagEm = document.createElement("em");
  let tagName = document.createElement("h2");
  let tagButton = document.createElement("button");

  if (secao == secaoPrincipal) {
    tagDivPrin.classList.add("secprin__imglist");

    tagLi.className("secseg__cards");
    tagImg.src = `/src/img/prin/${imgUrl}`;
    tagLi.appendChild(tagDivPrin);
    tagDivPrin.appendChild(tagImg);
    return tagLi;
  } else if (secao == secaoSecundaria) {
    tagDivSec.classList.add("secseg__cards--divimg");
    tagDivText.classList.add("secseg__cards--divtxt");

    tagImg.src = `/src/img/sec/${imgUrl}`;
    tagName.innerText = `${nome} `;
    tagEm.innerText = especie;
    tagButton.innerText = "See more...";
    tagLi.append(tagDivSec, tagDivText, tagButton);
    tagDivSec.append(tagImg);
    tagDivText.appendChild(tagName);
    tagName.appendChild(tagEm);

    tagButton.addEventListener("click", () => {});

    return tagLi;
  }
}

function listCards(list, secao) {
  list.forEach((element) => {
    let cardCriado = createCard(element, secao);

    if (secao == secaoPrincipal) {
      cardCriado.classList.add("secprin__cards");
    } else if (secao == secaoSecundaria) {
      cardCriado.classList.add("secseg__cards");
    }

    secao.append(cardCriado);
  });
}

listCards(imgsSec, secaoSecundaria);

const inputButton = document.getElementById("header__search--button");

inputButton.addEventListener("click", (event) => {
  event.preventDefault();
  let inputSearch = document.querySelector(".header__search input");
  console.log(inputSearch);
  let value = inputSearch.value;

  console.log(value);
});
