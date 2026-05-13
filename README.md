# Sistema de Venta para Panadería

## Descripción del Proyecto

Este proyecto consiste en un sistema de ventas para una panadería desarrollado con el stack MERN (MongoDB, Express, React y Node.js). El sistema permite administrar productos, ventas, usuarios y autenticación mediante un panel moderno y funcional.

El objetivo principal del sistema es optimizar el proceso de venta y administración dentro de una panadería mediante una aplicación web rápida, intuitiva y escalable.

---

# Tecnologías Utilizadas

## Frontend

* React
* Vite
* React Router DOM
* Axios
* TailwindCSS
* React Icons

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv
* cors

---

# Funcionalidades Principales

## Sistema de autenticación

* Inicio de sesión
* Registro de usuarios
* Protección de rutas
* Roles de usuario

## Gestión de productos

* Agregar productos
* Editar productos
* Eliminar productos
* Visualizar productos
* Control de stock

## Sistema de ventas

* Punto de venta (POS)
* Carrito de compras
* Registro de ventas
* Historial de ventas
* Cálculo automático de totales

## Administración

* Dashboard administrativo
* Estadísticas
* Reportes
* Gestión de usuarios

---

# Roles del Sistema

## Administrador

Puede:

* Gestionar productos
* Ver reportes
* Ver ventas
* Administrar usuarios
* Controlar inventario

## Cajero

Puede:

* Realizar ventas
* Usar el sistema POS
* Consultar historial de ventas

---

# Estructura del Proyecto

```txt
frontend/
 ├── src/
 │    ├── components/
 │    ├── context/
 │    ├── layouts/
 │    ├── pages/
 │    ├── routes/
 │    ├── services/
 │    └── App.jsx

backend/
 ├── config/
 ├── controllers/
 ├── middleware/
 ├── models/
 ├── routes/
 ├── utils/
 ├── .env
 └── server.js
```

---

# Base de Datos

El sistema utiliza MongoDB como base de datos NoSQL.

## Colecciones principales

* users
* products
* sales
* inventory
* categories

---

# Instalación del Proyecto

## Clonar el repositorio

```bash
git clone https://github.com/olazocaamano/Panaderia.git
```

---

# Configuración del Backend

## Entrar a la carpeta backend

```bash
cd backend
```

## Instalar dependencias

```bash
npm install
```

## Crear archivo .env

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/panaderia_db
JWT_SECRET=panaderia_secret
```

## Ejecutar servidor

```bash
npm run dev
```

---

# Configuración del Frontend

## Entrar a la carpeta frontend

```bash
cd frontend
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar proyecto

```bash
npm run dev
```

---

# Flujo del Sistema

```txt
Usuario inicia sesión
        ↓
Sistema valida credenciales
        ↓
Acceso al dashboard
        ↓
Gestión de productos y ventas
        ↓
MongoDB almacena la información
```

---

# Características del Sistema

* Diseño moderno
* Arquitectura MERN
* Base de datos NoSQL
* API REST
* Sistema escalable
* Autenticación segura
* Gestión de inventario
* Dashboard administrativo
* Interfaz responsiva

---

# Objetivos del Proyecto

* Automatizar ventas en una panadería
* Mejorar la administración de productos
* Facilitar el control de inventario
* Optimizar el trabajo del personal
* Centralizar la información en una sola plataforma

---

# Equipo de Desarrollo

## Integrantes

1. Aguilar Medina Angel Uriel
2. Jímenez Solís Caleb
3. Olazo Caamaño Emmanuel

---

# Posibles Mejoras Futuras

* Impresión de tickets PDF
* Código de barras
* Estadísticas avanzadas
* Modo oscuro/claro
* Exportación a Excel
* Notificaciones en tiempo real
* Panel avanzado de reportes

---

# Capturas del Sistema

## Login

![LoginImage](/images/login.png)

## Dashboard

(pendiente)

## Sistema POS

(pendiente)

---

# Licencia

Proyecto desarrollado con fines educativos.

---

# Autor

Proyecto desarrollado por el equipo de desarrollo **Team Pan8on** utilizando el stack MERN.
