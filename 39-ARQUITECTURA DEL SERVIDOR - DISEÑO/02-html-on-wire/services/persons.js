import model from '../model/persons.js'


export const getAllPersons = async () => {
    return await model.getAllPersons()
}

export const addPerson = async person => {
    await model.addPerson(person)
}
