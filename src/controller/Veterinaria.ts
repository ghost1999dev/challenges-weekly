import * as readline from 'readline'
import { Cliente } from '../models/Cliente';
import { Mascota } from '../models/Mascota';
export class Veterinaria {
    public interface:readline.Interface
    public clientes:Cliente []=[]
    constructor() {
        this.interface=readline.createInterface({
            output:process.stdout,
            input:process.stdin
        })
        
    }
    private registrarCliente(){
        this.interface.question('Digite el nombre del cliente ',(nombre)=>{
            this.interface.question('Digite la direccion ',(direccion)=>{
                this.interface.question('Digite el telefono ',(telefono)=>{
                    const existeCliente=this.clientes.find(cl=> cl.nombre == nombre)
                    if (existeCliente) {
                        console.log('El cliente con ese nombre ya existe');
                        this.menu()
                        return
                        
                    }else{
                        const nuevoCliente=new Cliente(nombre,direccion,telefono)
                        this.clientes.push(nuevoCliente)
                        console.log('El cliente se registro con exito');
                        
                        this.menu()
                        
                    }
                    
                })
            })
        })
       
        
    }

    private agregarMascotaCliente(nombreCliente:string){
        const existeCliente= this.clientes.find(cl=>cl.nombre == nombreCliente)
        if (!existeCliente) {
            console.log("Este cliente no esta registrado");
            return
        }
        this.interface.question('Digite el nombre de la mascota',(mascota)=>{
            this.interface.question('Digite el tipo de animal',(tipo)=>{
                this.interface.question('Digite la edad',(edad)=>{
                    const nuevaMascota=new Mascota(
                        mascota,
                        tipo,
                        parseInt(edad)
                    )
                    existeCliente.agregarMascota(nuevaMascota)
                    console.log(`La mascota fue registrada con exito al cliente ${nombreCliente}`);
                    this.menu()
                    
                })
            })
        })

    }

    private listarTodo(){
        if (this.clientes.length === 0) {
            console.log('No hay nada registrado');
            return
        }
        console.log('Esta es la lista de los clientes :');
        
        this.clientes.forEach((elementos)=>{
            console.log(
                `Nombre ${elementos.nombre}\n
                Direccion ${elementos.direccion}\n
                Telefono ${elementos.telefono}`);
            if (elementos.mascotas.length === 0) {
                console.log('No hay mascotas para este cliente');
            }else{
                elementos.mascotas.forEach((elementos)=>{
                    console.log(
                        `Nombre ${elementos.nombre}\n
                         Tipo ${elementos.tipo}\n
                         Edad ${elementos.edad}`);
                }) 
                
            }
            
        })
        this.menu()
    }

    public menu(){
        console.log('*** Bienvenido a la veterinaria ***');
        console.log('1. Registrar cliente');
        console.log('2. Agregar mascota al cliente');
        console.log('3. Registrar visitas');
        console.log('4. Listar todo');

        this.interface.question('Dame una opcion',(opcion)=>{
            switch (opcion) {
                case "1":
                    this.registrarCliente()
                    
                    break;
                case "2":
                    this.interface.question('Digite el nombre del cliente',(nombre)=>{
                        this.agregarMascotaCliente(nombre)
                    })
                    
                
                    break
                case "3":
                    console.log("Registrar visitas");
                    break
                case "4":
                    console.log("Metodo listar");
                    this.listarTodo()
                    break
                default:
                    break;
            }
        })
        
    }

}