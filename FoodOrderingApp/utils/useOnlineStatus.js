import { useState } from "react"

useOnlineStatus = () => {

    const[onlineStatus, setOnlineStatus] = useState(true);

    //Check offline
    window.addEventListener('offline', () => {
        setOnlineStatus(false);
    })

    //Check Online
    window.addEventListener(
        'online', ()=> {
            setOnlineStatus(true);
        }
    )

    return onlineStatus;  
}


export default useOnlineStatus