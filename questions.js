// Haluatko regulaatiomiljonääriksi? - Kysymyspankki
// Kysymykset on jaettu kolmeen vaikeustasoon (Tier 1: Kysymykset 1-5, Tier 2: Kysymykset 6-10, Tier 3: Kysymykset 11-15)
// ja viiteen kategoriaan:
// 1. "Fimea & Kansallinen lainsäädäntö"
// 2. "Myyntiluvat & EU-menettelyt"
// 3. "Lääketurva (Pharmacovigilance)"
// 4. "Kliiniset tutkimukset & GMP/GDP"
// 5. "Lääkinnälliset laitteet & HTA"

window.QUESTION_CATEGORIES = {
  ALL: "Kaikki aihealueet",
  FIMEA: "Fimea & Kansallinen lainsäädäntö",
  MA: "Myyntiluvat & EU-menettelyt",
  PV: "Lääketurva (Pharmacovigilance)",
  CTGMP: "Kliiniset tutkimukset & GMP/GDP",
  MDHTA: "Lääkinnälliset laitteet & HTA"
};

window.QUESTIONS_BANK = [
  // ============================================================================
  // TIER 1: KYSYMYKSET 1–5 (100 € – 1 000 €) - Perustaso (20 kysymystä)
  // ============================================================================
  {
    id: "t1_1",
    tier: 1,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Minkä ministeriön hallinnonalalla Lääkealan turvallisuus- ja kehittämiskeskus Fimea toimii?",
    options: [
      "Työ- ja elinkeinoministeriön (TEM)",
      "Sosiaali- ja terveysministeriön (STM)",
      "Opetus- ja kulttuuriministeriön (OKM)",
      "Valtiovarainministeriön (VM)"
    ],
    correct: 1,
    explanation: "Fimea on sosiaali- ja terveysministeriön (STM) hallinnonalalla toimiva keskusvirasto, joka valvoo ja kehittää lääkealaa Suomessa."
  },
  {
    id: "t1_2",
    tier: 1,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Missä kaupungissa sijaitsee Fimean päätoimipaikka (alueellistamispäätöksen mukainen kotipaikka)?",
    options: [
      "Helsingissä",
      "Tampereella",
      "Kuopiossa",
      "Turussa"
    ],
    correct: 2,
    explanation: "Fimean päätoimipaikka sijaitsee Kuopiossa. Lisäksi Fimealla on toimipisteet Helsingissä, Turussa, Tampereella ja Oulussa."
  },
  {
    id: "t1_3",
    tier: 1,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mitä lyhenne EMA tarkoittaa Euroopan unionin lääkevalvonnassa?",
    options: [
      "European Medical Association",
      "European Medicines Agency",
      "European Manufacturing Authority",
      "European Market Authorization"
    ],
    correct: 1,
    explanation: "EMA (European Medicines Agency) on Euroopan lääkevirasto, joka vastaa lääkkeiden tieteellisestä arvioinnista, valvonnasta ja turvallisuuden seurannasta EU:ssa."
  },
  {
    id: "t1_4",
    tier: 1,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mikä asiakirja on tarkoitettu ensisijaisesti lääkkeen käyttäjälle (potilaalle) ja löytyy lääkepakkauksen sisältä?",
    options: [
      "Valmisteyhteenveto (SmPC)",
      "Pakkausseloste (PL)",
      "Riskienhallintasuunnitelma (RMP)",
      "Kliininen arviointiraportti (AR)"
    ],
    correct: 1,
    explanation: "Pakkausseloste (Package Leaflet, PL) on lääkkeen käyttäjälle laadittu ohje, kun taas valmisteyhteenveto (SmPC) on suunnattu terveydenhuollon ammattilaisille."
  },
  {
    id: "t1_5",
    tier: 1,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Mikä viranomainen myöntää Suomessa apteekkiluvat yksityisille apteekkareille?",
    options: [
      "Aluehallintovirasto (AVI)",
      "Kansaneläkelaitos (Kela)",
      "Fimea",
      "Valvira"
    ],
    correct: 2,
    explanation: "Lääkelain mukaisesti Fimea päättää uusien apteekkien perustamisesta, apteekkien sijaintialueista ja myöntää apteekkiluvat."
  },
  {
    id: "t1_6",
    tier: 1,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Kuka voi tehdä Fimealle ilmoituksen epäillystä lääkkeen haittavaikutuksesta?",
    options: [
      "Vain erikoislääkäri",
      "Vain apteekkihenkilökunta",
      "Vain myyntiluvan haltija",
      "Sekä terveydenhuollon ammattilainen että lääkkeen käyttäjä itse"
    ],
    correct: 3,
    explanation: "Sekä terveydenhuollon ammattilaiset (lääkärit, hammaslääkärit, proviisorit, farmaseutit, sairaanhoitajat) että potilaat/kuluttajat voivat ilmoittaa epäillyistä haittavaikutuksista Fimealle."
  },
  {
    id: "t1_7",
    tier: 1,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Missä kaupungissa Euroopan lääkeviraston (EMA) päämaja sijaitsee Brexitin jälkeen?",
    options: [
      "Brysselissä",
      "Amsterdamissa",
      "Pariisissa",
      "Frankfurtissa"
    ],
    correct: 1,
    explanation: "EMA siirtyi Lontoosta Amsterdamiin vuonna 2019 Yhdistyneen kuningaskunnan erottua Euroopan unionista."
  },
  {
    id: "t1_8",
    tier: 1,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Mikä viranomainen päättää Suomessa avohoidon reseptilääkkeiden Kela-korvattavuudesta ja kohtuullisesta tukkuhinnasta?",
    options: [
      "Fimea",
      "Lääkkeiden hintalautakunta (Hila)",
      "Terveyden ja hyvinvoinnin laitos (THL)",
      "Kilpailu- ja kuluttajavirasto (KKV)"
    ],
    correct: 1,
    explanation: "STM:n yhteydessä toimiva Lääkkeiden hintalautakunta (Hila) päättää sairausvakuutuslain mukaisesta lääkkeiden korvattavuudesta ja kohtuullisesta tukkuhinnasta, ei Fimea."
  },
  {
    id: "t1_9",
    tier: 1,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Mitä musta kärjellään seisova kolmio (▼) lääkkeen pakkausselosteessa ja valmisteyhteenvedossa tarkoittaa?",
    options: [
      "Lääke on tarkoitettu vain sairaalakäyttöön",
      "Lääke aiheuttaa voimakasta väsymystä liikenteessä",
      "Lääkevalmisteeseen kohdistuu lisäseuranta",
      "Lääke on myrkyllinen ympäristölle"
    ],
    correct: 2,
    explanation: "Musta kolmio (▼) osoittaa, että lääkkeeseen kohdistuu tehostettu lisäseuranta (esim. uusi vaikuttava aine tai biologinen lääke), ja kaikista epäillyistä haitoista pyydetään ilmoittamaan."
  },
  {
    id: "t1_10",
    tier: 1,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Mitä rinnakkaislääkkeellä (geneerisellä lääkkeellä) tarkoitetaan?",
    options: [
      "Lääkettä, jota käytetään aina toisen lääkkeen rinnalla",
      "Valmistetta, jolla on sama vaikuttava aine, vahvuus ja lääkemuoto kuin alkuperäislääkkeellä",
      "Ilman reseptiä myytävää luontaistuotetta",
      "Toisesta EU-maasta rinnakkaistuotua alkuperäispakkausta"
    ],
    correct: 1,
    explanation: "Rinnakkaislääke (geneerinen valmiste) sisältää samaa vaikuttavaa ainetta saman määrän ja on hoidollisesti samanarvoinen (bioekvivalentti) alkuperäislääkkeen kanssa."
  },
  {
    id: "t1_11",
    tier: 1,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Mitä lyhenne GMP tarkoittaa lääkevalmistuksessa?",
    options: [
      "General Medical Practice",
      "Good Manufacturing Practice (hyvä tuotantotapa)",
      "Global Marketing Procedure",
      "Generic Medicine Protocol"
    ],
    correct: 1,
    explanation: "GMP (Good Manufacturing Practice) eli lääkkeiden hyvä tuotantotapa varmistaa, että lääkkeet valmistetaan ja tarkastetaan tasalaatuisesti laatuvaatimusten mukaisesti."
  },
  {
    id: "t1_12",
    tier: 1,
    category: "Lääkinnälliset laitteet & HTA",
    question: "Mikä merkintä osoittaa, että lääkinnällinen laite täyttää EU-lainsäädännön olennaiset turvallisuus- ja suorituskykyvaatimukset?",
    options: [
      "FI-merkintä",
      "CE-merkintä",
      "ISO-leima",
      "EMA-hyväksyntä"
    ],
    correct: 1,
    explanation: "Lääkinnällisessä laitteessa on oltava CE-merkintä osoituksena siitä, että se täyttää EU:n MD- tai IVD-asetuksen vaatimukset ennen markkinoille saattamista."
  },
  {
    id: "t1_13",
    tier: 1,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Minä vuonna Fimea aloitti toimintansa korvaten aiemman Lääkelaitoksen?",
    options: [
      "1995",
      "2004",
      "2009",
      "2015"
    ],
    correct: 2,
    explanation: "Fimea aloitti toimintansa 1.11.2009, jolloin Lääkelaitos lakkautettiin ja sen sekä ROHTO-keskuksen tehtävät siirrettiin uuteen virastoon."
  },
  {
    id: "t1_14",
    tier: 1,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Mikä on Fimean julkaiseman lääkealan ammattilehden nimi?",
    options: [
      "Duodecim",
      "Sic!",
      "Tabu",
      "Apteekkari"
    ],
    correct: 1,
    explanation: "Sic! on Fimean julkaisema tieteellinen ja ammatillinen lääkealan lehti, joka tarjoaa riippumatonta tietoa lääkkeistä ja lääkehoidosta. (Tabu oli aiemman Lääkelaitoksen julkaisu)."
  },
  {
    id: "t1_15",
    tier: 1,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mitä itsehoitolääkkeellä (OTC-lääkkeellä) tarkoitetaan?",
    options: [
      "Lääkettä, jota potilas annostelee itse sairaalassa",
      "Lääkettä, jonka voi ostaa apteekista ilman lääkemääräystä (reseptiä)",
      "Kaikkia ravintolisiä ja vitamiineja",
      "Lääkettä, jota saa myydä kaikissa ruokakaupoissa"
    ],
    correct: 1,
    explanation: "Itsehoitolääke (Over-The-Counter, OTC) on myyntiluvallinen lääkevalmiste, jota voidaan toimittaa apteekista ilman lääkärin reseptiä."
  },
  {
    id: "t1_16",
    tier: 1,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Mikä Fimean ylläpitämä maksuton hakupalvelu sisältää tiedot Suomessa myyntiluvan saaneista lääkevalmisteista?",
    options: [
      "Lääkehaku (FimeaWeb)",
      "Kanta-reseptikeskus",
      "Terveysportti",
      "Lääkekompassi"
    ],
    correct: 0,
    explanation: "Fimean Lääkehaku sisältää ajantasaiset tiedot Suomessa myyntiluvan saaneista ihmis- ja eläinlääkkeistä sekä niiden valmisteyhteenvedoista ja pakkausselosteista."
  },
  {
    id: "t1_17",
    tier: 1,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Mitä lyhenne GDP tarkoittaa lääkejakelun valvonnassa?",
    options: [
      "Gross Domestic Product",
      "Good Distribution Practice (hyvä jakelutapa)",
      "General Drug Prescription",
      "Global Documentation Process"
    ],
    correct: 1,
    explanation: "GDP (Good Distribution Practice) eli lääkkeiden hyvä jakelutapa määrittelee laatuvaatimukset lääketukkukaupoille ja lääkkeiden kuljetukselle sekä varastoinnille."
  },
  {
    id: "t1_18",
    tier: 1,
    category: "Lääkinnälliset laitteet & HTA",
    question: "Mikä viranomainen valvoo lääkinnällisten laitteiden turvallisuutta Suomessa?",
    options: [
      "Tukes",
      "Fimea",
      "Säteilyturvakeskus (STUK) yksinään",
      "Tulli"
    ],
    correct: 1,
    explanation: "Lääkinnällisten laitteiden valvonta siirtyi Valvirasta Fimeaan vuoden 2020 alussa. Fimea on Suomen toimivaltainen viranomainen lääkinnällisissä laitteissa."
  },
  {
    id: "t1_19",
    tier: 1,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Millä kahdella yliopistolla on Suomessa lakisääteinen oikeus pitää yliopiston apteekkia?",
    options: [
      "Helsingin yliopistolla ja Oulun yliopistolla",
      "Helsingin yliopistolla ja Itä-Suomen yliopistolla",
      "Turun yliopistolla ja Tampereen yliopistolla",
      "Itä-Suomen yliopistolla ja Åbo Akademilla"
    ],
    correct: 1,
    explanation: "Lääkelain 42 §:n mukaan Helsingin yliopistolla on oikeus pitää yhtä apteekkia Helsingissä (sekä sivuapteekkeja) ja Itä-Suomen yliopistolla yhtä apteekkia Kuopiossa."
  },
  {
    id: "t1_20",
    tier: 1,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Mikä on tuotevirhe (laatuun liittyvä poikkeama) lääkevalmisteessa?",
    options: [
      "Lääkkeen korkea hinta apteekissa",
      "Valmisteen laatuun, pakkaukseen tai merkintöihin liittyvä poikkeama, joka voi vaarantaa turvallisuuden",
      "Lääkkeen normaali tunnettu haittavaikutus",
      "Lääkkeen tilapäinen loppuminen yksittäisestä apteekista"
    ],
    correct: 1,
    explanation: "Tuotevirhe on esimerkiksi valmistusvirhe, väärä pakkausmerkintä tai vierasaine lääkkeessä. Vakavissa tuotevirheissä erä vedetään pois markkinoilta."
  },

  // ============================================================================
  // TIER 2: KYSYMYKSET 6–10 (2 000 € – 32 000 €) - Asiantuntijataso (20 kysymystä)
  // ============================================================================
  {
    id: "t2_1",
    tier: 2,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mikä taho tekee muodollisen, juridisesti sitovan päätöksen keskitetyn menettelyn (Centralised Procedure, CP) myyntiluvasta EU:ssa?",
    options: [
      "Euroopan lääkeviraston (EMA) pääjohtaja",
      "Euroopan komissio",
      "Lääkevalmistekomitea (CHMP)",
      "Viitejäsenvaltion (RMS) kansallinen viranomainen"
    ],
    correct: 1,
    explanation: "EMA:n lääkevalmistekomitea (CHMP) laatii tieteellisen lausunnon, mutta varsinaisen juridisesti sitovan myyntilupapäätöksen tekee aina Euroopan komissio."
  },
  {
    id: "t2_2",
    tier: 2,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mitä tarkoittaa tunnustamismenettely (MRP, Mutual Recognition Procedure) myyntiluvan hakemisessa?",
    options: [
      "Myyntilupaa haetaan samanaikaisesti maihin, joissa lääkkeellä ei ole vielä yhtään myyntilupaa",
      "Yhdessä EU-maassa jo myönnetty kansallinen myyntilupa laajennetaan tunnustettavaksi muissa EU/ETA-maissa",
      "FDA:n myöntämä myyntilupa hyväksytään suoraan Suomessa ilman arviointia",
      "Sairaala-apteekki tunnustaa toisen sairaalan valmistaman ex tempore -lääkkeen"
    ],
    correct: 1,
    explanation: "Tunnustamismenettelyssä (MRP) lääkkeellä on jo kansallinen myyntilupa yhdessä EU-maassa (viitejäsenvaltio, RMS), jonka arvioinnin pohjalta muut osallistuvat maat (CMS) tunnustavat myyntiluvan."
  },
  {
    id: "t2_3",
    tier: 2,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Kuinka kauan uusi myyntilupa on ensi vaiheessa voimassa ennen kuin sille on haettava uudistamista (renewal)?",
    options: [
      "2 vuotta",
      "3 vuotta",
      "5 vuotta",
      "10 vuotta"
    ],
    correct: 2,
    explanation: "Myyntilupa on aluksi voimassa 5 vuotta. Kun myyntilupa on kerran uudistettu hyöty-haittatasapainon uudelleenarvioinnin jälkeen, se on pääsääntöisesti voimassa toistaiseksi."
  },
  {
    id: "t2_4",
    tier: 2,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Millä perusteella Fimea voi myöntää erityisluvan (Lääkelaki 21 f §) myyntiluvattomalle lääkevalmisteelle?",
    options: [
      "Kun myyntiluvallinen valmiste on kalliimpi kuin myyntiluvaton valmiste",
      "Erityisistä sairaanhoidollisista syistä yksittäistapauksessa, kun muuta tehokasta hoitoa ei ole käytettävissä",
      "Aina kun potilas itse pyytää ulkomaista valmistetta apteekissa",
      "Kun lääketehdas haluaa testata markkinoita ennen myyntilupahakemusta"
    ],
    correct: 1,
    explanation: "Erityislupa voidaan myöntää erityisistä sairaanhoidollisista syistä yksittäisen potilaan tai eläimen hoitoon (tai laitoskohtaisesti), jos myyntiluvallista sopivaa valmistetta ei ole saatavilla."
  },
  {
    id: "t2_5",
    tier: 2,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Minkä ikäisten potilaiden lääkehoitoa koskee Fimean ylläpitämä Lääke75+-tietokanta?",
    options: [
      "Yli 65-vuotiaiden",
      "75 vuotta täyttäneiden iäkkäiden henkilöiden",
      "Vain pitkäaikaisessa laitoshoidossa olevien",
      "Vähintään 75 eri lääkeainetta käyttäneiden"
    ],
    correct: 1,
    explanation: "Fimean Lääke75+-tietokanta sisältää luokittelun (A–D) ja suositukset lähes 500 lääkeaineen tai niiden yhdistelmien käytöstä 75 vuotta täyttäneillä iäkkäillä."
  },
  {
    id: "t2_6",
    tier: 2,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Mikä EMA:n tieteellinen komitea vastaa ihmisille tarkoitettujen lääkkeiden turvallisuusriskien arvioinnista ja seurannasta?",
    options: [
      "COMP (Harvinaislääkekomitea)",
      "PRAC (Lääketurvallisuuden riskinarviointikomitea)",
      "PDCO (Lastenlääkekomitea)",
      "CAT (Pitkälle kehitettyjen terapioiden komitea)"
    ],
    correct: 1,
    explanation: "PRAC (Pharmacovigilance Risk Assessment Committee) on EMA:n komitea, joka vastaa ihmisille tarkoitettujen lääkkeiden riskien arvioinnista ja seurannasta."
  },
  {
    id: "t2_7",
    tier: 2,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Mitä lyhenne PSUR (tai PBRER) tarkoittaa lääketurvatoiminnassa?",
    options: [
      "Määräaikainen turvallisuuskatsaus (Periodic Safety Update Report)",
      "Potilaan suostumuslomake (Patient Safety Understanding Record)",
      "Alustava myyntilupahakemus (Preliminary Submission Under Review)",
      "Farmaseuttinen säilyvyystutkimus (Pharmaceutical Stability Update Report)"
    ],
    correct: 0,
    explanation: "PSUR (Periodic Safety Update Report) eli määräaikainen turvallisuuskatsaus on myyntiluvan haltijan säännöllisesti toimittama arvio lääkkeen hyöty-haittatasapainosta."
  },
  {
    id: "t2_8",
    tier: 2,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Mikä on EU:n kliinisten lääketutkimusten asetuksen (EU 536/2014) mukainen keskitetty tietojärjestelmä ja portaali?",
    options: [
      "EudraVigilance",
      "CTIS (Clinical Trials Information System)",
      "SPOR / IRIS",
      "EUDAMED"
    ],
    correct: 1,
    explanation: "CTIS (Clinical Trials Information System) on EU-asetuksen 536/2014 mukainen yhteinen portaali ja tietokanta, jonka kautta kaikki kliiniset lääketutkimushakemukset EU/ETA-alueella jätetään ja arvioidaan."
  },
  {
    id: "t2_9",
    tier: 2,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Kenen tehtävänä lääketehtaassa on varmistaa ja vapauttaa (sertifioida) jokainen lääke-erä ennen sen laskemista myyntiin EU/ETA-alueella?",
    options: [
      "Vastaavan johtajan (CEO)",
      "Kelpoisuusehdot täyttävän henkilön (QP, Qualified Person)",
      "Lääketurvasta vastaavan henkilön (QPPV)",
      "Fimean GMP-tarkastajan"
    ],
    correct: 1,
    explanation: "GMP-vaatimusten ja lääkelain mukaan jokaisen lääke-erän vapauttaa kelpoisuusehdot täyttävä henkilö (Qualified Person, QP), joka varmistaa erän olevan myyntiluvan ja GMP:n mukainen."
  },
  {
    id: "t2_10",
    tier: 2,
    category: "Lääkinnälliset laitteet & HTA",
    question: "Mikä Fimean koordinoima kansallinen verkosto arvioi uusien sairaalalääkkeiden hoidollista ja taloudellista arvoa (HTA)?",
    options: [
      "Sairaalalääkkeiden HTA-arviointitoiminta (ja kansallinen FINCCHTA-yhteistyö)",
      "Kansallinen rokotusasiantuntijaryhmä (KRAR)",
      "Käypä hoito -toimitus",
      "Lääkkeiden hintalautakunnan sairaalaosasto"
    ],
    correct: 0,
    explanation: "Fimea vastaa Suomessa uusien sairaalalääkkeiden hoidollisen ja taloudellisen arvon (HTA) arvioinnista, jota hyödynnetään mm. terveydenhuollon palveluvalikoimaneuvoston (PALKO) suosituksissa ja hankinnoissa."
  },
  {
    id: "t2_11",
    tier: 2,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mille seuraavista lääkevalmisteista keskitetty myyntilupamenettely (CP) on EU-lainsäädännön mukaan pakollinen?",
    options: [
      "Kaikille uusille kipulääkkeille",
      "Bioteknologisesti valmistetuille lääkkeille, harvinaislääkkeille ja syöpälääkkeille",
      "Kaikille rinnakkaisvalmisteille (geneerisille lääkkeille)",
      "Perinteisille kasvirohdosvalmisteille"
    ],
    correct: 1,
    explanation: "Asetuksen (EY) N:o 726/2004 liitteen mukaisesti keskitetty menettely on pakollinen mm. bioteknologisille valmisteille, ATMP-valmisteille, harvinaislääkkeille sekä uusille syöpä-, neurodegeneratiivisten sairauksien, autoimmuunisairauksien ja viruslääkkeille."
  },
  {
    id: "t2_12",
    tier: 2,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Mitä biologisella samankaltaisella lääkkeellä eli biosimilaarilla tarkoitetaan?",
    options: [
      "Kemiallisesti syntetisoitua rinnakkaislääkettä",
      "Biologista lääkettä, joka on kehitetty samankaltaiseksi ja vertailukelpoiseksi alkuperäisen biologisen viitevalmisteen kanssa",
      "Luonnonmukaisesti viljeltyä kasvirohdosvalmistetta",
      "Solu- ja geeniterapiavalmistetta"
    ],
    correct: 1,
    explanation: "Biosimilaari on biologinen lääke, joka sisältää uutta erää/versiota alkuperäisen biologisen viitevalmisteen vaikuttavasta aineesta ja jonka teho, turvallisuus ja laatu on osoitettu vertailukelpoisiksi laajoissa tutkimuksissa."
  },
  {
    id: "t2_13",
    tier: 2,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Miten apteekkien lääkevaihto (geneerinen substituutio) toimii Suomessa?",
    options: [
      "Apteekki saa vaihtaa minkä tahansa lääkkeen mihin tahansa saman terapiaryhmän lääkkeeseen",
      "Apteekki vaihtaa reseptilääkkeen Fimean vahvistaman keskenään vaihtokelpoisten lääkevalmisteiden luettelon mukaiseen edullisempaan valmisteeseen",
      "Lääkevaihto edellyttää aina uutta yhteydenottoa lääkäriin",
      "Lääkevaihto koskee vain sairaala-apteekkeja"
    ],
    correct: 1,
    explanation: "Fimea laatii ja vahvistaa neljä kertaa vuodessa luettelon keskenään vaihtokelpoisista lääkevalmisteista, jonka perusteella apteekit vaihtavat lääkkeen viitehintaputken edullisempaan valmisteeseen, ellei lääkäri tai ostaja kiellä vaihtoa."
  },
  {
    id: "t2_14",
    tier: 2,
    category: "Lääkinnälliset laitteet & HTA",
    question: "Mihin neljään riskiluokkaan tavanomaiset lääkinnälliset laitteet jaetaan EU:n MD-asetuksen (MDR 2017/745) mukaisesti?",
    options: [
      "Luokat A, B, C ja D",
      "Luokat I, IIa, IIb ja III",
      "Tasot 1, 2, 3 ja 4",
      "Vihreä, Keltainen, Oranssi ja Punainen"
    ],
    correct: 1,
    explanation: "MDR (2017/745) luokittelee lääkinnälliset laitteet riskin perusteella luokkiin I, IIa, IIb ja III (jossa III on korkein riskiluokka). IVDR puolestaan käyttää luokkia A, B, C ja D."
  },
  {
    id: "t2_15",
    tier: 2,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Mikä on DHPC-tiedote (Direct Healthcare Professional Communication)?",
    options: [
      "Lääkeyrityksen markkinointikirje uusista tuotteista",
      "Viranomaisen hyväksymä tärkeä lääketurvatiedote, jonka myyntiluvan haltija toimittaa suoraan terveydenhuollon ammattilaisille",
      "Apteekin tilausvahvistus lääketukkukaupalle",
      "Kliinisen tutkimuksen tutkijakokouksen muistio"
    ],
    correct: 1,
    explanation: "DHPC on myyntiluvan haltijan (Fimean/EMA:n kanssa sovitusti) jakama suora turvallisuustiedote terveydenhuollon ammattilaisille, kun lääkkeen turvallisesta ja tehokkaasta käytöstä on tarpeen viestiä nopeasti."
  },
  {
    id: "t2_16",
    tier: 2,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Mikä velvoite koskee lääketehtaita, lääketukkukauppoja ja apteekkeja Lääkelain 37 a §:n mukaisessa velvoitevarastoinnissa?",
    options: [
      "Kaikkia Suomessa myytäviä itsehoitolääkkeitä on varastoitava 2 vuoden tarvetta vastaava määrä",
      "Huoltovarmuuden turvaamiseksi tiettyjä elintärkeitä lääkeaineita ja -valmisteita on varastoitava laissa säädetty määrä (3, 6 tai 10 kk kulutusta vastaavasti)",
      "Apteekkien on säilytettävä vanhentuneita lääkkeitä 5 vuotta",
      "Fimea varastoi itse kaikki Suomen reseptilääkkeet Kuopiossa"
    ],
    correct: 1,
    explanation: "Lääkkeiden velvoitevarastointilain (979/2008) tarkoituksena on turvata lääkkeiden saatavuus poikkeusoloissa ja vakavissa häiriötilanteissa velvoittamalla lääketehtaat, maahantuojat, terveydenhuollon toimintayksiköt ja THL ylläpitämään 3, 6 tai 10 kuukauden varastoja."
  },
  {
    id: "t2_17",
    tier: 2,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mitä rinnakkaistuonnilla (Parallel Import) tarkoitetaan lääkealalla?",
    options: [
      "Lääkeväärennösten salakuljetusta EU:n ulkopuolelta",
      "Toisessa EU/ETA-maassa myyntiluvan saaneen alkuperäislääkkeen maahantuontia Suomeen rinnakkaistuontimyyntiluvalla tai -ilmoituksella",
      "Kahden eri lääketehtaan yhteistä tutkimushanketta",
      "Raaka-aineiden tuontia Intiasta ja Kiinasta"
    ],
    correct: 1,
    explanation: "Rinnakkaistuonnissa EU/ETA-alueella laillisesti kaupan oleva alkuperäisvalmiste tuodaan Suomeen virallisen jakeluketjun rinnalla hyödyntäen tavaroiden vapaata liikkuvuutta ja maiden välisiä hintaeroja. Se vaatii Fimean rinnakkaistuontimyyntiluvan (tai keskitetyissä valmisteissa EMA:n rinnakkaisjakeluilmoituksen)."
  },
  {
    id: "t2_18",
    tier: 2,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Mitkä kaksi tahoa arvioivat kliinisen lääketutkimuksen hakemuksen Suomessa ennen tutkimuksen aloittamista?",
    options: [
      "Fimea ja Valtakunnallinen lääketieteellinen tutkimuseettinen toimikunta (Tukija)",
      "Kela ja Hila",
      "Valvira ja THL",
      "Aluehallintovirasto ja yliopistosairaalan johtajaylilääkäri"
    ],
    correct: 0,
    explanation: "Suomessa kliinisen lääketutkimuksen tieteellisen ja viranomaisarvioinnin tekee Fimea ja eettisen arvioinnin tekee Valtakunnallinen lääketieteellinen tutkimuseettinen toimikunta (Tukija) yhteistyössä CTIS-järjestelmän kautta."
  },
  {
    id: "t2_19",
    tier: 2,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Mikä on EudraVigilance?",
    options: [
      "Eurooppalainen kliinisten tutkimusten potilasrekisteri",
      "Euroopan talousalueen yhteinen tietojärjestelmä ja tietokanta epäiltyjen haittavaikutusilmoitusten hallintaan ja signaalien havainnointiin",
      "Lääkeväärennösten viivakoodijärjestelmä apteekeissa",
      "Eläinlääkkeiden antibioottiresistenssin seurantamalli"
    ],
    correct: 1,
    explanation: "EudraVigilance on EMA:n ylläpitämä eurooppalainen tietoverkko ja tietokanta, johon kootaan ja jossa analysoidaan epäillyt haittavaikutusilmoitukset (ICSR) sekä kliinisistä tutkimuksista että myyntiluvallisista valmisteista."
  },
  {
    id: "t2_20",
    tier: 2,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mihin kolmeen pääluokkaan myyntiluvan muutoshakemukset (variations) luokitellaan EU:n muutosasetuksessa?",
    options: [
      "Luokka 1, Luokka 2 ja Luokka 3",
      "Tyyppi IA, Tyyppi IB ja Tyyppi II",
      "Pieni, Keskisuuri ja Kriittinen",
      "Kansallinen, Alueellinen ja Globaali"
    ],
    correct: 1,
    explanation: "Komission asetuksen (EY) N:o 1234/2008 mukaisesti myyntiluvan muutokset jaetaan pieniin tyypin IA (ja IA_IN) ilmoituksiin, pieniin tyypin IB muutoksiin sekä huomattaviin tyypin II muutoksiin (lisäksi on laajennushakemukset, Line Extensions)."
  },

  // ============================================================================
  // TIER 3: KYSYMYKSET 11–15 (64 000 € – 1 000 000 €) - Huippuregulaattoritaso (20 kysymystä)
  // ============================================================================
  {
    id: "t3_1",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Kuinka monta päivää kestää hajautetun myyntilupamenettelyn (DCP) varsinainen arviointivaihe (ilman kellonpysäytyksiä) viitejäsenvaltion (RMS) ja osallistuvien jäsenvaltioiden (CMS) välillä?",
    options: [
      "90 päivää",
      "150 päivää",
      "210 päivää",
      "365 päivää"
    ],
    correct: 2,
    explanation: "Sekä keskitetyssä menettelyssä (CP) että hajautetussa menettelyssä (DCP, Vaihe I 120 pv + Vaihe II 90 pv) lakisääteinen nettoarviointiaika on 210 päivää (ilman clock-stop-aikoja)."
  },
  {
    id: "t3_2",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mitä tarkoitetaan lääkeregulaatiossa ns. '8+2(+1)' -säännöllä?",
    options: [
      "Kliinisen tutkimuksen vaiheiden I, II ja III enimmäiskestoa vuosina",
      "Alkuperäislääkkeen 8 vuoden dokumentaatiosuojaa (data exclusivity) ja 2 vuoden markkinointisuojaa (market protection), jota voidaan pidentää +1 vuodella uudesta käyttöaiheesta",
      "Myyntiluvan uudistamisaikataulua 8, 2 ja 1 vuoden välein",
      "Apteekkiluvan hakuaikaa ja valitusaikaa hallinto-oikeudessa"
    ],
    correct: 1,
    explanation: "EU-lääkelainsäädännön 8+2+1-sääntö määrittää viitevalmisteen tietosuojan: 8 vuoden ajan geneerinen hakija ei voi viitata alkuperäislääkkeen dokumentaatioon, 10 vuoden (8+2) jälkeen geneerinen valmiste voidaan tuoda kauppaan, ja merkittävä uusi käyttöaihe voi tuoda +1 lisävuoden (yhteensä enintään 11 vuotta)."
  },
  {
    id: "t3_3",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mikä elin käsittelee tunnustamis- (MRP) ja hajautetussa menettelyssä (DCP) jäsenvaltioiden väliset erimielisyydet (mahdollisen vakavan kansanterveydellisen riskin, PSRPH) 60 päivän sovittelumenettelyssä?",
    options: [
      "Euroopan unionin tuomioistuin",
      "CMDh (Koordinaatioryhmä tunnustamis- ja hajautettua menettelyä varten, ihmisille tarkoitetut lääkkeet)",
      "PRAC",
      "Euroopan neuvosto"
    ],
    correct: 1,
    explanation: "Jos jäsenvaltiot eivät pääse MRP/DCP-menettelyssä yksimielisyyteen päivään 90/210 mennessä mahdollisen vakavan kansanterveydellisen riskin (PSRPH) vuoksi, asia siirtyy CMDh:n (Coordination Group for Mutual Recognition and Decentralised Procedures – Human) 60 päivän käsittelyyn."
  },
  {
    id: "t3_4",
    tier: 3,
    category: "Lääkinnälliset laitteet & HTA",
    question: "Milloin EU:n HTA-asetusta (EU 2021/2282 terveysteknologian arvioinnista) alettiin soveltaa ensimmäisessä vaiheessa yhteisten kliinisten arviointien (JCA) osalta?",
    options: [
      "Toukokuussa 2020 kaikkien lääkkeiden osalta",
      "Tammikuussa 2025 uusien syöpälääkkeiden ja pitkälle kehitettyjen terapioiden (ATMP) osalta",
      "Tammikuussa 2023 harvinaislääkkeiden osalta",
      "Soveltaminen alkaa vasta vuonna 2030"
    ],
    correct: 1,
    explanation: "EU:n HTA-asetusta (2021/2282) ryhdyttiin soveltamaan 12.1.2025 alkaen ensin uusiin syöpälääkkeisiin ja ATMP-valmisteisiin. Vuonna 2028 mukaan tulevat harvinaislääkkeet ja vuonna 2030 kaikki muut keskitetyn menettelyn lääkkeet."
  },
  {
    id: "t3_5",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mitä lääkeryhmää koskee EU-asetus (EY) N:o 1394/2007 ja EMA:n CAT-komitea?",
    options: [
      "Pitkälle kehitetyssä terapiassa käytettäviä lääkkeitä (ATMP: geeni-, solu- ja kudosteknologiavalmisteet)",
      "Radiofarmaseuttisia valmisteita",
      "Eläinten rokotteita ja immunologisia valmisteita",
      "Homeopaattisia ja antroposofisia valmisteita"
    ],
    correct: 0,
    explanation: "Asetus (EY) N:o 1394/2007 sääntelee pitkälle kehitetyssä terapiassa käytettäviä lääkkeitä (Advanced Therapy Medicinal Products, ATMP), ja niitä arvioi EMA:n CAT-komitea (Committee for Advanced Therapies)."
  },
  {
    id: "t3_6",
    tier: 3,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Mikä on Suomen säädöskokoelman numero nykyisin voimassa olevalle Lääkelaille?",
    options: [
      "395/1987",
      "559/1994",
      "1224/1999",
      "719/2021"
    ],
    correct: 0,
    explanation: "Suomen Lääkelaki on säädös 395/1987 (annettu 10.4.1987), jota on sittemmin päivitetty lukuisilla osittaisuudistuksilla."
  },
  {
    id: "t3_7",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mikä on esiintyvyyden (prevalenssin) enimmäisraja EU:ssa, jotta lääkkeelle voidaan myöntää harvinaislääkkeen (Orphan Drug) asema asetuksen (EY) N:o 141/2000 nojalla?",
    options: [
      "Enintään 1 sairastunut 100 000 henkilöä kohti EU:ssa",
      "Enintään 5 sairastunutta 10 000 henkilöä kohti EU:ssa",
      "Enintään 50 sairastunutta 10 000 henkilöä kohti EU:ssa",
      "Alle 500 potilasta koko Euroopan unionissa"
    ],
    correct: 1,
    explanation: "Harvinaislääkestatuksen (Orphan Designation) kriteerinä EU:ssa on, että sairaus on hengenvaarallinen tai kroonisesti invalidisoiva ja sitä sairastaa enintään 5 henkilöä 10 000:sta EU:ssa (tai lääkkeen kehittäminen ei ilman kannustimia olisi taloudellisesti kannattavaa)."
  },
  {
    id: "t3_8",
    tier: 3,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Missä määräajassa myyntiluvan haltijan on ilmoitettava vakavat epäillyt haittavaikutukset (Serious ICSR) EudraVigilance-tietokantaan?",
    options: [
      "24 tunnin kuluessa",
      "7 kalenteripäivän kuluessa",
      "15 kalenteripäivän kuluessa",
      "90 kalenteripäivän kuluessa"
    ],
    correct: 2,
    explanation: "Lääketurvalainsäädännön mukaan myyntiluvan haltijan on toimitettava vakavat epäillyt haittavaikutustapaukset (Serious ICSRs) EudraVigilanceen 15 kalenteripäivän kuluessa ja ei-vakavat (Non-serious ICSRs) 90 kalenteripäivän kuluessa tiedon saamisesta."
  },
  {
    id: "t3_9",
    tier: 3,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Missä määräajassa toimeksiantajan on ilmoitettava kuolemaan johtanut tai hengenvaarallinen odottamaton vakava haittavaikutus (SUSAR) kliinisessä lääketutkimuksessa EudraVigilanceen?",
    options: [
      "Viipymättä ja viimeistään 7 päivän kuluessa tiedon saamisesta (sekä lisätiedot 8 päivän kuluessa)",
      "Viimeistään 30 päivän kuluessa",
      "Vasta vuotuisessa turvallisuusraportissa (ASR/DSUR)",
      "60 päivän kuluessa tutkimuksen päättymisestä"
    ],
    correct: 0,
    explanation: "Kuolemaan johtaneet tai hengenvaaralliset SUSAR-tapaukset (Suspected Unexpected Serious Adverse Reactions) on raportoitava viimeistään 7 päivän kuluessa (ja täydentävät tiedot seuraavan 8 päivän kuluessa); muut SUSAR-tapaukset 15 päivän kuluessa."
  },
  {
    id: "t3_10",
    tier: 3,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Mikä EU-GMP-ohjeiston (EudraLex Volume 4) liite (Annex) koskee steriilien lääkevalmisteiden valmistusta ja uudistettiin kokonaisuudessaan vuonna 2022/2023 (mm. Contamination Control Strategy, CCS)?",
    options: [
      "Annex 1",
      "Annex 11",
      "Annex 15",
      "Annex 16"
    ],
    correct: 0,
    explanation: "EudraLex Volume 4 Annex 1 ('Manufacture of Sterile Medicinal Products') koskee steriilien lääkkeiden valmistusta. Sen merkittävä uudistus tuli pääosin voimaan 25.8.2023 ja toi keskiöön kokonaisvaltaisen kontaminaationhallintastrategian (CCS)."
  },
  {
    id: "t3_11",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mikä on direktiivin 2001/83/EY artiklan 10(3) mukainen 'hybridihakemus' (Hybrid Application)?",
    options: [
      "Yhdistelmävalmiste, jossa on sekä lääke että lääkinnällinen laite samassa pakkauksessa",
      "Hakemus, joka nojautuu viitevalmisteeseen, mutta vaatii omia prekliinisiä tai kliinisiä lisätutkimuksia esim. eri vahvuuden, lääkemuodon tai antoreitin vuoksi",
      "Yhteishakemus ihmis- ja eläinlääkkeelle",
      "Samaan aikaan FDA:han ja EMA:an jätettävä myyntilupahakemus"
    ],
    correct: 1,
    explanation: "Artiklan 10(3) mukainen hybridihakemus tulee kyseeseen, kun valmiste ei täytä tiukkaa geneerisen lääkkeen määritelmää (10(1)) tai bioekvivalenssia ei voida osoittaa pelkillä biologisilla hyväksikäytettävyystutkimuksilla (esim. muuttunut vahvuus, lääkemuoto, antoreitti tai käyttöaihe)."
  },
  {
    id: "t3_12",
    tier: 3,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Mitä sisältää myyntiluvan haltijan ylläpitämä PSMF (Pharmacovigilance System Master File)?",
    options: [
      "Yksittäisen lääkevalmisteen kemiallisen synteesiprosessin salaisen kaavan",
      "Yksityiskohtaisen kuvauksen myyntiluvan haltijan käyttämästä lääketurvajärjestelmästä yhden tai useamman lääkevalmisteen osalta",
      "Luettelon kaikista EU:n sairaala-apteekkien ostosopimuksista",
      "Valmistuslaitoksen puhtaanapitokirjanpidon (Site Master File)"
    ],
    correct: 1,
    explanation: "PSMF (Pharmacovigilance System Master File) on yksityiskohtainen kuvaus myyntiluvan haltijan lääketurvajärjestelmästä (mukaan lukien QPPV, organisaatio, tietolähteet, prosessit ja laatu). Sitä ei liitetä myyntilupahakemukseen (sinne tulee vain PSMF-yhteenveto), mutta se on toimitettava viranomaiselle 7 päivän kuluessa pyynnöstä."
  },
  {
    id: "t3_13",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mitä kannustetta uusi lääkevalmiste saa, kun sille on toteutettu hyväksytyn lastenlääkesuunnitelman (PIP, Paediatric Investigation Plan) mukaiset tutkimukset?",
    options: [
      "Vapautuksen kaikista EMA:n vuosimaksuista 10 vuodeksi",
      "6 kuukauden pidennyksen lisäsuojatodistuksen (SPC, Supplementary Protection Certificate) voimassaoloaikaan",
      "Suoran Kela-korvattavuuden kaikissa EU-jäsenmaissa",
      "5 vuoden lisäyksen 8+2-dokumentaatiosuojaan"
    ],
    correct: 1,
    explanation: "Lastenlääkeasetuksen (EY) N:o 1901/2006 mukaisesti hyväksytyn PIP-suunnitelman mukaisesti tehtyjen tutkimusten palkkiona on 6 kuukauden pidennys lisäsuojatodistukseen (SPC), tai harvinaislääkkeillä 2 lisävuotta markkinayksinoikeuteen (10 -> 12 vuotta)."
  },
  {
    id: "t3_14",
    tier: 3,
    category: "Lääkinnälliset laitteet & HTA",
    question: "Mikä on EUDAMED?",
    options: [
      "Euroopan komission kehittämä lääkinnällisten laitteiden ja IVD-laitteiden eurooppalainen tietokanta",
      "Fimean sisäinen asianhallintajärjestelmä",
      "Eläinlääkkeiden jäämävalvontarekisteri",
      "Eurooppalainen huumausaineiden seurantakeskus"
    ],
    correct: 0,
    explanation: "EUDAMED (European Database on Medical Devices) on MDR- ja IVDR-asetusten mukainen EU:n tietokanta, joka sisältää 6 moduulia: toimijarekisteröinnin, UDI/laiterekisteröinnin, ilmoitetut laitokset ja sertifikaatit, kliiniset tutkimukset, vaaratilanteet/valvonnan sekä markkinavalvonnan."
  },
  {
    id: "t3_15",
    tier: 3,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Miten biologisen lääkkeen apteekkivaihto (substituutio) otettiin Suomessa käyttöön vuosina 2024–2025?",
    options: [
      "Kaikki biologiset lääkkeet tulivat kerralla vaihdon piiriin 1.1.2024 myös alle 18-vuotiailla",
      "Vaiheittain alkaen enoksapariinivalmisteista (4/2024), laajentuen muihin biologisiin lääkkeisiin (pois lukien insuliinit) 1.1.2025 ja insuliineihin vaiheittain 2025–2026, koskien vain täysi-ikäisiä (18 v täyttäneitä)",
      "Vain sairaala-apteekeissa ilman potilaan suostumusta",
      "Biologisten lääkkeiden apteekkivaihto on edelleen kokonaan kielletty Suomessa"
    ],
    correct: 1,
    explanation: "Lääkelain muutoksella biologisten lääkkeiden apteekkivaihto käynnistyi vaiheittain: 1.4.2024 enoksapariinivalmisteet, 1.1.2025 muut biologiset lääkkeet kuin insuliinit, 1.4.2025 glargin- ja degludekinsuliinit ja 1.1.2026 muut pitkävaikutteiset insuliinit. Vaihto ei koske alle 18-vuotiaita eikä lyhytvaikutteisia insuliineja."
  },
  {
    id: "t3_16",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mikä on ehdollisen myyntiluvan (Conditional Marketing Authorisation, CMA) voimassaoloaika ennen kuin se on uudistettava vuosittain?",
    options: [
      "6 kuukautta",
      "1 vuosi",
      "2 vuotta",
      "3 vuotta"
    ],
    correct: 1,
    explanation: "Ehdollinen myyntilupa (CMA) voidaan myöntää täyttämättömään lääketieteelliseen tarpeeseen tavanomaista suppeammalla kliinisellä datalla, jos välitön saatavuus ylittää riskin. CMA on voimassa 1 vuoden kerrallaan ja uudistetaan vuosittain, kunnes erityisvelvoitteet (SOB) on täytetty ja se voidaan muuttaa tavanomaiseksi 5 vuoden myyntiluvaksi."
  },
  {
    id: "t3_17",
    tier: 3,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Mitä EudraLex Volume 4 Annex 16 sääntelee?",
    options: [
      "Kelpoisuusehdot täyttävän henkilön (QP) suorittamaa sertifiointia ja erän vapauttamista (Certification by a Qualified Person and Batch Release)",
      "Tietokoneistettuja järjestelmiä (Computerised Systems)",
      "Kvalifiointia ja validointia (Qualification and Validation)",
      "Eläinlääkkeiden valmistusta"
    ],
    correct: 0,
    explanation: "EudraLex Volume 4 Annex 16 määrittelee yksityiskohtaisesti kelpoisuusehdot täyttävän henkilön (QP) vastuut lääke-erän sertifioinnissa ja vapauttamisessa EU/ETA-markkinoille."
  },
  {
    id: "t3_18",
    tier: 3,
    category: "Lääkeväärennökset & Turvaominaisuudet",
    question: "Minkä EU-säädöksen nojalla reseptilääkepakkauksissa on helmikuusta 2019 lähtien pitänyt olla yksilöllinen tunniste (2D-koodi) ja peukaloinnin paljastava mekanismi?",
    options: [
      "Lääkeväärennösdirektiivin (2011/62/EU) ja komission delegoidun asetuksen (EU) 2016/161 nojalla",
      "Kyberturvallisuusdirektiivin (NIS2) nojalla",
      "Tietosuoja-asetuksen (GDPR) nojalla",
      "Kemikaaliasetuksen (REACH) nojalla"
    ],
    correct: 0,
    explanation: "Komission delegoitu asetus (EU) 2016/161 (joka täydentää lääkeväärennösdirektiiviä 2011/62/EU) tuli sovellettavaksi 9.2.2019. Suomessa varmennusjärjestelmää hallinnoi FiMVO (Suomen Lääkevarmennus Oy) ja sitä valvoo Fimea."
  },
  {
    id: "t3_19",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mitä tarkoittaa direktiivin 2001/83/EY artiklan 10a mukainen 'Well-established use' (WEU) -myyntilupahakemus?",
    options: [
      "Hakemusta, jossa teho ja turvallisuus osoitetaan tieteellisellä kirjallisuudella, kun vaikuttavalla aineella on ollut vakiintunut lääkinnällinen käyttö EU:ssa vähintään 10 vuoden ajan",
      "Hakemusta, jossa viitataan toisen yrityksen myyntilupaan sen kirjallisella suostumuksella (Informed Consent)",
      "Hakemusta perinteiselle kasvirohdosvalmisteelle 30 vuoden käytön perusteella",
      "Poikkeuslupaa pandemiatilanteessa"
    ],
    correct: 0,
    explanation: "Artiklan 10a mukaisessa 'vakiintuneeseen lääkinnälliseen käyttöön' (Well-established medicinal use, WEU) perustuvassa hakemuksessa hakijan ei tarvitse toimittaa omia prekliinisiä ja kliinisiä tutkimustuloksia, vaan ne korvataan kattavalla tieteellisellä kirjallisuudella, jos aine on ollut vakiintuneessa käytössä EU:ssa vähintään 10 vuotta."
  },
  {
    id: "t3_20",
    tier: 3,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Miten apteekkivero uudistettiin Suomessa 1.1.2026 voimaan tulleessa apteekkitalouden kokonaisuudistuksessa?",
    options: [
      "Apteekkivero poistettiin kokonaan kaikilta apteekeilta",
      "Apteekkiveron peruste muuttui liikevaihdosta lääkemyynnin voittomarginaaliin (myyntikatteeseen)",
      "Apteekkivero muutettiin kiinteäksi 50 000 euron vuosimaksuksi",
      "Apteekkivero siirrettiin lääketehtaiden maksettavaksi"
    ],
    correct: 1,
    explanation: "Vuoden 2026 alussa voimaan tulleessa apteekkitalouden uudistuksessa apteekkiveron määräytymisperuste muutettiin liikevaihdosta lääkemyynnin voittomarginaaliin (myyntikatteeseen), jotta vero kohdistuisi paremmin apteekin tosiasialliseen taloudelliseen kantokykyyn."
  }
];
