import { useState, useEffect } from 'react'
export default function UseState() {

    const [ users, setUsers ] = useState([]);

    // use state takes 2 parameters
    // it takes first parameter as an function and 2nd as an array
    useEffect(() => {  // Never pass dynamic variables or functions inside the useEffect like useEffect((new Date()) => {})
        console.log("here we're in useEffect()")
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
    }, []);  // inside this array if we didn't put variable name, this function will run once. If we put will run and update the variable

    console.log(users);

    return (
        <ul>
          {users.map(user => (
            <li key={user?.id}>{user?.name}</li>
          ))}
        </ul>
    );
}