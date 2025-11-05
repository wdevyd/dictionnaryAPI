document.querySelector("#search-btn").addEventListener('click', () => {
    const content = document.querySelector('input').value.trim();
    if (!content){
        console.log("Error please enter a word");
        return;
    }
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${content}`)
        .then(response => {
            if (!response.ok) throw new Error(`${content} was not found in dictionnary`);
            return response.json();
        })
        .then(data => {
            const phonetic = data[0].phonetic || 'Phonetic not available';
            const meanings = data[0].meanings;
            let html = `<h2>${content}</h2><p>${phonetic}</p>`;
            meanings.forEach(meaning => {
                html += `<h3>${meaning.partOfSpeech}</h3><ul>`;
                meaning.definitions.forEach(def => {
                    html += `<li>${def.definition}</li>`;
                });
                html += `</ul>`;
            });
            document.querySelector('#results').innerHTML = html;
        })
        .catch(err => {
            let errHtml = `<p>${err.message}</p>`;
            document.querySelector('#results').innerHTML = errHtml;
        })
})
