import { saveEntry } from "../entries/JournalDataProvider.js"



const contentTarget = document.querySelector("#journalForm")

const clearEntry = () => {
    document.querySelector("#date").value = null
    document.querySelector("#concepts").value = " "
    document.querySelector("#journal__entry").value = " "
    document.querySelector("#mood").value = " "
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "recordEntry") {

            const entryDate = document.querySelector("#date").value
            const entryConcept = document.querySelector("#concepts").value
            const entryText = document.querySelector("#journal__entry").value
            const entryMood = document.querySelector("#mood").value

            const newEntry = {
                date: entryDate,
                concept: entryConcept,
                entry: entryText,
                mood: entryMood
            }

        saveEntry(newEntry).then(
            clearEntry
        )
       
        }
})


export const JournalFormComponent = () => {
    

    contentTarget.innerHTML = 
     `
    <form action="" id=formComponent>
    <fieldset id="date-field">
       <label for="date" id="date-label">Enter Today's Date</label>
       <input type="date" name ="date" id="date" required /> 
    </fieldset>

    <fieldset id="concepts-field">
        <label for="concepts" id="concepts-label">What concepts did you cover?</label>
        <input type="text" id="concepts" required />
    </fieldset>

    <fieldset id="entry-field">
        <label for="journal-entry" id="entry-label">Journal Entry:</label>
        <textarea  id="journal__entry" required></textarea>
    </fieldset>

    <fieldset id="mood-field">
        <label for="mood" id="mood-label">Describe your current mood</label>
        <select name="mood" id="mood">
            <option value="Happy">Happy</option>
            <option value="Content"> Content</option>
            <option value="Nervous">Nervous</option>
            <option value="Discouraged">Discouraged</option>
            <option value="Exhausted">Exhausted</option>
        </select>
    </fieldset>
    
</form>

    <div class="journal__button">
        <button class="button" id="recordEntry">Record Journal Entry</button>
</div>
    
    
    `
}


