interface Persona {
    name:String,
    age:number
}
let lista:Persona[]=[];

function Add(){
    let toAdd:Persona={
        name:(<HTMLInputElement>document.getElementById('name')).value,
        age:parseInt((<HTMLInputElement>document.getElementById('age')).value)
    }
    
    lista.push(toAdd);
    (<HTMLInputElement>document.getElementById('name')).value='';
    (<HTMLInputElement>document.getElementById('age')).value='';
}

function Show(){
    console.log(lista);
    (<HTMLInputElement>document.getElementById('name')).value='';
    (<HTMLInputElement>document.getElementById('age')).value='';
}
