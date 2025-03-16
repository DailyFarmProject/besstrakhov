import SignIn from "./sigIn/SignIn.tsx";
import LogIn from "./logIn/LogIn.tsx";
import {useState} from "react";


const Accounting = () => {

    const button=()=> {
        fetch('https://daily-farm-latest.onrender.com/farmer/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // 'mode': 'no-cors',
                // 'X-Latitude': '32.800223849999995',
                // 'X-Longitude': '32.800223849999995'
            },
            body: JSON.stringify({
                "email":"madsfdsfsdx90@mail.ru",
                "password":"12345678",
                "company":"comp",
                "phone":"11111111",
                "coordinates":{"latitude": "32.7895613", "longitude": "32.5383356"}
                }
            )
        })
            .then(response => response.json())
            .then(data => console.log("data:"+data))
            .catch(error => console.log("Error:"+error.message));
    }
        // useEffect(() => {
        //     window.history.pushState(null, "", "/accounting");
        //     return () => {
        //         window.history.pushState(null, "", "/");
        //     }
        //
        // })


    const [page, setPage] = useState("logIn");
    const render=(page: string) => {
        switch (page) {
            case "logIn":
                return <LogIn setPage={setPage} />;
            case "signIn":
                return <SignIn setPage={setPage} />;
        }
    }
    return (
        <div className="w-2/3 m-auto ">

            {render(page)}
        </div>
    );
};

export default Accounting;