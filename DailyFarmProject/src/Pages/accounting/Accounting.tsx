import SignIn from "./sigIn/SignIn.tsx";
import LogIn from "./logIn/LogIn.tsx";
import {useEffect, useState} from "react";


const Accounting = () => {

    const button=()=> {
        fetch('https://daily-farm-latest.onrender.com/farmer/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // 'mode': 'no-cors',
                'X-Latitude': '32.800223849999995',
                'X-Longitude': '32.800223849999995'
            },
            body: JSON.stringify({
                    "phone": "22155665",
                    "email": "max@bobmail.bob",
                    "password": "12345678",
                    "company": "string",
                    "coordinates": {
                        "latitude": 32.800223849999995,
                        "longitude": 35.522077311215256
                    }
                }
            )
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
    }
        useEffect(() => {
            window.history.pushState(null, "", "/accounting");
            return () => {
                window.history.pushState(null, "", "/");
            }

        })

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
        <div>
            <button onClick={button}>push</button>
            {render(page)}
        </div>
    );
};

export default Accounting;