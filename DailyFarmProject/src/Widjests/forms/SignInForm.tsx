import {useState} from "react";
import {chevronLeftIcon, chevronRightIcon} from "../../features/icons/icons.tsx";
import {motion} from "framer-motion";
import {setToken} from "../../features/user/userSlice.ts";
import {useAppDispatch} from "../../app/hooks.ts";
const SignInForm = () => {

    const [stage, setStage] = useState(1)
    const [animationsType,setAnimationType]=useState<'init' | 'left' | 'right'>("init")
    const dispatch = useAppDispatch();

    const animationsProps={
        'init':{
            initial:{x:0},
            animate:{x:0},
        },
        'left':{
            initial:{x: '-100%'},
            animate:{x: 0},
        },
        "right":{
            initial:{x: '100%'},
            animate:{x: 0},
        }
    }

  const chevronClick=(type:string)=>{
        if(type==="right"){
            setStage(p=>p+1);
            setAnimationType("right")
        }else{
            setStage(p=>p-1);
            setAnimationType("left");
        }
  }

    const handleClick=()=>{
        setTimeout(()=>dispatch(setToken(true)),150)
    }


    const renderPage = (stage:number) => {
        switch (stage) {
            case 1:
             return (
                 <div className="inputForm" x-data="{show:false}">
                     <label> First Name
                         <input className={"inputFormItem"} type={"text"} required/>
                     </label>
                     <label> last Name
                         <input className={"inputFormItem"} type={"text"} required/>
                     </label>
                     <label> birth date
                         <input className={"inputFormItem pt-2 border-2 "} type={"date"} required/>
                     </label>
                     <label> gender
                         <select className={"inputFormItem pt-2 focus:w-1/2"}>
                             <option>man</option>
                             <option>women</option>
                         </select>
                     </label>
                     <div className="ms-auto mt-2 text-gray-500"
                         onClick={() =>chevronClick("right")}>{chevronRightIcon()}</div>
                 </div>
             )
            case 2:
                return (
                    <div className={"inputForm"}>
                        <label>Phone number:
                            <input className={"inputFormItem"} type={"phone"} required/>
                        </label>
                        <label>email address:
                            <input className={"inputFormItem"} type={"email"} required/>
                        </label>
                        <label> Country
                            <select className={"inputFormItem"} required>
                                <option>Israel</option>
                                <option>France</option>
                            </select>
                        </label>
                        <div className={"flex flex-row justify-between  mt-5"}>
                        <div className={"text-gray-500"} onClick={() =>chevronClick("left")}>{chevronLeftIcon()}</div>
                        <div className={"text-gray-500"} onClick={() =>chevronClick("right")}>{chevronRightIcon()}</div>
                        </div>
                    </div>
                )
            case 3:
                return (

                    <div className={"inputForm"}>
                        <div className={"mb-4 text-gray-500"}
                            onClick={() =>chevronClick("left")}>{chevronLeftIcon()}</div>
                        <label> Log In:
                            <input className={"inputFormItem"}/>
                        </label>
                        <label> Password:
                            <input className={"inputFormItem"} type={"text"}/>
                        </label>
                            <button type={"button"} className={"loginButton"} onClick={handleClick}> Sing In</button>
                    </div>
                )
        }
    }
    return (
        <div>

            <motion.div
                key={stage}
                initial={animationsProps[animationsType].initial}
                animate={animationsProps[animationsType].animate}
                // exit={{x: '-100%'}}
                transition={{type: 'spring', stiffness: 250, damping: 30}}

            >
                {renderPage(stage)}
           </motion.div>

        </div>
)

}

export default SignInForm;