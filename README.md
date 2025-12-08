# Travel Agency - Web Aplikacija

    Travel Agency je web aplikaciju za putničku agenciju koja u sebi sadržava pregled izleta, kategorija, detalja i čestih pitanja. Projekt je napravljen kao rad s fokusom na responzivni dizajn i rad s komponentama.

## Upute za pokretanje projekta

Klonirajte projekt i instalirajte ovisnosti:

npm install

Pokretanje development servera:

npm run dev

### Popis stranica i funkcionalnosti
1. Naslovnica (Home)
Banner sa slikom i naslovom

Prikaz izdvojenih izleta

Responsive layout

2. O nama (About)

Informacije o agenciji

3. Kontakt (Contact)

Kontakt forma

Validacija polja

Submit

4. Kategorije (Categories)

Prikaz svih kategorija

Filtriranje izleta prema kategoriji

Kartice sa slikom i kratkim opisom

5. Izleti (Tours)

Lista svih izleta

Kartice s cijenama, kategorijom i opisom

Poveznice na detalje pojedinog izleta

6. Detalji izleta

Pojedina stranica za svaki izlet (dinamički route)

Opis, cijena, tagovi i slika

7. Često postavljena pitanja (F.A.Q.)

Accordion komponenta

Samo jedno pitanje može biti otvoreno u jednom trenutku

8. 404 stranica

Prikazuje se kad ruta ne postoji

Gumb za povratak na početnu

#### Funkcionalnosti

Moderni responsive layout (desktop + mobilni prikaz)

Reusable React komponente (Header, Banner, Card, Accordion…)

Animirani logo (let aviona preko teksta)

FAQ accordion

Navigacija s označenjem aktivne rute (NavLink active state)

Dinamičko prikazivanje detalja izleta

CSS varijable, modularni CSS i box-shadow stilovi

Grid layout za kartice

##### Poznati bugovi / ograničenja

Podaci o izletima se učitavaju statički (nema backend API-ja)

Nema stvarnog slanja kontakt forme (demonstracija funkcionalnosti)

Header animacija aviona je dekorativna i stalno se ponavlja (može ometati korisnika – moguće poboljšanje)

Nedostaje state management (npr. korištenje Reduxa koji omogućuje spremanje podataka i centralizirano upravljanje)  — sve je lokalno


Ime i prezime: Sara Sesardić 
GitHub profil: https://github.com/sara97-png
