const elements = document.querySelectorAll('.icon-container');

elements.forEach((element, index) => {
    setTimeout(() => {
        element.classList.add('animate');
    }, index * 300); 

});

const my0bserver = new IntersectionObserver ( (entries)  => {
    entries.forEach ((entry) => {
 if(entry.isIntersecting){
     entry.target.classList.add(`show`)
  } else  {
    entry.target.classList.remove(`show`)
 
    
     }
    })
 })
 
 const element = document.querySelectorAll('.icon-container')
 
 elements.forEach( (Element) =>my0bserver.observe (Element))
 

