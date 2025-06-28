const hovedside = document.getElementById("hovedside");
const omArbeidet = document.getElementById("omArbeidet");
const meneskerILombo = document.getElementById("beskrivelse");
const VaneligeSpørsmål = document.getElementById("VaneligeSpørsmål");
const liID = document.getElementById("liID");
const KontaktOss = document.getElementById("Kontakt");
const folk = document.getElementById("folk");
const HvaBetyrLimbo = document.getElementById("HvaBetyrLimbo");
let bildeSomByttes = document.getElementById("president");




hovedside.addEventListener("click", () => {
  localStorage.setItem("sistKnapp", "hovedside, beskrivelse");
  bildeSomByttes.src = "./image copy.png";
  bildeSomByttes.alt = "presidenten";
  meneskerILombo.innerHTML = `<p>Mennesker i limbo Bergen er en organisasjon for lengeværende asylsøkere med endelig avslag. 
  Vi kjemper for å bedre vår situasjon.
  Gruppen vår består av både kvinner og menn.
  Noen av oss har barn, andre kom til Norge som mindreårige.
  Vi kommer fra forskjellige land og har ulik bakgrunn.
  Det vi har felles, er at vi lever i Norge uten rett til:</p>`;
  liID.style.display = "block";
});

omArbeidet.addEventListener("click", () => {
  localStorage.setItem("sistKnapp", "omArbeidet, beskrivelse");
  meneskerILombo.innerHTML = `<p> Hvem er vi?
  Gruppen består av lengeværende papirløse asylsøkere, inkludert kvinner, menn og barn, som har flyktet til Norge. De kjemper for:</p>
<p><li>Arbeid</li><br>
<li>Skolegang</li><br>
<li>Helsehjelp</li><br>
<li>Økonomiske velferdstjenester</p>
</li>
Papirløse eller irregulære migranter er personer som oppholder seg i Norge uten lovlig opphold. Mange er asylsøkere med endelig avslag. Flere i denne gruppen bor på asylmottak, særlig barnefamilier.
De irregulære migrantene som, i frykt for tvangsretur eller av andre årsaker, velger å ikke bo på asylmottak – eller som ikke har rett til mottaksplass – lever på kanten av det norske samfunnet. De livnærer seg på uformell sosial støtte eller illegalt arbeid og er ekskludert fra det offentlige støtteapparatet.<br><br>
Risikoen for utnyttelse er stor, både når det gjelder menneskehandel, andre overgrep og utnyttelse i det svarte arbeidsmarkedet (underbetaling, manglende arbeidsrettigheter og fravær av arbeidskontrakt).
Både psykisk og somatisk helse kan være dårlig.
De kan ha helsetilstander som kunne vært behandlet,
men som utvikler seg til kroniske eller livstruende tilstander fordi de forblir ubehandlet.
I mange tilfeller dreier det seg om omfattende psykososiale og helsemessige utfordringer.`;
  bildeSomByttes.style.width = "30rem";
  bildeSomByttes.style.height = "30rem";
  liID.style.display = "none"; // Skjul liID
  bildeSomByttes.src = "./stand 19 okt 24 Torgallmenning.jpg";
  bildeSomByttes.alt = "stand 19 okt 24 Torgallmenning";
});

// ...eksisterende kode...

