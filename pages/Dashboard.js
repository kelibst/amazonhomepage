import { useEffect, useState } from "react";

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        let curUser = localStorage.getItem("currentUser");
        if (curUser?.length) {
            curUser = JSON.parse(curUser)
            setCurrentUser(curUser)
        }
    }, [])


    return (
        <div className="userpage">
            <h1>User &apos; s First name: {currentUser.name} </h1>
        </div>
    )
}

export default Dashboard