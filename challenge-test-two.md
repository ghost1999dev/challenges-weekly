# Ejercicio practico: Gestion de botiquin

Implementa un programa en **Typescript** que simule la gestion de un botiquin en un hospital mediante un sistema de CRUD (Crear, Leer, Actualizar y Eliminar). El programa el programa debe ejecutarse en la consola e incluir la gestion de inventario de medicamentos, permitiendo llevar un control preciso de los mismos y su stock.

## Funcionalidades del CRUD 
1. Agregar un nuevo medicamento al botiquin.
    - Datos requeridos :
        - Nombre del medicamento.
        - Cantidad disponible.
        - Fecha de caducidad 
        - Descripcion
2. Mostrar la lista completa de medicamentos en el botiquin.
    - Debe mostrar el nombre del medicamento, cantidad disponible y fecha de caducidad.
    - Permitir la busqueda por nombre de medicamento para consultar sus detalles especificos.
3. Modificar la informacion de un medicamento existente.
    -Permitir actualizar:
     - Nombre del medicamento
     - Cantidad disponible
     - Fecha de caducidad
     - Descripcion

4. Eliminar el medicamento del botiquin.
5. Requisicion de medicamento: Permitir el retiro de una cantidad especifica de un medicamento.
     - Nombre del medicamento
     - Cantidad a retirar
 - Verificar que haya suficiente stock disponible.
 - Si la cantidad a retirar es mayor que el stock disponible, mostrar un mensaje de error.
 - Si el retiro es exitoso, restar la cantidad del stock y mostrar la nueva cantidad disponible.
 - Si la cantidad restante es igual a 0, informar que el medicamento se ha agotado 

 6. Implementar un menu interactivo

 ```typescript
 ===========================
 BOTIQUIN DEL HOSPITAL
 ===========================
 1. Agregar el medicamento
 2. Mostrar el medicamento
 3. Buscar el medicamento
 4. Actualizar medicamento
 5. Eliminar medicamento
 6. Crear la requisicion
 7. Salir
============================
