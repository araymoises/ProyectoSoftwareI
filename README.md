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

GET: http://localhost:3000/api //Devuelve todo lo contenido en la "tabla" api.
POST: http://localhost:3000/api/ //Inserta una nueva tupla en la api.
GET: http://localhost:3000/api/id=dfdsfdsfsdfcdsf //Devuelve la "tupla" en donde se encuentra tal id.
PUT: http://localhost:3000/api/id=djhcanxdhasd //Actualiza una tupla en la api.
DELETE: http://localhost:3000/api/id=djahcadascdnxdh //Elimina una tupla en la api.

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
