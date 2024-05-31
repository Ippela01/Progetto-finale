let b = document.getElementById("actionButton");
console.log(b);

let ps = document.querySelectorAll(".info");
for(let i = 0; i < ps.length; i++){
    console.log(ps [i]);
}
for(const i of ps){
    console.log(i);
}

let ps1 = document.querySelectorAll("p");
for(const i of ps1){
    console.log(i);
}

let ps2 = document.querySelectorAll("span.highlights");
for(const i of ps2){
    console.log(i);
}

let button = document.getElementById("actionButton");
let parent = button.parentNode;
console.log(parent);
let children = parent.children;
console.log("************");
for(const ch of children){
    console.log(ch);
}
let pBefore = button.previousElementSibling;
let spanAfter = button.nextElementSibling;
console.log("************");
console.log(pBefore, spanAfter);
let div = button.closest('.myArticle');

button.addEventListener("click", function(){
    let p1 = document.getElementById("p1");
    console.log(p1.innerText);
   p1.textContent = "ciao"; // se clicco "action button" mi compare ciao su id=p1
   let img = document.getElementById("img");
   img.setAttribute("src", "https://miro.medium.com/v2/resize:fit:1400/1*Mb1Wxstw3ALBbGqNdJjWPg.jpeg");
   img.setAttribute("alt", "Logo del DOM");
});


var result1 = false;
var result2 = false;
let form = document.getElementById("myform");
form.addEventListener("input", function(evt){
    let nameinput = document.querySelector("form#myform input[name = 'name']");
    let lastnameinput = document.querySelector("form#myform input[name = 'lastname']");
    let erroreName = document.getElementById("errorName");
    
    erroreName.textContent = "Nome e cognome devono essere almeno di 3 lettere.";
    if(nameinput.value.length > 2 && lastnameinput.value.length > 2){           
        erroreName.textContent = " ";
        result1 = true;
        evt.preventDefault();
        return;
    }   
});

form.addEventListener("input", function(evt){
    let phoneNumberInput = document.querySelector("form#myform input[name = 'number']");
    let phoneRegex = /^\d{6,10}$/;
    let errorePhone = document.getElementById("errorPhone");
    
    errorePhone.textContent = "Il numero di telefono deve avere 6 - 10 cifre.";
    if(phoneRegex.test(phoneNumberInput.value)){
        errorePhone.textContent = " ";
        result2 = true;
        evt.preventDefault();
        return;
    }

});
let erroreSex = document.getElementById("errorSex");
form.addEventListener("submit", function(evt){
    let sexInput = document.querySelector("form#myform input[name = 'gender']:checked");   

    if(sexInput){
        erroreSex.textContent = " ";
    }else{
        erroreSex.textContent = "Non hai selezionato il genere.";
        evt.preventDefault();
    }
});
let errorLanguage = document.getElementById("errorLanguage");
form.addEventListener("submit", function(evt){
    let languagesInput = document.querySelectorAll("form#myform input[name = 'languages']:checked");
    
    if(languagesInput.length > 1){
        errorLanguage.textContent = " ";
        evt.preventDefault();
    }else{
        errorLanguage.textContent = "Devi selezionare almeno 2 preferiti.";
        evt.preventDefault();
    }
});

form.addEventListener("input", function(evt){
    let submit = document.getElementById("submit");
    if (result1 && result2) {
        submit.disabled = false;
    }
});
