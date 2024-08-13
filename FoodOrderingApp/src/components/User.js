const User = (props) => {
    console.log(props);
    return (<div>
        <h1>User Page functional</h1>
        <h2>{props.name}</h2>
        <h3>{props.location}</h3>
    </div>)
}

export default User