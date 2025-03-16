import PhoneInput from "react-phone-input-2";
import {regDataType} from "../../../types";
import {ChangeEvent} from "react";


interface Props {
    setRegData:(data:Partial<regDataType>)=>void
    regData:Partial<regDataType>
}

const DataRegistration = ({setRegData,regData}:Props) => {

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
         setRegData({...regData, [e.target.name]: e.target.value})
    }

    return (
        <div className={"inputForm"}>
            <label> Name of Company
                <input className={"inputFormItem"} onChange={handleChange} name={"company"} type={"text"}/>
                <label> email:
                    <input className={"inputFormItem"} name={"email"} onChange={handleChange} type={"email"}/>
                </label>
                <label> Password:
                    <input className={"inputFormItem"} name={"password"} onChange={handleChange} type={"text"}/>
                </label>
            </label>
            <PhoneInput
                country={'il'}
                onChange={(phone)=>setRegData({...regData, phone:phone})}
                onlyCountries={['il','fr']}
            />
        </div>
    );
};

export default DataRegistration;