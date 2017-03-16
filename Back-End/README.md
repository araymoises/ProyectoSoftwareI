# Proyecto Software I

-----*Pasos para instalar el proyecto:*-----

1) Asegurarse de tener instalado Nodejs, MongoDB y el paquete de comandos Git.

2) Clonar este repositorio en la carpeta que desees:

	$ git clone https://github.com/araymoises/ProyectoSoftwareI ProyectoSoftware

3)Entrar a la carpeta donde se clonó el repositorio:

	$ cd ProyectoSoftware

4) Instalar y ejecutar las dependencias, mediante npm:

	$ npm install

5) Ejecutar el servidor mongo:

	$ mongod

6) Y en otra consola, ejecutar el proyecto:

	$ node app


#
-----*Cómo usar la API REST:*-----

| Ruta | Metodo | Despcrición |
| :---: | --- | --- |
| /api | GET | Devuelve todo lo contenido en la "tabla" api. |
| /api/ | POST | Inserta una nueva tupla en la api. |
| /api/id=dfdsfdsfsdfcdsf | GET | Devuelve la "tupla" en donde se encuentra tal id. |
| /api/id=djhcanxdhasd | PUT | Actualiza una tupla en la api. |
| /api/id=djahcadascdnxdh | DELETE | Elimina una tupla en la api. |

#
-----*Pasos para subir tu actualización al repositorio:*-----

1) Armar la sentencia:

	$ git commit -a -m "Breve explicación del código que se editó"
1.    -a : Se utiliza para seleccionar automáticamente, todos los archivos modificados del proyecto.
2.    -m : Sirve para crear el mensaje de explicación.

2) Subir los archivos que se editaron:

	$ git push origin master

Nota: En caso de que trates de subir un archivo que no existía antes en el repositorio, debes usar el comando "git add -A".

#
-----*Puntos a tratar:*-----

1. El grupo Front-end trabajará mayormente en la carpeta resources.


-------------*POLYMER README*--------------------


# Polymer App Toolbox - Starter Kit

[![Build Status](https://travis-ci.org/PolymerElements/polymer-starter-kit.svg?branch=master)](https://travis-ci.org/PolymerElements/polymer-starter-kit)

This template is a starting point for building apps using a drawer-based
layout. The layout is provided by `app-layout` elements.

This template, along with the `polymer-cli` toolchain, also demonstrates use
of the "PRPL pattern" This pattern allows fast first delivery and interaction with
the content at the initial route requested by the user, along with fast subsequent
navigation by pre-caching the remaining components required by the app and
progressively loading them on-demand as the user navigates through the app.

The PRPL pattern, in a nutshell:

* **Push** components required for the initial route
* **Render** initial route ASAP
* **Pre-cache** components for remaining routes
* **Lazy-load** and progressively upgrade next routes on-demand

### Migrating from Polymer Starter Kit v1?

[Check out our blog post that covers what's changed in PSK2 and how to migrate!](https://www.polymer-project.org/1.0/blog/2016-08-18-polymer-starter-kit-or-polymer-cli.html)

### Setup

##### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli

##### Initialize project from template

    mkdir my-app
    cd my-app
    polymer init starter-kit

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    polymer serve --open

### Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build/unbundled` folder, and are suitable
for serving from a HTTP/2+Push compatible server.

In addition the command also creates a fallback `build/bundled` folder,
generated using fragment bundling, suitable for serving from non
H2/push-compatible servers or to clients that do not support H2/Push.

    polymer build

### Preview the build

This command serves the minified version of the app at `http://localhost:8080`
in an unbundled state, as it would be served by a push-compatible server:

    polymer serve build/unbundled

This command serves the minified version of the app at `http://localhost:8080`
generated using fragment bundling:

    polymer serve build/bundled

### Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    polymer test

### Adding a new view

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections of the
application. Each new demand-loaded fragment should be added to the list of
`fragments` in the included `polymer.json` file. This will ensure those
components and their dependencies are added to the list of pre-cached components
and will be included in the `bundled` build.

