# MyNetflix

Un'applicazione web moderna che consente di esplorare film e serie TV utilizzando l'API di The Movie Database (TMDb).

## Descrizione

MyNetflix è una Single Page Application (SPA) sviluppata in React che offre:
- Navigazione e ricerca di film e serie TV
- Dettagli completi di ogni titolo con cast e valutazioni
- Sistema di preferiti per salvare i propri titoli preferiti
- Interfaccia responsive e accessibile
- Gestione errori con messaggi informativi
- Skeleton loading per una migliore UX
- Lazy loading delle immagini per ottimizzare le performance

## Tecnologie Utilizzate

### Framework e Librerie Core

#### React (v19.2.0)
Libreria JavaScript per la costruzione di interfacce utente.
- **Perché**: Permette di creare componenti riutilizzabili e gestire lo stato dell'applicazione in modo efficiente
- **Utilizzo**: Base dell'intera applicazione, gestione componenti e stato

#### React Router DOM (v7.9.5)
Libreria per il routing lato client in applicazioni React.
- **Perché**: Gestisce la navigazione tra le diverse pagine (Home, Dettaglio Film, Preferiti, About) senza ricaricare la pagina
- **Utilizzo**: Routing delle pagine, navigazione SPA, gestione URL dinamici

### Librerie di Utilità

#### Axios (v1.13.2)
Client HTTP basato su Promise per browser e Node.js.
- **Perché**: Semplifica le chiamate API a TMDb con una sintassi più pulita rispetto a fetch, gestione automatica JSON e migliore gestione errori
- **Utilizzo**: Tutte le chiamate API per recuperare dati di film e serie TV

#### React Icons (v5.5.0)
Collezione di icone popolari come componenti React.
- **Perché**: Fornisce icone vettoriali scalabili (SVG) senza dover importare font o immagini separate
- **Utilizzo**: Icone nella UI (cuore per preferiti, stelle per valutazioni, menu hamburger, ecc.)

### Styling

#### Tailwind CSS (v4.1.17)
Framework CSS utility-first per creare interfacce personalizzate rapidamente.
- **Perché**: Permette di scrivere CSS direttamente nel markup con classi utility, riducendo il CSS custom e migliorando la consistenza del design
- **Utilizzo**: Tutto lo styling dell'applicazione (layout, responsive, colori, spaziature)

#### Autoprefixer (v10.4.21)
Plugin PostCSS per aggiungere automaticamente prefissi vendor ai CSS.
- **Perché**: Garantisce compatibilità cross-browser aggiungendo automaticamente prefissi CSS necessari
- **Utilizzo**: Integrato con Tailwind CSS per supporto browser ottimale

### Build Tools

#### Vite (v7.2.2)
Build tool e dev server di nuova generazione.
- **Perché**: Offre hot reload istantaneo in sviluppo e build ottimizzati per produzione, molto più veloce di Webpack
- **Utilizzo**: Server di sviluppo e build di produzione

#### @vitejs/plugin-react (v5.1.0)
Plugin ufficiale Vite per supporto React.
- **Perché**: Abilita Fast Refresh di React e ottimizzazioni specifiche per React in Vite
- **Utilizzo**: Integrazione React con Vite

### Development Tools

#### ESLint (v9.39.1)
Tool per identificare e correggere problemi nel codice JavaScript.
- **Perché**: Mantiene qualità e consistenza del codice, identifica bug potenziali e applica best practices
- **Utilizzo**: Linting del codice durante sviluppo

#### eslint-plugin-react-hooks (v5.2.0)
Plugin ESLint per verificare le regole degli Hooks di React.
- **Perché**: Garantisce che gli Hooks siano usati correttamente secondo le regole di React
- **Utilizzo**: Validazione corretta usage di useState, useEffect, custom hooks

#### eslint-plugin-react-refresh (v0.4.24)
Plugin ESLint per React Fast Refresh.
- **Perché**: Assicura che i componenti siano compatibili con Fast Refresh durante lo sviluppo
- **Utilizzo**: Validazione pattern compatibili con hot reload

## Scelte Tecniche

### Gestione dello Stato Globale: Context API
Ho scelto di utilizzare la **Context API** invece di Redux per i seguenti motivi:
- **Semplicità**: Il progetto richiede solo la gestione dei preferiti, non necessita della complessità di Redux
- **Performance**: Con un solo context (FavouritesContext), le performance sono ottime
- **Meno boilerplate**: Context API richiede molto meno codice rispetto a Redux
- **Sufficiente per lo scope**: Non abbiamo bisogno di middleware complessi, time-travel debugging o gestione di uno stato molto complesso

### Custom Hooks Implementati
- **Custom logic per gestione preferiti**: Implementato all'interno di FavouritesContext con persistenza localStorage
- **Error handling e loading states**: Implementati nelle varie pagine per gestire chiamate API

## Installazione

```bash
# Clona il repository
git clone <repository-url>

# Entra nella directory
cd MyNetflix

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

## Script Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run preview` - Preview della build di produzione
- `npm run lint` - Esegue il linting del codice

## Struttura del Progetto

