# studnie.biz — Strona internetowa firmy wiertniczej

## Opis projektu

Strona internetowa dla firmy **Zakład Usług Studziennych Bernard Marian Wójcik Sp. z o.o.** (studnie.biz) z Kielc. Firma działa od 1968 roku i specjalizuje się w wierceniu studni głębinowych, odwiertach pod pompy ciepła, piezometrach i odwiertach poszukiwawczych. Jest jedyną firmą wiertniczą w Polsce z niemieckim certyfikatem DVGW BAU (W 120-1 i W 120-2).

Strona ma charakter prezentacyjno-ofertowy (brochure site) z formularzem kontaktowym. Docelowa grupa: klienci indywidualni, samorządy, rolnictwo, przemysł.

## Tech Stack

- **Framework**: React 19 + Vite 7
- **Routing**: react-router-dom v7 (BrowserRouter + Routes)
- **Stylowanie**: Tailwind CSS 4 (utility-first + własne zmienne w `@theme`)
- **SEO**: react-helmet-async (dynamiczne tagi `<head>` na każdej podstronie)
- **Fonty**: Google Fonts — Outfit (nagłówki), DM Sans (body)
- **Ikony**: Inline SVG (ręczne komponenty w `Icons.jsx`)
- **Animacje**: CSS @keyframes + IntersectionObserver (komponent `AnimatedSection`)
- **Budowanie**: Vite (`npm run build` → folder `dist/`)

## Komendy

```bash
npm install          # Instalacja zależności
npm run dev          # Serwer deweloperski (localhost:5173)
npm run build        # Build produkcyjny → dist/
npm run preview      # Podgląd buildu produkcyjnego
```

## Struktura plików

```
studnie-biz/
├── public/
│   ├── favicon.svg                # Placeholder logo "S" (zastąpić logo firmy)
│   ├── robots.txt                 # Konfiguracja robotów SEO
│   └── sitemap.xml                # Mapa strony (8 podstron)
├── src/
│   ├── App.jsx                    # Główny komponent z routingiem + ScrollToTop
│   ├── main.jsx                   # Entry point (HelmetProvider + BrowserRouter)
│   ├── styles/
│   │   └── global.css             # Import Tailwind, @theme, @keyframes, klasy pomocnicze
│   ├── components/
│   │   ├── Navigation.jsx         # Nawigacja górna (desktop + hamburger mobile)
│   │   ├── Footer.jsx             # Stopka z linkami i danymi kontaktowymi
│   │   ├── AnimatedSection.jsx    # Wrapper z IntersectionObserver (fade-in on scroll)
│   │   ├── StatCounter.jsx        # Animowany licznik statystyk
│   │   ├── ServiceCard.jsx        # Karta usługi (na stronie głównej)
│   │   ├── FeatureItem.jsx        # Element z ikoną + tytuł + opis
│   │   ├── CheckList.jsx          # Lista z checkmarkami
│   │   ├── PageHero.jsx           # Hero sekcja podstron (ikona, tytuł, opis, opcjonalny CTA via children)
│   │   ├── InquiryForm.jsx        # Formularz zapytania ofertowego (warianty: studnia / pompa)
│   │   └── ImgPlaceholder.jsx     # Gradient placeholder na zdjęcia (używany już tylko na ONasPage)
│   ├── pages/
│   │   ├── HomePage.jsx           # Strona główna (hero, statystyki, usługi, CTA)
│   │   ├── StudniePage.jsx        # Studnie głębinowe (wiercenie, kamerowanie, renowacja)
│   │   ├── PompyPage.jsx          # Pompy ciepła (odwierty geotermalne, wymogi, realizacje)
│   │   ├── OdwiertyPage.jsx       # Odwierty poszukiwawcze
│   │   ├── PiezometryPage.jsx     # Piezometry obserwacyjne
│   │   ├── RealizacjePage.jsx     # Realizacje (mapa miast, referencje klientów)
│   │   ├── ONasPage.jsx           # O firmie (historia, certyfikat DVGW, partnerzy)
│   │   ├── KontaktPage.jsx        # Kontakt (tylko dane kontaktowe, bez formularza)
│   │   └── NotFoundPage.jsx       # Strona 404 (noindex)
│   ├── data/
│   │   └── content.js             # Centralne dane firmy (company, stats, references, locations, heatPumpProjects)
│   ├── icons/
│   │   └── Icons.jsx              # ~20 komponentów SVG (water, drill, phone, mail…)
│   └── assets/
│       └── images/
│           ├── ogolne/            # zespol-grupowe.jpg, zespol-przy-wiertnicy.jpg
│           ├── studnie/           # 10 zdjęć (wiercenie, kamera, obudowy, wiertnice)
│           └── pompy/             # 6 zdjęć (sondy, odwierty, wiertnice)
├── dist/                          # Build produkcyjny (gitignored)
├── index.html                     # HTML entry point (JSON-LD LocalBusiness, OG tagi)
├── package.json
├── vite.config.js
├── eslint.config.js
└── CLAUDE.md
```

