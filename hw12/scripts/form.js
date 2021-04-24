window.addEventListener("load", addListener)

function addListener() {
    //Handler for the carry on
    document.getElementById("carryOn").addEventListener("change", function () {
        var carryOn = document.getElementById("carryOn").value
        carryOn = parseFloat(carryOn)
        if (isNaN(carryOn)) {
            document.getElementById("carryOn").value = 0
            document.getElementById("carryOnAnswer").value = "0.00"
        } else {
            var carryOnAnwser = document.getElementById("carryOnAnswer").value = 19.99
            var carryOnCost = carryOn * carryOnAnwser
            document.getElementById("carryOn").value = carryOn
            document.getElementById("carryOnAnswer").value = carryOnCost.toFixed(2)
        }
        totalCost()
    })
    //Handler for the luggage
    document.getElementById("luggage").addEventListener("change", function () {
        var luggage = document.getElementById("luggage").value
        luggage = parseFloat(luggage)
        if (isNaN(luggage)) {
            document.getElementById("luggage").value = 0
            document.getElementById("luggageAnswer").value = "0.00"
        } else {
            var luggageAnswer = document.getElementById("luggageAnswer").value = 49.99
            var luggageCost = luggageAnswer * luggage
            document.getElementById("luggage").value = luggage
            document.getElementById("luggageAnswer").value = luggageCost.toFixed(2)
        }
        totalCost()
    })
    //Handler for the animal
    document.getElementById("animals").addEventListener("change", function () {
        var animal = document.getElementById("animals").value
        animal = parseFloat(animal)
        if (isNaN(animal)) {
            document.getElementById("animals").value = 0
            document.getElementById("animalsAnswer").value = "0.00"
        } else {
            var animalsAnswer = document.getElementById("animalsAnswer").value = 99.99
            var animalCost = animalsAnswer * animal
            document.getElementById("animals").value = animal
            document.getElementById("animalsAnswer").value = animalCost.toFixed(2)
        }
        totalCost()
    })

    document.getElementById("single").addEventListener("change", function (event) {
        totalCost(event.target.id)
        if (document.getElementById("single").checked) {
            document.getElementById("singleTicket").style.display = "block"
        } else {
            document.getElementById("singleTicket").style.display = "none"
        }
    })
    document.getElementById("combo").addEventListener("change", function (event) {
        totalCost(event.target.id)
        if (document.getElementById("combo").checked) {
            document.getElementById("comboTicket").style.display = "block"
        } else {
            document.getElementById("comboTicket").style.display = "none"
        }    })
}

function totalCost() {
    var total = 
        parseFloat(document.getElementById("carryOnAnswer").value) +
        parseFloat(document.getElementById("luggageAnswer").value) +
        parseFloat(document.getElementById("animalsAnswer").value)
    document.getElementById("totalCost").value = total.toFixed(2)
}