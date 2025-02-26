import {accountIcon, favoritIcon, ordersIcon, searchIcon} from "../../features/icons/icons.tsx";
import {Link} from "react-router-dom";
const Footer = () => {

    const icons=[searchIcon("size-8"),ordersIcon("size-8"),favoritIcon("size-8"),accountIcon("size-8")]
    const pathValue=["/search","/orders","/favorite","/account"]

    return (
        <div className="flex flex-row justify-around border-t-2 border-gray-200 pb-2 pt-3 fixed w-full bottom-0 z-10 bg-amber-50 opacity-80">
            {icons.map((icon,i) => (
                <Link key={i} to={pathValue[i]}>
                <div key={i} className={"p-2"}>
                    {icon}
                </div>
                </Link>
            ))}

        </div>
    );
};

export default Footer;