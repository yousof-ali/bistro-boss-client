import { useEffect, useState } from "react";
import React from "react";

const userMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loader,setLoader] = useState(true);
    useEffect(() => {
        setLoader(true);
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(result => {            
                setMenu(result)
                setLoader(false);
            })
    }, []);
    return[menu,loader]
}
export default userMenu;