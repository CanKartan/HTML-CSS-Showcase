const CardInputName = document.getElementById("Textarea");
const CardInputTitle = document.querySelector(".CarTitlename");
const CardInputNumber = document.getElementById("Numberarea");
const CardTitleNumber = document.querySelector(".Cardtitlenumber");
const CardTitleDate = document.querySelector(".CardTitleDate");
const DateArea = document.querySelector("#Datearea");
const CredidCard__back = document.querySelector(".CredidCard__back");
const ccvInput = document.getElementById('CCVarea');
const cardElement = document.querySelector('.CredidCard');
const ccvtext = document.querySelector(".ccvtext");
const showAlert = document.querySelector(".alert");

document.getElementById("KartTürü").addEventListener("change",function () {
    var cardType = this.value;
    var CardImage = document.getElementById("cardID");

    switch(cardType){
        case "visa":
            CardImage.src = "./card__img/visalogo.png";
            break;
        case "mastercard" :
           CardImage.src= "./card__img/mastercardlogo.png" 
           break;
        case "americanexpress":
            CardImage.src = "./card__img/americanexpresslogo.png"
            break;
        case "discovernetwork":
            CardImage.src = "./card__img/discovernetworklogo.png"
            break;
            case "another":
                CardImage.src = "./card__img/mastercardlogo.png"
                break;
    }
})

ccvInput.addEventListener('focus', () => {
    cardElement.classList.add('rotate');
  });

  ccvInput.addEventListener('blur', () => {
    cardElement.classList.remove('rotate');
  });

ccvInput.addEventListener("input",() =>{
    let ccvtextval = ccvInput.value;
    if(ccvtextval.length <= 3){ 
        ccvtext.textContent =ccvtextval;
    }
});
  
DateArea.addEventListener("input",() =>{
    let dateareaval = DateArea.value;
    CardTitleDate.textContent = dateareaval;
});

CardInputName.addEventListener("keyup", () => {
    let cardnamevalue = CardInputName.value;
    if(cardnamevalue.substring(0,16)){ 
        CardInputTitle.textContent = cardnamevalue;
    }
});

CardInputNumber.addEventListener("keyup",() =>{
    let cardnumberkey = CardInputNumber.value;
    if (cardnumberkey.length < 16){
        CardTitleNumber.textContent = cardnumberkey;
    }
});


