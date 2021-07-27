/* Descrizione:
Inizializzare Vue e stampare a schermo un messaggio all’interno di un h1, utilizzando le properietà di Vue presenti in data.
Bonus
Aggiungere alla pagina un’immagine, la cui sorgente derivi anch'essa dai data di Vue. */

const app = new Vue(
    {
        el:"#app",
        data: {
            message: "Hello World!",
            image: "http://www.promatexitalia.com/templates/yootheme/cache/banner-welcome-53f6efda.jpeg"
        }
    }
)