class persistenceMemory {
    constructor() {
        this.persons = []
    }
    getAllPersons = async () => {
        return this.persons
    }
    addPerson = async person => {
        this.persons.push(person)
    }
}

export default new persistenceMemory()