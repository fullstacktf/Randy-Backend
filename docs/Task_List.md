## Comandos de la api para manejar la Task List

### GET

| url            | Descripción        |
| -------------- | ------------------ |
| /api/taskslist | Entrega las tareas |

##### JSON que retorna
```
  contain: { type: String, require: true, unique: false },
  updated: { type: Date, default: Date.now() },
  created: { type: Date, default: Date.now() },
  checked: { type: Boolean, default: false }
``` 

### POST

| url       | Descripción                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| /api/task | Añade una nueva tarea que tenga en [**key** - `contain`] y en [**value** - `El contenido de la tarea`] |
