export const navAnim = {
    hidden : {opacity:0, y:-50},
    show : {
        opacity:1, 
        y:0, 
        transition:{
        duration:1.5, 
        ease:"easeIn",
        type: "spring",
        stiffness: 100,
        when: "beforeChildren",
        
    }},
}
export const navTitleAnim = {
    hidden : {opacity:0},
    show : {opacity:1, x:[-50,10,0]},
}
export const navListAnim = {
    hidden : {opacity:0},
    show : {opacity:1, x:[50,-10,0]},
}

export const containerAnim = {
    hidden: {y:100, opacity:0},
    show: {
        y:0,
        opacity:1,
        transition: {duration:1, ease:"easeOut",staggerChildren:0.25, when: "beforeChildren"}}
}
export const titleAnim = {
    hidden: {y:50, opacity:0},
    show: {
        y:0,
        opacity:1,
        transition: {duration:0.75, ease:"easeOut"}}
}

export const fade = {
    hidden: {opacity: 0},
    show: {opacity:1, transition: {duration: 0.75, delay: 0.75}, ease:"easeOut"}
}
export const photoAnim = {
    hidden: {scale:1.5, opacity: 0},
    show: {scale:1, opacity:1, transition: {duration: 2}, ease:"easeInOut"}
}

export const card = {
    hidden: {opacity:0, y:50},
    show: {opacity:1, y:0 , transition:{duration:1}}
}
export const blockHide = {
    hidden: {opacity:1, y:0},
    show: {opacity:1, y:-600 , transition:{duration:2, ease:"easeInOut"}}
}


export const card1 = {
    hidden :{x:-300},
    show: {x:0, transition:{duration:1, staggerChildren:0.25}}
}
export const fade1 = {
    hidden: {opacity: 0},
    show: {opacity:1, transition: {duration: 1, ease:"easeIn"}}
}
export const card2 = {
    hidden :{x:-300, opacity:0},
    show: {x:0,opacity:1, transition:{duration:1, staggerChildren:0.25}}
}
export const card3 = {
    hidden :{x:300, opacity:0},
    show: {x:0,opacity:1, transition:{duration:1, staggerChildren:0.25}}
}