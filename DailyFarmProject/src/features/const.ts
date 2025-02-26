import {cadsType} from "../types";

export const animationsProps = {
    'init': {
        initial: {x: 0},
        animate: {x: 0},
    },
    'left': {
        initial: {x: '-100%'},
        animate: {x: 0},
    },
    "right": {
        initial: {x: '100%'},
        animate: {x: 0},
    }
}

export const recCards:cadsType[]= [
    {
        name: "name 1",
        description: "description1",
        src: "https://c.pxhere.com/photos/1a/bc/red_food_vegetables_tomato_healthy_ketchup_tomatoes_fresh-456925.jpg!d"
    },
    {
        name: "name 2",
        description: "description2",
        src: "https://cdn.botanichka.ru/wp-content/uploads/2019/04/15-luchshih-sortov-morkovi-16.jpg"
    },

]


export const saleCards:cadsType[]= [
    {
        name: "sale name 1",
        description: "description sale 1",
        src: "https://img.goodfon.ru/wallpaper/nbig/c/48/badfon-autumn-harvest-still-life-1849.webp",
        saleValue:"50%"
    },
    {
        name: "sale name2",
        description: "description2",
        src: "https://img.goodfon.ru/wallpaper/nbig/a/99/autumn-harvest-pumpkin-still-7681.webp",
        saleValue:"20%"
    },

]

export const favoriteCards:cadsType[]= [
    {
        name: "name 1",
        description: "description1",
        src: "https://c.pxhere.com/photos/1a/bc/red_food_vegetables_tomato_healthy_ketchup_tomatoes_fresh-456925.jpg!d"
    },

]

