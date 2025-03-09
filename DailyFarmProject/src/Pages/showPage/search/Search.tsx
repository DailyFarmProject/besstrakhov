import MainSearch from "./mainsearch/MainSearch.tsx";
import ProductList from "./productList/ProductList.tsx";

import {Link, useParams} from "react-router-dom";
import {searchIcon} from "../../../features/icons/icons.tsx";
import {useState} from "react";


const Search = () => {
     const {list}=useParams();
     const [searchName, setSearchName] = useState("");

     return (
         <div className="p-2">
              <div className={"flex flex-row border-sighInForm border-gray-400 mt-1 p-1 rounded-lg align-center"}>
                  <Link to={`/search/${searchName}`} className={"mt-[0.1rem]"}>{searchIcon("size-5")}</Link>
                  <input type={"text"} placeholder={"Search..."}
                         onChange={(e) => setSearchName(e.target.value)}
                         className={"w-full mx-sighInForm focus:outline-none"}/>
              </div>
             <div>
                 {list?.length?<ProductList/>:<MainSearch/>}
             </div>

         </div>

)


};

export default Search;