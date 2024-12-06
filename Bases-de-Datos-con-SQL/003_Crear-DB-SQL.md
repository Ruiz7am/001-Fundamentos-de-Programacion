# ¿Cómo crear una base de datos en SQL?

La creación de base de datos de tablas y la relación entre ellas, se deben de tener en cuanta las buenas prácticas que vimos en clases anteriores, las tres reglas de normalización, tener claro el funcionamiento de las primary key, foreign key, claves de negocio, claves subrogadas y tener bien identificados los tipos de datos.


Para crear una tabla, es imprescindible utilizar el mismo formato para todas los atributos, si se usan mayúsculas, en todas las tablas deben de ir los datos en mayúsculas, si no minúsculas deben de ir todos los datos en minúsculas. 

Es preferible comenzar con las claves primarias, claves subrogadas o claves de negocio

```sql
CREATE TABLE PRODUCTOS (
    PKPRODUCTO INT PRIMARY KEY,
    IDPRODUCTO VARCHAR(20),
    DESCRIPTION 
);
```

tabla de instructores

```sql
CREATE TABLE STUDENTS (
    STUDENTID INT PRIMARY KEY,
    FIRSTNAME VARCHAR(50),
    LASTNAME VARCHAR(50),
    AGE INT,
    EMAIL VARCHAR(100),
    LOADDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UPDATEDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);
```

tabla instructores

```sql

```

tabla cursos

```sql
CREATE TABLE COURSES (
    COURSEID INT PRIMARY KEY,
    COURSENAME VARCHAR(100),
    DESCRIPTION TEXT,
    INSTRUCTORID INT,
    DURATIONHOURS INT,
    LOAD_DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UPDATE_DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (INSTRUCTORID) REFERENCES INSTRUCTORS(INSTRUCTORID)
)
```