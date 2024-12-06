# Tipos de datos

Los tipos de datos, normalmente los utilizamos en columnas, variables y parámetros, y nos funcionan para especificar cual es la clase de información que se va a insertar en los atributos del objeto que se está creando.

Nos ayuda a identificar el tipo de contenido que puede tener una columna en una tabla creada, o el parámetro dentro de un procedimiento almacenado o una variable.

<br>

Existen muchos tipos de datos, pero para este curso básico definiremos tres:

1. **Numéricos**: hay 3 que son los más comunes:
    - **Integer** (entero): a su vez estos se subdividen en:
      - **Int** (4 Bytes)
      - **Smallint** (2 Bytes)
      - **Bigint** (8 Bytes)
    - **Decimal** (decimal):
      - palabra reservada `decimal` acompañada de `paréntesis ()` y dentro dos valores, `el segundo` va determinar cual es la precisión fija de almacenamiento que se le esta dando a ese decimal
      - ejemplo DECIMAL(10,2): se está se está especificando que se puede darle un valor de diez dígitos y una precisión fija después de la coma de dos dígitos.
      - Se define dependiendo del tipo de dato que se desea almacenar 
     - **Flotante**: funciona igual que **Decimal** pero el valor es ilimitado.

<br>

2. **Texto**: existen 3 que son los mas usados
    - **Char**: CHAR(4) en donde el número dentro del paréntesis especifica la longitud de la cadena que se almacenará, la cual es, en este caso, de cuatro caracteres.
    - **Varchar**: funciona de la misma manera a nivel de sintaxis, pero a nivel de procesamiento y almacenamiento funcionan diferente.
      - Por ejemplo, si se almacena CHAR(10)hola, VARCHAR(10)hola, en char este va a ocupar la longitud definida entre paréntesis a pesar de que lo que se esta almacenando no tenga esa longitud; en varchar la longitud optimiza el espacio, ya que si se asigna una longitud X, el espacio tomado será de la longitud del dato almacenado y no de la longitud asignada X.
     - **Text**: strings sin limite de longitud.

<br>

3. **Fechas**: es para tipo de datos de tiempo.
    - **Time**: para especificar la hora.
    - **Date**: para especificar la fecha.
    - **Datetime**: para fecha y hora.
    - ****: para fecha y hora también, pero almacena el formato UTC configurado en la maquina local.