# Verifica_finale_MyNetflix

Funzionalità specifiche richieste
Homepage

Visualizzazione di almeno 2-3 categorie (es. film popolari, top rated, in tendenza) come liste;
banner hero con un film in evidenza.
Ricerca

Barra di ricerca nella navbar;
pagina dedicata con i risultati di ricerca.
Pagina dettaglio

Informazioni complete: poster, titolo, descrizione, valutazione, data di uscita, lista dei generi;
cast principale;
pulsante per aggiungere il contenuto ai preferiti.
Lista dei preferiti

Pagina dedicata ai contenuti salvati;
persistenza dei dati con localStorage;
possibilità di rimuovere elementi dalla lista;
indicatore nella navbar con il numero dei preferiti.

✅ REQUISITI TECNICI OBBLIGATORI
Questi requisiti valgono per QUALSIASI progetto (sia Netflix Clone che progetto personale)

📦 Props, State, Lifecycle e Hooks
 Props : passaggio di dati tra componenti parent-child in modo appropriato
 useState : gestione dello stato locale 
 useEffect 
Chiamate API
Sincronizzazione con localStorage
Cleanup (rimozione event listener, timeout, cancellazione fetch, ecc.)
 Custom Hook: creazione di almeno 1 custom hook riutilizzabile
Esempi: useFetch, useLocalStorage, useAuth, useForm
🌐 Gestione dello Stato Globale
Scegliere UNA delle due opzioni (la scelta non influisce sul voto, ma va motivata nel README):

Opzione A: Context API
 Creazione di almeno 1 Context
 Provider configurato a livello di <App />
 Consumo del context in almeno 2 componenti diversi tramite useContext
Opzione B: Redux
 Store configurato correttamente
 Utilizzo di useSelector per leggere lo stato
 Utilizzo di useDispatch per inviare azioni
 Azioni definite per gestire lo stato globale
Nel README dovrete spiegare perché avete scelto Context API o Redux per il vostro progetto specifico.

🧩 Componenti e Struttura del Progetto
L'app deve essere suddivisa in componenti riutilizzabili e ben organizzati


 Componenti riutilizzabili: componenti usati in più parti dell'app
 Single Responsibility: ogni componente ha una singola responsabilità chiara
 Struttura cartelle organizzata e logica
La struttura delle cartelle è a vostra discrezione, ma deve rispettare i principi di:

Single responsibility: ogni componente una responsabilità
Riutilizzabilità: componenti utilizzabili in più contesti
Organizzazione logica: file raggruppati in modo coerente
🛣️ React Router - Routing e Navigazione
Route minime richieste
 / - Homepage
 /lista - Pagina con lista di elementi (prodotti, film, articoli, ecc.)
 /dettaglio/:id - Pagina dettaglio con route dinamica
 /ricerca o /ricerca?q=... - Pagina risultati di ricerca
 /preferiti (o /salvati, /carrello) - Lista personale con persistenza
 /about (o altra pagina informativa)
 * - Pagina 404 per gestire route inesistenti
Per il progetto Netflix: /, /movies, /tv, /movie/:id, /tv/:id, /search, /favourites, 

Funzionalità routing obbligatorie
 Layout condiviso con <Outlet /> per header/footer persistenti
 NavLink con classe/stile attivo per indicare la pagina corrente
 Navigazione programmatica con useNavigate (almeno 1 utilizzo) Esempio: redirect dopo login, dopo salvataggio, ecc.
 useParams per leggere parametri dinamici dalle route
 useLocation o useSearchParams per gestire query string nella ricerca
🔌 Consumo di Dati e API
 API esterna: consumo di almeno una API esterna (REST)
Per Netflix: TMDB API
Per progetti personali: scegliere API pubbliche appropriate (confrontarsi con docente)
 Chiamate API: fetch in almeno 3 punti diversi dell'app
 Loading state: indicatori di caricamento visibili durante le chiamate
 Error handling: gestione degli errori con messaggi chiari all'utente
Messaggi di errore, possibilità di retry, fallback appropriati
 Persistenza dati: utilizzo di localStorage per salvare:Preferiti/carrello/lista salvata,  Preferenze utente (tema, lingua, ecc.)
 Performance : chiamate API ottimizzateEvitare chiamate ridondanti. 

Le API devono essere utilizzate in modo efficiente, pensando sia alle performance che alla user experience.
🎨 Stili e UI/UX
Tecnologia CSS (scegliere UNA)
 CSS puro / CSS Modules
 Styled Components
 Tailwind CSS
 SCSS
Requisiti design obbligatori
 Responsive design
 Coerenza visiva :
 Stati interattivi: hover states su bottoni, link, card
 Indicatori di caricamento: feedback durante operazioni asincrone
 Gestione immagini: placeholder/fallback se immagine mancante o in errore
Il layout deve essere gradevole, usabile e professionale.

💻 Qualità del Codice e Best Practices
 Codice pulito:
Indentazione corretta;
no console.log lasciati per debug.
 Naming convention coerente:
Scegliere italiano O inglese (non misto);
nomi di variabili/funzioni descrittivi;
convenzioni React (componenti PascalCase, funzioni camelCase).
Console pulita:
No errori in console;
no warning non gestiti.
 Commenti appropriati:
Commenti dove la logica è complessa;
documentazione delle scelte tecniche non ovvie.
 Gestione credenziali:
File .env per chiavi API (non committare chiavi) se necessario;
.env.example con struttura delle variabili.
