// Centralny plik z danymi firmy — jedno źródło prawdy
// Używany w komponentach, stronach i meta tagach

import zbyszkoLogo from "../assets/images/loga/zbyszko.png";
import zychowiczLogo from "../assets/images/loga/zychowicz.png";
import jamarLogo from "../assets/images/loga/jamar.png";
import sokpolLogo from "../assets/images/loga/sokpol.png";
import hortexLogo from "../assets/images/loga/hortex.png";
import industriaLogo from "../assets/images/loga/industria.png";
import aspolLogo from "../assets/images/loga/aspol.png";
import portPcLogo from "../assets/images/loga/port_pc.png";
import aghLogo from "../assets/images/loga/agh.png";

export const company = {
    name: "Zakład Usług Studziennych",
    fullName: "Zakład Usług Studziennych Bernard Marian Wójcik Sp. z o.o.",
    owner: "Bernard Marian Wójcik Sp. z o.o.",
    address: "ul. Spacerowa 5, 25-026 Kielce",
    city: "Kielce",
    phone: {
        mobile1: "602 333 745",
        mobile2: "602 333 992",
        landline: "(41) 361 55 15",
    },
    email: "studnie1@gmail.com",
    formEmail: "odwiertyzlecenia@gmail.com",
    website: "www.studnie.biz",
    nip: "9592052862",
    regon: "522284045",
    facebook: "https://www.facebook.com/profile.php?id=100063674165049",
    coordinates: { lat: 50.8661, lng: 20.6286 },
};

export const stats = {
    foundedYear: 1968,
    experienceYears: 60,
    boreholes: 35000,
    warrantyYears: 10,
};

export const certifications = {
    dvgw: ["W 120-1 (Brunnenbau — budowa studni)", "W 120-2 (Geothermie — geotermia)"],
};

export const partnerships = [
    { name: "PORT PC", logo: portPcLogo },
    { name: "AGH Kraków", logo: aghLogo },
];

export const references = [
    { name: "Zbyszko", logo: zbyszkoLogo },
    { name: "Życkowiacz", logo: zychowiczLogo },
    { name: "Jamar", logo: jamarLogo },
    { name: "Sokpol", logo: sokpolLogo },
    { name: "Hortex", logo: hortexLogo },
    { name: "INDUSTRIA", logo: industriaLogo },
    { name: "Andrzej Stępień LASPOL MAX", logo: aspolLogo },
];

export const locations = [
    { name: "Kielce", lat: 50.8661, lng: 20.6286, isHQ: true },
    { name: "Kluczbork", lat: 50.9726, lng: 18.2163 },
    { name: "Przykory", lat: 51.8500, lng: 19.9833 },
    { name: "Iwaniska", lat: 50.6333, lng: 21.1833 },
    { name: "Niemodlin", lat: 50.6400, lng: 17.6200 },
    { name: "Serock", lat: 52.5133, lng: 21.0800 },
    { name: "Prostki", lat: 53.7167, lng: 22.0667 },
    { name: "Racławice Śl.", lat: 50.4167, lng: 17.3833 },
    { name: "Pawłów", lat: 50.9333, lng: 21.0833 },
    { name: "Olesno", lat: 50.8750, lng: 18.4217 },
    { name: "Herby", lat: 50.6833, lng: 18.8833 },
    { name: "Skierniewice", lat: 51.9544, lng: 20.1417 },
    { name: "Pawłowiczki", lat: 50.2500, lng: 17.8667 },
    { name: "Głogów", lat: 51.6633, lng: 16.0847 },
    { name: "Czyżew", lat: 52.7833, lng: 22.3167 },
    { name: "Chocianowice", lat: 51.4000, lng: 19.3000 },
    { name: "Adamów", lat: 51.7333, lng: 21.7333 },
    { name: "Biechów", lat: 50.4333, lng: 20.8667 },
    { name: "Lubaczów", lat: 50.1544, lng: 23.1228 },
    { name: "Łyszkowice", lat: 51.9833, lng: 20.0667 },
    { name: "Zabierzów", lat: 50.1167, lng: 19.7833 },
    { name: "Bierawa", lat: 50.3333, lng: 18.2500 },
    { name: "Myszków", lat: 50.5778, lng: 19.3333 },
    { name: "Damnica", lat: 54.3667, lng: 17.3000 },
    { name: "Albertów", lat: 51.0167, lng: 20.3333 },
    { name: "Gałkowice Ocin", lat: 50.6000, lng: 20.6833 },
    { name: "Łukaszowice", lat: 50.7167, lng: 18.1833 },
    { name: "Dziurków", lat: 51.2500, lng: 21.4667 },
    { name: "Opole", lat: 50.6751, lng: 17.9213 },
    { name: "Zwonowice", lat: 50.0833, lng: 18.4667 },
    { name: "Sarnaki", lat: 52.2000, lng: 22.8167 },
];