## Podstrony (routing)

| Ścieżka | Komponent | Opis |
|---|---|---|
| `/` | HomePage | Hero, statystyki, 6 usług, dlaczego my, CTA |
| `/studnie` | StudniePage | Budowa studni, kamerowanie, renowacja, likwidacja |
| `/pompy-ciepla` | PompyPage | Gruntowe pompy ciepła, wymogi, realizacje odwiertów |
| `/odwierty` | OdwiertyPage | Odwierty poszukiwawcze, minimalizacja ryzyka |
| `/piezometry` | PiezometryPage | Monitoring wód podziemnych |
| `/realizacje` | RealizacjePage | Mapa realizacji (30+ miast), referencje klientów |
| `/o-nas` | ONasPage | Historia, certyfikat DVGW BAU, partnerzy, harmonogram |
| `/kontakt` | KontaktPage | Dane firmy, formularz kontaktowy (bez backendu) |
| `*` | NotFoundPage | Strona 404 |

## Konwencje kodowania

- Komponenty: functional components z hooks, PascalCase
- Pliki: PascalCase dla komponentów (`ServiceCard.jsx`), camelCase dla utilsów
- Stylowanie: Tailwind CSS 4 — klasy utility + własne zmienne w `global.css`
- Język treści: **polski** — cała strona jest po polsku
- Brak TypeScript — czysty JSX
- Eksporty: `export default` dla komponentów stron, named exports dla mniejszych komponentów
- SEO: każda strona deklaruje własne tagi przez `<Helmet>` z `react-helmet-async`

## Paleta kolorów (zmienne Tailwind `@theme`)

```
--color-navy:       #0a1628    (tło ciemne, nawigacja)
--color-deep-blue:  #0d2847    (hero, gradienty)
--color-blue:       #1a6fb5    (kolor główny, linki, ikony)
--color-light-blue: #3d9be9    (akcenty jasne)
--color-accent:     #00b4d8    (CTA, podświetlenia, statystyki)
--color-water:      #48cae4    (dekoracyjny — motyw wody)
--color-off-white:  #f0f4f8    (tła sekcji)
--color-light-gray: #e5e7eb    (obramowania, separatory)
```

Kolorystyka nawiązuje do wody i marki studnie.biz. **Nie jest jeszcze zatwierdzona przez klienta.**

## Dane firmy

