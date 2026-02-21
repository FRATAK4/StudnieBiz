# studnie.biz — Strona internetowa firmy wiertniczej

## Opis projektu

Strona internetowa dla firmy **Zakład Usług Studziennych Bernard Marian Wójcik Sp. z o.o.** (studnie.biz) z Kielc. Firma działa od 1968 roku i specjalizuje się w wierceniu studni głębinowych, odwiertach pod pompy ciepła, piezometrach i odwiertach poszukiwawczych. Jest jedyną firmą wiertniczą w Polsce z niemieckim certyfikatem DVGW BAU (W 120-1 i W 120-2).

Strona ma charakter prezentacyjno-ofertowy (brochure site) z formularzem kontaktowym. Docelowa grupa: klienci indywidualni, samorządy, rolnictwo, przemysł.

## Tech Stack

- **Framework**: React 18 + Vite
- **Routing**: react-router-dom (BrowserRouter + Routes)
- **Stylowanie**: CSS-in-JS (inline styles + globalny blok `<style>`)
- **Fonty**: Google Fonts — Outfit (nagłówki), DM Sans (body)
- **Ikony**: Inline SVG (ręczne komponenty w obiekcie `Icons`)
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

Struktura po refaktorze:

```
src/
├── App.jsx                    # Główny komponent z routingiem
├── main.jsx                   # Entry point (ReactDOM.createRoot)
├── styles/
│   └── global.css             # Globalne style, animacje, zmienne CSS
├── components/
│   ├── Navigation.jsx         # Nawigacja górna (desktop + mobile)
│   ├── Footer.jsx             # Stopka
│   ├── AnimatedSection.jsx    # Wrapper z IntersectionObserver
│   ├── StatCounter.jsx        # Animowany licznik statystyk
│   ├── ServiceCard.jsx        # Karta usługi (na stronie głównej)
│   ├── FeatureItem.jsx        # Element z ikoną + tytuł + opis
│   ├── CheckList.jsx          # Lista z checkmarkami
│   ├── PageHero.jsx           # Hero sekcja podstron (tytuł + opis)
│   └── ImgPlaceholder.jsx     # Placeholder na zdjęcia (do zamiany na <img>)
├── pages/
│   ├── HomePage.jsx           # Strona główna
│   ├── StudniePage.jsx        # Studnie głębinowe
│   ├── PompyPage.jsx          # Pompy ciepła
│   ├── OdwiertyPage.jsx       # Odwierty poszukiwawcze
│   ├── PiezometryPage.jsx     # Piezometry obserwacyjne
│   ├── RealizacjePage.jsx     # Realizacje i referencje
│   ├── ONasPage.jsx           # O firmie, certyfikaty, materiały
│   └── KontaktPage.jsx        # Kontakt i formularz
├── data/
│   └── content.js             # Teksty, listy realizacji, dane kontaktowe
├── icons/
│   └── Icons.jsx              # Obiekt z komponentami SVG ikon
└── assets/
    └── images/                # Zdjęcia firmy, realizacji, sprzętu
```

## Podstrony (routing)

| Ścieżka | Komponent | Opis |
|---|---|---|
| `/` | HomePage | Hero, statystyki, usługi, dlaczego my, CTA |
| `/studnie` | StudniePage | Budowa studni, kamerowanie, renowacja, likwidacja |
| `/pompy-ciepla` | PompyPage | Gruntowe pompy ciepła, wymogi, realizacje odwiertów |
| `/odwierty` | OdwiertyPage | Odwierty poszukiwawcze, minimalizacja ryzyka |
| `/piezometry` | PiezometryPage | Monitoring wód podziemnych |
| `/realizacje` | RealizacjePage | Mapa realizacji, referencje klientów |
| `/o-nas` | ONasPage | Historia, certyfikat DVGW BAU, materiały, zespół |
| `/kontakt` | KontaktPage | Dane firmy, formularz kontaktowy |

## Konwencje kodowania

- Komponenty: functional components z hooks, PascalCase
- Pliki: PascalCase dla komponentów (`ServiceCard.jsx`), camelCase dla utilsów
- Style: docelowo migracja z inline styles na CSS Modules lub Tailwind
- Język treści: **polski** — cała strona jest po polsku
- Brak TypeScript (na razie) — czysty JSX
- Eksporty: `export default` dla komponentów stron, named exports dla mniejszych komponentów

## Paleta kolorów (zmienne CSS)

```
--navy:       #0a1628    (tło ciemne, nawigacja)
--deep-blue:  #0d2847    (hero, gradienty)
--blue:       #1a6fb5    (kolor główny, linki, ikony)
--light-blue: #3d9be9    (akcenty jasne)
--accent:     #00b4d8    (CTA, podświetlenia, statystyki)
--water:      #48cae4    (dekoracyjny — motyw wody)
--white:      #ffffff
--off-white:  #f0f4f8    (tła sekcji)
--gray:       #6b7280    (tekst pomocniczy)
--dark:       #111827    (tekst główny)
```

Kolorystyka nawiązuje do wody i marki studnie.biz. Może ulec zmianie — kolorystyka nie jest jeszcze ostatecznie zatwierdzona.

## Dane firmy (do użycia w treściach)

- **Nazwa**: Zakład Usług Studziennych Bernard Marian Wójcik Sp. z o.o.
- **Adres**: ul. Spacerowa 5, 25-026 Kielce
- **Telefon komórkowy**: 602 333 745, 602 333 992
- **Telefon stacjonarny**: (41) 361 55 15
- **Email**: studnie1@gmail.com
- **WWW**: www.studnie.biz
- **Facebook**: Zakład Usług Studziennych
- **Rok założenia**: 1968
- **Wykonane otwory**: ponad 35 000
- **Gwarancja na studnię**: 10 lat
- **Certyfikaty**: DVGW BAU W 120-1 (Brunnenbau), W 120-2 (Geothermie)
- **Członkostwo**: PORT PC (Polska Organizacja Rozwoju Pomp Ciepła)
- **Partner**: STIEBEL ELTRON (pompy ciepła)
- **Współpraca**: AGH Kraków (testy TRT)
- **Referencje klientów**: Zbyszko, Życkowiacz, Jamar, Sokpol, Hortex, INDUSTRIA, Andrzej Stępień LASPOL MAX

## Znane problemy i TODO

- [x] Cały kod w jednym pliku `App.jsx` — wymaga rozbicia na komponenty
- [x] Routing stanowy (useState) — zamienić na react-router-dom z prawdziwymi URL-ami
- [ ] Placeholdery zamiast zdjęć — wymienić na prawdziwe fotografie firmy
- [x] Brak SEO (meta tagi, Open Graph, structured data)
- [ ] Formularz kontaktowy nie wysyła maili — potrzebny backend lub usługa typu Formspree
- [ ] Brak wersji mobilnej galerii zdjęć
- [ ] Kolorystyka do ostatecznego zatwierdzenia przez klienta
- [ ] Brak mapy Google na stronie kontaktu
- [ ] Brak cookie banner / polityki prywatności
- [ ] Inline styles → migracja na CSS Modules lub Tailwind CSS