const $buttonClose = document.querySelector("#buttonClose");
const $menuDesplegable = document.querySelector("#menuDesplegable");
const $slideArrows = document.querySelectorAll(".movible");
const $backToTop = document.querySelector("#backToTop");

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

$slideArrows.forEach((arrow)=>{
    const padre = arrow.parentElement
    padre.addEventListener('mouseenter', ()=>{
        arrow.classList.remove('slide-left')
        arrow.classList.add('slide-right')
    })

 padre.addEventListener("mouseleave", ()=>{
         arrow.classList.remove("slide-right")
         arrow.classList.add('slide-left')
     })
})


$backToTop.addEventListener('click', ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
})

window.addEventListener('scroll', function () { 
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) { 
        $backToTop.style.display = 'flex'; 
        $backToTop.classList.remove('slide-out')
        $backToTop.classList.add('slide-in')
    } else { 
        $backToTop.classList.remove('slide-in')
        $backToTop.classList.add('slide-out')
    } 
}); 