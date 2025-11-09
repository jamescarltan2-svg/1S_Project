const landings = document.querySelectorAll ('.page-section')


const selpg = (id) => {
    const getSection = document.getElementById (id)

    if (getSection) {
        landings.forEach (l => l.classList.remove ('active')) 
        getSection.classList.add ('active')
    }
}


 if ('IntersectionObserver' in window) {
    const getContainer = document.getElementById ('container')

    const io = new IntersectionObserver (IntOb, {
        root:getContainer,threshold:0.2
    })
    landings.forEach (page => io.observe (page))
} 

function IntOb (entries) {
    entries.forEach (pg => {
        if (pg.isIntersecting) {
            selpg (pg.target.id)
        }
    })
}

const initialLocation = location.hash.slice (1) ? document.getElementById (location.hash.slice (1)): landings [0]

if (initialLocation) {
    initialLocation.classList.add ('active')
}