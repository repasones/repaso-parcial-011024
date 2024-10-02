/* La información de los Mental State Exams (id, patientId, examinerId, examDate, orientationScore,
    registrationScore, attentionAndCalculationScore, recallScore, languageScore) se encuentra en el
    endpoint: */

export class Exam {
    constructor({ id, patientId, examinerId, examDate, orientationScore,
        registrationScore, attentionAndCalculationScore, recallScore, languageScore }) {
        this.id = id || 0;
        this.patientId = patientId || 0;
        this.examinerId = examinerId || 0;
        this.examDate = examDate || '';
        this.orientationScore = orientationScore || 0;
        this.registrationScore = registrationScore || 0;
        this.attentionAndCalculationScore = attentionAndCalculationScore || 0;
        this.recallScore = recallScore || 0;
        this.languageScore = languageScore || 0;
    }
}

/* El concepto Calificación Total de un examen (total score), debe ser calculado como la sumatoria
de puntajes obtenidos por el patient en la evaluación para orientationScore, registrationScore,
attentionAndCalculationScore, recallScore y languageScore. */