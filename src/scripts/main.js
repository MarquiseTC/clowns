import { PartyBooking } from "./BooktheClowns.js";
import { fetchClowns, fetchClosed, fetchBookings } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")


const render = () => {
    fetchBookings().then(
        () => fetchClowns())
        .then(() => fetchClosed())
        .then (
            () => 
        
        {
            mainContainer.innerHTML = PartyBooking()
        }
    )
}
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)


render()

