"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
const readline = __importStar(require("readline"));
const Cliente_1 = require("../models/Cliente");
const Mascota_1 = require("../models/Mascota");
class Veterinaria {
    constructor() {
        this.clientes = [];
        this.interface = readline.createInterface({
            output: process.stdout,
            input: process.stdin
        });
    }
    registrarCliente() {
        this.interface.question('Digite el nombre del cliente ', (nombre) => {
            this.interface.question('Digite la direccion ', (direccion) => {
                this.interface.question('Digite el telefono ', (telefono) => {
                    const existeCliente = this.clientes.find(cl => cl.nombre == nombre);
                    if (existeCliente) {
                        console.log('El cliente con ese nombre ya existe');
                        this.menu();
                        return;
                    }
                    else {
                        const nuevoCliente = new Cliente_1.Cliente(nombre, direccion, telefono);
                        this.clientes.push(nuevoCliente);
                        console.log('El cliente se registro con exito');
                        this.menu();
                    }
                });
            });
        });
    }
    agregarMascotaCliente(nombreCliente) {
        const existeCliente = this.clientes.find(cl => cl.nombre == nombreCliente);
        if (!existeCliente) {
            console.log("Este cliente no esta registrado");
            return;
        }
        this.interface.question('Digite el nombre de la mascota', (mascota) => {
            this.interface.question('Digite el tipo de animal', (tipo) => {
                this.interface.question('Digite la edad', (edad) => {
                    const nuevaMascota = new Mascota_1.Mascota(mascota, tipo, parseInt(edad));
                    existeCliente.agregarMascota(nuevaMascota);
                    console.log(`La mascota fue registrada con exito al cliente ${nombreCliente}`);
                    this.menu();
                });
            });
        });
    }
    listarTodo() {
        if (this.clientes.length === 0) {
            console.log('No hay nada registrado');
            return;
        }
        console.log('Esta es la lista de los clientes :');
        this.clientes.forEach((elementos) => {
            console.log(`Nombre ${elementos.nombre}\n
                Direccion ${elementos.direccion}\n
                Telefono ${elementos.telefono}`);
            if (elementos.mascotas.length === 0) {
                console.log('No hay mascotas para este cliente');
            }
            else {
                elementos.mascotas.forEach((elementos) => {
                    console.log(`Nombre ${elementos.nombre}\n
                         Tipo ${elementos.tipo}\n
                         Edad ${elementos.edad}`);
                });
            }
        });
        this.menu();
    }
    menu() {
        console.log('*** Bienvenido a la veterinaria ***');
        console.log('1. Registrar cliente');
        console.log('2. Agregar mascota al cliente');
        console.log('3. Registrar visitas');
        console.log('4. Listar todo');
        this.interface.question('Dame una opcion', (opcion) => {
            switch (opcion) {
                case "1":
                    this.registrarCliente();
                    break;
                case "2":
                    this.interface.question('Digite el nombre del cliente', (nombre) => {
                        this.agregarMascotaCliente(nombre);
                    });
                    break;
                case "3":
                    console.log("Registrar visitas");
                    break;
                case "4":
                    console.log("Metodo listar");
                    this.listarTodo();
                    break;
                default:
                    break;
            }
        });
    }
}
exports.Veterinaria = Veterinaria;
