import { Bookings } from "./booking.js"
import { requestForm } from "./requestForm.js"


export const PartyBooking = () => {
    return `
    <h1>Buttons and Lollipop the Clown!</h1>
    <section class="requestForm">
    ${requestForm()}
    </section>


    <section class="Bookings">
        <h2>Bookings</h2>
        ${Bookings()}
    </section>
    `
}