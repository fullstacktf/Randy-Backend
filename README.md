# Randy-Backend :soon:

_Proyecto enfocado a ser una herramienta intuitiva para el entorno familiar, ayudar a organizar tareas hacer en el hogar así como compartir facturas en caso de vivir con gente compartiendo piso, como apuntar eventos importantes en el calendario incorporado. Y también tener la opción de tener una lista de la compra_

## Equipo: :man_technologist:

~~[@Carlos M.](https://github.com/AnnwynDev)~~ ┬┴┬┴┤(･\_├┬┴┬┴ <- te quiero igual tio

[@RubénZagon](https://github.com/RubenZagon) :unicorn:


:point_down: Rubén solo a 2 semanas de terminar :point_down:

![Rubén solo a 2 semanas de terminar](https://media.giphy.com/media/UKF08uKqWch0Y/giphy.gif)

## Características del Back-End :robot:

Las principales características están descritas en [aquí](./docs/database/README.md)

## Diseño de la base de datos 📐✏

Utilizamos la herramienta [**Lucidchart**](https://www.lucidchart.com/) y puedes ver el diagrama [Aquí](https://www.lucidchart.com/documents/view/1fd0ad5d-e324-44e0-9688-d3851b540766/0_0)

## Gestión del proyecto

Utilizamos la herramienta Trello, la gestión desde [Aqui](https://trello.com/b/o4BMDaq8/randyapp)

### Características :rocket:

Utilizaremos la arquitectura MERN

| Característica                   | Descripción                                                                                          |
| -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ESlint                           | Revisa el código en JavaScript para mejorar la calidad y en busca de errores                         |
| Travis                           | Servicio de integración continua                                                                     |
| :whale: Docker && docker compose | Automatizador de despliegue de aplicaciones dentro de contenedores de software                       |
| Jest                             | Framework para testing en JavaScript                                                                 |
| Nodemon                          | Herramienta para desarrollador que actualiza automáticamente la aplicación node cuando haces cambios |

### NPM Scripts

| Comando         | Descripción                                                    |
| :-------------- | :------------------------------------------------------------- |
| `npm run start` | Ejecuta el servidor, pero no se actualiza con cada cambio      |
| `npm run dev`   | Activa el nodemon para levantar el servidor por el puerto 3000 |
| `npm run test`  | Pasa los test con Jest                                         |
| `npm run testw` | Activa Jest en modo --watch                                    |
