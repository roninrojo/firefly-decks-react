// card anatomy
/*
1 - Evento
2 - Sigue volando
3 - Cruzero de patrulla / Reavers de caza
4 - Crucero (barajar el mazo)
*/
export const allianceSpaceCards = [
    {
        id: 0, 
        title: "CRUCERO DE LA ALIANZA",
        type: 4,
        opt1Ttitle: "¡No podemos huir!<br>¡Nos tienen atrapados!",
        opt2Ttitle: "",
        opt1: `
        <ul>
            <li> Mueve el crucero de la Alianza a tu sector.</li>
            <li> Paga 1000 $ por cada orden judicial que tengas.</li>
            <li> Descarta todas las órdenes judiciales que tengas.</li>
            <li> Descarta todos los fugítivos y alijos, incluidos aquellos que estén en el escondrijo.</li>
                <ul>
                    <li>Tira un  para cada tripulante en busca y captura:</li>
                    <li>1 -Retira el tripulante de la partida.</li>
                    <li>2-6 El tripulante evita la detención.</li>
                </ul>
            <li>Detén la nave.</li>
        </ul>
        `,
        opt2: "",
        footer: "BARAJA EL MAZO"
    },
    {
        id: 1, 
        title: "Crucero de patrulla",
        type: 3,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: `<ul>
                <li>El jugador de tu derecha debe mover el crucero del espacio de la Alianza.</li>
                <li>Sigue Volando</li>
            </ul>`,
        opt2: "",
        footer: ""
    },
    {
        id: 2, 
        title: "Crucero de patrulla",
        type: 3,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: `<ul>
                <li>El jugador de tu derecha debe mover el crucero del espacio de la Alianza.</li>
                <li>Sigue Volando</li>
            </ul>`,
        opt2: "",
        footer: ""
    },
    {
        id: 3, 
        title: "Crucero de patrulla",
        type: 3,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: `<ul>
                <li>El jugador de tu derecha debe mover el crucero del espacio de la Alianza.</li>
                <li>Sigue Volando</li>
            </ul>`,
        opt2: "",
        footer: ""
    },
    {
        id: 4, 
        title: "Crucero de patrulla",
        type: 3,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: `<ul>
                <li>El jugador de tu derecha debe mover el crucero del espacio de la Alianza.</li>
                <li>Sigue Volando</li>
            </ul>`,
        opt2: "",
        footer: ""
    },
    {
        id: 5, 
        title: "Inspección Aduanera",
        type: 1,
        opt1Ttitle: "¡Vamos a subir a bordo!",
        opt2Ttitle: "¡Media vuleta y pisa a fondo!",
        opt1: "<ul><li>Descarta todos los alijos y fugitivos que no estén en tu escondrijo.</li><li>Detén la nave.</li>",
        opt2: "<ul><li>Descarta 1 combustible.<br>Orden judicial.</li><li>Huye.</li>",
        footer: ""
    },
    {
        id: 6, 
        title: "Inspección Aduanera",
        type: 1,
        opt1Ttitle: "¡Vamos a subir a bordo!",
        opt2Ttitle: "¡Media vuleta y pisa a fondo!",
        opt1: "Descarta todos los alijos y fugitivos que no estén en tu escondrijo. <br> Detén la nave.",
        opt2: "Descarta 1 combustible.<br>Orden judicial.<br>Huye.",
        footer: ""
    },
    {
        id: 7, 
        title: "Cena en familia",
        type: 1,
        opt1Ttitle: "Qué amable por tu parte compartir todo esto...",
        opt2Ttitle: "Me voy a mi habitación",
        opt1: `
            <ul>
                <li>Descarta 1 mercancía</li>
                <li>Descarta las fichas de descontento de todos tus tripulantes</li>
                <li>Sigue volando</li>
            </ul>
        `,  
        opt2: "Sigue volando",
        footer: ""
    },
    {
        id: 8, 
        title: "Enredos con la alianza",
        type: 1,
        opt1Ttitle: "Mareando la perdiz",
        opt2Ttitle: "Un chivatazo legitimo",
        opt1: `
            <ul>
                <li>Mueve el crucero de la Alianza a cualauier sector de la Alianza que no contenga una nave Firefly.</li>
                <li>Sigue volando.</li>
            </ul>
        `,
        opt2: `
            <p>Es necesario que Harken te considere digno de confianza.</p>
            <ul>
                <li>Mueve el crucero de la Alianza a un sector de la Alianza que contenga una nave proscrita.</li>
                <li>Cobra 500 $ y sigue volando.</li>
            </ul>
        `,
        footer: ""
    },
    {
        id: 9, 
        title: "Si la bobina se estropea, nos quedamos a la deriva",
        type: 1,
        opt1Ttitle: "¡Pues mejor será que no se estropee!",
        opt2Ttitle: "Cámbialo todo",
        opt1: ` 
                <ul>
                    <li>8 Averia</li>
                    <li>1-7 Detén la nave.</li>
                    <li>Sigue volando.</li>
                </ul>
        `,
        opt2: `
            <ul>
                <li>Descarta 2 recambios.</li>
                <li>Sigue volando</li>
            </ul>
        `,
        footer: ""
    },
    {
        id: 10, 
        title: "¿Qué está pasando en la sala de máquinas?",
        type: 1,
        opt1Ttitle: "¿Habrán sido los monos espaciales?",
        opt2Ttitle: "Basta con cambiar los circuitos del propulsor gravitónico",
        opt1: `
            <ul>
                <li>🎲 7 Avería</li>
                <li>1-6 Detén la nave.  </li>
                <li>7+ Sigue volando.</li>
            </ul>
        `,
        opt2: `
                <ul>
                    <li>Descarta 1 recambio.</li>
                    <li>Sigue volando.</li>
                </ul>
                `,
        footer: ""
    },
    {
        id: 11, 
        title: "Un problemilla técnico",
        type: 1,
        opt1Ttitle: "Me conformo con que siga volando",
        opt2Ttitle: "Seguir como si nada",
        opt1: `
            <ul>
                <li>🔧 🎲 &nbsp;<span class="mech"> 5 Avería</span></li>
                <li><span class="mech">1-4</span> Detén la nave.</li>
                <li><span class="mech">5+</span> Sigue volando.</li>
            </ul>
        `,
        opt2: `
            <ul>
                <li>Descarta 1 recambio.</li>
                <li>Sigue volando.</li>
            </ul>
        `,
        footer: ""
    },
    {
        id: 12, 
        title: "Nave abandonada",
        type: 1,
        opt1Ttitle: "\"Rescatar\" las cosas de valor",
        opt2Ttitle: "Seguir como si nada",
        opt1: `
            <ul>
                <li>Operación de salvamento: recibe 2 alijos.</li>
                <li>Detén la nave.</li>
            </ul>
        `,
        opt2: `
            <ul><li>Sigue volando</li></ul>
        `,
        footer: ""
    },
    {
        id: 13, 
        title: "Señal de socorro",
        type: 1,
        opt1Ttitle: "¿Desde cuándo somos una nave de salvamento?",
        opt2Ttitle: "Rezamos por sus almas y seguimos como si nada",
        opt1: `
            <ul>
                <li>Descarta 1 combustible.</li>
                <li>Descarta las fichas de descontento de todos tus tripulantes honestos y cobra 200 $.</li>
                <li>Detén la nave</li>
            </ul>`,
        opt2: `
            <ul>
                <li>Pon una ficha de descontento en todos tus tripulantes honestos.</li>
                <li>Sigue volando.</li>
            </ul>
        `,
        footer: ""
    },
    {
        id: 14, 
        title: "Convoy de mercancías",
        type: 1,
        opt1Ttitle: "Una negociación bien llevada",
        opt2Ttitle: "Actos de piratería",
        opt1: `
            <ul>
                <li>Puedes comprar combustible por 200 $, recambios por 300 $ y hasta 3 mercancías por 300 $ cada una.</li>
                <li>Sigue volando.</li>
            </ul>

        `,
        opt2: `
            <ul>
                <li>Pon una ficha de descontento en todos tus tripulantes honestos.</li>
                <li>🔫 8</li>
                <li>
                    1-7 Mata a uno de tus tripulantes.
                    <br>Detén la nave.
                </li>
                <li>8+ Recibe 3 alijos. Detén la nave.</li>
            </ul>
        `,
        footer: ""
    },

    {
        id: 15, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 16, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 17, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 18, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 19, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 20, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 21, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 22, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 23, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 24, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 25, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 26, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 27, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 28, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 29, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 30, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 31, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 32, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 33, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 34, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 35, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 36, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 37, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 38, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 39, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },


]

