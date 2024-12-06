# Buenas prácticas en bases de datos con SQL

Una de las mejores prácticas en la manipulación de datos es la **Normalización**.
Existen 3 formas para normalizar todo el esquema de una base de datos, y eso nos sirver para mantener la integridad, organizar la información, tenerla estructurada de la manera adecuada y para llevar el relacionamiento entre dos o más tablas de la manera adecuada.

La normalización se trata de identificar las areas de negocio de cada una de las tablas que estamos creando y también tener un detalle muy específico sobre los atributos de los objetos que estamos generando en la base de datos. Cuando hacemos referencia a objetos, estamos hablando de tablas, columnas y también teniendo presente el tipo de relaciones que generamos entre estas mismas. No debería de haber incongruencia, datos atomicos, buenas relaciones establecidas, y una dimensión o tabla de hechos por categoría, la información debe estar lo mejor ordenada posible, para que el hecho de hacer un proceso de transformación de datos sea más eficaz.

## 1. Primera forma normal

La primera forma consta de tres factores: 

1. Toda la informacion debe ser atómica, debe tener datos indivisibles.
2. Debe estar especificada por una clave primaria, es un identificador único en los registros que permite diferenciar esta inforamción del resto de filas que tenga la tabla.
3. La información debe estar centralizada por columna.

### Escenario

Información de estudiantes e información de cursos

- idstudent
- Name
- Courses

<br>

La siguiente tabla tiene varios errores

idstudent | Name | Courses
 :---: | :---: | :---:
 1 | Marco | A, B, C
 2 | Carolina | B, D, E
 3 | Carolina | F, Z 

1. El atributo cursos no cumple con el factor de información atómica ya que aquí si se puede dividir la información.
2. El dato no esta siendo congruente ya que esta almacenando distintas asignaturas en el mismo registro.
3. Hay un error en una clave primaria, ya que un mismo alumno (Carolina) está registrada con dos identificadores al mismo tiempo en la tabla.

Lo que se tendria que hacer es lo siguiente:

idstudent | Name | Courses
 :---: | :---: | :---:
 1 | Marco | A
 1 | Marco | B
 1 | Marco | C
 2 | Carolina | B
 2 | Carolina | D
 2 | Carolina | E
 2 | Carolina | F
 2 | Carolina | Z

 Pero esto no quiere decir que cumpla con todo el proceso de normalización, pasamos a la siguiente forma.

 <br>
 <br>

 ## 2. Segunda Forma Normal

Todos los atributos no claves deben depender de la **Primary Key**, en nuestro ejemplo la primary key hace referencia a un estudante, hace referencia que la información que vamos a estar almacenando en esta tabla, unicamente, es información del estudiante, en este caso la columna cursos no cumple con ésta información.

Tendremos que realizar una nueva tabla

<br>

#### Tabla cursos
idcourse | name
:---: | :---:
1 | A
2 | B
3 | C

<br>

#### Tabla estudiantes
idstudent | Name | Courses
 :---: | :---: | :---:
 1 | Irina |
 2 | Hilda |
 3 | Armando |

 <br>

Aquí ya no veríamos una referencia textual de los cursos (A, B, D)  (B, D, E)  (F, Z), aqui veremos los cursos de la manera correcta, mediante una clave foranea (foreign key, la columna de courses), no lo veremos textualmente en la tabla de los estudiantes, solamente la referencia a otra tabla que la veremos en la siguiente forma normal

<br>
<br>

## 3. Tercera forma normal
 
 Todos los atributos no clave deben ser independientes, deben cumplir con la primera y la segunda forma normal.

<br>

 #### Tabla intermedia (transaccional)
 Esta tabla relaciona las dos tablas primeras de Cursos - Estudiantes

 idstudent | idcourses
  :---: | :---:
1 | 1
2 | 2
2 | 1