# Haluatko regulaatiomiljonääriksi? (Fimea & Lääkevalvonta)

TV-visailun (*Haluatko miljonääriksi?*) säännöillä toimiva suomenkielinen verkossa julkaistava tietovisapeli, jonka kysymykset käsittelevät **Fimean** toimintaa sekä suomalaista ja eurooppalaista lääke- ja laitevalvontaa.

## ✨ Ominaisuudet

- **Virallinen TV-formaatin rakenne:**
  - **15 kysymysporrasta** (`100 €` → `1 000 000 €`) kolmessa nousevassa vaikeustasossa.
  - **Kaksi kynnysrahaa (turvatasoa):** Kysymys 5 (`1 000 €`) ja Kysymys 10 (`32 000 €`).
  - **Lukitaanko vastaus? -jännitysmekaniikka** sekä mahdollisuus **ottaa rahat ja lopettaa** (*Walk Away*) ennen vastauksen lukitsemista.
  - **3 klassista oljenkortta:**
    1. `50:50` (Poistaa kaksi väärää vastausvaihtoehtoa)
    2. `Kysy yleisöltä` (Studioyleisön pylväskaavioäänestys)
    3. `Kilauta kollegalle` (Puhelu Fimean tai EU-verkoston asiantuntijalle)
- **90 asiantuntijatason kysymystä 5 eri osa-alueelta:**
  1. *Fimea & Kansallinen lainsäädäntö* (Lääkelaki 395/1987, apteekkiluvat, sivuapteekit, koneellinen annosjakelu, lääkevaihto, Lääke75+, riskilääkeluokitus, erityisluvat, saatavuushäiriöt, velvoitevarastointi, lääkemarkkinoinnin valvonta, Sic!-lehti)
  2. *Myyntiluvat & EU-menettelyt* (CP, MRP, DCP, CHMP, CMDh, PRIME & Accelerated Assessment, Sunset Clause, 8+2+1-dokumentaatiosuoja, 10(1)/10(3)/10a/10c-hakemukset, ASMF & CEP/EDQM, EU-M4all, harvinaislääkkeet, PIP, muutoshakemukset IA/IB/II)
  3. *Lääketurva (Pharmacovigilance)* (PRAC, EudraVigilance, ICSR 15/90 pv, PSUR, EURD & PSUSA, RMP, PASS Category 1–3, aRMM, PSMF, EU-QPPV, Art. 31 vs. 107i referral, DHPC, lisäseuranta ▼, tuotevirheet)
  4. *Kliiniset tutkimukset & GMP/GDP* (CTIS Osa I & II, EU 536/2014, TMF 25 v arkistointi, Tukija, SUSAR-raportointi, QP & Annex 16, IMP Annex 13, steriilivalmistus Annex 1, kvalifiointi Annex 15 DQ/IQ/OQ/PQ, ALCOA+, GDP & RP)
  5. *Lääkinnälliset laitteet & HTA* (MDR 2017/745, Art. 117 yhdistelmävalmisteet & NBOp, Luokka Is/Im/Ir, Art. 5(5) in-house-valmistus, PRRC Art. 15, IVDR & Companion Diagnostics CDx, CE-merkintä, EUDAMED, sairaalalääkkeiden HTA, EU:n HTA-asetus 2021/2282 & PICO)
- **Regulaatiofakta-tietoiskut:** Jokaisen lukitun vastauksen jälkeen näytetään perusteltu selitys pykälineen ja käytäntöineen.
- **Kysymyspankki & Oppimistila:** Kaikkia 90 kysymystä ja selitystä voi selata ja hakea hakusanoilla yläpalkin *Kysymyspankki*-painikkeesta.
- **Sisäänrakennettu Web Audio -äänisyntetisaattori:** Ei ulkoisia äänitiedostoriippuvuuksia.

---

## 🚀 Pelaaminen paikallisesti

Koska sovellus on puhdas staattinen verkkosovellus (HTML + CSS + JS ilman ulkoisia palvelinriippuvuuksia), voit:

1. **Avata suoraan selaimessa:** Tuplaklikkaa `index.html`-tiedostoa.
2. **Tai käynnistää paikallisen kehityspalvelimen:**
   ```powershell
   python -m http.server 8080
   ```
   Avaa sen jälkeen selaimessa `http://localhost:8080`.

---

## 🌐 Julkaiseminen verkossa (Web Publishing)

Voit julkaista pelin ilmaiseksi julkiseen verkkoon muutamassa kymmenessä sekunnissa millä tahansa seuraavista tavoista:

### Vaihtoehto A: Netlify Drop (Nopein – ei vaadi edes komentoriviä)
1. Mene osoitteeseen [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Raahaa tämä `regulaatiopeli`-kansio selaimen pudotusalueelle.
3. Sivusto on välittömästi julkinen ja saat jaettavan `https://...netlify.app`-linkin!

### Vaihtoehto B: GitHub Pages
1. Luo uusi GitHub-repositorio ja puske tiedostot (`index.html`, `styles.css`, `questions.js`, `audio.js`, `app.js`, `README.md`) sinne:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Haluatko regulaatiomiljonääriksi?"
   git branch -M main
   git remote add origin https://github.com/<käyttäjänimi>/<repo>.git
   git push -u origin main
   ```
2. Avaa GitHubissa **Settings → Pages**, valitse **Source: Deploy from a branch (`main` / `/root`)** ja tallenna.
3. Peli julkaistaan osoitteeseen `https://<käyttäjänimi>.github.io/<repo>/`.

### Vaihtoehto C: Vercel
1. Aja kansiossa `npx vercel` tai yhdistä GitHub-repositorio [Vercelissä](https://vercel.com).
