import MyMapComponent from "../dataFormDesk/MyMapComponent.tsx";
import DataRegistration from "../dataFormDesk/DataRegistration.tsx";
import {useState} from "react";
import {chevronLeftIcon, chevronRightIcon} from "../../../features/icons/icons.tsx";
import {regDataType} from "../../../types";

import {useSignInApiMutation} from "../../../api/accountApi.ts";


const SighInDeck = () => {
    const [state, setState] = useState<number>(1);
    const [regData, setRegData] = useState<Partial<regDataType>>({})
    const [isChecked, setIsChecked] = useState<boolean>(true)

    const [trigger, {isLoading, isSuccess, isError}] = useSignInApiMutation()

    const handleClick = () => {
        const check = true

        if (check) {
            setIsChecked(true)
            const finaleData = {
                company: regData.company,
                email: regData.email,
                password: regData.password,
                phone: regData.phone,
                coordinates: {
                    latitude: regData.coordinates!.latitude,
                    longitude: regData.coordinates!.longitude,
                }
            }
            trigger(finaleData);
            console.log(regData);

        } else {
            setIsChecked(false);
        }
    }

    return (
        <div className={"mt-5 p-3"}>
            {state < 2 ?
                <div>
                    <MyMapComponent regData={regData} setRegData={setRegData}/>
                    <div
                        onClick={() => setState(2)}
                        className={"border-2 border-gray-300 p-1 mt-5 w-1/7 rounded-r-2xl flex items-center justify-between ms-auto me-2"}>
                        next stage
                        <div className={"text-gray-400"}>{chevronRightIcon()}</div>
                    </div>
                </div> :
                <div>
                    <DataRegistration regData={regData} setRegData={setRegData}/>
                    <div
                        onClick={() => setState(1)}
                        className={"border-2 border-gray-300 p-1 mt-5 w-1/6 rounded-l-2xl flex items-center justify-between ms-2"}>
                        <div className={"text-gray-400"}>{chevronLeftIcon()}</div>
                        previous stage
                    </div>

                    <div className={"w-1/4 mx-auto"}>
                        <button onClick={handleClick} className={"loginButton"}>Sent</button>
                        <div className={"text-center"}>
                            {!isChecked ? <div>Something wrong</div> : null}
                            {isError && <div>Something wrong</div>}
                            {isLoading && <div>Loading...</div>}
                            {isSuccess && <div>Successfully successfully.</div>}
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default SighInDeck;