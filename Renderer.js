
class Renderer {
    constructor(){

    }

    renderUser(userData) {
        const source = $('#user-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(userData);
        $('#user-container').append(newHTML);
    }

    renderQuote() {

    }

    renderPokemon() {

    }

    renderAboutMe() {

    }

    renderPage(data) {
        this.renderUser(data.mainUser)
        this.renderQuote()
        this.renderPokemon()
        this.renderAboutMe()
    }
}