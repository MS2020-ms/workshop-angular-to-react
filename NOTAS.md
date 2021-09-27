# Inicio
>npm start
# Crear archivo .gitignore
https://www.toptal.com/developers/gitignore
VisualStudioCode, Windows, macOS, Linux, Node -> Create
# Inicializar
>git init
>gh repo create workshop-angular-to-react

# Fork del repo de Neoland
1. fork de https://github.com/neoland-school/neoland-workshop-202109
2. clone it
```sh
>git clone https://github.com/MS2020-ms/neoland-workshop-202109
```
3. open code in VSC desde terminal
```sh
>code neoland-workshop-202109
```
4. in terminal create your workshop branch
```sh
>git checkout -b develop
>git checkout -b feature/workshop
>git branch
```
5. push the changes to your origin
```sh
>git add staff
>git commit -m "add my folder"
>git push -u origin feature/workshop
```
6. crear pull request
En Github: hacer un Pull Request de la rama feature/workshop -a-> develop (NUNCA a main)

## Crear rama develop:
>git checkout -b develop
>git push -u origin develop
>git branch
## Trabajar en rama feature/workshop:
>git checkout -b feature/workshop
>git branch
>git log
# Creo carpeta staff/miguel-soto/README.md
Previsualizar archivo md
>git add staff/miguel-soto
>git commit -m "add my folder"
>git push -u origin feature/workshop
En Github: hacer un Pull Request de la rama feature/workshop -a-> develop (NUNCA a main)

# Para trabajar en PC de otro -> Anydesk (escritorio remoto)

# REACT (my-app)
Archivo src/App.js -> no trabaja en js sino en jsx
https://ru.react.js.org/docs/thinking-in-react.html

>node -v
>npm i -g create-react-app
    En mi carpeta staff/miguel-soto
>create-react-app my-app
>cd .\staff\miguel-soto\my-app
    Abrir mi app en el navegador (localhost:3000)
>npm start

Para crear el template con TypeScript >create-react-app my-app --template typescript

## my-app
Ir archivo App.js
Ir archivo App.css
## crear componente Login
Creo archivo src/Login.js y lo importo en App.js
Crear archivo src/Login.css
## crear servicio de usuario
Creo src/user.service.js
Creo src/utils.js (regex) e importar en el service
## para llamadas a una api o servidor tenemos fetch() o axios (libreria externa)
probar e-mail: pepigri@mail.com y password: 123123123
## Convertir componente tipo funcion Login-alt.js en componente react Login.js
Trabajando con clases 
Manejo estados
Creo archivo src/Login-class-2.js
Al producirse un cambio de estado (el error pasa de null a tener contenido), se genera una nueva vista render (mensaje en mi formulario)
## Panel de acceso a la app
Crear src/Home.js
Indicar a la App que cuando se logea correctamente , se renderice la Home -> a través de props
Desde App hace algo (onLogin)=evento desde un componente hijo Login 
Convertir mi App de tipo funcion a tipo de clase React
## Crear un registro de usuarios
Crear archivo src/Register.js