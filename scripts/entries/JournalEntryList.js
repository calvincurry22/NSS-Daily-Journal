/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries, deleteEntry } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"


const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryStateChanged", changeEvent => {
    getEntries()
        .then(EntryListComponent)

})


// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector("#entryLog");

const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    
        const entries = useJournalEntries();

        contentTarget.innerHTML = `
            ${entries.map(
                currentEntryObject => {
                    return JournalEntryComponent(currentEntryObject)
                }
            ).join("")}
    `
}
export default EntryListComponent



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteEntry(id).then(
           () => {
             EntryListComponent()  
           }
       )
    }
})

