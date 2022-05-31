let estudiantes=[
    {
        nombre:"Luis",
        cedula:71639201,
        curso:"arduino1",
        foto:"img/profile.png"
    },
    {
        nombre:"Ana",
        cedula:71639201,
        curso:"arduino1",
        foto:"img/profile.png"
    },
    {
        nombre:"Ana",
        cedula:71639201,
        curso:"arduino1",
        foto:"img/profile.png"
    },
    {
        nombre:"Ana",
        cedula:71639201,
        curso:"arduino1",
        foto:"img/profile.png"
    },
    {
        nombre:"Ana",
        cedula:71639201,
        curso:"arduino1",
        foto:"img/profile.png"
    },{
        nombre:"Ana",
        cedula:71639201,
        curso:"arduino1",
        foto:"img/profile.png"
    },
    {
        nombre:"Ana",
        cedula:71639201,
        curso:"arduino1",
        foto:"img/profile.png"
    },
    {
        nombre:"Ana",
        cedula:71639201,
        curso:"arduino1",
        foto:"img/profile.png"
    }
]
let fila=document.getElementById("fila")
estudiantes.forEach(function(estudiante){
    let colunna=document.createElement("div")
    colunna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow","p-3")

    let foto=document.createElement("img")
    foto.classList.add("w-100","img-fluid")
    foto.src=estudiante.foto
    
    let nombre=document.createElement("h4")
    nombre.classList.add("text-center")
    nombre.textContent=estudiante.nombre

    let cedula=document.createElement("h6")
    cedula.classList.add("text-center")
    cedula.textContent="ID: " +estudiante.cedula


tarjeta.appendChild(foto)
tarjeta.appendChild(nombre)
tarjeta.appendChild(cedula)
colunna.appendChild(tarjeta)
    fila.appendChild(colunna)
})