```
MyNetflix/
├── src/
│   ├── components/       # Componenti riutilizzabili
│   │   ├── skeletons/   # Skeleton loaders
│   │   │   ├── SkeletonCard.jsx
│   │   │   └── SkeletonMovieDetail.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── ImageWithFallback.jsx
│   │   ├── MovieRow.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   ├── context/         # Context API per stato globale
│   │   └── FavouritesContext.jsx
│   ├── pages/           # Pagine dell'applicazione
│   │   ├── About.jsx
│   │   ├── Favourites.jsx
│   │   ├── Home.jsx
│   │   ├── MovieDetail.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx          # Componente root con routing
│   └── main.jsx         # Entry point
├── public/              # Asset statici
└── index.html           # HTML template
```

## Funzionalità Principali

### Homepage
- Visualizzazione di 4 categorie: Film Popolari, Film Top Rated, Serie TV Popolari, Serie TV Top Rated
- Hero banner con film in evidenza
- Interfaccia responsive con skeleton loading

### Ricerca
- Barra di ricerca nella navbar
- Risultati di ricerca in tempo reale
- Gestione dello stato vuoto e degli errori

### Pagina Dettaglio
- Informazioni complete: poster, titolo, descrizione, valutazione, data di uscita, generi
- Cast principale con immagini
- Pulsante per aggiungere/rimuovere dai preferiti
- Skeleton loading durante il caricamento

### Lista dei Preferiti
- Pagina dedicata ai contenuti salvati
- Persistenza con localStorage
- Possibilità di rimuovere elementi
- Indicatore nella navbar con numero di preferiti
- Gestione stato vuoto

### Navigazione
- Navbar con: Home, Preferiti, About
- Routing con React Router
- NavLink con stile attivo
- Pagina 404 per route inesistenti
- Footer persistente

### Caratteristiche Tecniche
- **Responsive Design**: Layout ottimizzato per desktop, tablet e mobile
- **Accessibilità**: Navigazione da tastiera, ARIA labels, testi alternativi
- **Performance**:
  - Lazy loading delle immagini con Intersection Observer
  - Skeleton loading per feedback visivo
  - Gestione efficiente delle chiamate API
- **Error Handling**: Gestione errori API con messaggi informativi e componenti dedicati
- **Image Fallback**: Placeholder per immagini mancanti o in errore
- **Loading States**: Indicatori di caricamento in tutte le operazioni asincrone

## Requisiti Tecnici Implementati

### Props, State, Lifecycle e Hooks
- **Props**: Passaggio dati tra componenti parent-child (MovieRow, MovieCard, ecc.)
- **useState**: Gestione stato locale in tutti i componenti
- **useEffect**:
  - Chiamate API
  - Sincronizzazione con localStorage
  - Intersection Observer per lazy loading
  - Cleanup appropriati

### Gestione dello Stato Globale
- **Context API**: FavouritesContext per gestione preferiti
- **Provider**: Configurato in App.jsx
- **useContext**: Consumato in Navbar, MovieDetail, Favourites, MovieRow

### Componenti
- **Componenti riutilizzabili**: MovieRow, ErrorMessage, ImageWithFallback, SkeletonCard, ecc.
- **Single Responsibility**: Ogni componente ha una responsabilità specifica
- **Struttura organizzata**: Separazione tra components, pages, context

### React Router
- Route implementate: `/`, `/favourites`, `/movie/:id`, `/tv/:id`, `/about`, `*` (404)
- Layout condiviso con Navbar e Footer
- NavLink con classe attiva
- useNavigate per navigazione programmatica
- useParams per route dinamiche
- useLocation per gestione stato

### Consumo API
- **API esterna**: TMDb API
- **Chiamate API**: In Home, MovieDetail, SearchBar
- **Loading state**: Skeleton loaders in tutte le pagine
- **Error handling**: Componente ErrorMessage dedicato
- **Persistenza**: localStorage per preferiti
- **Performance**: Evitate chiamate ridondanti

### Stili e UI/UX
- **Tailwind CSS**: Per tutto lo styling
- **Responsive design**: Mobile-first approach
- **Coerenza visiva**: Design system consistente
- **Stati interattivi**: Hover, focus, active states
- **Indicatori caricamento**: Skeleton loaders
- **Gestione immagini**: ImageWithFallback component con placeholder

### Qualità del Codice
- **Codice pulito**: Indentazione corretta, no console.log
- **Naming convention**: Inglese consistente, PascalCase per componenti
- **Console pulita**: No errori o warning
- **Commenti**: Dove necessario per logica complessa

## API

L'applicazione utilizza [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) per recuperare i dati sui film e serie TV.

### Endpoint utilizzati:
- `/movie/popular` - Film popolari
- `/movie/top_rated` - Film top rated
- `/tv/popular` - Serie TV popolari
- `/tv/top_rated` - Serie TV top rated
- `/movie/{id}` - Dettaglio film
- `/tv/{id}` - Dettaglio serie TV
- `/movie/{id}/credits` - Cast film
- `/tv/{id}/credits` - Cast serie TV
- `/search/multi` - Ricerca globale

## Browser Supportati

- Chrome (ultime 2 versioni)
- Firefox (ultime 2 versioni)
- Safari (ultime 2 versioni)
- Edge (ultime 2 versioni)


