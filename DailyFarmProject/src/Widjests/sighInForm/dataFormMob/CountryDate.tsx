import {countryDate, signInProps} from "../../../types";
import {useState} from "react";
import {chevronLeftIcon, chevronRightIcon} from "../../../features/icons/icons.tsx";
import {useDispatch} from "react-redux";
import {addCountry} from "../../../features/user/regDataSlice.ts";

const CountryDate = ({chevronClick}: signInProps) => {
    const [data, setData] = useState<countryDate>({coordinates: {latitude: "32.7895613", longitude: "32.7895613"}})
    const [isAgreed, setIsAgreed] = useState<boolean>(true)
    const dispatch = useDispatch()

    const handleChange = () => {
        setData({coordinates: {latitude: "32.7895613", longitude: "32.5383356"}})
    }

    const handleClick = () => {
        if(isAgreed){
            navigator.geolocation.getCurrentPosition(function(position) {
                const currentCoordinate=({coordinates: {latitude:""+position.coords.latitude, longitude:""+position.coords.longitude}})
                dispatch(addCountry(currentCoordinate));
                console.log(position.coords.latitude, position.coords.longitude)
            })
        }
        dispatch(addCountry(data))
        chevronClick("right")
    }

    if (isAgreed) {
        return (
            <div className="inputForm">
                <h2 className={"text-center text-2xl mb-5"}>What is your location ?</h2>
                <button className={"loginButton"} onClick={handleClick}>Use my current location</button>
                <button className={"loginButton"} onClick={() => setIsAgreed(false)}>Select location</button>

            </div>
        )

    } else {
        return (
            <div className={"inputForm"}>
                <label> Country
                    <select className={"inputFormItem"} name={"country"} onChange={handleChange} required>
                        <option>Israel</option>
                        <option>France</option>
                    </select>
                </label>
                <label> City
                    <select className={"inputFormItem"} name={"city"} onChange={handleChange} required>
                        <option>Paris</option>
                        <option>Ashkelon</option>
                    </select>
                </label>
                <div className={"flex flex-row justify-between  mt-5 mb-5"}>
                    <div className={"text-gray-500"}
                         onClick={() => chevronClick("left")}>{chevronLeftIcon()}</div>
                    <div className={"text-gray-500"}
                         onClick={handleClick}>{chevronRightIcon()}</div>
                </div>
                <button className={"loginButton"} onClick={()=>setIsAgreed(true)}>Use my current location</button>
            </div>
        );


    }

};

export default CountryDate;