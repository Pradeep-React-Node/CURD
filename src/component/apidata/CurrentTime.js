import react,{useState} from 'react'
import moment from 'moment';



export default function CurrentTime() {
    let time = new Date().toLocaleTimeString();
    

    const[ctime, setCtime] = useState(time);

    const UpdateTime = ()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime,1000)
    return(
        <>
        <h5>{ctime}</h5>
        {/* <h5>{moment().fomate()}</h5> */}
        </>
    )
};

