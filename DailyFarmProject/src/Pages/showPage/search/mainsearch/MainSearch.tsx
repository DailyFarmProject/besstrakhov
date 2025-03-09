
import Cards from "../../../../Widjests/cards/Cards.tsx";

const MainSearch = () => {
    return (
        <div>
            <h3 className={"text-2xl text-gray-500 border-b pb-1 mt-sighInForm"}>For you</h3>
            <div className="mt-5">
                <Cards type={"recCards"} swap={true}/>
            </div>

            <h3 className={"text-2xl text-gray-500 border-b pb-1 mt-sighInForm"}>Best praise</h3>
            <div className="mt-5">
                <Cards type={"saleCards"} swap={false}/>
            </div>
        </div>
    );
};

export default MainSearch;