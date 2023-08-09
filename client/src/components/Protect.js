import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


const Protect = (props) => {
const navigate = useNavigate()

    useEffect(() => {
        console.log(props.user)
        if(!props.user) navigate('/auth')
    }, []);

    return(
        <div>
            {props.children}
        </div>
    )
}

export default Protect