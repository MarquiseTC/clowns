import { getBookings, getClowns, deleteBookings, sendCompletion, getCompletions} from "./dataAccess.js";
const mainContainer = document.querySelector("#container")
// const save = saveClown()


const  convertBookingToListElement=(booking)=>{
    const clowns = getClowns()
    const completions = getCompletions()
    let html

console.log(clowns)
console.log(completions)


    if(!completions.some(comp => comp.bookingsId === booking.id)){
    html = `
    <li>
        ${booking.date} <select class="clowns" id="clowns"> 
        <option value="">Choose</option>
    ${
        clowns.map(
            clown => {
                return `<option value="${booking.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")


    } 


    </select>
        <button class="booking__Deny"
                id="booking--${booking.id}">
            Deny
        </button>
    </li>
    `}
    return html
}

mainContainer.addEventListener(
    "change",
    (event) => {

    }
)






export const Bookings = () => {
    const bookings = getBookings()
    const sortBookings = bookings.sort((a,b) => new Date(b.date)- new Date(a.date))

    let html = `
        <ul>
            ${
               sortBookings.map(convertBookingToListElement).join("")
            }
        </ul>
    `

    return html
        }

        

        mainContainer.addEventListener("click", click => {
            if (click.target.id.startsWith("booking--")) {
                const [,bookingId] = click.target.id.split("--")
                deleteBookings(parseInt(bookingId))
            }})
    
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [bookingsId, clownId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = {
                bookingsId: parseInt(bookingsId),
                clownId: parseInt(clownId),
                date_created: Date.now()
             }
             sendCompletion(completion)

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)