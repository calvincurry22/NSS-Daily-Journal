/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>Date: ${entry.date}</p>
            <p>Concept: ${entry.concept}</p>
            <p>Entry: ${entry.entry}</p>
            <p>Overall Mood: ${entry.mood}</p>
            <button id="deleteEntry--${entry.id}">Delete</button>
        </section>
    `
}

export default JournalEntryComponent