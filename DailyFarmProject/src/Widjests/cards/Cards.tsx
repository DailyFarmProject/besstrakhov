import {CardsSliceType} from "../../features/cardsSlice/CardsSlice.tsx";
import {useAppSelector} from "../../app/hooks.ts";
import CardsForm from "./CardsForm.tsx";
import {useState} from "react";
import {motion} from "framer-motion";
import {useSwipeable} from 'react-swipeable';
import {animationsProps} from "../../features/const.ts";

interface Props {
    type: keyof CardsSliceType,
    swap: boolean
}
const Cards = ({type, swap}: Props) => {

    const cards = useAppSelector(state => state.cards[type]);
    const [elementCount, setElementCount] = useState<number>(0);
    const [animationsType, setAnimationType] = useState<'init' | 'left' | 'right'>("init")

    const moveRight = () => {
        if (cards.length - 1 === elementCount) {
            setElementCount(0);
        } else setElementCount(prev => prev + 1);
        setAnimationType('right')
    }

    const moveLeft = () => {
        if (elementCount === 0) {
            setElementCount(cards.length - 1);
        } else setElementCount(prev => prev - 1);
        setAnimationType('left')

    }
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => moveRight(),
        onSwipedRight: () => moveLeft(),
        preventScrollOnSwipe: true,
        trackMouse: true,
    })
    if (!swap) {
        return (
            <>{cards.map(card => {
                    return <div key={card.name}><CardsForm card={card}/></div>})}
            </>)
    } else {
        return (
            <motion.div
                key={elementCount}
                initial={animationsProps[animationsType].initial}
                animate={animationsProps[animationsType].animate}
                transition={{type: 'spring', stiffness: 250, damping: 30}}
            >
                <div {...swipeHandlers}>
                    <CardsForm card={cards[elementCount]}></CardsForm>
                </div>
            </motion.div>
        )
    }
};

export default Cards;