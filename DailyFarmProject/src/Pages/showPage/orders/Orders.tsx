import Cards from "../../../Widjests/cards/Cards.tsx";

const Orders = () => {
    return (

        <div className="p-2">
            <h2 className={"text-2xl"}>Orders</h2>


            <Cards type={"recCards"} swap={false}/>
        </div>
    );
};

export default Orders;