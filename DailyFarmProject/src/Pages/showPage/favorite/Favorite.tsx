import Cards from "../../../Widjests/cards/Cards.tsx";


const Favorite = () => {
    return (
        <div className="mt-2 mb-4 p-2">
            <h2 className={"text-2xl"}>Orders</h2>
            <Cards type={"favoriteCards"} swap={false}/>

        </div>
    );
};

export default Favorite;