# SISTEMA DE VENTA PARA PANADERÍA

## Documentación del Proyecto

---

# Portada

![Portada](/images/Portada.png)

---

# Tabla de Contenido

1. Introducción
2. Objetivo
3. Marco Teórico

   * Conceptos Generales
   * Herramientas Utilizadas
4. Desarrollo de Software

   * Planeación del Proyecto
   * Arquitectura del Sistema
   * Base de Datos
   * Frontend
   * Backend
   * Autenticación
   * Sistema de Ventas
5. Conclusión
6. Bibliografía

---

# Introducción

Actualmente, muchos negocios requieren herramientas tecnológicas que les permitan mejorar la administración de sus ventas, inventario y usuarios. Las panaderías no son la excepción, ya que diariamente realizan múltiples operaciones relacionadas con la venta de productos, control de stock y registro de información.

El presente proyecto consiste en el desarrollo de un sistema de venta para una panadería utilizando el stack MERN, conformado por MongoDB, Express, React y Node.js. El sistema tiene como finalidad automatizar los procesos de venta y administración mediante una plataforma web moderna, eficiente y escalable.

El sistema incluye funcionalidades como autenticación de usuarios, gestión de productos, control de inventario, registro de ventas y administración mediante un dashboard interactivo.

Además, el proyecto busca aplicar conocimientos relacionados con el desarrollo web full stack, bases de datos NoSQL y arquitectura cliente-servidor.

---

# Objetivo

## Objetivo General

Desarrollar un sistema de venta para una panadería utilizando tecnologías del stack MERN con el propósito de optimizar el proceso de ventas, control de productos y administración de usuarios.

---

## Objetivos Específicos

* Implementar un sistema de autenticación para usuarios.
* Crear un módulo de administración de productos.
* Desarrollar un sistema de registro de ventas.
* Implementar control de inventario.
* Conectar una base de datos MongoDB con el sistema.
* Diseñar una interfaz moderna y fácil de utilizar.
* Aplicar arquitectura cliente-servidor.

---

# Marco Teórico

# Conceptos Generales

## Sistema de Ventas

Un sistema de ventas es una aplicación que permite registrar, administrar y controlar las operaciones comerciales de un negocio. Estos sistemas facilitan el almacenamiento de información relacionada con productos, usuarios, ventas e inventario.

---

## Base de Datos NoSQL

Las bases de datos NoSQL son sistemas de almacenamiento que permiten manejar grandes cantidades de información de forma flexible. MongoDB es una base de datos NoSQL orientada a documentos que almacena la información en formato JSON.

---

## Arquitectura Cliente-Servidor

La arquitectura cliente-servidor es un modelo en el cual una aplicación se divide en dos partes:

* Cliente: interfaz visual utilizada por el usuario.
* Servidor: lógica del sistema y conexión con la base de datos.

En este proyecto, React funciona como cliente y Node.js con Express como servidor.

---

## API REST

Una API REST permite la comunicación entre el frontend y el backend mediante solicitudes HTTP como GET, POST, PUT y DELETE.

---

# Herramientas Utilizadas

## MongoDB

MongoDB es una base de datos NoSQL utilizada para almacenar la información del sistema como usuarios, productos y ventas.

Características:

* Almacenamiento flexible.
* Escalabilidad.
* Alto rendimiento.
* Uso de documentos JSON.

---

## Express.js

Express es un framework para Node.js que facilita la creación de APIs y manejo de rutas.

Funciones principales:

* Gestión de rutas.
* Middleware.
* Manejo de peticiones HTTP.
* Conexión con MongoDB.

---

## React

React es una biblioteca de JavaScript utilizada para construir interfaces de usuario dinámicas.

Ventajas:

* Componentes reutilizables.
* Renderizado eficiente.
* Interfaz interactiva.
* Fácil mantenimiento.

---

## Node.js

Node.js es un entorno de ejecución para JavaScript que permite desarrollar aplicaciones del lado del servidor.

Características:

* Alto rendimiento.
* Programación asíncrona.
* Escalabilidad.

---

## Vite

Vite es una herramienta de desarrollo moderna utilizada para crear proyectos React de forma rápida y optimizada.

---

## Axios

Axios es una librería utilizada para realizar solicitudes HTTP entre el frontend y backend.

---

## JWT

JSON Web Token es un método de autenticación utilizado para proteger rutas y validar usuarios.

---

