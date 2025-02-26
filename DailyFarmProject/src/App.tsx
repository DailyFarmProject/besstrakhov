import {useAppSelector} from "./app/hooks.ts";
import Accounting from "./Pages/accounting/Accounting.tsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./app/router.tsx";
function App() {
    
    const token = useAppSelector(state => state.user.token);
    if (token) {
     return    <RouterProvider router={router}/>
    } else {
        return <Accounting/>
    }



}
    export default App
