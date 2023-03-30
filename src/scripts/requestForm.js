import { sendBookings} from "./dataAccess.js"


const mainContainer = document.querySelector("#container")




export const requestForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="requestParent">Parent name</label>
            <input type="text" name="requestParent" class="input" />
        </div>
        <div class="field">
            <label class="label" for="requestChild">Child name</label>
            <input type="text" name="requestChild" class="input" />
        </div>
        <div class="field">
            <label class="label" for="requestAttending">Children attending</label>
            <input type="number" name="requestAttending" class="input" />
        </div>
        <div class="field">
            <label class="label" for="requestAddress">Party address</label>
            <input type="text" name="requestAddress" class="input" />
        </div>

        <div class="field">
            <label class="label" for="requestDate">Date</label>
            <input type="date" name="requestDate" class="input" />
        </div>

        <div class="field">
            <label class="label" for="requestHours">Length in hours</label>
            <input type="number" name="requestHours" class="input" />
        </div>
        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParent = document.querySelector("input[name='requestParent']").value
        const userChild = document.querySelector("input[name='requestChild']").value
        const userAttending = document.querySelector("input[name='requestAttending']").value
        const userAddress = document.querySelector("input[name='requestAddress']").value
        const userDate = document.querySelector("input[name='requestDate']").value
        const userHours = document.querySelector("input[name='requestHours']").value


         // Make an object out of the user input
         const dataToSendToAPI = {
            parent: userParent,
            child: userChild,
            attending: userAttending,
            address: userAddress,
            date: userDate,
            hours: userHours
        }

        // Send the data to the API for permanent storage
        sendBookings(dataToSendToAPI)
    }
    
    })