- **Nazwa**: Zakład Usług Studziennych Bernard Marian Wójcik Sp. z o.o.
- **Adres**: ul. Spacerowa 5, 25-026 Kielce
- **Telefon komórkowy**: 602 333 745, 602 333 992
- **Telefon stacjonarny**: (41) 361 55 15
- **Email**: studnie1@gmail.com
- **Email formularzy**: odwiertyzlecenia@gmail.com
- **WWW**: www.studnie.biz
- **NIP**: 9592052862
- **REGON**: 522284045
- **Facebook**: https://www.facebook.com/profile.php?id=100063674165049
- **Rok założenia**: 1968
- **Lata doświadczenia**: ponad 60 (hardcoded, nie dynamiczne)
- **Wykonane otwory**: ponad 35 000
- **Gwarancja na studnię**: 10 lat
- **Certyfikaty**: DVGW BAU W 120-1 (Brunnenbau), W 120-2 (Geothermie) — **pierwsza** (nie "jedyna") firma w Polsce
- **Członkostwo**: PORT PC (Polska Organizacja Rozwoju Pomp Ciepła)
- **Współpraca**: AGH Kraków (testy TRT)
- **Referencje klientów**: Zbyszko, Życkowiacz, Jamar, Sokpol, Hortex, INDUSTRIA, Andrzej Stępień LASPOL MAX
- **Geo**: 50.8661, 20.6286 (Kielce — używane w JSON-LD)

## SEO (stan obecny)

- `index.html`: LocalBusiness JSON-LD schema, Open Graph, canonical
- Każda podstrona: `<Helmet>` z `title`, `description`, OG tags, canonical
- `public/robots.txt`: Allow all + odniesienie do sitemap
- `public/sitemap.xml`: 8 URL-i z priorytetami (0.5–1.0)
- `NotFoundPage.jsx`: `<meta name="robots" content="noindex" />`

## TODO — lista zadań

### Od klienta (czekamy na materiały)

- [ ] **Sekcja O nas — historia firmy** — klient przygotowuje materiały z artykułów z 1984 r. o historii założenia firmy
- [ ] **Zdjęcie właścicieli** — brak wspólnego zdjęcia Bernarda i Mariana Wójcik; klient zrobi przy najbliższej okazji (placeholder `ImgPlaceholder` na ONasPage)
- [ ] **Zgoda na logotypy firm** — klient w trakcie uzyskiwania zgód na wykorzystanie logotypów na stronie (Zbyszko, Hortex, Sokpol, Jamar, Życkowiacz, INDUSTRIA, LASPOL MAX)
- [ ] **PYTANIE DO KLIENTA: Certyfikat DVGW na stronie O nas** — obecnie wyświetlane jest logo/badge certyfikatu; spytać czy wystarczy, czy klient wolałby dodać też pełny dokument certyfikatu do pobrania (PDF dostępny w `docs/certyfikat/`)
- [ ] **PYTANIE DO KLIENTA: Wymagalność pól formularzy** — wszystkie pola ustawione jako wymagane; skonsultować, czy np. e-mail lub numer działki mogą być opcjonalne

### Frontend (do zrobienia w kodzie)

- [ ] **Formularze — wysyłanie** — podpiąć Formspree (lub inny serwis); endpoint na `odwiertyzlecenia@gmail.com`; oba formularze (studnia + pompa)
- [ ] **Galeria zdjęć** — po otrzymaniu zdjęć: komponent galerii z lightboxem (np. yet-another-react-lightbox); wersja mobilna
- [ ] **Cookie banner / polityka prywatności** — wymagane prawnie (RODO); dodać baner cookie + podstronę `/polityka-prywatnosci`
- [ ] **Weryfikacja responsywności** — przetestować layout na urządzeniach mobilnych (szczególnie nawigacja, tabele, karty)
- [ ] **Testy cross-browser** — Chrome, Firefox, Safari, Edge

### Wdrożenie (deployment)

- [ ] **Wybór hostingu** — ustalić z klientem: VPS, shared hosting, Netlify/Vercel, lub istniejący hosting www.studnie.biz
- [ ] **Konfiguracja serwera** — dla BrowserRouter wymagany fallback do `index.html` (np. reguła `_redirects` na Netlify lub `.htaccess` na Apache)
- [ ] **Domena i SSL** — powiązać domenę studnie.biz z serwerem + certyfikat HTTPS
- [ ] **Aktualizacja sitemap.xml** — zmienić daty `<lastmod>` przed wdrożeniem
- [ ] **Google Search Console** — dodać właściwość, zweryfikować domenę, przesłać sitemap
- [ ] **Analytics** — rozważyć dodanie Google Analytics 4 lub Plausible (wymaga cookie banner)

