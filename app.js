class GoogleKeepClone {
    constructor(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }
}

class App {
    constructor() {
        this.notes = [];
    }

    addNote(id, { title, text }) {
        const newNote = new GoogleKeepClone(id, title, text);
        this.notes = [...this.notes, newNote];
    }

    editNote(id, { title, text }) {
        const newNote = new GoogleKeepClone(id, title, text);
        this.notes = this.notes.map((note) => (note.id === id ? newNote : note));
    }

    addEventListener() {
        document.body.addEventListener("click", (event) => {
            this.handleFormClick(event);
        });
    }

    handleFormClick(event) {
        console.log(event);
    }

    getNotes() {
        return this.notes;
    }
}