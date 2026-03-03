// Centralny plik z danymi firmy — jedno źródło prawdy
// Używany w komponentach, stronach i meta tagach

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
    website: "www.studnie.biz",
    coordinates: { lat: 50.8661, lng: 20.6286 },
};

export const stats = {
    foundedYear: 1968,
    boreholes: 35000,
    warrantyYears: 10,
};

export const certifications = {
    dvgw: ["W 120-1 (Brunnenbau — budowa studni)", "W 120-2 (Geothermie — geotermia)"],
};

export const partnerships = ["PORT PC", "STIEBEL ELTRON", "AGH Kraków"];

export const references = [
    "Zbyszko", "Życkowiacz", "Jamar", "Sokpol",
    "Hortex", "INDUSTRIA", "Andrzej Stępień LASPOL MAX",
];

export const locations = [
    "Kluczbork", "Przykory", "Iwaniska", "Niemodlin", "Serock", "Prostki",
    "Racławice Śl.", "Pawłów", "Olesno", "Herby", "Skierniewice", "Pawłowiczki",
    "Głogów", "Czyżew", "Chocianowice", "Adamów", "Biechów", "Lubaczów",
    "Łyszkowice", "Zabierzów", "Bierawa", "Myszków", "Damnica", "Albertów",
    "Gałkowice Ocin", "Łukaszowice", "Dziurków", "Opole", "Zwonowice", "Sarnaki",
];

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
