
class Renderer {
    constructor(){

    }

    renderUser(userData) {
        const source = $('#user-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(userData);
        $('.user-container').append(newHTML);
    }

    renderFriends(friendsData) {
        const source = $('#friends-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({friend: friendsData});
        $('.friends-container').append(newHTML);
    }

    renderQuote(quoteData) {
        const source = $('#quote-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(quoteData);
        $('.quote-container').append(newHTML);
    }

    renderPokemon(pokemonData) {
        const source = $('#pokemon-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(pokemonData);
        $('.pokemon-container').append(newHTML);
    }

    renderAboutMe(aboutMeData) {
        const source = $('#aboutMe-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(aboutMeData);
        $('.meat-container').append(newHTML);
    }

    renderPage(data) {
        this.renderUser(data.mainUser)
        this.renderFriends(data.friends)
        this.renderQuote(data.randQuote)
        this.renderPokemon(data.pokemon)
        this.renderAboutMe(data.aboutMe)
    }

}