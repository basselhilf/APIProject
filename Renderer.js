class Renderer {
    renderUsers(users) {
        const userMain = users.results[0]
        const source = $('#user-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(userMain)
        $('.user-container').append(newHTML)
    }

    renderFriends(users) {
      users.results.splice(0,1)
      const userFriends = users.results
      const source = $('#user-friends-template').html()
      const template = Handlebars.compile(source)
      const newHTML = template({userFriends})
        $('.friends-container').append(newHTML)
    }

    renderQuote(quoteInfo) {
        const quote = $(`<div>${quoteInfo}</div>`)
        $('.quote-container').append("<h2><p>Favorite quote:</p></h2>")
        $('.quote-container').append(quote)
        $('.quote-container').append("<div>-Kanye West</div>")
    }

    renderPokemon(pokemonInfo) {
        let pokemon = {
            name: pokemonInfo.forms[0].name,
            sprite: pokemonInfo.sprites.front_default
        }
        const source = $('#pokemon-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(pokemon)
        $('.pokemon-container').append(newHTML)
    }

    renderMeat(meatText) {
        const source = $('#meat-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({meatText})
        $('.meat-container').append(newHTML)
        const meat = $(`<div class="meat-text">${meatText}</div>`)
        $('.meat-container').append("<h2><p>About Me :-</p></h2><br>")
        $('.meat-container').append(meat)
    }
}

Handlebars.registerHelper(`upper`, function(string){
    return string.replace(/^\w/, c => c.toUpperCase())
})