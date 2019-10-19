// la clase Telefono debe ser importada desde el archivo que la contenga para poder ser usada
// en este caso, el archivo se llama Telefono, y se indica como ./Telefono porque está en el
// mismo directorio que el archivo main
import { Telefono } from "./Telefono"
import { Mail } from "./Mail"
import { Direccion } from "./Direccion"
import { Persona } from "./Persona"

// se crea el objeto nuevo y se le da el nombre de telefonoVero

var cumpleañosPedro = new Date (1976,6,13);
var direccionPedro = new Direccion ("La Cruz Antigua", 3, 3, "B", 28350, "Ciempozuelos", "Madrid");
var mailPedro = new Mail ("personal", "pedro1968@gmail.com");
var telefonoPedro = new Telefono ("personal", 627724378);

var cumpleañosMaria = new Date (1986,2,26);
var direccionMaria = new Direccion ("Lago Blanco", 7, 2, "C", 28980, "Parla", "Madrid");
var mailMaria = new Mail ("profesional", "msanchez@todorizos.es");
var telefonoMaria = new Telefono ("profesional", 913657689);

var cumpleañosFrancisco =  new Date (1966,3,15); 
var direccionFrancisco = new Direccion ("Ampurias", 16, 3, "A", 30310, "Cartagena", "Murcia");
var mailFrancisco = new Mail ("personal", "pacoelrubio@gmail.com");
var telefonoFrancisco = new Telefono ("personal", 868073244);


var personaPedro = new Persona ("Pedro", "García", 43, "23054679P", cumpleañosPedro, "marrón", "hombre", direccionPedro, mailPedro, telefonoPedro, "casado");
var personaMaria = new Persona ("María", "Sanchez Marín", 33, "53476879L", cumpleañosMaria, "amarillo", "mujer", direccionMaria, mailMaria, telefonoMaria, "soltera");
var personaFrancisco = new Persona ("Francisco", "Jimenez Forte", 53, "03862342R", cumpleañosFrancisco, "azul", "hombre", direccionFrancisco, mailFrancisco, telefonoFrancisco, "casado");


var arrayPersona = [ personaPedro, personaMaria, personaFrancisco ]

    
// se muestra por pantalla los valores del objeto
console.log("El nombre es " + .getCumpleaños);
console.log("La dirección es " + .getDirecciones.getCalle);












