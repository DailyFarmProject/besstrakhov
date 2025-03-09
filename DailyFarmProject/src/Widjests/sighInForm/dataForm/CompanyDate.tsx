import {companyDate, signInProps} from "../../../types";
import {ChangeEvent, useState} from "react";
import {chevronLeftIcon, chevronRightIcon} from "../../../features/icons/icons.tsx";
import {useDispatch} from "react-redux";
import {addCompanyDate} from "../../../features/user/regDataSlice.ts";
import {checkBadWords} from "../../../features/checkFunction.ts";

const CompanyDate = ({chevronClick}: signInProps) => {
    const [data, setData] = useState<companyDate>({
        company: ""
    })

    const [isChecked, setIsChecked] = useState(true);
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({company: e.target.value});

    }
    const handleClick = () => {
        const check = checkBadWords(data.company);
        if (check) {
            dispatch(addCompanyDate(data))
            chevronClick("right")
        }    else {
            setIsChecked(false);
        }

    }


    return (
        <div className={"inputForm"}>
            <label> Name of Company
                <input className={"inputFormItem"} onChange={handleChange} name={"company"} type={"text"} required/>
            </label>
            <div className={"flex flex-row justify-between  mt-5"}>
                <div className={"text-gray-500"}
                     onClick={() => chevronClick("left")}>{chevronLeftIcon()}</div>
                <div className={"text-gray-500"}
                     onClick={handleClick}>{chevronRightIcon()}</div>
                {!isChecked && <div>Something wrong </div>}
            </div>
        </div>
    );
};

export default CompanyDate;