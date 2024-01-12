const elUrlShortnerForm = document.querySelector(".js-url-shortner-form");
const elUrlShortnerResult = document.querySelector(".url-shortner__results");

elUrlShortnerForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    elUrlShortnerResult.classList.add('url-shortner__results--open');

})