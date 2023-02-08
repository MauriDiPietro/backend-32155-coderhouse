import * as services from '../services/persons.js'


export const getHtmlOnwire = async (req, res) => {
    res.render('plantilla-html-onwire', { personas: await services.getAllPersons() })
}

export const postHtmlOnwire = async (req, res) => {
    let persona = req.body
    await services.addPerson(persona)
    res.redirect('/html-onwire')
}
