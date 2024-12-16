# Operadores

## Tablas de verdad

Herramienta que nos ayuda a determinar cuales son las condiciones necesarias para que sea verdadero o válido un enunciado propuesto.

<br>

### Negación (NOT)

Devuelve el valor opuesto de la proposición considerada.

A | -A
:---: | :---:
v | **F**
F | **V**

<br>

### Conjunción (AND)
 
Es verdadero cuando ambas son verdaderas 

A | B | AB
:---: | :---: | :---:
V | V | **V**
V | F | **F**
F | V | **F**
F | F | **F**

<br>

### Disyunción (OR)

Es verdadero cuando ambas son verdad

A | B | AB
:---: | :---: | :---:
V | V | **V**
V | F | **V**
F | F | **V**
F | F | **F**

## Operadores Lógicos

### No (NOT)

Devuelve true cuando la expresión es falsa y viceversa, Invierte el valor de una afirmación.

<br>

### Y (AND)

Devuelve true cuando expresion1 y expresion2 son verdaderas.

Todas las expresiones deben ser verdaderas.

<br>

### O (OR)

Devuelve true cuando expresion1 o expresion2 es verdadera.

Una de las dos o mas expresiones es verdadera

<br>

### Xno (XOR)

Devuelve true si expresion1 es verdadera o expresion2 es verdadera, pero no ambas.

Solo una de las expresiones debe ser verdadera

## Operadores aritméticos

### Operador de Suma

Símbolo: `+`  
Propósito: Suma de dos valores  
Ejemplo: [total-ventas] + [propinas]  

<br>

### Operador de Resta

Símbolo: `-`  
Propósito: Busca la diferencia entre dos números  
Ejemplo: [precio] - [descuento]  

<br>

### Operador de multiplicación

Símbolo: `*`  
Propósito: multiplica dos numeros  
Ejemplo: [cantidad] * [precio]  

<br>

### Operador de división

simbolo: `/`  
Propósito: divide el primer número entre el segundo  
Ejemplo: [total] / [cantidad de productos]

## Operadores de comparación

Vamos a realizar comparaciones entre objetos, el lado A y el lado B, aquí el lado derecho e izquierdo tienen un papel importante y una variación entre cada uno de los resultados.

### Menor que

Símbolo: `<`  
Propósito:Devuelve True si el primer valor es menor que el segundo valor  
Ejemplo: valor1 < valor2

<br>

### Menor o igaul que

Símbolo: `<=`  
Propósito: devuelve True si el primer valor es menor o igual que el segundo valor  
ejemplo: Valor1 <= Valor2  

<br>

### Mayor que

Símbolo `>`  
Propósito: Devuelve True si el primer valor es mayor que el segundo  
Ejemplo: Valor1 > Valor2  

<br>

### Mayor o igaul que

Símbolo: `>=`  
Propósito: Devuelve True si el primer valor es mayor o igual que el segundo valor.  
Ejemplo: Valor1 >= Valor2  

<br>

### Igual que 

Símbolo: `=`  
Propósito: Devuelve True si el primer valor es igual que le segundo valor  
Ejemplo: Valor1 = Valor2  

<br>

### No es igual que

### Igual que 

Símbolo: `<>`  
Propósito: Devuelve True si el primer valor no es igual que le segundo valor  
Ejemplo: Valor1 <> Valor2


# Reto 0: Identifica los Operadores.

1 | 0
:---: | :---:
True | False

1 no 0

### Negación
Es el inverso del valor que tiene un objeto y tiene que ser distinto para ser true

### Conjunción
1 y 0 = 0  
1 y 1 = 1
Los dos valores tienen que ser verdaderos para ser true

### Disyunción
1 y 0 = 1   
0 y 0 = 0

Al menos uno de los valores tiene que ser verdadero para que el resultado sea true


1 > 0 True
1 < 0 False
1 = 1 True
1 = 0 False
1 >= 0 True
