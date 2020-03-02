/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            ${entry.date} - ${entry.entry}
        </section>
    `
}

export default JournalEntryComponent