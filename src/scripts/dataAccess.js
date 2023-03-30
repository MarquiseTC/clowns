const mainContainer = document.querySelector("#container")
const applicationState = {
    bookings:[],
    clowns:[],
    completions: []
}





const API = "http://localhost:8088"


    export const fetchBookings = () => {
        return fetch(`${API}/bookings`)
            .then(response => response.json())
            .then(
                (data) => {
                    applicationState.bookings = data
                }
            )
    }

 export const getBookings = () => {
        return applicationState.bookings.map(booking => ({
            ...booking
        }))
    }

    export const getCompletions = () => {
        return applicationState.completions.map(completion => ({
            ...completion
        }))
    }


export const sendBookings = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/bookings`, fetchOptions)
        .then(response => response.json())
        .then(() => { mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}
export const fetchClowns = () => {
        return fetch(`${API}/clowns`)
            .then(response => response.json())
            .then(
                (data) => {
                    applicationState.clowns = data
                }
            )
    }


 export const getClowns = () => {
        return applicationState.clowns.map(clown => ({
            ...clown
        }))
    }




   export const deleteBookings = (id) => {
        return fetch(`${API}/bookings/${id}`, { method: "DELETE" })
            .then(
                () => {
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                }
            )
    }
// export const saveClown = (clown) => {
//     const saveOption = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(clown)
//         }
//         return fetch(`${API}/closed`, saveOption)
//         .then(response => response.json())
//         .then(() => {
           
    
//     })}
    export const sendCompletion = (userServiceCompletion) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceCompletion)
        }
    
        const mainContainer = document.querySelector("#container")
        return fetch(`${API}/completions`, fetchOptions)   //location of said heist
        // this changes the string into json, and json turns it into an object
            .then(response => response.json())          // dirty money => clean money (.json())
            .then(() => {                               //take clean money => do stuff with it
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }



    export const fetchClosed = () => {
        return fetch(`${API}/completions`)
            .then(response => response.json())
            .then(
                (data) => {
                    applicationState.completions = data
                }
            )
    }

   

  


    



   

 