document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener(type, 'scroll', listener, () => {

    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'up' : 'down';
    const sections = [...document.querySelectorAll(selectors, 'section')];

    

    if(document.onWayTo === null) {
        const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;

        if (destIndex >= 0 && destIndex < sections.length){
            document.onWayTo = destIndex;
            window.scroll(x0, sections[destIndex].offsetTop);
        }
    }

    sections.foreach((section, index : number) => {
        if (window.pageYOffset === section.offsetTop){
            document.lastCentered = index;
            section.className = 'active';

            if(document.onWayTo === index){
                document.onWayTo = null;
            }
        } else {
            section.className = '';
        }
    })

    document.lastScrollPosition = window.pageYOffset;
})