export const borderSpaceCards = [
    {
        id: 0, 
        title: "Patrullera Reaver",
        type: 4,
        opt1Ttitle: "Si estamos de suerte...",
        opt2Ttitle: "Maniobra de Iván el Loco",
        opt1: `
        <ul>
            <li>Mata a todos tus pasajeros y fugitivos.</li>
            <li>1-7 Mata a dos de tus tripulantes. Huye.</li>
            <li>8+ Mata a uno de tus tripulantes. Huye.</li>
        </ul>
        `,
        opt2: `
        <ul>
            <li>Se necesita un piloto y un mecánico.</li>
            <li>Descarta1 combustible.</li>
            <li>Huye.</li>
        </ul>
        `,
        footer: "BARAJA EL MAZO"
    },
        {
        id: 1, 
        title: "Escombros Espaciales",
        type: 1,
        opt1Ttitle: "Los atravesamos",
        opt2Ttitle: "Nos paramos y echamos un vistazo",
        opt1: `
            <ul>
                <li>Si tienes un piloto, sigue volando.</li>
                <li>Si no, descarta un combustible y sigue volando.</li>`,
        opt2: `
            <ul>
                <li>🔧🎲 <span class="mech">6 Operación de salvamento</span></li>
                <li><span class="mech">1-3</span> Detén la nave</li>
                <li><span class="mech">4-5</span> Recibe una mercancía.  Detén la nave.</li>
                <li><span class="mech">6+</span> Recibe 2 mercancías. Detén la nave.</li>
                <ul>
            </ul>
            `,
        footer: ""
    },
    {
        id: 2, 
        title: "Nave Fantasma",
        type: 1,
        opt1Ttitle: "Esto me huele mal..",
        opt2Ttitle: "¡Hay un reaver a bordo!",
        opt1: "Sigue volando.",
        opt2: `
            <ul>
                <li>7 Operación de salvamento</li>>
                <ul>
                    <li>1-6 Mata a dos de tus tripulantes,</li>
                    <li>Detén la nave.</li>
                </ul>
                <li>7+ Cobra 1000 $. Detén la nave.</li>
            </ul>
            `,
        footer: ""
    },
    {
        id: 3, 
        title: "Nave Fantasma",
        type: 1,
        opt1Ttitle: "Esto me huele mal..",
        opt2Ttitle: "¡Hay un reaver a bordo!",
        opt1: "Sigue volando.",
        opt2: `
            <ul>
                <li>7 Operación de salvamento</li>>
                <ul>
                    <li>1-6 Mata a dos de tus tripulantes,</li>
                    <li>Detén la nave.</li>
                </ul>
                <li>7+ Cobra 1000 $. Detén la nave.</li>
            </ul>
            `,
        footer: ""
    },
    {
        id: 4, 
        title: "Nave Fantasma",
        type: 1,
        opt1Ttitle: "Esto me huele mal..",
        opt2Ttitle: "¡Hay un reaver a bordo!",
        opt1: "Sigue volando.",
        opt2: `
            <ul>
                <li>7 Operación de salvamento</li>>
                <ul>
                    <li>1-6 Mata a dos de tus tripulantes,</li>
                    <li>Detén la nave.</li>
                </ul>
                <li>7+ Cobra 1000 $. Detén la nave.</li>
            </ul>
            `,
        footer: ""
    },
    {
        id: 5, 
        title: "¡El núcleo de propulsión se ha estropeado!",
        type: 1,
        opt1Ttitle: "A ver que pasa",
        opt2Ttitle: "Dime que nos queda algún recambio...",
        opt1: `<ul>
        <li>🔧 🎲 <span class="mech">8 Avería</span></li>
        <li><span class="mech">1-7</span> Detén la nave</li>
        <li><span class="mech">8+</span> Sigue volando</li>
        </ul>`,
        opt2: `<ul>
                <li>Descarta 2 recambios</li>
                <li>Sigue volando.</li>
            </ul>`,
        footer: ""
    },
    {
        id: 6, 
        title: "Nave Fantasma",
        type: 1,
        opt1Ttitle: "Esto me huele mal..",
        opt2Ttitle: "¡Hay un reaver a bordo!",
        opt1: "Sigue volando.",
        opt2: `
            <ul>
                <li>7 Operación de salvamento</li>>
                <ul>
                    <li>1-6 Mata a dos de tus tripulantes,</li>
                    <li>Detén la nave.</li>
                </ul>
                <li>7+ Cobra 1000 $. Detén la nave.</li>
            </ul>
            `,
        footer: ""
    },
    {
        id: 7, 
        title: "Nave Fantasma",
        type: 1,
        opt1Ttitle: "Esto me huele mal..",
        opt2Ttitle: "¡Hay un reaver a bordo!",
        opt1: "Sigue volando.",
        opt2: `
            <ul>
                <li>7 Operación de salvamento</li>>
                <ul>
                    <li>1-6 Mata a dos de tus tripulantes,</li>
                    <li>Detén la nave.</li>
                </ul>
                <li>7+ Cobra 1000 $. Detén la nave.</li>
            </ul>
            `,
        footer: ""
    },
    {
        id: 8, 
        title: "Nave Fantasma",
        type: 1,
        opt1Ttitle: "Esto me huele mal..",
        opt2Ttitle: "¡Hay un reaver a bordo!",
        opt1: "Sigue volando.",
        opt2: `
            <ul>
                <li>7 Operación de salvamento</li>>
                <ul>
                    <li>1-6 Mata a dos de tus tripulantes,</li>
                    <li>Detén la nave.</li>
                </ul>
                <li>7+ Cobra 1000 $. Detén la nave.</li>
            </ul>
            `,
        footer: ""
    },
    {
        id: 9, 
        title: "Nave Fantasma",
        type: 1,
        opt1Ttitle: "Esto me huele mal..",
        opt2Ttitle: "¡Hay un reaver a bordo!",
        opt1: "Sigue volando.",
        opt2: `
            <ul>
                <li>7 Operación de salvamento</li>>
                <ul>
                    <li>1-6 Mata a dos de tus tripulantes,</li>
                    <li>Detén la nave.</li>
                </ul>
                <li>7+ Cobra 1000 $. Detén la nave.</li>
            </ul>
            `,
        footer: ""
    },
    {
        id: 10, 
        title: "Nave Fantasma",
        type: 1,
        opt1Ttitle: "Esto me huele mal..",
        opt2Ttitle: "¡Hay un reaver a bordo!",
        opt1: "Sigue volando.",
        opt2: `
            <ul>
                <li>7 Operación de salvamento</li>>
                <ul>
                    <li>1-6 Mata a dos de tus tripulantes,</li>
                    <li>Detén la nave.</li>
                </ul>
                <li>7+ Cobra 1000 $. Detén la nave.</li>
            </ul>
            `,
        footer: ""
    },
    {
        id: 11, 
        title: "Nave Fantasma",
        type: 1,
        opt1Ttitle: "Esto me huele mal..",
        opt2Ttitle: "¡Hay un reaver a bordo!",
        opt1: "Sigue volando.",
        opt2: `
            <ul>
                <li>7 Operación de salvamento</li>>
                <ul>
                    <li>1-6 Mata a dos de tus tripulantes,</li>
                    <li>Detén la nave.</li>
                </ul>
                <li>7+ Cobra 1000 $. Detén la nave.</li>
            </ul>
            `,
        footer: ""
    },
    {
        id: 12, 
        title: "Nave Fantasma",
        type: 1,
        opt1Ttitle: "Esto me huele mal..",
        opt2Ttitle: "¡Hay un reaver a bordo!",
        opt1: "Sigue volando.",
        opt2: `
            <ul>
                <li>7 Operación de salvamento</li>>
                <ul>
                    <li>1-6 Mata a dos de tus tripulantes,</li>
                    <li>Detén la nave.</li>
                </ul>
                <li>7+ Cobra 1000 $. Detén la nave.</li>
            </ul>
            `,
        footer: ""
    },
    {
        id: 13, 
        title: "Nave Fantasma",
        type: 1,
        opt1Ttitle: "Esto me huele mal..",
        opt2Ttitle: "¡Hay un reaver a bordo!",
        opt1: "Sigue volando.",
        opt2: `
            <ul>
                <li>🔫 🎲 <span class="guns">7 Operación de salvamento</span></li>
                <ul>
                    <li><span class="guns">1-6</span> Mata a dos de tus tripulantes,</li>
                    <li>Detén la nave.</li>
                </ul>
                <li><span class="guns">7+</span> Cobra 1000 $. Detén la nave.</li>
            </ul>
            `,
        footer: ""
    },
    {
        id: 14, 
        title: "Reavers De Caza",
        type: 3,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "<ul><li>El jugador de tu derecha debe mover la patrullera Reaver un sector dentro del Espacio fronterizo.</li><li>Sigue volando.</li>",
        opt2: "",
        footer: ""
    },
    {
        id: 15, 
        title: "Reavers De Caza",
        type: 3,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "<ul><li>El jugador de tu derecha debe mover la patrullera Reaver un sector dentro del Espacio fronterizo.</li><li>Sigue volando.</li>",
        opt2: "",
        footer: ""
    },
    {
        id: 16, 
        title: "Reavers De Caza",
        type: 3,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "<ul><li>El jugador de tu derecha debe mover la patrullera Reaver un sector dentro del Espacio fronterizo.</li><li>Sigue volando.</li>",
        opt2: "",
        footer: ""
    },
    {
        id: 17, 
        title: "Reavers De Caza",
        type: 3,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "<ul><li>El jugador de tu derecha debe mover la patrullera Reaver un sector dentro del Espacio fronterizo.</li><li>Sigue volando.</li>",
        opt2: "",
        footer: ""
    },
    {
        id: 18, 
        title: "Reavers De Caza",
        type: 3,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "<ul><li>El jugador de tu derecha debe mover la patrullera Reaver un sector dentro del Espacio fronterizo.</li><li>Sigue volando.</li>",
        opt2: "",
        footer: ""
    },
    {
        id: 19, 
        title: "Reavers De Caza",
        type: 3,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "<ul><li>El jugador de tu derecha debe mover la patrullera Reaver un sector dentro del Espacio fronterizo.</li><li>Sigue volando.</li>",
        opt2: "",
        footer: ""
    },
    {
        id: 20, 
        title: "Reavers De Caza",
        type: 3,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "<ul><li>El jugador de tu derecha debe mover la patrullera Reaver un sector dentro del Espacio fronterizo.</li><li>Sigue volando.</li>",
        opt2: "",
        footer: ""
    },
    {
        id: 21, 
        title: "Reavers De Caza",
        type: 3,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "<ul><li>El jugador de tu derecha debe mover la patrullera Reaver un sector dentro del Espacio fronterizo.</li><li>Sigue volando.</li>",
        opt2: "",
        footer: ""
    },
    {
        id: 22, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 23, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 24, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 25, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 26, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 27, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 28, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 29, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 30, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 31, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 32, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 33, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 34, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 35, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 36, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 37, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 38, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    },
    {
        id: 39, 
        title: "El Gran Vacío",
        type: 2,
        opt1Ttitle: "",
        opt2Ttitle: "",
        opt1: "",
        opt2: "",
        footer: "¡Sigue volando!"
    }
]