import {useAppDispatch} from "../app/hooks.ts";
import {setAuthentication} from "../features/user/userSlice.ts";


const LogOut = () => {
    const dispatch=useAppDispatch();
    const handleClick=()=>{
        dispatch(setAuthentication(false))
    }

    return (
        <div onClick={handleClick}>
            <h2 className={"text-3xl text-blue-400"}>Log</h2>
        </div>
    );
};

export default LogOut;