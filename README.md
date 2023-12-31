# Proyecto de CRUD de Métodos de Pago

Este proyecto es un sistema CRUD (create, read, update and delete) que gestiona una lista de Métodos de Pago, gracias a requests que se realizan a una API externa. Permite realizar las siguientes operaciones:

- **Ver Todos los Métodos de Pago**: Se muestra una lista completa de todos los métodos de pago disponibles, incluyendo su nombre, descripción y estado.

- **Editar Métodos de Pago**: Cada elemento en la lista se puede editar para actualizar su información.

- **Eliminar Métodos de Pago**: Los métodos de pago existentes se pueden eliminar si ya no son necesarios.

- **Ver Detalles**: Se puede ver una vista detallada de cada método de pago, que incluye todas sus características.

- **Crear Nuevo Método de Pago**: Existe una funcionalidad para crear nuevos métodos de pago y agregarlos a la lista
(al hacer "mouseover" sobre el título de la tabla "Métodos de Pago", este se transforma en "Crear Método de Pago". Al hacer click, permite acceder un form para crear un nuevo método de pago)

## Ejecución del Proyecto

Clonar repositorio: git clone https://github.com/ManuelGonzalez007/paymentMethods.git

Cambiar de rama: git checkout master

npm install

Debido a un bloqueo de la API por parte del proveedor de Internet, he configurado un archivo `proxy.conf.json`. Para ejecutar la aplicación, debes realizar el comando npm start.

Realizada con Angular 14, bootstrap 5, ngx-toastr 14, rxjs 7.5
