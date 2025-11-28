# MyNetflix 

Un'applicazione web per esplorare film e serie TV, proprio come Netflix! Utilizza il database di The Movie Database (TMDb) per mostrarti migliaia di contenuti. (https://github.com/andrea-capilunga-its/Verifica_finale_MyNetflix.git)

## Descrizione del progetto

MyNetflix ti permette di:
- **Scoprire contenuti**: Naviga tra film e serie TV più popolari e meglio votati
- **Cercare**: Trova rapidamente il film o la serie che ti interessa
- **Vedere i dettagli**: Scopri trama, cast e valutazioni
- **Salvare i preferiti**: Crea la tua lista personale che rimane salvata nel browser
- **Esperienza fluida**: Design moderno che funziona su cellulari, tablet e computer

## Tecnologie utilizzate

### Librerie principali
- **React** (v19.2.0) - Framework per creare l'interfaccia utente
- **React Router DOM** (v7.9.5) - Gestione della navigazione tra le pagine
- **Axios** (v1.13.2) - Per comunicare con l'API di TMDb
- **Tailwind CSS** (v4.1.17) - Per lo stile e il design
- **React Icons** (v5.5.0) - Icone moderne e leggere
- **Vite** (v7.2.2) - Strumento per sviluppo veloce

### Strumenti di sviluppo
- **ESLint** (v9.39.1) - Controlla la qualità del codice
- **Autoprefixer** (v10.4.21) - Compatibilità CSS tra browser diversi

## Come iniziare

### Cosa ti serve
- Node.js versione 18 o superiore installato sul computer
- npm versione 9 o superiore

### Istruzioni per l'installazione

1. **Scarica il progetto** sul tuo computer:
   ```bash
   git clone <repository-url>
   cd MyNetflix
   ```

2. **Installa tutte le dipendenze**:
   ```bash
   npm install
   ```

3. **Avvia l'applicazione**:
   ```bash
   npm run dev
   ```

4. **Apri il browser** e vai su `http://localhost:5173`

### Comandi disponibili
- `npm run dev` - Avvia l'app in modalità sviluppo
- `npm run build` - Crea la versione finale per pubblicarla online
- `npm run preview` - Anteprima della versione finale
- `npm run lint` - Controlla la qualità del codice

## API utilizzate

### The Movie Database (TMDb) API v3

L'app usa **The Movie Database**, un database gratuito con informazioni su film e serie TV di tutto il mondo.

**Documentazione ufficiale**: [https://developers.themoviedb.org/3](https://developers.themoviedb.org/3)

#### Servizi utilizzati dall'API
- `GET /movie/popular` - Ottiene i film più popolari
- `GET /movie/top_rated` - Ottiene i film meglio votati
- `GET /tv/popular` - Ottiene le serie TV più popolari
- `GET /tv/top_rated` - Ottiene le serie TV meglio votate
- `GET /movie/{id}` - Ottiene i dettagli di un film specifico
- `GET /tv/{id}` - Ottiene i dettagli di una serie TV specifica
- `GET /movie/{id}/credits` - Ottiene il cast di un film
- `GET /tv/{id}/credits` - Ottiene il cast di una serie TV
- `GET /search/multi` - Cerca film e serie TV

#### Configurazione
- `api_key` - Chiave per accedere all'API
- `language=it-IT` - Contenuti in italiano
- `page` - Per caricare più risultati

## Scelte progettuali

### Perché Context API invece di Redux?

Abbiamo scelto **Context API** per gestire lo stato dei preferiti per questi motivi:

**Vantaggi per questo progetto**:
- **Più semplice**: Il progetto deve gestire solo la lista dei preferiti, non serve tutta la complessità di Redux
- **Meno codice**: Circa il 70% di codice in meno rispetto a Redux
- **Prestazioni ottime**: Con un solo context non ci sono rallentamenti
- **Sufficiente**: Non servono funzionalità avanzate come middleware complessi o debug del tempo

### Perché queste librerie?

**Axios invece di fetch nativo**:
- Converte automaticamente i dati in formato JSON
- Gestisce meglio gli errori di rete
- Permette di configurare timeout per le richieste
- Facilita l'aggiunta futura di autenticazione

**Tailwind CSS invece di CSS Modules**:
- Sviluppo più rapido con classi già pronte
- File CSS finale molto più piccolo (riduzione del 95% circa)
- Design responsive semplificato
- Stili organizzati e facili da mantenere

**Vite invece di Webpack/Create React App**:
- Ricarica istantanea durante lo sviluppo
- Build da 10 a 100 volte più veloci
- Non serve configurazione complessa
- Usa moduli ES nativi per prestazioni migliori

**React Icons invece di Font Awesome**:
- Carica solo le icone che usi davvero (tree-shaking)
- Non serve scaricare font pesanti
- Icone in formato SVG scalabili e nitide

## Problemi noti e limitazioni

1. **Chiave API visibile** - La chiave API è presente nel codice lato client, non è sicuro per un progetto professionale. **Soluzione**: Creare un backend che faccia da intermediario.

2. **Risultati limitati** - L'app mostra solo i primi 20 risultati per categoria. **Soluzione**: Implementare lo scroll infinito per caricare più contenuti.

3. **Preferiti solo locali** - I preferiti sono salvati solo nel browser, non si sincronizzano tra dispositivi diversi. **Soluzione**: Creare un backend con sistema di autenticazione.

4. **Nessun test automatico** - Il progetto non include test automatici per verificare che tutto funzioni. **Soluzione**: Aggiungere Jest per test unitari e Playwright per test end-to-end.

5. **SEO limitato** - Essendo una Single Page Application, i motori di ricerca potrebbero avere difficoltà a indicizzarla. **Soluzione**: Usare Next.js o implementare Server-Side Rendering.

## Licenza

Progetto realizzato a scopo didattico.

---

**Credits**: [The Movie Database (TMDb)](https://www.themoviedb.org/)
