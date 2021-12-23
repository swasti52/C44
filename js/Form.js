class form{
constructor(){
this.input=createInput("").attribute("placeholder","Enter your name")
this.playButton=createButton("play")
this.titleImage=createImage("assets/title.jpg")
this.greeting=createElement("h2")

}
setElement(){
    this.titleImage.position(120,50)
    this.input.position(width/2-110,height/2-80)
    this.playButton.position(width/2-300,height/2-100)
    this.greeting.position(width/2-300,height/2-100)
}
setElementStyle(){
this.titleImage.class("gameTitle")
this.greeting.class("greeting")
this.input.class("customumInput")
this.playButton.class("customButton")



}
hide(){
    this.greeting.hide()
       this.input.hide()
    this.playButton.hide()
}
display(){
    this.setElement()
    this.setElementStyle()
}










}
