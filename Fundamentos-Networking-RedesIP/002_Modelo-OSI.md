# Modelo OSI

## Capa de Aplicación (Layer 7).

Interfaz entre la propia aplicación y la red, no sirve a otras capas, solo a la aplicación, la cual le es proporcioinada un protocolo que le sea útil. Por ejemplo un Navegador WEB ocupa los protocolos **WEB**, **HTTP**, **HTTPS**, **GET**. 

<br>

## Capa de Presentación (Layer 6).

Proporciona a la capa de aplicacion un formato de datos común, responsable de la comprensión y el cifrado, asegura que la información que se envia sea legible.

<br>

## Capa de Sesión (Layer 5).

Gestiona las sesiones entre dos hosts. Sincroniza el diálogo entre las capas de presentación. Administra el intercambio de datos.

<br>

## Capa de Transporte (Layer 4).

Establece, mantiene y finaliza las conexiones entre hosts. Se encarga de la detección y recuperación de errores. Control de flujo en función del rendimiento de la red.

<br>

## Capa de Red (Layer 3).

Ofrece conectividad entre redes distintas y la selección de ruta (enrutamiento). Es el **Direccionamiento Lógico**

<br>

## Capa de Enlace de datos (Layer 2).

Acceso a un medio físico determinado. Detección de errores y **Direccionamiento físico**

<br>

## Capa Física (Layer 1).

Define las especificaciones físicas (eléctricas, codificación, modulación de la luz, etc) para utilizar el medio físico y enviar las señales que contienen la información.

<br>
<br>

## Equipos que trabajan en cada capa.

### Aplicación.
- Workstations
- Servers
- Telfonos IP
- Telefonos Móviles
- Firewall
- Balanceadores de carga
- Proxys

<br>

### Transporte.
- Los mismos anterirores.

<br>

### Red.
-Router

<br>

### Enlace de datos.
- Switches
- Access Points
  
<br>

### Física.
- Cables
- Señales de Radio
- Señales ópticas o eléctricas
- Estandares de Hardware
- Tarjetas de red

<br>
<br>

## Ventajas de estos Modelos.
- Menor complejidad
- Modularidad
- Facilita el aprendizaje y el desarrollo
- Interfaces estandarizadas
- Compatibilidad entre fabricantes
- Independencia entre capas