import {useAppDispatch} from "../../app/hooks.ts";
import {setAuthentication} from "../../features/user/userSlice.ts";
import {ChangeEvent, useEffect, useState} from "react";
import {loginDataType} from "../../types";
import {useLogInApiMutation} from "../../api/accountApi.ts";

const LogInForm = () => {
    const dispatch = useAppDispatch();
    const [loginData, setLoginData] = useState<Partial<loginDataType>>({})
    const [trigger, {data, isError, isSuccess, isLoading}] = useLogInApiMutation();

    useEffect(() => {

        if (isSuccess) {
            dispatch(setAuthentication(true))
        }

    }, [data, isSuccess]);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    const handleClick = () => {
        const finaleData = {
            email: loginData.login,
            password: loginData.password,
        }
        console.log(finaleData)

        trigger(finaleData)


    }


    return (
        <div className={"inputForm"}>

            <label> Log In:
                <input className={"inputFormItem"} type={"text"} name={"login"} onChange={handleChange}/>
            </label>
            <label> Password:
                <input className={"inputFormItem"} name={"password"} onChange={handleChange} type={"text"}/>
            </label>
            <button className={"loginButton"} onClick={handleClick}> Log In</button>
            <div className={"text-center"}>
                {isLoading && <div>please wait</div>}
                {isError && <div></div>}
            </div>
        </div>
    );
};

export default LogInForm;