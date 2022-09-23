class animales{
    constructor(raza,NumeroPatas,Habitat,Alimentación){
        this.raza=raza;
        this.NumeroPatas=NumeroPatas;
        this.Habitat=Habitat;
        this.Alimentación=Alimentación;
    }
}
class serpiente extends animales{
    constructor(raza,NumeroPatas,Habitat,Alimentación){
        super(raza, NumeroPatas,Habitat,Alimentación);
        console.log(`Soy una serpiente`)
    }
}
const serpienteUno=new serpiente("Cabeza de Cobre Americana",0,"Bosques","Roedores,Bichos,Sapos")
console.log(serpienteUno);
const serpienteDos=new serpiente("Víbora Cascabel",0,"bosques, praderas, pantanos","los ratones, las ratas, los pájaros pequeños u otras especies de diminuto tamaño")
console.log(serpienteDos);

const Promocion={
    id_promocio:19230,
    contenido:{
        Lapiz_Labial:"cantidad 2",
        sombras:"cantidad 1",
        barniz:"5 colores"
    },
    Marca:"Jamball"

}
const Videojuegos={
id_producto:201923,
Marca: "Sony",
Contenido:{
    Pelicula:"Call Of Duty"
},
id_pedido:21232332
}

const PedidoFereteria={
    id_Producto:2932131,
    Marca: "grill",
    Contenido:{
        Herramienta:{
             Taladro:1,
             Martillo:2,
             Puntillas:{
                tipo1:"Larga",
                tipo2:"Corta"
             }
        },
        id_producto:3000
    }
}
const VentaComputador={
    Marca:"Dell",
    id_producto:5531,
    id_envio:192443,
    precio:2000500,
    lugar_envio:"Crr 41H 21J 20-40"

}
const InformacionSalario={
    Devengado:1000000,
    nomina:250000,
    id_salario:1232131,
    contacto:{
       correo:"soporte@soporte.com",
       telefono:3003021234,
       telefono_fijo:"4444444"
    }

}
console.log(InformacionSalario.contacto.correo);
console.log(VentaComputador.lugar_envio);
console.log(PedidoFereteria.Contenido.Herramienta.Puntillas)
console.log(Videojuegos.Contenido.Pelicula)
console.log(Promocion.contenido.barniz)