
import { Question, VerdictType, Verdict } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Che ore sono esattamente?",
    options: [
      { label: "È pieno pomeriggio, sono lucido/a come un chirurgo.", value: "A", points: 0 },
      { label: "Mezzanotte passata, il mood 'nostalgia' sta salendo.", value: "B", points: 2 },
      { label: "Sono le 3 del mattino e il terzo bicchiere di vino mi sta parlando.", value: "C", points: 5 }
    ]
  },
  {
    id: 2,
    text: "Qual è la vera motivazione del messaggio?",
    options: [
      { label: "Ho letteralmente ancora le sue chiavi di casa. Devo ridargliele.", value: "A", points: 0 },
      { label: "Voglio solo vedere come sta (bugia: voglio che mi dica che gli manco).", value: "B", points: 3 },
      { label: "Mi sento solo/a e San Valentino mi sta schiacciando l'anima.", value: "C", points: 4 }
    ]
  },
  {
    id: 3,
    text: "Com'è finita la vostra ultima conversazione?",
    options: [
      { label: "In modo civile, con rispetto reciproco.", value: "A", points: 1 },
      { label: "Visualizzato senza risposta da parte sua (da 4 mesi).", value: "B", points: 4 },
      { label: "Con un 'Non scrivermi mai più, sei un incubo'.", value: "C", points: 6 }
    ]
  },
  {
    id: 4,
    text: "Cosa hai fatto negli ultimi 30 minuti?",
    options: [
      { label: "Ho letto un libro o guardato un documentario sui funghi.", value: "A", points: 0 },
      { label: "Ho scrollato il suo profilo Instagram fino al 2019.", value: "B", points: 3 },
      { label: "Ho ascoltato 'Someone Like You' di Adele a ripetizione piangendo.", value: "C", points: 5 }
    ]
  },
  {
    id: 5,
    text: "Cosa ti aspetti onestamente che succeda dopo l'invio?",
    options: [
      { label: "Uno scambio logistico breve e indolore.", value: "A", points: 0 },
      { label: "Un miracoloso ritorno di fiamma degno di un film di Hollywood.", value: "B", points: 4 },
      { label: "Un'umiliazione pubblica o un silenzio assordante.", value: "C", points: 3 }
    ]
  }
];

export const VERDICTS: Record<VerdictType, Verdict> = {
  DO_NOT_TEXT: {
    title: "POSA QUEL TELEFONO.",
    description: "Seriamente. Blocca lo schermo, lancia il cellulare sotto il divano e vai a farti una camminata. Stai per commettere un errore di cui ti pentirai domani mattina alle 8:00.",
    color: "bg-red-600",
    icon: "fa-ban"
  },
  RISKY: {
    title: "A TUO RISCHIO E PERICOLO.",
    description: "Le probabilità di successo sono pari a quelle di vincere al Superenalotto senza giocare. Sei in una zona grigia: probabilmente non succederà nulla di grave, ma preparati a sentirti un po' patetico/a.",
    color: "bg-amber-500",
    icon: "fa-triangle-exclamation"
  },
  GO_AHEAD: {
    title: "PROCEDI (MA CON CAUTELA).",
    description: "Sembra che tu abbia una motivazione valida o che il distacco sia ormai maturo. Sii breve, sii dignitoso/a e non aspettarti poesie d'amore in risposta.",
    color: "bg-emerald-600",
    icon: "fa-check-circle"
  }
};
