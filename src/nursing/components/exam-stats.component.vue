<template>
    <p>Exam Count: {{ exams.length }}</p>
    <p>Highest Score: </p>
    <p>Lowest Score: </p>
    <p>Average Score: </p>
</template>

<script>
export default {
    name: 'ExamStatsComponent',
    data() {
        return {
            exams: [1, 1, 1, 1, 11, 1, 11, 11, 1, 1, 1, 1, 111, 1, 1, 11, 1, 5],
        };
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