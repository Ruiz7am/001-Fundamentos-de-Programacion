# Sistema binario

- Decimal
    ```
    0 1 2 3 4 5 6 7 8 9
    ```

- Binario
    ```
    0 1
    ```

Ausencia y Presencia de corriente respectivamente

`1`: Presencia de corriente
`0`: Ausencia de corriente (en realidad no es la ausencia, en la practica es solo una corriente muy baja que lo toma como la ausencia)

## Conversión Decimal a Binario  


Encontremos el equivalente en binario del número 28

Para poder lograrlo solo tenemos que reducir el numero hasta 1 mediante divisiones.

<img src="./imagenes/decimal-to-binary" style="width: 50vw">



Unimos los módulos (residuos) de las divisiones de abajo hacia arriba (derecha a izquierda), en el caso de 28 sería:

28 = 11100

Otro ejemplo:
192

$192 / 2 = 96$ % 0  
$96 / 2 = 48$ % 0  
$48 / 2 = 24$ % 0  
$24 / 2 = 12$ % 0  
$12 / 2 = 6$ % 0  
$6 / 2 = 3$ % 0  
$3 / 2 = 1$ % 1  

192 = 11000000

## Conversión Binario a Decimal

Encontremos el equivalente en decimal del número binario 11100

Multiplicamos cada bit por dos elevado a X potencia(comenzando la primera potencia en 0 e incrementándola en 1 por cada dígito), comenzando por el último bit, es decir de derecha a izquierda:

<img src="./imagenes/binary-to-decimal" style="width: 50vw;">

Otro ejemplo:
11000000

$0 * 2⁰ = 0 * 1 = 0$  
$0 * 2¹ = 0 * 2 = 0$  
$0 * 2² = 0 * 4 = 0$  
$0 * 2³ = 0 * 8 = 0$  
$0 * 2⁴ = 0 * 16 = 0$  
$0 * 2⁵ = 0 * 32 = 0$  
$1 * 2⁶ = 1 * 64 = 64$  
$1 * 2⁷ = 1 * 128 = 128$  

$0 + 0 + 0 + 0 + 0 + 0 + 64 + 128 = 192$

## Suma y resta de números binarios.

### Suma

Cada vez que se sume: 

<img src="./imagenes/suma-binaria" style="width: 50vw" />

<br>

| | | | | |
| :---: | :---: | :---: | :---: | :---: | 
| | 1 | | | | 
| | 1 | 1 | 0 | en 1 + 1 se pone cero como resultado y se acarrea el 1 al siguiente paso |
| + | 0 | 1 | 1 |se suma el 1 acarreado con el numero de arriba que es 1: 1 + 1 = 0 y se vuelva a acarrear el 1 |
| |  |  |  | |
| 1 | 0 | 0 | 1 | ahora se suma ese segundo 1 acarreado con el número inferior que es 0: 1 + 0 = 1 colocando de lado izquierdo |

<br>
0
### Resta

$0 - 0 = 0$  
$1 - 0 = 1$  
$1 - 1 = 0$  
$0 - 1 = 1$ <--- se acarrea un bit 1 a la siguiente parte de la operación

$101$
$011$
$010$

## Multiplicación y División de números Binarios

### Multiplicación

$0 * 0 = 0$  
$0 * 1 = 0$  
$1 * 0 = 0$  
$1 * 1 = 1$

$110$  
$x10$  
$+000$  
$110$  
$1100$

<br>

### División

Dividendo:  
$10110$

Divisor:  
$10$