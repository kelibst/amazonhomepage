const Dashboard = () => {
    let currentUser = localStorage.getItem("currentUser");
    currentUser = JSON.parse(currentUser)
    return (
        <div className="userpage">
            <h1>User's First name: {currentUser.name} </h1>
        </div>
    )
}

export default Dashboard