import SignInMobForm from "../../../Widjests/sighInForm/layouts/SignInMobForm.tsx";
import {useEffect, useState} from "react";
import SighInDeck from "../../../Widjests/sighInForm/layouts/SighInDeck.tsx";


interface Props {
    setPage: (page: string) => void;
}

const SignIn = ({setPage}:Props) => {

    const [winWight, setWinWight] = useState<number>(window.innerWidth);
    const [iSMobile, setIsMobile] = useState<boolean>(mobileCheck(winWight));

    useEffect(() => {
        const windowChange=()=>{
            setWinWight(window.innerWidth);
            setIsMobile(mobileCheck(winWight));
            console.log(iSMobile);
        }
        window.addEventListener("resize", windowChange);
        return () => window.removeEventListener("resize", windowChange);

    })

    function mobileCheck(wight:number){
        return  wight<786;
    }


    return (
        <div className={"flex flex-col min-h-screen"}>
            {iSMobile?
                <div className={"m-auto w-[80%] mt-[20vh]"}>
                    <SignInMobForm/>
                </div>:
                <div>
                   <SighInDeck/>
                </div>
            }
            <p className={"text-center mb-[38vh]"}>
                if you sing in, you may{'\u00A0'}
                <span className={"text-blue-400 cursor-pointer"}
                      onClick={() => {setPage("logIn")}}
                >log in </span>
            </p>
        </div>
    );
};

export default SignIn;