/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "02/27/2020",
        concept: "git & Github",
        entry: "We talked about utilizing git and Github in a team setting, handling merge conflicts, and compiling data from multiple people. ",
        mood: "content"
    },
    {
        id: 3,
        date: "02/28/2020",
        concept: "Using JS to create HTML",
        entry: "We talked about using JS to dynamically add HTML to the DOM. Reviewed query selectors, event listeners, and how to create separate js files to fulfill the single responsibility princpile",
        mood: "content"
    },

]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}