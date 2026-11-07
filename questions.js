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
  {
    id: "t2_21",
    tier: 2,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Kuinka monta kuukautta etukäteen myyntiluvan haltijan on Lääkelain 27 §:n mukaan ilmoitettava Fimealle lääkevalmisteen kaupan pitämisen tilapäisestä tai pysyvästä keskeytyksestä (saatavuushäiriöstä)?",
    options: [
      "Vähintään 2 viikkoa etukäteen",
      "Vähintään 2 kuukautta etukäteen, ellei kyseessä ole poikkeuksellinen olosuhde",
      "Vähintään 6 kuukautta etukäteen",
      "Ilmoitus tehdään vasta kun varasto on kokonaan loppunut"
    ],
    correct: 1,
    explanation: "Lääkelain 27 §:n mukaan myyntiluvan haltijan on ilmoitettava Fimealle valmisteen kaupan pitämisen tilapäisestä tai pysyvästä keskeytyksestä vähintään kaksi kuukautta ennen keskeytystä, jollei erityisistä syistä muuta johdu."
  },
  {
    id: "t2_22",
    tier: 2,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mitä tarkoittaa lääkevalmisteen myyntiluvan ns. 'Sunset Clause' -sääntö (Lääkelaki 29 § / Direktiivi 2001/83/EY art. 24)?",
    options: [
      "Myyntilupa päättyy automaattisesti, kun vaikuttavan aineen patentti umpeutuu",
      "Myyntilupa raukeaa, jos valmistetta ei ole tuotu kauppaan 3 vuoden kuluessa luvan myöntämisestä tai jos kaupan pitäminen on ollut keskeytyneenä yhtäjaksoisesti 3 vuotta",
      "Lääkkeen hintaa on alennettava 50 % viiden vuoden kuluttua myyntiluvasta",
      "Vanhentuneet lääkkeet on hävitettävä ennen auringonlaskua"
    ],
    correct: 1,
    explanation: "Sunset Clause -säännön mukaan myyntilupa raukeaa, jos valmistetta ei tuoda tosiasiallisesti kauppaan kolmen vuoden kuluessa myyntiluvan myöntämisestä tai jos sen kaupan pitäminen on ollut yhtäjaksoisesti keskeytyneenä kolmen vuoden ajan (Fimea voi myöntää poikkeuksen kansanterveydellisistä syistä)."
  },
  {
    id: "t2_23",
    tier: 2,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Mitä tarkoitetaan lyhenteellä aRMM (additional Risk Minimisation Measures) lääketurvatoiminnassa?",
    options: [
      "Vain valmisteyhteenvedon ja pakkausselosteen normaalia päivittämistä",
      "Rutiininomaisten toimien lisäksi vaadittavia lisäriskienminimointitoimia, kuten terveydenhuollon koulutusmateriaaleja, potilaskortteja tai raskaudenehkäisyohjelmia",
      "Lääketehtaan vuotuista tilinpäätöstarkastusta",
      "Automaattista haittavaikutusten koneoppimisalgoritmia"
    ],
    correct: 1,
    explanation: "Kun rutiininomaiset riskienminimointitoimet (SmPC, PL, pakkauskoko, reseptistatus) eivät riitä, RMP:ssä määrätään lisätoimenpiteitä (aRMM), kuten koulutusmateriaaleja tai potilaskortteja, joiden kansallisen sisällön ja jakelusuunnitelman Fimea hyväksyy ennen käyttöönottoa."
  },
  {
    id: "t2_24",
    tier: 2,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Miten CTIS-järjestelmän kautta jätettävä kliinisen lääketutkimuksen hakemus jakautuu EU-asetuksen 536/2014 mukaisesti?",
    options: [
      "Prekliiniseen osaan ja kaupalliseen osaan",
      "Osaan I (yhteinen tieteellinen ja valmisteeseen liittyvä arviointi, jota johtaa raportoiva jäsenvaltio RMS) ja Osaan II (kansallinen ja eettinen arviointi kussakin osallistuvassa jäsenvaltiossa)",
      "Aikuisten osioon ja pediatriseen osioon",
      "EMA-osioon ja komissio-osioon"
    ],
    correct: 1,
    explanation: "Kliinisen lääketutkimuksen arviointiraportti koostuu Osasta I (yhteinen tieteellis-tekninen arviointi kaikille jäsenmaille RMS-maan johdolla) ja Osasta II (kunkin jäsenvaltion kansalliset näkökohdat, kuten tietoon perustuva suostumus, tutkittavien rekrytointi ja tietosuoja)."
  },
  {
    id: "t2_25",
    tier: 2,
    category: "Lääkinnälliset laitteet & HTA",
    question: "Milloin luokan I lääkinnällinen laite vaatii EU:n MD-asetuksen (MDR 2017/745) mukaan ilmoitetun laitoksen (Notified Body) osallistumisen vaatimustenmukaisuuden arviointiin?",
    options: [
      "Ei koskaan; kaikki luokan I laitteet ovat aina puhtaasti valmistajan itsesertifioimia",
      "Kun laite toimitetaan steriilinä (Is), siinä on mittaustoiminto (Im) tai kyseessä on uudelleenkäytettävä kirurginen instrumentti (Ir)",
      "Aina kun laitetta myydään useammassa kuin yhdessä EU-maassa",
      "Vain silloin, kun laite käyttää verkkovirtaa"
    ],
    correct: 1,
    explanation: "Tavalliset luokan I laitteet ovat valmistajan itsesertifioimia, mutta alaluokissa Is (steriili), Im (mittaustoiminto) ja Ir (uudelleenkäytettävät kirurgiset instrumentit) tarvitaan ilmoitetun laitoksen sertifiointi kyseisen erityisominaisuuden (steriiliys, mittaus tai uudelleenkäsittely) osalta."
  },
  {
    id: "t2_26",
    tier: 2,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Kuinka monta sivuapteekkia yksityisellä apteekkarilla ja vastaavasti Helsingin yliopiston apteekilla voi Lääkelain 52 §:n mukaan enintään olla?",
    options: [
      "Yksityisellä apteekkarilla enintään 1 ja Helsingin yliopistolla enintään 5",
      "Yksityisellä apteekkarilla enintään 3 ja Helsingin yliopistolla enintään 16",
      "Yksityisellä apteekkarilla enintään 5 ja Helsingin yliopistolla rajoittamaton määrä",
      "Sivuapteekkien määrää ei ole rajoitettu laissa"
    ],
    correct: 1,
    explanation: "Lääkelain 52 §:n mukaan Fimea voi antaa apteekkarille luvan enintään kolmen sivuapteekin pitämiseen. Helsingin yliopisto voi puolestaan pitää Fimean kussakin tapauksessa antamalla luvalla enintään 16 sivuapteekkia."
  },
  {
    id: "t2_27",
    tier: 2,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mitä tarkoittaa EMA:n PRIME-ohjelma (PRIority MEdicines)?",
    options: [
      "Järjestelmää, jolla myönnetään alennuksia rinnakkaislääkkeiden myyntilupamaksuista",
      "Varhaisen vaiheen tehostettua tieteellistä ja regulatorista tukea lääkkeille, jotka kohdistuvat täyttämättömään lääketieteelliseen tarpeeseen (unmet medical need)",
      "Apteekkien kanta-asiakasohjelmaa",
      "Vain eläinlääkkeille tarkoitettua pikarekisteröintiä"
    ],
    correct: 1,
    explanation: "EMA:n PRIME-järjestelmä tarjoaa varhaista ja ennakoivaa tieteellistä neuvontaa lupaaville kehitteillä oleville lääkkeille, jotka tuovat merkittävän hoidollisen edun täyttämättömään lääketieteelliseen tarpeeseen, ja valmistelee niitä nopeutettuun arviointiin (Accelerated Assessment)."
  },
  {
    id: "t2_28",
    tier: 2,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Mikä on lääketukkukaupan vastuunalaisen johtajan (Responsible Person, RP) lakisääteinen kelpoisuusvaatimus Suomessa Lääkelain 33 §:n mukaan?",
    options: [
      "Kauppatieteiden maisterin tutkinto",
      "Laillistetun proviisorin tai laillistetun farmaseutin pätevyys (tai aiemman lain siirtymäsäännöksen mukainen kelpoisuus)",
      "Logistiikkainsinöörin tutkinto",
      "Mikä tahansa korkeakoulututkinto"
    ],
    correct: 1,
    explanation: "Lääketukkukaupalla on oltava vastuunalainen johtaja (RP), joka vastaa GDP-vaatimusten noudattamisesta ja lääkkeiden asianmukaisesta käsittelystä; Suomessa tehtävään vaaditaan farmaseuttinen tutkinto (proviisori tai farmaseutti)."
  },
  {
    id: "t2_29",
    tier: 2,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Mitä tarkoitetaan PASS-tutkimuksella (Post-Authorisation Safety Study)?",
    options: [
      "Ennen myyntilupaa tehtävää faasin I turvallisuustutkimusta terveillä vapaaehtoisilla",
      "Myyntiluvan myöntämisen jälkeen suoritettavaa tutkimusta, jonka tarkoituksena on tunnistaa, luonnehtia tai määrittää lääkkeen turvallisuusvaara tai arvioida riskienhallintatoimien tehokkuutta",
      "Lääke-erän mikrobiologista steriiliystestiä",
      "Lääkkeen pakkausselosteen luettavuustestausta (User Testing)"
    ],
    correct: 1,
    explanation: "PASS (Post-Authorisation Safety Study) on myyntiluvan saaneella lääkkeellä tehtävä kliininen tai havainnoiva (non-interventional) tutkimus turvallisuusprofiilin täsmentämiseksi tai riskienminimointitoimenpiteiden vaikuttavuuden mittaamiseksi. Se voi olla vapaaehtoinen tai viranomaisen velvoittama."
  },
  {
    id: "t2_30",
    tier: 2,
    category: "Lääkinnälliset laitteet & HTA",
    question: "Mitä lyhenne PICO tarkoittaa EU:n HTA-arvioinneissa (Joint Clinical Assessment, JCA) ja Fimean sairaalalääkearvioinneissa?",
    options: [
      "Pharmaceutical Inspection Co-operation Organisation",
      "Population (Potilasjoukko), Intervention (Arvioitava hoito), Comparator (Vertailuhoito), Outcomes (Lopputulosmuuttujat)",
      "Price, Indication, Cost, Orphan status",
      "Patient Information and Clinical Observation"
    ],
    correct: 1,
    explanation: "PICO-kehys (Population, Intervention, Comparator, Outcomes) määrittää tutkimuskysymyksen, johon terveysteknologian kliinisessä arvioinnissa (HTA/JCA) haetaan vastausta jäsenvaltioiden hoitokäytäntöjen pohjalta."
  },

  // ============================================================================
  // TIER 3: KYSYMYKSET 11–15 (64 000 € – 1 000 000 €) - Huippuregulaattoritaso (40 kysymystä)
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
  },
  {
    id: "t3_21",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Kuinka moneen päivään CHMP:n enimmäisarviointiaika lyhenee 210 päivästä, kun keskitetyn menettelyn hakemukselle myönnetään nopeutettu arviointi (Accelerated Assessment, Asetus (EY) N:o 726/2004 art. 14(9))?",
    options: [
      "90 päivään",
      "120 päivään",
      "150 päivään",
      "180 päivään"
    ],
    correct: 2,
    explanation: "Kun lääkevalmiste on kansanterveyden ja erityisesti terapeuttisen innovaation kannalta erittäin merkittävä, CHMP voi myöntää nopeutetun arvioinnin (Accelerated Assessment), jolloin arviointiaika lyhenee 210 päivästä enintään 150 päivään."
  },
  {
    id: "t3_22",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mitä edellytetään direktiivin 2001/83/EY artiklan 10c mukaisessa suostumushakemuksessa (Informed Consent Application)?",
    options: [
      "Potilasjärjestön kirjallista suostumusta kliinisen tutkimuksen julkaisemiseen",
      "Uuden hakemuksen valmisteella on täysin sama kvalitatiivinen ja kvantitatiivinen koostumus sekä lääkemuoto kuin viitevalmisteella, ja viitevalmisteen myyntiluvan haltija antaa kirjallisen suostumuksen käyttää sen täydellistä dokumentaatiota (Moduulit 3, 4 ja 5)",
      "Vain 8+2-tietosuoja-ajan päättymistä ilman bioekvivalenssitutkimuksia",
      "Euroopan komission erityislupaa harvinaissairauksiin"
    ],
    correct: 1,
    explanation: "Artiklan 10c mukaisessa Informed Consent -hakemuksessa hakijalla on alkuperäisen myyntiluvan haltijan kirjallinen suostumus viitata suoraan sen farmaseuttiseen, prekliiniseen ja kliiniseen dokumentaatioon, ja valmisteen koostumus sekä lääkemuoto ovat identtiset."
  },
  {
    id: "t3_23",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mikä on ASMF-menettelyn (Active Substance Master File) 'suljetun osan' (Restricted Part / Closed Part) keskeinen periaate?",
    options: [
      "Sitä ei toimiteta edes Fimealle tai EMA:lle, vaan sitä säilytetään pelkästään vaikuttavan aineen tehtaalla",
      "Vaikuttavan aineen valmistaja toimittaa sen suoraan viranomaiselle luottamuksellisena tietona (esim. yksityiskohtainen synteesireitti), eikä myyntiluvan hakijalla ole siihen pääsyä",
      "Se julkaistaan EPAR-arviointiraportin liitteenä kauppaantuonnin jälkeen",
      "Se korvaa kokonaan valmiin lääkevalmisteen Moduulin 3"
    ],
    correct: 1,
    explanation: "ASMF jakautuu avoimeen osaan (Applicant's Part), jonka myyntiluvan hakija saa käyttöönsä, ja suljettuun osaan (Restricted Part), jonka vaikuttavan aineen (API) valmistaja toimittaa suoraan viranomaiselle suojatakseen valmistusprosessinsa liikesalaisuuksia."
  },
  {
    id: "t3_24",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mikä organisaatio myöntää CEP-todistuksen (Certificate of Suitability to the monographs of the European Pharmacopoeia)?",
    options: [
      "EMA (Euroopan lääkevirasto Amsterdamissa)",
      "EDQM (Euroopan neuvoston alainen lääkkeiden laatuasioiden direktoratti Strasbourgissa)",
      "Euroopan komission terveyspääosasto (DG SANTE)",
      "PIC/S (Pharmaceutical Inspection Co-operation Scheme)"
    ],
    correct: 1,
    explanation: "CEP-todistuksen myöntää Strasbourgissa toimiva EDQM (European Directorate for the Quality of Medicines & HealthCare), joka toimii Euroopan neuvoston (Council of Europe) eikä EU:n alaisuudessa. CEP osoittaa, että Euroopan farmakopean monografia pystyy riittävästi kontrolloimaan aineen puhtautta."
  },
  {
    id: "t3_25",
    tier: 3,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Mitä eroa on direktiivin 2001/83/EY artiklan 31 mukaisella lausuntomenettelyllä (Referral) ja artiklan 107i mukaisella kiireellisellä unionin menettelyllä (Urgent Union Procedure)?",
    options: [
      "Artikla 31 koskee vain eläinlääkkeitä ja artikla 107i vain ihmislääkkeitä",
      "Artikla 107i käynnistyy automaattisesti, kun jäsenvaltio tai komissio harkitsee lääketurvatietojen perusteella kiireellistä toimintaa (kuten myyntiluvan peruuttamista, keskeyttämistä tai markkinoilta vedon vaatimista), ja sen käsittelee aina PRAC",
      "Artikla 31 ei voi johtaa valmisteyhteenvedon muuttamiseen",
      "Artikla 107i käsitellään aina kansallisessa tuomioistuimessa"
    ],
    correct: 1,
    explanation: "Artikla 107i (Urgent Union Procedure) on tiukasti aikataulutettu (PRAC-suositus 60 päivässä) kiireellinen menettely, joka käynnistyy vakavasta lääketurvahuolesta, kun jäsenvaltio tai komissio katsoo kiireelliset toimenpiteet (esim. myyntiluvan keskeyttäminen tai myyntikielto) välttämättömiksi."
  },
  {
    id: "t3_26",
    tier: 3,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Mikä on EURD-listan (European Union Reference Dates list) ja PSUSA-menettelyn (PSUR Single Assessment) tarkoitus?",
    options: [
      "Synkronoida samaa vaikuttavaa ainetta tai yhdistelmää sisältävien lääkkeiden PSUR-määräpäivät (Data Lock Point) ja arviointisyklit EU-tasolla yhtenäiseksi arvioinniksi",
      "Määrittää viitehintajärjestelmän hintaputket neljännesvuosittain",
      "Luetteloida EU:n ulkopuoliset kolmannet maat, joissa tehdään GMP-tarkastuksia",
      "Seurata kliinisten lääketutkimusten potilasrekrytoinnin etenemistä"
    ],
    correct: 0,
    explanation: "EURD-lista yhtenäistää samaa vaikuttavaa ainetta sisältävien valmisteiden PSUR-katsausten toimittamistiheyden ja tiedonkeruun päättymispäivät (DLP), jotta PRAC/CMDh voi suorittaa niille yhden yhteisen EU-tason PSUSA-arvioinnin."
  },
  {
    id: "t3_27",
    tier: 3,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Mihin GVP Module V:n mukaiseen luokkaan (Category 1, 2, 3 vai 4) kuuluvat RMP:n lääketurvatoimenpiteinä sellaiset PASS-tutkimukset, jotka ovat myyntiluvan nimenomaisena ehtona (Annex II condition)?",
    options: [
      "Kategoriaan 1 (ja poikkeuksellisten olosuhteiden / ehdollisen myyntiluvan erityisvelvoitteet kategoriaan 2)",
      "Kategoriaan 3",
      "Kategoriaan 4",
      "Niitä ei sisällytetä RMP:hen lainkaan"
    ],
    correct: 0,
    explanation: "GVP Module V:n mukaisesti RMP:n lisälääketurvatoimet (additional pharmacovigilance activities) jaetaan kolmeen kategoriaan: Category 1 (myyntiluvan sitova ehto, Annex II), Category 2 (erityisvelvoite ehdollisessa myyntiluvassa tai poikkeuksellisissa olosuhteissa) ja Category 3 (muut vaaditut tutkimukset, jotka eivät ole myyntiluvan ehtona)."
  },
  {
    id: "t3_28",
    tier: 3,
    category: "Lääkinnälliset laitteet & HTA",
    question: "Mitä EU:n lääkinnällisten laitteiden asetuksen (MDR 2017/745) artikla 117 edellyttää kiinteältä lääke–laite-yhdistelmävalmisteelta (integral drug-device combination, esim. esitäytetty ruisku tai inhalaattori), jota säännellään lääkkeenä?",
    options: [
      "Valmistajan on haettava laiteosalle erillinen CE-merkintä ja rekisteröitävä se EUDAMEDiin lääkinnällisenä laitteena",
      "Myyntilupahakemukseen on liitettävä ilmoitetun laitoksen antama vaatimustenmukaisuuslausunto (Notified Body Opinion, NBOp) laiteosan yleisten turvallisuus- ja suorituskykyvaatimusten (GSPR) täyttymisestä (ellei laiteosalla jo ole CE-todistusta)",
      "Valmisteelle ei tarvitse hakea lääkkeen myyntilupaa lainkaan",
      "Fimea testaa laiteosan mekaanisen kestävyyden omassa laboratoriossaan ennen myyntilupaa"
    ],
    correct: 1,
    explanation: "MDR:n artikla 117 muutti direktiivin 2001/83/EY liitettä I siten, että kiinteän lääke–laite-yhdistelmän (jossa laiteosa kuuluisi yksinään luokkaan Is/Im, IIa, IIb tai III) myyntilupahakemukseen on sisällytettävä joko ilmoitetun laitoksen EU-todistus tai ilmoitetun laitoksen lausunto (NBOp) MDR Liitteen I GSPR-vaatimusten täyttymisestä."
  },
  {
    id: "t3_29",
    tier: 3,
    category: "Lääkinnälliset laitteet & HTA",
    question: "Mikä on MDR (2017/745) ja IVDR (2017/746) artiklan 15 mukainen PRRC-henkilö?",
    options: [
      "Ilmoitetun laitoksen pääarvioija (Principal Reviewer for Regulatory Certification)",
      "Valmistajan ja valtuutetun edustajan organisaatiossa oleva säännösten noudattamisesta vastaava henkilö (Person Responsible for Regulatory Compliance)",
      "Sairaalan potilasasiamies (Patient Rights and Risk Coordinator)",
      "Euroopan komission nimeämä paneeliasiantuntija"
    ],
    correct: 1,
    explanation: "MDR/IVDR artiklan 15 mukaan jokaisella laitevalmistajalla (ja EU:n valtuutetulla edustajalla) on oltava organisaatiossaan vähintään yksi säännösten noudattamisesta vastaava henkilö (PRRC), jolla on vaadittu asiantuntemus ja joka varmistaa mm. teknisten asiakirjojen, laitteiden vapauttamisen ja vaaratilanneraportoinnin asianmukaisuuden."
  },
  {
    id: "t3_30",
    tier: 3,
    category: "Lääkinnälliset laitteet & HTA",
    question: "Miten IVD-asetus (IVDR 2017/746) luokittelee lääkehoidon valintaan liittyvät diagnostiikkakoestukset eli ns. 'Companion Diagnostics' (CDx) -laitteet?",
    options: [
      "Luokkaan A (matalin riskiluokka, itsesertifioitava)",
      "Luokkaan B",
      "Luokkaan C (ja ilmoitetun laitoksen on kuultava EMA:a tai kansallista lääkeviranomaista kuten Fimeaa osana arviointia)",
      "Luokkaan D (tarttuvien verensiirtotautien korkein riskiluokka)"
    ],
    correct: 2,
    explanation: "IVDR:n liitteen VIII säännön 3(f) mukaan lääkehoidon valintaan liittyvät diagnostiikkakoestukset (Companion Diagnostics, CDx) kuuluvat luokkaan C, ja ilmoitetun laitoksen on pyydettävä kyseisen lääkkeen arvioineelta lääkeviranomaiselta (EMA tai kansallinen viranomainen) tieteellinen lausunto laitteen soveltuvuudesta."
  },
  {
    id: "t3_31",
    tier: 3,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Mitä EudraLex Volume 4 (EU-GMP) Annex 13 sääntelee?",
    options: [
      "Tutkimuslääkkeiden (Investigational Medicinal Products, IMP) valmistusta, pakkaamista, merkintöjä, sokkouttamista ja erän vapauttamista",
      "Radiofarmaseuttisten valmisteiden valmistusta",
      "Biologisten vaikuttavien aineiden valmistusta",
      "Näytteenottoa lähtö- ja pakkausmateriaaleista"
    ],
    correct: 0,
    explanation: "EudraLex Volume 4 Annex 13 (sekä asetuksen 536/2014 nojalla annettu komission delegoitu asetus (EU) 2017/1569) koskee kliinisissä lääketutkimuksissa käytettävien tutkimuslääkkeiden (IMP) hyvää tuotantotapaa, mukaan lukien kaksivaiheinen vapautusmenettely."
  },
  {
    id: "t3_32",
    tier: 3,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Mistä sanoista muodostuu GMP- ja GCP-valvonnassa tiedon eheyttä (Data Integrity) kuvaava peruskirjainyhdistelmä ALCOA?",
    options: [
      "Attributable, Legible, Contemporaneous, Original, Accurate",
      "Authorized, Locked, Certified, Audited, Archived",
      "Automated, Validated, Controlled, Observed, Approved",
      "Analytical, Laboratory, Clinical, Operational, Assurance"
    ],
    correct: 0,
    explanation: "ALCOA-periaatteen mukaan kriittisen datan on oltava Attributable (jäljitettävissä tekijään), Legible (luettavaa), Contemporaneous (kirjattu tapahtumahetkellä), Original (alkuperäistä) ja Accurate (virheetöntä). ALCOA+ lisää tähän vielä Complete, Consistent, Enduring ja Available."
  },
  {
    id: "t3_33",
    tier: 3,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Missä oikeassa järjestyksessä laitteiden ja järjestelmien kvalifiointivaiheet etenevät EU-GMP Annex 15:n ('Qualification and Validation') mukaisesti?",
    options: [
      "PQ → OQ → IQ → DQ",
      "DQ (Design Qualification) → IQ (Installation Qualification) → OQ (Operational Qualification) → PQ (Performance Qualification)",
      "IQ → DQ → PQ → OQ",
      "OQ → IQ → DQ → PQ"
    ],
    correct: 1,
    explanation: "Annex 15:n mukainen kvalifiointiketju alkaa käyttäjävaatimuksista (URS), jota seuraavat suunnittelun kvalifiointi (DQ), tehdyn asennuksen kvalifiointi (IQ), toiminnallinen kvalifiointi (OQ) ja lopuksi suorituskyvyn kvalifiointi (PQ)."
  },
  {
    id: "t3_34",
    tier: 3,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Mitä Lääkelain 15 a § sääntelee apteekkien ja sairaala-apteekkien osalta?",
    options: [
      "Lääkkeiden koneellista annosjakelua (oikeutta harjoittaa koneellista annosjakelua Fimean luvalla tai teettää se sopimusvalmistuksena)",
      "Eläinlääkkeiden etämyyntiä ulkomaille",
      "Rokotteiden maahantuontia",
      "Huumausaineiden hävittämistä"
    ],
    correct: 0,
    explanation: "Lääkelain 15 a §:n mukaan apteekki tai sairaala-apteekki voi Fimean myöntämällä luvalla suorittaa lääkkeiden koneellista annosjakelua tai teettää sen sopimusvalmistuksena toisessa luvan saaneessa yksikössä tai lääketehtaassa."
  },
  {
    id: "t3_35",
    tier: 3,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Mikä on Lääkelain 91 a §:n pääsääntö reseptilääkkeiden (lääkemääräystä edellyttävien lääkevalmisteiden) markkinoinnista väestölle?",
    options: [
      "Reseptilääkkeitä saa mainostaa televisiossa klo 21 jälkeen",
      "Lääkemääräyksellä toimitettavien lääkevalmisteiden markkinointi väestölle on kokonaan kielletty (pois lukien viranomaisen hyväksymät rokotuskampanjat)",
      "Reseptilääkkeitä saa markkinoida kuluttajille, jos mainoksessa ei mainita hintaa",
      "Reseptilääkkeitä saa markkinoida sosiaalisessa mediassa täysi-ikäisille"
    ],
    correct: 1,
    explanation: "Lääkelain 91 a §:n (ja direktiivin 2001/83/EY) mukaan lääkemääräyksellä toimitettavia taikka huumausaineita tai psykotrooppisia aineita sisältäviä lääkevalmisteita ei saa markkinoida väestölle. Niitä saa markkinoida ainoastaan lääkkeen määräämiseen tai toimittamiseen oikeutetuille henkilöille."
  },
  {
    id: "t3_36",
    tier: 3,
    category: "Fimea & Kansallinen lainsäädäntö",
    question: "Mitä Fimean ylläpitämä kansallinen riskilääkeluokitus koskee?",
    options: [
      "Vain laittomia katukaupan huumausaineita",
      "Suuren riskin lääkkeitä (High-Alert Medications), joihin liittyy kohonnut riski aiheuttaa potilaalle vakavaa haittaa poikkeavassa tilanteessa tai lääkityspoikkeamassa",
      "Lääkkeitä, joiden saatavuus on loppumassa apteekeista",
      "Kalleimpia Kela-korvattavia biologisia lääkkeitä"
    ],
    correct: 1,
    explanation: "Fimean kansallinen riskilääkeluokitus tunnistaa keskeiset suuren riskin lääkkeet (esim. antikoagulantit, insuliinit, opioidit, solunsalpaajat ja kaliumkonsentraatit), joiden virheellinen käyttö tai annostelu voi aiheuttaa potilaalle vakavia tai kuolemaan johtavia haittoja."
  },
  {
    id: "t3_37",
    tier: 3,
    category: "Myyntiluvat & EU-menettelyt",
    question: "Mitä mahdollistaa asetuksen (EY) N:o 726/2004 artiklan 58 mukainen 'EU-M4all' -menettely?",
    options: [
      "Myyntiluvan myöntämisen kaikissa 27 EU-maassa ilman Euroopan komission päätöstä",
      "EMA:n CHMP voi yhteistyössä WHO:n ja kohdemaiden viranomaisten kanssa antaa tieteellisen lausunnon ihmislääkkeestä, joka on tarkoitettu yksinomaan EU:n ulkopuolisille markkinoille kansanterveydellisesti tärkeiden sairauksien ehkäisyyn tai hoitoon",
      "Rinnakkaislääkkeiden automaattisen hyväksymisen ilman hakemusta",
      "Kaikkien eläinlääkkeiden siirtämisen ihmislääkekäyttöön"
    ],
    correct: 1,
    explanation: "EU-M4all (entinen Article 58 procedure) mahdollistaa sen, että EMA:n CHMP arvioi yhteistyössä Maailman terveysjärjestön (WHO) kanssa korkean prioriteetin lääkkeitä ja rokotteita, jotka on tarkoitettu käytettäväksi EU:n ulkopuolella matalan ja keskitulotason maissa."
  },
  {
    id: "t3_38",
    tier: 3,
    category: "Kliiniset tutkimukset & GMP/GDP",
    question: "Kuinka kauan kliinisen lääketutkimuksen kantatiedostoa (Trial Master File, TMF) on toimeksiantajan ja tutkijan säilytettävä tutkimuksen päättymisen jälkeen EU:n kliinisten lääketutkimusten asetuksen (EU 536/2014 art. 58) mukaan?",
    options: [
      "Vähintään 5 vuotta",
      "Vähintään 10 vuotta",
      "Vähintään 15 vuotta",
      "Vähintään 25 vuotta"
    ],
    correct: 3,
    explanation: "EU-asetuksen 536/2014 artiklan 58 mukaan toimeksiantajan ja tutkijan on arkistoitava kliinisen lääketutkimuksen kantatiedoston (TMF) sisältö vähintään 25 vuoden ajaksi tutkimuksen päättymisen jälkeen (ellei muu unionin lainsäädäntö edellytä vielä pidempää aikaa, esim. ATMP-valmisteissa 30 vuotta)."
  },
  {
    id: "t3_39",
    tier: 3,
    category: "Lääketurva (Pharmacovigilance)",
    question: "Mikä on lakisääteinen sijoittautumis- ja tavoitettavuusvaatimus myyntiluvan haltijan lääketurvatoiminnasta vastaavalle kelpoisuusehdot täyttävälle henkilölle (EU-QPPV)?",
    options: [
      "QPPV voi asua missä tahansa maassa (esim. Yhdysvalloissa tai Sveitsissä), kunhan hänellä on sähköposti",
      "QPPV:n on asuttava ja toimittava EU/ETA-alueella, oltava tavoitettavissa ympäri vuorokauden (24/7) ja vastattava yhdestä lääketurvajärjestelmästä (PSMF)",
      "Jokaisella myyntiluvan haltijalla on oltava erillinen EU-QPPV jokaisessa 27 jäsenvaltiossa",
      "QPPV:n on oltava Fimean virkamies"
    ],
    correct: 1,
    explanation: "Direktiivin 2001/83/EY artiklan 104 mukaan myyntiluvan haltijalla on oltava pysyvästi ja yhtäjaksoisesti käytettävissään yksi EU-QPPV, jonka on asuttava ja toimittava EU/ETA-alueella. Lisäksi kansallinen viranomainen voi vaatia kansallisen yhteyshenkilön (LPPV) nimeämistä."
  },
  {
    id: "t3_40",
    tier: 3,
    category: "Lääkinnälliset laitteet & HTA",
    question: "Mitä tarkoittaa MDR-asetuksen (EU 2017/745) artiklan 5(5) mukainen 'in-house' -poikkeus (ns. oma laitevalmistus terveydenhuollon yksikössä)?",
    options: [
      "Terveydenhuollon toimintayksikkö voi valmistaa ja käyttää laitteita omissa tiloissaan ilman CE-merkintää tiukoin edellytyksin, jos vastaavaa potilasryhmän erityistarpeet täyttävää laitetta ei ole markkinoilla eikä laitteita luovuteta toiselle oikeushenkilölle",
      "Sairaala voi valmistaa CE-merkitsemättömiä laitteita ja myydä niitä vapaasti muille hyvinvointialueille",
      "Potilas voi tulostaa 3D-tulostimella oman sydämentahdistimensa kotona",
      "Sairaaloiden ei tarvitse noudattaa MDR:n liitteen I yleisiä turvallisuus- ja suorituskykyvaatimuksia (GSPR) lainkaan"
    ],
    correct: 0,
    explanation: "MDR:n (ja IVDR:n) artiklan 5(5) mukainen in-house-poikkeus sallii terveydenhuollon yksiköiden valmistaa ja käyttää laitteita omassa toiminnassaan tietyn potilasryhmän erityistarpeisiin, kunhan liitteen I GSPR-vaatimukset täyttyvät, markkinoilla ei ole vastaavaa CE-merkittyä laitetta, valmistus ei tapahdu teollisessa mittakaavassa eikä laitetta siirretä toiselle oikeushenkilölle."
  }
];

