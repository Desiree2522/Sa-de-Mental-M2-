const last0ne = document.querySelector('.last-one')

const my0bserver = new IntersectionObserver ( (entries)  => {
   console.log (entries)
} )

my0bserver.observe(last0ne)