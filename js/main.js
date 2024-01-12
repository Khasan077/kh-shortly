const elUrlShortner = document.querySelector(".url-shortener");
const elUrlShortnerForm = document.querySelector(".js-url-shortner-form");
const elUrlShortnerResult = document.querySelector(".url-shortner__results");

if (elUrlShortnerForm) {
    elUrlShortnerForm.addEventListener("submit", function(evt) {
        evt.preventDefault();
    
        elUrlShortnerResult.classList.add('url-shortner__results--open');
    
    })    
}

if (elUrlShortner) {
    elUrlShortner.addEventListener("click", function (evt) {
        if (evt.target.matches(".js-copy-short-link-button")) {
            
            evt.target.textContent = "Copied";
            evt.target.classList.add('url-shortner__copy-button--copied');
            setTimeout(function name(params) {
                evt.target.textContent = "Copy"
                evt.target.classList.remove('url-shortner__copy-button--copied')
            },1000)
        }
    }) 
}
