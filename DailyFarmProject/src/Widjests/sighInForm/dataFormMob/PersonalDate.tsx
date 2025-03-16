import {ChangeEvent, useState} from "react";

import {chevronLeftIcon, chevronRightIcon} from "../../../features/icons/icons.tsx";
import {useDispatch} from "react-redux";
import {addPersonalDate} from "../../../features/user/regDataSlice.ts";
import {personalDate, signInProps} from "../../../types";

const PersonalDate = ({chevronClick}:signInProps) => {

    const dispatch = useDispatch();
    const [data, setData] = useState<personalDate>({
        firstName:'',
        lastName:'',
        birthdate:''
        })
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setData({...data, [e.target.name]: e.target.value});
    }
    const handleClick=()=>{
        chevronClick("right")
        dispatch(addPersonalDate(data))

    }

    return (
        <div className="inputForm">
            <label> First Name
                <input className={"inputFormItem"} name={"first_name"} type={"text"} onChange={handleChange} required/>
            </label>
            <label> last Name
                <input className={"inputFormItem"} name={"last_name"} onChange={handleChange} type={"text"} required/>
            </label>
            <label> birth date
                <input className={"inputFormItem pt-sighInForm border-sighInForm "} name={"birthdate"} onChange={handleChange}
                       type={"date"} required/>
            </label>
            <div className={"flex flex-row justify-between  mt-5"}>
                <div className={"text-gray-500"}
                     onClick={() => chevronClick("left")}>{chevronLeftIcon()}</div>
                <div className={"text-gray-500"}
                     onClick={handleClick}>{chevronRightIcon()}</div>
            </div>
        </div>
    );
};

export default PersonalDate;