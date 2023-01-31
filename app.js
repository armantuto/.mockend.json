var risultato = document.getElementById("art1")
var res = document.getElementById("stampa")



function stamp(){
var res =document.createElement("div")
res1.innerHTML =  res.document.write("<div id='arti1' class='art1'> <h1>Articolo 1</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,ratione fuga aliquam voluptatibus mollitia velit commodi quis aperiamdignissimos suscipit molestias autem veniam omnis quaerat atque  eveniet id totam labore.</p><h5>by Elon Musk</h5><ul><h5>Comenti</h5><li>good</li><li>nice</li><li>bullshit</li></ul></div>")
    
    
    
}

function scriviRisultato(testo) {
    document.getElementById("").innerText = testo}

function inizio() {
    const testo = document.getElementById("art1").value
    const cerca = document.getElementById("cerca").value
    const trovato = testo.startsWith(cerca)
    scriviRisultato(trovato ? "TROVATO" : "NON TROVATO")

}