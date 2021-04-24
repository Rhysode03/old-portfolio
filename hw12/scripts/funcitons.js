function writeAStory() {
    var noun, verb, person1, person2, beverage, location1, location2, animal
    noun = document.getElementById("noun").value
    verb = document.getElementById("verb").value
    person1 = document.getElementById("person1").value
    person2 = document.getElementById("person2").value
    beverage = document.getElementById("beverage").value
    location1 = document.getElementById("location1").value
    location2 = document.getElementById("location2").value
    animal = document.getElementById("animal").value

    document.getElementById("paragraph1").innerHTML = "This is a story about <span>" 
        + person1 + "</span> and <span>" + person2 + "</span>. <span>" + person1 + "</span> really liked to <span>" + verb 
        + "</span> this made <span>" + person1 + "</span> very thirsty. So they asked <span>" + person2
        + "</span> if they would like to go get a <span>" + beverage + "</span>? <span>" + person2
        + "</span> said they would love to but first they needed to go to <span>" + location1 
        + "</span> and get their <span>" + animal + "</span> who needed to <span>" + verb + "</span> and <span>" + noun
        + "</span> was very furry."
    
    document.getElementById("paragraph2").innerHTML = "<span>" + person1 + "</span> and <span>" + person2 
        + "</span> went to the <span>" + location1 + "</span> but couldn't find <span>" + person2 + "</span>'s <span>" + animal
        + "</span> so they decided they would look for <span>" + person2 + "</span>'s <span>" + animal + "</span> at <span>"
        + location2 + "</span> since it liked to <span>" + verb + "</span> out there so it couldn't be found.<span>" 
        + person1 + "</span> thought this was a good idea since they wanted a <span>" + beverage
        + "</span> and could get one along the way. <span>" + person1 + "</span> got their <span>" + beverage 
        + "</span> and <span>" + person2 + "</span> found their <span>" + animal + "</span> <span>" + verb + "</span> at <span>" + location2
    + "</span> it was a <span>" + noun + "</span> day!"
}
    