class APIManager {
    constructor(renderer) {
        this.renderer = renderer
    }

    getUsers() {
        $.ajax({
            method: `GET`,
            url: `https://randomuser.me/api/?results=7`,
            dataType: 'json',
            success: data => {
            console.log(data)
                this.renderer.renderUsers(data)
                this.renderer.renderFriends(data)},
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }

    getQuote() {
        $.ajax({
            method: `GET`,
           url : `https://api.kanye.rest?format=text`,
            success: quote => {
                console.log(quote)
                this.renderer.renderQuote(quote)},
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }

    getPokemon() {
        let randomNum = Math.floor(Math.random() * 949)
        $.ajax({
            method: `GET`,
            url: `https://pokeapi.co/api/v2/pokemon/${randomNum}/`,
            success: pokemon => {
                console.log(pokemon)
                this.renderer.renderPokemon(pokemon)},
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }

    getMeat() {
      $.ajax({
          method: `GET`,
          url:`https://baconipsum.com/api/?type=meat-and-filler`,
          success: text => {
              console.log(text)
              this.renderer.renderMeat(text)},
          error: function (xhr, text, error) {
            console.log(text)
        }
      })
    }

    generateNewPage() {
       this.getUsers()
       this.getQuote()
       this.getPokemon()
       this.getMeat()
    }
}