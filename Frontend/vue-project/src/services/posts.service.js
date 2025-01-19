    const getUser = (email, password) => {
        return fetch('http://localhost:3333/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then((response) => {
            if(response.status === 200){
                
                return response.json();
            }else if(response.status === 400){
                throw "Bad Request";
            }
            else{
                throw "Something went wrong";
            }
        })
        .then((resJson) => {
            localStorage.setItem('session_token', resJson.session_token);
            localStorage.setItem('user_id', resJson.user_id);
            window.location.href = '/events';
            return resJson;
        })
        .catch((error) => {
            console.log("Err", error);
            return Promise.reject(error);
        })
    }


const logout = () => {
    return fetch ('http://localhost:3333/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('session_token')
        }
    })
   .then((response) => {
       if(response.status === 200){
           localStorage.removeItem('session_token');
           localStorage.removeItem('user_id');
           window.location.href = '/profile';
           return response.json();
       }else if(response.status === 401){
           throw "Not Logged In";

       }else{
           throw "Something went wrong";
       }
   })

   .catch((error) => {
       console.log("Err", error);
       return Promise.reject(error);
   })
}

const createUser = (first_name, last_name, email, password) => {
    return fetch('http://localhost:3333/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ first_name, last_name, email, password })
        })
        .then((response) => {
        if(response.status === 201){
            return response.json();
        }else if(response.status === 400){
            throw "Bad Request";
        }
        else{
            throw "Something went wrong";
        }
        })
        .then((resJson) => {
        window.location.href = '/profile';
        return resJson;
        })
        .catch((error) => {
        console.log("Err", error);
        return Promise.reject(error);
        })
}

const createEvent = (name, description, start, close_registration, location, max_attendees) => {
    return fetch('http://localhost:3333/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('session_token')
        },
        body: JSON.stringify({ name, description, start, close_registration, location, max_attendees})
        })
        .then((response) => {
        if(response.status === 201){
            return response.json();
        }else if(response.status === 400){
            throw "Bad Request";
        }
        else{
            throw "Something went wrong";
        }
        })
        .then((resJson) => {
        window.location.href = '/';
        return resJson;
        })
        .catch((error) => {
        console.log("Err", error);
        return Promise.reject(error);
        })
    }


export const postService = {
    getUser,
    logout,
    createUser,
    createEvent
}