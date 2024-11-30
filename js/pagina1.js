

const my0bserver = new IntersectionObserver ( (entries)  => {
   entries.forEach ((entry) => {
if(entry.isIntersecting){
    entry.target.classList.add(`show`)
 } else  {
   entry.target.classList.remove(`show`)

   
    }
   })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (Element) =>my0bserver.observe (Element))

