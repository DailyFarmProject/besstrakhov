import {ChangeEvent, useEffect, useState} from "react";
import {loginDate, signInProps} from "../../../types";
import {useDispatch} from "react-redux";
import {chevronLeftIcon} from "../../../features/icons/icons.tsx";
import {addloginDate} from "../../../features/user/regDataSlice.ts";
import {useAppSelector} from "../../../app/hooks.ts";
import {useSignInApiMutation} from "../../../api/accountApi.ts";
import { checkLenght, checkMail} from "../../../features/checkFunction.ts";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface errorType {
    message: string;
    status: number;

}


const LoginDate = ({chevronClick, isFarmer}: signInProps) => {
    const regData = useAppSelector(state => state.regData)
    const [trigger, {data, isLoading, isSuccess, isError, error}] = useSignInApiMutation()
    const [isChecked, setIsChecked] = useState<boolean>(true)

    const dispatch = useDispatch();
    const [dataReg, setDataReg] = useState<loginDate>({
        email: '',
        password: '',
        phone: '',
    });

    useEffect(() => {
        if (isSuccess) {
            chevronClick('finale')
        }

    }, [isLoading, isSuccess])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDataReg({...dataReg, [e.target.name]: e.target.value});
    }

    const handleClick = () => {
        const mailCheck=checkMail(dataReg.email)
        const lengthCheck = checkLenght(dataReg.password, 8);

        if (mailCheck && lengthCheck) {
           setIsChecked(true)
            dispatch(addloginDate(dataReg))
            if (isFarmer) {
                const finaleData = {
                    company: regData.company,
                    email: dataReg.email,
                    password: dataReg.password,
                    phone: dataReg.phone,
                    coordinates: {
                        latitude: regData.coordinates.latitude,
                        longitude: regData.coordinates.longitude,
                    }
                }
                trigger(finaleData);
            }
        }else {
            setIsChecked(false);
        }
    }
    return (
        <div className={"inputForm"}>
            <div className={"text-gray-500"} onClick={() => chevronClick("left")}>{chevronLeftIcon()}</div>
            <label> email:
                <input className={"inputFormItem"} name={"email"} onChange={handleChange} type={"email"}/>
            </label>
            <label> Password:
                <input className={"inputFormItem"} name={"password"} onChange={handleChange} type={"text"}/>
            </label>
            <PhoneInput
            country={'il'}
            value={dataReg.phone}
            onChange={()=>handleChange}
            onlyCountries={['il','fr']}
            />
            <button className={"loginButton"} onClick={handleClick}>Send</button>
            <div className={"text-center pt-sighInForm"}>
                {!isChecked && <div>Something wrong</div>}
                {isLoading && <div>Loading...</div>}
                {isSuccess && <div>{data}</div>}
                {isError && <div>{(error as errorType).message}</div>}
            </div>

        </div>

    );
};

export default LoginDate;