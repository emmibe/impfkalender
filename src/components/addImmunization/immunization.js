export default class ImmunizationJson {
    constructor(uuid, pid, perf, note, reason, vaccine, status, date, site, dose, disease, immun){
        this.uuid     = uuid;          // Identifier des Patienten
        this.pid      = pid;           // ID des Patienten im System
        this.perf     = perf;          // ID des Arztes
        this.note     = note;          // Bemerkung
        this.vaccine  = vaccine;       // Code des Impfstoffes (siehe System)
        this.status   = status;        // Status der Impfung (enum completed, entered-in-error, not-done)
        this.date     = date;          // Datum der Impfung
        this.site     = site;          // Impfstelle
        this.dose     = dose;          // Dosis der Impfung (in ml)  
        this.reason   = reason;        // Impfgrund
        this.disease  = disease;       // Erreger
        this.immun    = immun;         // Immunisierungsgrad (bsp. G2)
        this.diseaseData = [
          "Diphtherie", "Hepatitis B", "Hibb – H. influenzae Typ b", "Influenza", "Masern",
          "Meningokokken C", "Herpes zoster", "HPV – Humane Papillomviren", "Mumps, Röteln", "Pertussis",
          "Pneumokokken", "Poliomyelitis", "Rotaviren", "Tetanus", "Varizellen"
        ];
    };
}