### Opcjonalne / przyszłościowe

- [ ] **Kolorystyka** — ostateczne zatwierdzenie przez klienta (paleta może ulec zmianie)
- [ ] **TypeScript** — opcjonalna migracja dla lepszej utrzymywalności
- [ ] **Testy wydajności** — Lighthouse / Core Web Vitals po wdrożeniu

### Ukończone

- [x] Rozbicie monolitycznego `App.jsx` na komponenty i podstrony
- [x] Routing z react-router-dom (prawdziwe URL-e, ScrollToTop)
- [x] SEO: meta tagi, Open Graph, JSON-LD LocalBusiness
- [x] Plik `robots.txt` i `sitemap.xml`
- [x] Strona 404 (`NotFoundPage.jsx`)
- [x] Migracja inline styles → Tailwind CSS 4
- [x] Favicon SVG (placeholder — do zastąpienia logo firmy)
- [x] react-helmet-async dla dynamicznych tagów `<head>`
- [x] Formularze zapytań ofertowych (studnia + pompa ciepła) z CTA w hero i na stronie głównej
- [x] Prawdziwe zdjęcia na HomePage, StudniePage, PompyPage (18 zdjęć, zoptymalizowane)
- [x] Usunięcie placeholderów zdjęć z OdwiertyPage i PiezometryPage
- [x] Mapa Google na stronie kontaktu
- [x] Centralizacja treści do `src/data/content.js` + naprawa niespójności lat doświadczenia
- [x] Mapa choropleth województw na `/realizacje` — SVG zamiast Leaflet, legenda z ikonami kropli, tooltip on hover; usunięto leaflet i react-leaflet z zależności
- [x] Zdjęcia firmy — 18 zdjęć dostarczonych, zoptymalizowanych i umieszczonych na HomePage, StudniePage, PompyPage
- [x] Nowe formularze (2 szt.) — struktura dostarczona w `docs/`, UI zaimplementowane
- [x] Formularze — UI — formularz studni na `/studnie`, formularz pompy na `/pompy-ciepla`; CTA w hero podstron i na stronie głównej
- [x] Mapa Google na stronie `/kontakt` (ul. Spacerowa 5, Kielce)
- [x] Centralizacja treści do `src/data/content.js` — dane firmy, statystyki, referencje, lokalizacje; dynamiczne obliczanie lat doświadczenia
- [x] Logotypy firm — zamiana tekstowych referencji/partnerów na graficzne loga (`LogoGrid` komponent, grayscale→kolor hover)
- [x] **Feedback klienta (runda 1):**
  - [x] Logo firmy — high-res PNG z przezroczystym tłem, oryginalne kolory (granat→biały na ciemnym tle, niebieski zachowany)
  - [x] Favicon — sygnet logo jako PNG (512×512 + apple-touch-icon 180×180)
  - [x] "Ponad 60 lat" — zamiana dynamicznego obliczania na hardcoded `experienceYears: 60`
  - [x] NIP (9592052862) i REGON (522284045) — w stopce i na stronie kontaktu
  - [x] "Jedyna" → "pierwsza" firma w Polsce — wszędzie (HomePage, Footer, ONasPage, index.html, meta tagi)
  - [x] Usunięto STIEBEL ELTRON — z partnerships, kart usług na HomePage, meta tagów PompyPage
  - [x] Tekst "Dlaczego my" — pełna nazwa firmy + "pierwsza" zamiast "jedyna"
  - [x] Stopka — usunięta wzmianka o certyfikacie DVGW BAU
  - [x] StudniePage — dodano "Decyzje o środowiskowych uwarunkowaniach przedsięwzięcia"
  - [x] Facebook — link do profilu w stopce, content.js i JSON-LD
  - [x] Email formularzy — `odwiertyzlecenia@gmail.com` w content.js
  - [x] Mapa realizacji — poprawione dane województw wg adnotacji klienta na `docs/realizacje.png`
  - [x] Certyfikat DVGW — obraz logo certyfikatu na stronie O nas (zastąpiony ImgPlaceholder)
