/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.

let journalEntries = []



const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")

    eventHub.dispatchEvent(entryStateChangedEvent)
}




export const getEntries = () => {
   return fetch('http://localhost:3000/entries')
        .then(response => response.json())
        .then(parsedResponse => (journalEntries = parsedResponse))
}



/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const journalEntriesArray = journalEntries.slice()
    const sortedByDate = journalEntriesArray.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}
 


export const saveEntry = entry => {
    return fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}



export const deleteEntry = entryId => {
    return fetch(`http://localhost:3000/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}

