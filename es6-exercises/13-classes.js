// Rewrite these two object types to use the class keyword, instead of direct
// prototype manipulation. Speaker is a simple type that exposes a speak method
// which, when called, logs the given text along with the speaker's name.
// Shouter is a subtype of Speaker which shouts its text and makes it uppercase.


function Speaker(name, verb) {
  this.name = name
  this.verb = verb || "says"
}
Speaker.prototype.speak = function(text) {
  console.log(this.name + " " + this.verb + " '" + text + "'")
}

class Shouter extends Speaker {
  constructor(name) {
    super(name, "shouts")
  }
  speak(text) {
    super.speak(text.toUpperCase())
  }
}

new Shouter("Dr. Loudmouth").speak("hello there")


// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Speaker_upgrade
