import { useState, useEffect } from "react";

const useInternetStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('online', () => {
            setOnlineStatus(true);
        })
    
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        })
    }, [])

    return onlineStatus;

}

export default useInternetStatus