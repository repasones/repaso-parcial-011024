<template>
    <p>Exam Count: {{ exams.length }}</p>
    <p>Highest Score: {{ max }} </p>
    <p>Lowest Score: {{ min }}</p>
    <p>Average Score: {{ avg }} </p>
</template>

<script>
import { Exam } from '../model/examen.entity';
import { NursingAPI } from '../services/nursing-api.service';

export default {
    name: 'ExamStatsComponent',
    data() {
        return {
            api: new NursingAPI(),
            exams: [],
            max: -Infinity,
            min: Infinity,
            avg: 0
        };
    },
    methods: {
        setMax() {
            this.exams.forEach(e => {
                this.max = Math.max(e.totalScore, this.max)
            })
        },
        setMin() {
            this.exams.forEach(e => {
                this.min = Math.min(e.totalScore, this.min)
            })
        },
        setAvg() {
            this.exams.forEach(e => {
                this.avg += e.totalScore;
            })

            this.avg /= this.exams.length;
        }
    },
    created() {
        this.api.getAllExams()
            .then(response => {
                const data = response.data;

                this.exams = data.map(exam => {
                    exam.totalScore = exam.orientationScore
                        + exam.registrationScore
                        + exam.attentionAndCalculationScore
                        + exam.recallScore
                        + exam.languageScore;
                    return new Exam(exam);
                });

                this.setMax();
                this.setMin();
                this.setAvg();
            });


    }
};
</script>

<style scoped></style>

<!-- Exam Count (Cantidad de Evaluaciones), 
 Highest Score (Calificación Total más alta), 
 Lowest Score (Calificación Total más baja) y
  Average Score(Calificación Total promedio). 
  
  Al lado de cada etiqueta de indicador se muestra el valor
calculado correspondiente, en base a la información de Mental State Exams. Para estos
indicadores se considera el valor de total score calculado en cada mental state exam. -->