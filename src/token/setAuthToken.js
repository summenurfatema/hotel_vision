export const setAuthToken = user => {
    const currentUser = {
        email: user.email,
    }
    // save to mdb
    fetch(`http://localhost:8000/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.token);
            // set to localstorage
            localStorage.setItem('vision-token', data.token)
        })

}