class Form{
    constructor(){
    this.input = createInput("name")
    this. button = createButton("play")
    this. greeting = createElement("H2")
    this.title = createElement("H1")
    }

    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        this.title.hide()
    }
    display(){
      
      this.title.html("Multiplayer Car Racing Game")
      this.title.position(displayWidth/2-50,0)

       // var input = createInput("name")
       this.input.position(displayWidth/2-40,displayHeight/2-80)

      //  var button = createButton("play")
     this.button.position(displayWidth/2+30,displayHeight/2)

       // var greeting = createElement("H2")
     this.button.mousePressed  (()=>{
        this.input.hide();
         this.button.hide()
            player. name =this. input.value()
            playerCount+= 1
            player.index = playerCount
            player.update ()
            player.updateCount(playerCount)

         this.greeting.html("Hello" + player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })
    }
}