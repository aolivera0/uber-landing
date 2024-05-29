const $buttonClose = document.querySelector("#buttonClose");
const $menuDesplegable = document.querySelector("#menuDesplegable");

$buttonClose.addEventListener('click', ()=> {
    const state = $menuDesplegable.getAttribute("menu-button-pressed");

    if ( state == 'false') {
        $menuDesplegable.classList.remove("hide-element")
        $menuDesplegable.classList.remove("hidden")
        $menuDesplegable.setAttribute("menu-button-pressed", true)
        $buttonClose.querySelector('img').setAttribute('src', 'icons/hamburger-close.svg')
        $menuDesplegable.classList.add("show-element", "no-doc-scroll")
        $menuDesplegable.classList.remove("hide-element")
        
    } else {
        $menuDesplegable.classList.remove("show-element", "no-doc-scroll");
        $menuDesplegable.classList.add("hide-element")
        $buttonClose.querySelector('img').setAttribute('src', 'icons/hamburger-open.svg')
        $menuDesplegable.addEventListener('animationend', ()=>{
            $menuDesplegable.classList.add("hidden")
            $menuDesplegable.setAttribute("menu-button-pressed", false)
        }, {once:true})
    }

    
})