// Przedziały realizacji per województwo (na podstawie grafiki klienta)
// TODO: Skonsultować z klientem aktualne liczby realizacji per województwo
export const voivodeships = {
    "zachodniopomorskie":     { name: "Zachodniopomorskie",     range: "1–10" },
    "pomorskie":             { name: "Pomorskie",              range: "1–10" },
    "warmińsko-mazurskie":   { name: "Warmińsko-mazurskie",    range: "1–10" },
    "podlaskie":             { name: "Podlaskie",              range: "1–10" },
    "lubuskie":              { name: "Lubuskie",               range: "1–10" },
    "wielkopolskie":         { name: "Wielkopolskie",           range: "1–10" },
    "kujawsko-pomorskie":    { name: "Kujawsko-pomorskie",     range: "11–30" },
    "mazowieckie":           { name: "Mazowieckie",            range: "101–500" },
    "łódzkie":               { name: "Łódzkie",                range: "31–50" },
    "dolnośląskie":          { name: "Dolnośląskie",           range: "11–30" },
    "opolskie":              { name: "Opolskie",               range: "31–50" },
    "śląskie":               { name: "Śląskie",                range: "51–100" },
    "małopolskie":           { name: "Małopolskie",            range: "51–100" },
    "świętokrzyskie":        { name: "Świętokrzyskie",         range: "powyżej 1000" },
    "podkarpackie":          { name: "Podkarpackie",           range: "11–30" },
    "lubelskie":             { name: "Lubelskie",              range: "31–50" },
};

// Realizacje odwiertów pod pompy ciepła (PompyPage)
export const heatPumpProjects = [
    { loc: "Chęciny", desc: "76 otworów × 120m — Europejskie Centrum Edukacji Geologicznej", km: "9,1 km" },
    { loc: "Zagnańsk", desc: "49 otworów × 100m — Zespół Szkoły Podstawowej i Hala", km: "4,9 km" },
    { loc: "Sobów", desc: "37 otworów × 200m — Dom Pomocy Społecznej", km: "6,5 km" },
    { loc: "Piekoszów", desc: "50 otworów × 100m — Hala produkcyjna WW TECH", km: "5,0 km" },
    { loc: "Zamość", desc: "44 otwory × 100m — Zespół Szkół Ponadgimnazjalnych nr 4", km: "4,4 km" },
    { loc: "Mariówka", desc: "48 otworów × 100m — Dom Generalny Zgromadzenia Sióstr Służek NMP Niepokalanej", km: "4,8 km" },
    { loc: "Osiny", desc: "40 otworów × 100m — Zakład Opiekuńczo-Leczniczy", km: "4,0 km" },
    { loc: "Miechów", desc: "26 otworów × 100m — Plebania i Dom Sióstr Parafii Grobu Bożego", km: "2,6 km" },
    { loc: "Dziekanowice", desc: "22 otwory × 100m — Budynek Szkoły", km: "2,2 km" },
    { loc: "Tarnów", desc: "12 otworów × 100m — Budynek mieszkalny wielorodzinny", km: "1,2 km" },
    { loc: "Baćkowice", desc: "5 otworów × 195m — Budynek wielofunkcyjny Urzędu Gminy", km: "0,9 km" },
];
