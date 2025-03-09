import {useState} from "react";
import {motion} from "framer-motion";
import {animationsProps} from "../../../features/const.ts";
import PersonalDate from "../dataForm/PersonalDate.tsx";
import CountryDate from "../dataForm/CountryDate.tsx";
import CompanyDate from "../dataForm/CompanyDate.tsx";
import LoginDate from "../dataForm/LoginDate.tsx";
import Confirmation from "../dataForm/Confirmation.tsx";


const SignInMobForm = () => {
    const [stage, setStage] = useState<number>(1)
    const [isFarmer, setIsFarmer] = useState<boolean>();
    const [animationsType, setAnimationType] = useState<'init' | 'left' | 'right'|'opacity'>("init")


    const chevronClick = (type: string) => {
        if (type === "right") {
            setStage(p => p + 1);
            setAnimationType("right")

        }
        else if (type === "finale") {
            setStage(100);
            setAnimationType("opacity")
        }
        else {
            setStage(p => p - 1);
            setAnimationType("left");
        }
    }
    const headerCheckClick = (type: boolean) => {
        chevronClick("right");
        setIsFarmer(type);

    }

    const renderPage = (stage: number) => {
        switch (stage) {
            case 1:
                return (
                    <div className="inputForm">
                        <h2 className={"checkTypeHeader"} onClick={() => headerCheckClick(false)}>Personal</h2>
                        <h2 className={"checkTypeHeader"} onClick={() => headerCheckClick(true)}>For Business</h2>
                    </div>
                )
            case 2:
                return (
                    !isFarmer ? <PersonalDate chevronClick={chevronClick}/> :
                        <CompanyDate chevronClick={chevronClick}/>
                )

            case 3:
                return (
                    <CountryDate chevronClick={chevronClick}/>
                )

            case 4:
                return (
                    <LoginDate  chevronClick={chevronClick} isFarmer={isFarmer}/>
                )
            case 100:
                return (
                    <Confirmation/>
                )
        }
    }
    return (
        <div>

            <motion.div
                key={stage}
                initial={animationsProps[animationsType].initial}
                animate={animationsProps[animationsType].animate}
                transition={{type: 'spring', stiffness: 250, damping: 30}}>
                {renderPage(stage)}
            </motion.div>

        </div>
    )

}

export default SignInMobForm;