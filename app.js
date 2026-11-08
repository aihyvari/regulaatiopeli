// Haluatko regulaatiomiljonääriksi? - Sovelluslogiikka

(function () {
  "use strict";

  // Virallinen 15 portaan voittopuu
  const PRIZE_LADDER = [
    { step: 1, amount: 100, label: "100 €", milestone: false, tier: 1 },
    { step: 2, amount: 200, label: "200 €", milestone: false, tier: 1 },
    { step: 3, amount: 300, label: "300 €", milestone: false, tier: 1 },
    { step: 4, amount: 500, label: "500 €", milestone: false, tier: 1 },
    { step: 5, amount: 1000, label: "1 000 €", milestone: true, tier: 1 },
    { step: 6, amount: 2000, label: "2 000 €", milestone: false, tier: 2 },
    { step: 7, amount: 4000, label: "4 000 €", milestone: false, tier: 2 },
    { step: 8, amount: 8000, label: "8 000 €", milestone: false, tier: 2 },
    { step: 9, amount: 16000, label: "16 000 €", milestone: false, tier: 2 },
    { step: 10, amount: 32000, label: "32 000 €", milestone: true, tier: 2 },
    { step: 11, amount: 64000, label: "64 000 €", milestone: false, tier: 3 },
    { step: 12, amount: 125000, label: "125 000 €", milestone: false, tier: 3 },
    { step: 13, amount: 250000, label: "250 000 €", milestone: false, tier: 3 },
    { step: 14, amount: 500000, label: "500 000 €", milestone: false, tier: 3 },
    { step: 15, amount: 1000000, label: "1 000 000 €", milestone: true, tier: 3 }
  ];

  const LETTERS = ["A", "B", "C", "D"];
  const STORAGE_KEY_SCORES = "regulaatiomiljonaari_scores_v1";

  // Asiantuntijakollegat "Kilauta kollegalle" -oljenkortta varten
  const EXPERTS_BY_CATEGORY = {
    "Fimea & Kansallinen lainsäädäntö": {
      name: "Johtava lakimies K. Korhonen (Fimea, Kuopio)",
      avatar: "⚖️"
    },
    "Myyntiluvat & EU-menettelyt": {
      name: "Myyntilupakoordinaattori M. Lindqvist (EMA / CHMP-verkosto)",
      avatar: "🇪🇺"
    },
    "Lääketurva (Pharmacovigilance)": {
      name: "Ylilääkäri S. Virtanen (Lääketurva & PRAC-delegatsiooni)",
      avatar: "🩺"
    },
    "Kliiniset tutkimukset & GMP/GDP": {
      name: "Yliproviisori T. Lahtinen (GMP/GDP- ja CTIS-valvonta)",
      avatar: "🔬"
    },
    "Lääkinnälliset laitteet & HTA": {
      name: "Erikoistutkija H. Mäkinen (Lääkinnälliset laitteet & Sairaalalääkkeiden HTA)",
      avatar: "🏥"
    }
  };

  // Pelin tila
  const state = {
    playerName: "Erityisasiantuntija",
    selectedCategory: "Kaikki aihealueet",
    deck: [],
    currentIndex: 0, // 0..14
    selectedOption: null, // 0..3 ennen lukitusta
    isLocked: false,
    eliminatedOptions: [], // 50:50 poistetut indeksit nykyisessä kysymyksessä
    lifelines: {
      fiftyFifty: false,
      audience: false,
      phone: false
    },
    lastOutcome: null // 'win', 'walk', 'wrong'
  };

  // DOM-viitteet
  const els = {
    screenStart: document.getElementById("screenStart"),
    screenGame: document.getElementById("screenGame"),
    screenEnd: document.getElementById("screenEnd"),

    playerNameInput: document.getElementById("playerNameInput"),
    categorySelect: document.getElementById("categorySelect"),
    btnStartGame: document.getElementById("btnStartGame"),
    leaderboardList: document.getElementById("leaderboardList"),
    btnClearScores: document.getElementById("btnClearScores"),

    btnHomeLogo: document.getElementById("btnHomeLogo"),
    btnRulesModal: document.getElementById("btnRulesModal"),
    btnStudyModal: document.getElementById("btnStudyModal"),
    btnSoundToggle: document.getElementById("btnSoundToggle"),
    soundIcon: document.getElementById("soundIcon"),
    soundLabel: document.getElementById("soundLabel"),

    hudQuestionNumber: document.getElementById("hudQuestionNumber"),
    hudCurrentPrize: document.getElementById("hudCurrentPrize"),
    hudSafeHaven: document.getElementById("hudSafeHaven"),
    hudCategory: document.getElementById("hudCategory"),
    btnWalkAway: document.getElementById("btnWalkAway"),
    walkAwayAmount: document.getElementById("walkAwayAmount"),

    lifeline5050: document.getElementById("lifeline5050"),
    lifelineAudience: document.getElementById("lifelineAudience"),
    lifelinePhone: document.getElementById("lifelinePhone"),
    lifelineResultPanel: document.getElementById("lifelineResultPanel"),

    hostPromptText: document.getElementById("hostPromptText"),
    questionText: document.getElementById("questionText"),
    ansBtns: [
      document.getElementById("ansBtn0"),
      document.getElementById("ansBtn1"),
      document.getElementById("ansBtn2"),
      document.getElementById("ansBtn3")
    ],
    ansTexts: [
      document.getElementById("ansText0"),
      document.getElementById("ansText1"),
      document.getElementById("ansText2"),
      document.getElementById("ansText3")
    ],

    lockConfirmBar: document.getElementById("lockConfirmBar"),
    selectedLetterLabel: document.getElementById("selectedLetterLabel"),
    btnLockAnswer: document.getElementById("btnLockAnswer"),
    btnCancelSelection: document.getElementById("btnCancelSelection"),

    explanationPanel: document.getElementById("explanationPanel"),
    explanationBadge: document.getElementById("explanationBadge"),
    explanationTitle: document.getElementById("explanationTitle"),
    explanationBody: document.getElementById("explanationBody"),
    btnNextStep: document.getElementById("btnNextStep"),

    prizeLadderAside: document.getElementById("prizeLadderAside"),
    prizeLadderList: document.getElementById("prizeLadderList"),
    btnToggleLadderMobile: document.getElementById("btnToggleLadderMobile"),
    btnCloseLadderMobile: document.getElementById("btnCloseLadderMobile"),

    endBadgeIcon: document.getElementById("endBadgeIcon"),
    endHeadline: document.getElementById("endHeadline"),
    endSubtext: document.getElementById("endSubtext"),
    chequeDate: document.getElementById("chequeDate"),
    chequePayee: document.getElementById("chequePayee"),
    chequeAmount: document.getElementById("chequeAmount"),
    endStatLevel: document.getElementById("endStatLevel"),
    endStatCategory: document.getElementById("endStatCategory"),
    endStatLifelines: document.getElementById("endStatLifelines"),
    btnPlayAgain: document.getElementById("btnPlayAgain"),
    btnShareResult: document.getElementById("btnShareResult"),
    btnBackToMenu: document.getElementById("btnBackToMenu"),
    shareFeedback: document.getElementById("shareFeedback"),

    modalRules: document.getElementById("modalRules"),
    modalStudy: document.getElementById("modalStudy"),
    studySearchInput: document.getElementById("studySearchInput"),
    studyFilterTier: document.getElementById("studyFilterTier"),
    studyQuestionsContainer: document.getElementById("studyQuestionsContainer")
  };

  // Apufunktio: taulukon sekoitus (Fisher-Yates)
  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Sekoita yksittäisen kysymyksen vastausvaihtoehdot, jotta oikea vastaus vaihtaa paikkaa
  function prepareQuestionInstance(rawQ) {
    const indexedOptions = rawQ.options.map((text, idx) => ({
      text,
      isCorrect: idx === rawQ.correct
    }));
    const shuffled = shuffle(indexedOptions);
    const newCorrectIndex = shuffled.findIndex(item => item.isCorrect);

    return {
      ...rawQ,
      options: shuffled.map(item => item.text),
      correct: newCorrectIndex
    };
  }

  // Rakenna 15 kysymyksen pakka (5 per vaikeustaso: Tier 1, Tier 2, Tier 3)
  function buildGameDeck(categoryFilter) {
    const bank = window.QUESTIONS_BANK || [];
    const usedIds = new Set();
    const deck = [];

    for (let tier = 1; tier <= 3; tier++) {
      let primaryPool = bank.filter(q => q.tier === tier);
      if (categoryFilter && categoryFilter !== "Kaikki aihealueet") {
        primaryPool = primaryPool.filter(q => q.category === categoryFilter);
      }

      const chosenTierQuestions = shuffle(primaryPool).slice(0, 5);
      chosenTierQuestions.forEach(q => usedIds.add(q.id));

      // Jos tietyssä kategoriassa on alle 5 kysymystä tällä vaikeustasolla,
      // täydennetään ensin saman kategorian muista tasoista ja lopuksi saman tason muista kategorioista
      if (chosenTierQuestions.length < 5 && categoryFilter !== "Kaikki aihealueet") {
        const sameCategoryOtherTiers = shuffle(
          bank.filter(q => q.category === categoryFilter && !usedIds.has(q.id))
        );
        while (chosenTierQuestions.length < 5 && sameCategoryOtherTiers.length > 0) {
          const nextQ = sameCategoryOtherTiers.shift();
          usedIds.add(nextQ.id);
          chosenTierQuestions.push(nextQ);
        }
      }

      if (chosenTierQuestions.length < 5) {
        const fallbackSameTier = shuffle(
          bank.filter(q => q.tier === tier && !usedIds.has(q.id))
        );
        while (chosenTierQuestions.length < 5 && fallbackSameTier.length > 0) {
          const nextQ = fallbackSameTier.shift();
          usedIds.add(nextQ.id);
          chosenTierQuestions.push(nextQ);
        }
      }

      chosenTierQuestions.forEach(q => deck.push(prepareQuestionInstance(q)));
    }

    return deck;
  }

  // Laske turvattu kynnysraha (Safe Haven) nykyisen tason perusteella
  function getSafeHavenPrize(questionIndex) {
    // questionIndex on 0-pohjainen (0 = kysymys 1, 5 = kysymys 6, 10 = kysymys 11)
    if (questionIndex >= 10) return PRIZE_LADDER[9]; // 32 000 €
    if (questionIndex >= 5) return PRIZE_LADDER[4];  // 1 000 €
    return { amount: 0, label: "0 €" };
  }

  // Laske "Ota rahat ja lopeta" -summa (edellisen oikein vastatun kysymyksen potti)
  function getWalkAwayPrize(questionIndex) {
    if (questionIndex <= 0) return { amount: 0, label: "0 €" };
    return PRIZE_LADDER[questionIndex - 1];
  }

  // Piirrä oikean reunan voittopuu
  function renderPrizeLadder() {
    els.prizeLadderList.innerHTML = "";
    const reversed = PRIZE_LADDER.slice().reverse();

    reversed.forEach(item => {
      const li = document.createElement("li");
      const zeroIdx = item.step - 1;
      const classes = ["ladder-step"];
      if (item.milestone) classes.push("milestone");
      if (zeroIdx === state.currentIndex) classes.push("active");
      if (zeroIdx < state.currentIndex) classes.push("passed");

      li.className = classes.join(" ");
      li.innerHTML = `
        <span class="step-num">${item.step}</span>
        <span class="step-diamond">◆</span>
        <span class="step-amount">${item.label}</span>
      `;
      els.prizeLadderList.appendChild(li);
    });
  }

  // Näytä haluttu päänäkymä
  function showScreen(screenName) {
    els.screenStart.classList.remove("active");
    els.screenGame.classList.remove("active");
    els.screenEnd.classList.remove("active");

    if (screenName === "start") {
      els.screenStart.classList.add("active");
      renderLeaderboard();
    } else if (screenName === "game") {
      els.screenGame.classList.add("active");
    } else if (screenName === "end") {
      els.screenEnd.classList.add("active");
    }
  }

  // Käynnistä uusi peli
  function startNewGame() {
    const rawName = els.playerNameInput.value.trim();
    state.playerName = rawName || "Erityisasiantuntija";
    state.selectedCategory = "Kaikki aihealueet";
    state.deck = buildGameDeck(state.selectedCategory);
    state.currentIndex = 0;
    state.selectedOption = null;
    state.isLocked = false;
    state.eliminatedOptions = [];
    state.lifelines = {
      fiftyFifty: false,
      audience: false,
      phone: false
    };

    updateLifelineButtons();
    showScreen("game");
    window.gameAudio.playGameStart();
    loadCurrentQuestion();
  }

  // Päivitä oljenkorsipainikkeiden ulkoasu
  function updateLifelineButtons() {
    els.lifeline5050.classList.toggle("used", state.lifelines.fiftyFifty);
    els.lifeline5050.disabled = state.lifelines.fiftyFifty || state.isLocked;

    els.lifelineAudience.classList.toggle("used", state.lifelines.audience);
    els.lifelineAudience.disabled = state.lifelines.audience || state.isLocked;

    els.lifelinePhone.classList.toggle("used", state.lifelines.phone);
    els.lifelinePhone.disabled = state.lifelines.phone || state.isLocked;
  }

  // Lataa nykyinen kysymys näytölle
  function loadCurrentQuestion() {
    const currentQ = state.deck[state.currentIndex];
    const ladderStep = PRIZE_LADDER[state.currentIndex];
    const safeHaven = getSafeHavenPrize(state.currentIndex);
    const walkAway = getWalkAwayPrize(state.currentIndex);

    state.selectedOption = null;
    state.isLocked = false;
    state.eliminatedOptions = [];

    // Yläpalkin mittarit
    els.hudQuestionNumber.textContent = `${ladderStep.step} / 15`;
    els.hudCurrentPrize.textContent = ladderStep.label;
    els.hudSafeHaven.textContent = safeHaven.label;
    els.hudCategory.textContent = currentQ.category;
    els.walkAwayAmount.textContent = walkAway.label;
    els.btnWalkAway.disabled = state.currentIndex === 0;

    // Piilota apulaatikot
    els.lifelineResultPanel.classList.add("hidden");
    els.lifelineResultPanel.innerHTML = "";
    els.lockConfirmBar.classList.add("hidden");
    els.explanationPanel.classList.add("hidden");

    // Juontajan repliikki
    if (state.currentIndex === 0) {
      els.hostPromptText.textContent = `Tervetuloa studioon, ${state.playerName}! Ensimmäinen kysymys on arvoltaan 100 € – lähdetään liikkeelle.`;
    } else if (state.currentIndex === 4) {
      els.hostPromptText.textContent = `Kysymys 5 ja 1 000 €! Oikealla vastauksella varmistat ensimmäisen kynnysrahan.`;
    } else if (state.currentIndex === 9) {
      els.hostPromptText.textContent = `Nyt pelataan toisesta kynnysrahasta: 32 000 €! Tarkkana regulaation yksityiskohdissa.`;
    } else if (state.currentIndex === 14) {
      els.hostPromptText.textContent = `VIIMEINEN KYSYMYS – 1 000 000 EUROA! Olet yhden vastauksen päässä Regulaatiomiljonäärin tittelistä!`;
    } else {
      els.hostPromptText.textContent = `Kysymys ${ladderStep.step} on arvoltaan ${ladderStep.label}. Mikä vaihtoehto on oikein?`;
    }

    // Kysymys ja vastausvaihtoehdot
    els.questionText.textContent = currentQ.question;
    els.ansBtns.forEach((btn, idx) => {
      btn.className = "answer-hex-btn";
      btn.disabled = false;
      els.ansTexts[idx].textContent = currentQ.options[idx];
    });

    updateLifelineButtons();
    renderPrizeLadder();
  }

  // Kun pelaaja klikkaa vastausvaihtoehtoa A, B, C tai D
  function handleOptionClick(index) {
    if (state.isLocked || state.eliminatedOptions.includes(index)) return;

    // Jos sama vaihtoehto on jo valittuna, toinen klikkaus lukitsee vastauksen suoraan!
    if (state.selectedOption === index) {
      lockInSelectedAnswer();
      return;
    }

    state.selectedOption = index;
    window.gameAudio.playLockIn();

    els.ansBtns.forEach((btn, idx) => {
      btn.classList.toggle("selected", idx === index);
    });

    const letter = LETTERS[index];
    els.selectedLetterLabel.textContent = letter;
    els.lockConfirmBar.classList.remove("hidden");
    els.hostPromptText.textContent = `Valitsit vaihtoehdon ${letter}. Lukitaanko vastaus? (Klikkaa uudelleen tai paina Lukitse vastaus)`;
  }

  // Peruuta valinta ennen lukitsemista
  function cancelOptionSelection() {
    if (state.isLocked) return;
    state.selectedOption = null;
    els.ansBtns.forEach(btn => btn.classList.remove("selected"));
    els.lockConfirmBar.classList.add("hidden");
    els.hostPromptText.textContent = "Valinta peruttu. Valitse haluamasi vaihtoehto A, B, C tai D.";
  }

  // Lukitse vastaus ja tarkista tulos
  function lockInSelectedAnswer() {
    if (state.isLocked || state.selectedOption === null) return;

    state.isLocked = true;
    els.lockConfirmBar.classList.add("hidden");
    els.btnWalkAway.disabled = true;
    updateLifelineButtons();

    const currentQ = state.deck[state.currentIndex];
    const ladderStep = PRIZE_LADDER[state.currentIndex];
    const chosenIdx = state.selectedOption;
    const isCorrect = chosenIdx === currentQ.correct;

    // Estä lisäklikkaukset
    els.ansBtns.forEach(btn => {
      btn.disabled = true;
    });

    // Näytä oikea ja mahdollinen väärä vastaus
    els.ansBtns[currentQ.correct].classList.remove("selected");
    els.ansBtns[currentQ.correct].classList.add("correct");

    if (!isCorrect) {
      els.ansBtns[chosenIdx].classList.remove("selected");
      els.ansBtns[chosenIdx].classList.add("wrong");
      window.gameAudio.playWrong();
      els.hostPromptText.textContent = `Voi ei! Oikea vastaus oli ${LETTERS[currentQ.correct]}: ${currentQ.options[currentQ.correct]}.`;
    } else {
      window.gameAudio.playCorrect(ladderStep.milestone);
      if (state.currentIndex === 14) {
        els.hostPromptText.textContent = `USKOMATONTA! 1 000 000 EUROA! Olet virallinen Regulaatiomiljonääri!`;
      } else if (ladderStep.milestone) {
        els.hostPromptText.textContent = `LOISTAVAA! Oikea vastaus ja kynnysraha ${ladderStep.label} on nyt turvattu!`;
      } else {
        els.hostPromptText.textContent = `Oikea vastaus! Olet nyt ansainnut ${ladderStep.label}.`;
      }
    }

    // Näytä Regulaatiofakta-selityslaatikko
    els.explanationBadge.textContent = isCorrect ? "OIKEIN!" : "VÄÄRIN!";
    els.explanationBadge.className = "explanation-badge " + (isCorrect ? "badge-correct" : "badge-wrong");
    els.explanationTitle.textContent = `Regulaatiofakta • ${currentQ.category}`;
    els.explanationBody.textContent = currentQ.explanation;

    if (isCorrect && state.currentIndex < 14) {
      els.btnNextStep.textContent = `Seuraava kysymys (${PRIZE_LADDER[state.currentIndex + 1].label}) →`;
      state.lastOutcome = "continue";
    } else if (isCorrect && state.currentIndex === 14) {
      els.btnNextStep.textContent = "Siirry miljoonan euron voittosekkiin 🏆 →";
      state.lastOutcome = "millionaire";
    } else {
      const safePrize = getSafeHavenPrize(state.currentIndex);
      els.btnNextStep.textContent = `Päätä peli (Voittosumma: ${safePrize.label}) →`;
      state.lastOutcome = "wrong";
    }

    els.explanationPanel.classList.remove("hidden");
  }

  // Siirry seuraavaan kysymykseen tai loppuruutuun
  function handleNextStep() {
    if (state.lastOutcome === "continue") {
      state.currentIndex += 1;
      window.gameAudio.playQuestionReveal(state.currentIndex);
      loadCurrentQuestion();
    } else if (state.lastOutcome === "millionaire") {
      finishGame("win", PRIZE_LADDER[14], 15);
    } else if (state.lastOutcome === "wrong") {
      const safePrize = getSafeHavenPrize(state.currentIndex);
      finishGame("wrong", safePrize, state.currentIndex);
    }
  }

  // "Ota rahat ja lopeta"
  function handleWalkAway() {
    if (state.isLocked || state.currentIndex === 0) return;
    const walkPrize = getWalkAwayPrize(state.currentIndex);
    window.gameAudio.playCorrect(true);
    finishGame("walk", walkPrize, state.currentIndex);
  }

  // ==========================================================================
  // OLJENKORRET (50:50, Kysy yleisöltä, Kilauta kollegalle)
  // ==========================================================================

  // 1. 50:50 Puolitus
  function useLifeline5050() {
    if (state.lifelines.fiftyFifty || state.isLocked) return;
    state.lifelines.fiftyFifty = true;
    window.gameAudio.playLifeline();

    const currentQ = state.deck[state.currentIndex];
    const wrongIndices = [0, 1, 2, 3].filter(idx => idx !== currentQ.correct);
    const toEliminate = shuffle(wrongIndices).slice(0, 2);
    state.eliminatedOptions = toEliminate;

    // Jos pelaajalla oli valittuna vaihtoehto joka poistui, nollataan valinta
    if (toEliminate.includes(state.selectedOption)) {
      cancelOptionSelection();
    }

    toEliminate.forEach(idx => {
      els.ansBtns[idx].classList.add("eliminated");
      els.ansBtns[idx].disabled = true;
    });

    els.hostPromptText.textContent = "Tietokone poisti kaksi väärää vaihtoehtoa. Jäljellä on kaksi vaihtoehtoa!";
    updateLifelineButtons();
  }

  // 2. Kysy yleisöltä
  function useLifelineAudience() {
    if (state.lifelines.audience || state.isLocked) return;
    state.lifelines.audience = true;
    window.gameAudio.playLifeline();

    const currentQ = state.deck[state.currentIndex];
    const tier = currentQ.tier || 1;
    // Oikean vastauksen todennäköisyys yleisöllä riippuu vaikeustasosta
    const baseCorrectMin = tier === 1 ? 66 : tier === 2 ? 50 : 38;
    const baseCorrectMax = tier === 1 ? 84 : tier === 2 ? 68 : 54;
    const correctVote = Math.floor(baseCorrectMin + Math.random() * (baseCorrectMax - baseCorrectMin));

    const activeWrongIndices = [0, 1, 2, 3].filter(
      idx => idx !== currentQ.correct && !state.eliminatedOptions.includes(idx)
    );

    const votes = [0, 0, 0, 0];
    votes[currentQ.correct] = correctVote;

    let remaining = 100 - correctVote;
    activeWrongIndices.forEach((idx, i) => {
      if (i === activeWrongIndices.length - 1) {
        votes[idx] = remaining;
      } else {
        const share = Math.floor(Math.random() * (remaining + 1));
        votes[idx] = share;
        remaining -= share;
      }
    });

    // Piirrä pylväskaavio
    const barsHtml = votes
      .map((pct, idx) => {
        const heightPx = Math.max(6, Math.round((pct / 100) * 95));
        return `
          <div class="audience-bar-col">
            <span class="audience-pct">${pct} %</span>
            <div class="audience-bar" style="height: ${heightPx}px"></div>
            <span class="audience-letter">${LETTERS[idx]}</span>
          </div>
        `;
      })
      .join("");

    els.lifelineResultPanel.innerHTML = `
      <div>
        <strong>👥 Studioyleisön äänestystulos:</strong>
        <div class="audience-chart">${barsHtml}</div>
      </div>
    `;
    els.lifelineResultPanel.classList.remove("hidden");
    els.hostPromptText.textContent = "Studioyleisö on antanut äänensä! Katso jakauma yläpuolelta.";
    updateLifelineButtons();
  }

  // 3. Kilauta kollegalle (Fimea-asiantuntija)
  function useLifelinePhone() {
    if (state.lifelines.phone || state.isLocked) return;
    state.lifelines.phone = true;
    window.gameAudio.playPhoneRing();

    const currentQ = state.deck[state.currentIndex];
    const expert =
      EXPERTS_BY_CATEGORY[currentQ.category] ||
      EXPERTS_BY_CATEGORY["Fimea & Kansallinen lainsäädäntö"];

    // Asiantuntija osuu oikeaan n. 92 % todennäköisyydellä (ja tasoilla 1-2 aina)
    const tier = currentQ.tier || 1;
    const isExpertRight = tier < 3 ? true : Math.random() < 0.88;

    let suggestedIdx = currentQ.correct;
    if (!isExpertRight) {
      const possibleWrong = [0, 1, 2, 3].filter(
        idx => idx !== currentQ.correct && !state.eliminatedOptions.includes(idx)
      );
      if (possibleWrong.length > 0) {
        suggestedIdx = possibleWrong[Math.floor(Math.random() * possibleWrong.length)];
      }
    }

    const suggestedLetter = LETTERS[suggestedIdx];
    const suggestedText = currentQ.options[suggestedIdx];
    const confidence = tier === 1 ? "99 %" : tier === 2 ? "90 %" : "80 %";

    els.lifelineResultPanel.innerHTML = `
      <div class="phone-call-box">
        <div class="phone-avatar">${expert.avatar}</div>
        <div class="phone-Bubble">
          <h4>📞 Puhelu: ${expert.name}</h4>
          <p>
            "Tervehdys sinne studioon! Tämä liittyy suoraan aihealueeseen <em>${currentQ.category}</em>.
            Käsittelimme juuri tätä pykälää viime viikolla. Olen <strong>${confidence}</strong> varma,
            että oikea vastaus on vaihtoehto <strong>${suggestedLetter}: ${suggestedText}</strong>!"
          </p>
        </div>
      </div>
    `;
    els.lifelineResultPanel.classList.remove("hidden");
    els.hostPromptText.textContent = `${expert.name} antoi sinulle suosituksensa vaihtoehtoon ${suggestedLetter}!`;
    updateLifelineButtons();
  }

  // ==========================================================================
  // PELIN PÄÄTTYMINEN & KUNNIATAULUKKO
  // ==========================================================================
  function finishGame(outcomeType, prizeObj, reachedLevelCount) {
    const usedLifelinesCount = Object.values(state.lifelines).filter(Boolean).length;
    const dateStr = new Date().toLocaleDateString("fi-FI");

    if (outcomeType === "win") {
      els.endBadgeIcon.textContent = "👑";
      els.endHeadline.textContent = "ONNEKSI OLKOON, REGULAATIOMILJONÄÄRI!";
      els.endSubtext.textContent = `Vastasit kaikkiin 15 kysymykseen oikein ja hallitset suvereenisti sekä Fimean kansallisen valvonnan että EU:n lääke- ja laiteasetukset!`;
    } else if (outcomeType === "walk") {
      els.endBadgeIcon.textContent = "💼";
      els.endHeadline.textContent = "HARKITTU RISKienhallintapäätös!";
      els.endSubtext.textContent = `Päätit ottaa rahat ja lopettaa kysymyksellä ${state.currentIndex + 1}. Veit mukanasi upean ${prizeObj.label} potin!`;
    } else {
      els.endBadgeIcon.textContent = prizeObj.amount > 0 ? "🛡️" : "📉";
      els.endHeadline.textContent =
        prizeObj.amount > 0 ? "KYNNYSRAHA PELASTI POTIN!" : "MATKA KATKESI ALKUPORTAILLA";
      els.endSubtext.textContent =
        prizeObj.amount > 0
          ? `Kysymys ${state.currentIndex + 1} osoittautui kohtalokkaaksi, mutta turvattu kynnysraha takaa sinulle ${prizeObj.label} voiton!`
          : `Kompastuit kysymyksessä ${state.currentIndex + 1} ennen ensimmäistä 1 000 € kynnysrahaa. Ei muuta kuin uusi hakemus sisään!`;
    }

    els.chequeDate.textContent = dateStr;
    els.chequePayee.textContent = state.playerName;
    els.chequeAmount.textContent = prizeObj.label;
    els.endStatLevel.textContent = `${reachedLevelCount} / 15`;
    els.endStatCategory.textContent = state.selectedCategory;
    els.endStatLifelines.textContent = `${usedLifelinesCount} / 3`;
    els.shareFeedback.classList.add("hidden");

    saveScoreToLeaderboard({
      name: state.playerName,
      amount: prizeObj.amount,
      label: prizeObj.label,
      level: reachedLevelCount,
      category: state.selectedCategory,
      date: dateStr
    });

    showScreen("end");
  }

  function getScores() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_SCORES);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveScoreToLeaderboard(entry) {
    try {
      const list = getScores();
      list.push(entry);
      list.sort((a, b) => b.amount - a.amount || b.level - a.level);
      localStorage.setItem(STORAGE_KEY_SCORES, JSON.stringify(list.slice(0, 8)));
    } catch (e) {
      // localStorage ei käytettävissä
    }
  }

  function renderLeaderboard() {
    const scores = getScores();
    if (!scores.length) {
      els.leaderboardList.innerHTML = `<p class="leaderboard-empty">Ei vielä tallennettuja tuloksia. Astu studioon ja tee ensimmäinen ennätys!</p>`;
      return;
    }

    els.leaderboardList.innerHTML = scores
      .map(
        (s, idx) => `
        <div class="leaderboard-item">
          <div>
            <strong>#${idx + 1} ${escapeHtml(s.name)}</strong>
            <span style="color:#94a3b8; font-size:0.8rem; margin-left:0.5rem;">(${escapeHtml(s.category)} • Taso ${s.level}/15)</span>
          </div>
          <strong style="color:#fcd34d;">${escapeHtml(s.label)}</strong>
        </div>
      `
      )
      .join("");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ==========================================================================
  // KYSYMYSPANKIN SELAUS (OPPIMISTILA)
  // ==========================================================================
  function renderStudyBank() {
    const query = (els.studySearchInput.value || "").trim().toLowerCase();
    const tierFilter = els.studyFilterTier.value;
    const bank = window.QUESTIONS_BANK || [];

    const filtered = bank.filter(q => {
      if (tierFilter !== "all" && String(q.tier) !== tierFilter) return false;
      if (!query) return true;
      const haystack = `${q.question} ${q.options.join(" ")} ${q.explanation} ${q.category}`.toLowerCase();
      return haystack.includes(query);
    });

    if (filtered.length === 0) {
      els.studyQuestionsContainer.innerHTML = `<p class="leaderboard-empty">Hakuehdoilla ei löytynyt kysymyksiä.</p>`;
      return;
    }

    els.studyQuestionsContainer.innerHTML = filtered
      .map(
        q => `
        <div class="study-card">
          <div class="study-card-meta">
            <span>${escapeHtml(q.category)}</span>
            <span>Vaikeustaso ${q.tier} / 3</span>
          </div>
          <h4>${escapeHtml(q.question)}</h4>
          <p class="study-card-answer">✔ Oikea vastaus: ${escapeHtml(q.options[q.correct])}</p>
          <p class="study-card-exp">${escapeHtml(q.explanation)}</p>
        </div>
      `
      )
      .join("");
  }

  // ==========================================================================
  // TAPAHTUMANKÄSITTELIJÄT & NÄPPÄIMISTÖTUKI
  // ==========================================================================
  function bindEvents() {
    els.btnStartGame.addEventListener("click", startNewGame);
    els.btnPlayAgain.addEventListener("click", startNewGame);
    els.btnBackToMenu.addEventListener("click", () => showScreen("start"));
    els.btnHomeLogo.addEventListener("click", () => showScreen("start"));

    els.btnClearScores.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY_SCORES);
      renderLeaderboard();
    });

    els.ansBtns.forEach((btn, idx) => {
      btn.addEventListener("click", () => handleOptionClick(idx));
    });

    els.btnLockAnswer.addEventListener("click", lockInSelectedAnswer);
    els.btnCancelSelection.addEventListener("click", cancelOptionSelection);
    els.btnNextStep.addEventListener("click", handleNextStep);
    els.btnWalkAway.addEventListener("click", handleWalkAway);

    // Oljenkorret
    els.lifeline5050.addEventListener("click", useLifeline5050);
    els.lifelineAudience.addEventListener("click", useLifelineAudience);
    els.lifelinePhone.addEventListener("click", useLifelinePhone);

    // Mobiilin voittopuu
    els.btnToggleLadderMobile.addEventListener("click", () => {
      els.prizeLadderAside.classList.toggle("open");
    });
    els.btnCloseLadderMobile.addEventListener("click", () => {
      els.prizeLadderAside.classList.remove("open");
    });

    // Äänikytkin
    els.btnSoundToggle.addEventListener("click", () => {
      const muted = window.gameAudio.toggleMute();
      els.soundIcon.textContent = muted ? "🔇" : "🔊";
      els.soundLabel.textContent = muted ? "Mykistetty" : "Äänet";
    });

    // Modaalit
    els.btnRulesModal.addEventListener("click", () => {
      els.modalRules.classList.remove("hidden");
    });
    els.btnStudyModal.addEventListener("click", () => {
      renderStudyBank();
      els.modalStudy.classList.remove("hidden");
    });

    document.querySelectorAll(".modal-close").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-close");
        const modal = document.getElementById(targetId);
        if (modal) modal.classList.add("hidden");
      });
    });

    [els.modalRules, els.modalStudy].forEach(modal => {
      modal.addEventListener("click", e => {
        if (e.target === modal) modal.classList.add("hidden");
      });
    });

    els.studySearchInput.addEventListener("input", renderStudyBank);
    els.studyFilterTier.addEventListener("change", renderStudyBank);

    // Tuloksen jakaminen leikepöydälle
    els.btnShareResult.addEventListener("click", () => {
      const amount = els.chequeAmount.textContent;
      const level = els.endStatLevel.textContent;
      const cat = els.endStatCategory.textContent;
      const shareText = `🏛️ Haluatko regulaatiomiljonääriksi? (${cat})\n👤 Kilpailija: ${state.playerName}\n💰 Voittosumma: ${amount}\n📊 Taso: ${level}\nKokeile omaa Fimea- ja lääkeregulaatio-osaamistasi!`;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareText).then(() => {
          els.shareFeedback.classList.remove("hidden");
        });
      }
    });

    // Näppäimistöoikotiet pelin aikana
    window.addEventListener("keydown", e => {
      // Älä kaappaa näppäimiä jos käyttäjä kirjoittaa tekstikenttään tai modaali on auki
      if (
        document.activeElement &&
        (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "SELECT")
      ) {
        return;
      }
      if (!els.modalRules.classList.contains("hidden") || !els.modalStudy.classList.contains("hidden")) {
        if (e.key === "Escape") {
          els.modalRules.classList.add("hidden");
          els.modalStudy.classList.add("hidden");
        }
        return;
      }
      if (!els.screenGame.classList.contains("active")) return;

      const key = e.key.toUpperCase();
      if (key === "A") handleOptionClick(0);
      else if (key === "B") handleOptionClick(1);
      else if (key === "C") handleOptionClick(2);
      else if (key === "D") handleOptionClick(3);
      else if (key === "1") useLifeline5050();
      else if (key === "2") useLifelineAudience();
      else if (key === "3") useLifelinePhone();
      else if (e.key === "Enter") {
        e.preventDefault();
        if (!els.explanationPanel.classList.contains("hidden")) {
          handleNextStep();
        } else if (state.selectedOption !== null && !state.isLocked) {
          lockInSelectedAnswer();
        }
      }
    });
  }

  // Alustus
  renderLeaderboard();
  bindEvents();
})();