VaneligeSpørsmål.addEventListener("click", () => {
  localStorage.setItem("sistKnapp", "VaneligeSpørsmål");
  meneskerILombo.innerHTML = `
  <button id='vaneligSpørsmålHvorfor'>Hvorfor reiser de ikke bare tilbake?</button>
  <button id='hvaVilDeOppnå'>Hva vil de oppnå i Norge?</button>`;
  // Legg til event listeners etter at innerHTML er satt
  document.getElementById("vaneligSpørsmålHvorfor").addEventListener("click", () => {
    localStorage.setItem("sistKnapp", "vaneligSpørsmålHvorfor");
    meneskerILombo.innerHTML = `
      <button id="tilbake">tilbake</button>
      <p><li>Det er grove brudd på menneskerettigheter der jeg kommer fra.</li></p>
      <p><li>Som kvinne mangler jeg rettigheter i hjemlandet mitt.</li></p>
      <p><li>Mitt land er styrt av diktatur, og jeg er i fare for å bli satt i fengsel og torturert.</li></p>`;
    meneskerILombo.style.padding = "25px";
    document.getElementById("tilbake").addEventListener("click", () => {
      VaneligeSpørsmål.click(); // Gjenopprett VaneligeSpørsmål
    });
  });

  document.getElementById("hvaVilDeOppnå").addEventListener("click", () => {
    localStorage.setItem("sistKnapp", "hvaVilDeOppnå"); // <-- Endret her!
    meneskerILombo.innerHTML = `
      <button id="tilbake">tilbake</button>
      <li>De vil arbeide for maten og betale skatt til fellesskapet</li>
      <li>De vil ha rett til utanning</li>
      <li>De vil ha rett til helsehjelp</li>
      <li>De vil ha stemmerett</li>
      <li>Rett til å leve som du og jeg</li>
      <li>De vil ha rett til menneskeverd</li>`;
    meneskerILombo.style.padding = "25px";
    document.getElementById("tilbake").addEventListener("click", () => {
      VaneligeSpørsmål.click(); // Gjenopprett VaneligeSpørsmål
    });
  });
}); HvaBetyrLimbo.addEventListener("click", () => {
  localStorage.setItem ("sistKnapp", "HvaBetyrLimbo");
    meneskerILombo.innerHTML = `Limbo beskrives som en mellomtilstand eller en tilstand av lammelse,
  hvor papirløse asylsøkere verken kan reise tilbake til hjemlandet eller starte et nytt liv i Norge. 
  Det oppleves som håpløst og uten mulighet for endring.
  <a href= https://yemane.no/1> hvordan oppleves limbo </a>`;
  });

  KontaktOss.addEventListener("click", () => {
localStorage.setItem ("sistKnapp","KontaktOss")
 meneskerILombo.innerHTML = `
    <p>Kontakt oss på telefon: <a href='tel:+4790038238233'>90038238233</a></p>
    <p>Eller e-post: <a href='mailto:ketil_hindenes@hotmail.com'>ketil_hindenes@hotmail.com</a></p>
    <p>hvis du vil bli medlem skriv gjerne inn hvem du er når du vipser</p>
 <a href="https://vipps.no/pay?link=DIN_GENERERTE_LENKE" target="_blank">Betal med Vipps</a>

</a>

  `;
    // Skjul liID
  });

// ...eksisterende kode...

function visInnhold(knapp) {
  switch (knapp) {
    case "hovedside":
      hovedside.click();
      break;
    case "omArbeidet":
      omArbeidet.click();
      break;
    case "VaneligeSpørsmål":
      VaneligeSpørsmål.click();
      break;
    case "KontaktOss":
      KontaktOss.click();
      break;
    case "HvaBetyrLimbo":
      HvaBetyrLimbo.click();
      break;
    case "vaneligSpørsmålHvorfor":
      VaneligeSpørsmål.click();
      setTimeout(() => {
        const btn = document.getElementById("vaneligSpørsmålHvorfor");
        if (btn) btn.click();
      }, 0);
      break;
    case "hvaVilDeOppnå":
      VaneligeSpørsmål.click();
      setTimeout(() => {
        const btn = document.getElementById("hvaVilDeOppnå");
        if (btn) btn.click();
      }, 0);
      break;
    default:
      hovedside.click();
  }
}

// ...eksisterende kode...

window.addEventListener("DOMContentLoaded", () => {
  const sistKnapp = localStorage.getItem("sistKnapp");
  visInnhold(sistKnapp);
});