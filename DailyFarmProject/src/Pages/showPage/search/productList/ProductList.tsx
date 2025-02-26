import {useParams} from "react-router-dom";


const ProductList = () => {
    const {list}=useParams()
    return (
        <div>
            <h3 className={"text-2xl text-gray-500 border-b pb-1 mt-2"}>
                {`"${list?.toUpperCase()}"`}</h3>
        </div>
    );
};

export default ProductList;