import Footer from "./Footer.tsx";
import Orders from "./orders/Orders.tsx";
import Favorite from "./favorite/Favorite.tsx";
import Account from "./account/Account.tsx";
import Search from "./search/Search.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";

const ShowPage = () => {
    const {page}=useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if(page==="accounting") {
            navigate(`/search`);
        }
        return () => {
            console.log("unmount");
            navigate(`/accounting`);

        }
    },[])

    const renderPage = (page: string) => {
        switch (page) {
            case "orders":
                return <Orders/>;
            case "favorite":
                return <Favorite/>;
            case "account":
              return <Account/>
            case "search":
                return <Search/>;
            default:
                return <Search/>
        }
    }
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex-grow">
            {renderPage(page!)}
            </div>

            <Footer/>

        </div>
    );
};

export default ShowPage;