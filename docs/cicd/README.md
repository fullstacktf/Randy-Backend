# Github Actions
En el mundo del open source manejado por github es muy común utilizar **Travis**. Este sistema de integración continua es altamente configurable y muy facil de manejar en un principio.

Esto hace que sea una solucion perfecta para los que esten empezando, sin embargo, **Github Actions** surge de la inmensa colaboración de **Travis** con la plataforma, haciendolo muy familiar a los que ya conocen la sintaxis de **Travis**.

Probemos con una acción sobre este repositorio.

# Configuracion de Actions
Los archivos de configuracion de los runners de github estan escritos en YAML y están organizados en torno a tres conceptos base:

- Flujos de Trabajo
- Acciones
- Eventos

Lo primero que debemos hacer es definir un flujo. Por defecto si escribes directamente el archivo de configuración debes hacer una carpeta workflows dentro de .github. Esta ultima carpeta permite  definir configuraciones a cada repositorio. 

Le damos un nombre y un evento:
```yml
name: Only Flow
on: 
  push:
    branches:
      - staging
```
