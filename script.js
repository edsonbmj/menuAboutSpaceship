
let nameSpaceship = prompt("What's the name of the Spaceship?")
let velocityShip = 0
let listOptions

function showMenu(){
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4"){
        option = prompt(
                        "1. Acelerar 5km/s \n" + 
                        "2. Desacelerar 5km/s \n" +
                        "3. Relatório de velocidade \n" +
                        "4. Sair"
                        )
    return option
    }
}

function speedUp(velocity){
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity){
    let newVelocity = velocity - 5
        if(newVelocity <0){
            newVelocity = 0
        }
    return newVelocity
}

function board(name, speed){
    alert("Name: " + name + "\n" +
          "Velocity: " + speed + "\n"
        )
}

do{
    listOptions = showMenu()
    switch(listOptions){
        case "1":
            velocityShip = speedUp(velocityShip)
        break
        case "2":
            velocityShip = slowDown(velocityShip)
        break
        case "3":
            board(nameSpaceship, velocityShip)
        break
        default: alert("ENCERRANDO PROGRAMA...")
    }
}while(listOptions != "4")
