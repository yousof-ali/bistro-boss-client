import { useQuery } from "@tanstack/react-query";
import userAxiosPublic from "./userAxiosPublic";

const userMenu = () => {
    const axiosPublic = userAxiosPublic()
    // const [menu, setMenu] = useState([]);
    // const [loader,setLoader] = useState(true);
    // useEffect(() => {
    //     setLoader(true);
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(result => {            
    //             setMenu(result)
    //             setLoader(false);
    //         })
    // }, []);
    const {data: menu = [],isLoading:loader,refetch} = useQuery({
        queryKey:['menu'],
        queryFn:async() => {
            const res = await axiosPublic('/menu');
            return res.data
        }
    })
    return[menu,loader,refetch]
}
export default userMenu;