## bcryptjs

bcryptjs es una librería utilizada para cifrar contraseñas y mejorar la seguridad del sistema.

---

# Desarrollo de Software

# Planeación del Proyecto

El desarrollo del sistema inició con la identificación de las necesidades principales de una panadería.

Se definieron los siguientes módulos:

* Inicio de sesión.
* Registro de usuarios.
* Gestión de productos.
* Sistema POS.
* Registro de ventas.
* Dashboard administrativo.
* Control de inventario.

Posteriormente se diseñó la estructura del proyecto y la arquitectura del sistema.

---

# Arquitectura del Sistema

El sistema fue desarrollado utilizando arquitectura MERN.

## Frontend

El frontend fue desarrollado con React y Vite.

Funciones principales:

* Interfaz gráfica.
* Navegación entre páginas.
* Formularios.
* Consumo de API.

---

## Backend

El backend fue desarrollado utilizando Node.js y Express.

Funciones:

* Procesamiento de datos.
* Validación de usuarios.
* Manejo de rutas.
* Conexión con MongoDB.
* Generación de tokens JWT.

---

# Base de Datos

La base de datos utilizada es MongoDB.

## Colecciones principales

* users
* products
* sales
* inventory
* categories

La información se almacena mediante documentos JSON.

---

# Sistema de Autenticación

El sistema cuenta con autenticación mediante JWT.

Proceso:

1. El usuario ingresa correo y contraseña.
2. El servidor valida las credenciales.
3. Se genera un token JWT.
4. El usuario accede al sistema.

Además, las contraseñas son cifradas utilizando bcryptjs.

---

# Gestión de Productos

El sistema permite:

* Agregar productos.
* Editar productos.
* Eliminar productos.
* Visualizar productos.
* Controlar stock.

Cada producto contiene:

* Nombre.
* Precio.
* Stock.
* Categoría.
* Imagen.

---

# Sistema de Ventas

El sistema POS permite registrar ventas de forma rápida.

Funciones:

* Selección de productos.
* Carrito de compras.
* Cálculo automático.
* Registro de venta.
* Historial de ventas.

Cuando una venta es registrada:

* Se almacena en MongoDB.
* Se actualiza el inventario.
* Se registra el total vendido.

---

# Interfaz de Usuario

La interfaz fue diseñada buscando:

* Facilidad de uso.
* Diseño moderno.
* Navegación intuitiva.
* Compatibilidad responsiva.

El sistema incluye:

* Login.
* Dashboard.
* Panel de productos.
* Sistema POS.
* Reportes.

---

# Estructura del Proyecto

```txt
frontend/
 ├── src/
 │    ├── components/
 │    ├── pages/
 │    ├── services/
 │    ├── context/
 │    └── App.jsx

backend/
 ├── config/
 ├── controllers/
 ├── middleware/
 ├── models/
 ├── routes/
 ├── utils/
 └── server.js
```

---

# Conclusión

El desarrollo del sistema de venta para panadería permitió aplicar conocimientos relacionados con desarrollo web full stack, bases de datos NoSQL y arquitectura cliente-servidor.

Gracias al uso del stack MERN fue posible construir una aplicación moderna, escalable y eficiente capaz de administrar productos, usuarios y ventas.

El proyecto también permitió comprender la importancia de la seguridad mediante autenticación JWT y cifrado de contraseñas.

Finalmente, este sistema representa una solución tecnológica funcional que puede ser utilizada como base para futuros proyectos más avanzados.

---

# Bibliografía

* MongoDB Documentation. [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)
* React Documentation. [https://react.dev/](https://react.dev/)
* Node.js Documentation. [https://nodejs.org/](https://nodejs.org/)
* Express Documentation. [https://expressjs.com/](https://expressjs.com/)
* Axios Documentation. [https://axios-http.com/](https://axios-http.com/)
* JWT Introduction. [https://jwt.io/introduction](https://jwt.io/introduction)
* Vite Documentation. [https://vitejs.dev/](https://vitejs.dev/)
* Mongoose Documentation. [https://mongoosejs.com/docs/](https://mongoosejs.com/docs/)

---

# Anexos

## Capturas del Sistema

Agregar capturas de:

* Login
* Dashboard
* Productos
* Sistema POS
* Ventas

---

## Observaciones

Este proyecto fue desarrollado con fines educativos para aplicar conocimientos de programación web y desarrollo full stack.
