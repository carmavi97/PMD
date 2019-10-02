var lista = [];
function Add() {
    var toAdd = {
        name: document.getElementById('name').value,
        age: parseInt(document.getElementById('age').value)
    };
    lista.push(toAdd);
}
function Show() {
    console.log(lista);
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
}
