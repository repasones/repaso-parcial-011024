<!-- Card provides header, title, subtitle, content and footer as the named templates to place content. -->

<template>
    <pv-card>
        <template #header>
            <h1>{{ $t("full-name") }}: {{ examiner.firstName + ' ' + examiner.lastName }}</h1>
        </template>

        <template #title>
            NPI: {{ examiner.nationalProviderIdentifier }}
        </template>

        <template #subtitle>
            {{ $t("stats") }}
        </template>

        <template #content>
            ESTADISTICAS
        </template>
    </pv-card>
</template>

<script>
import { Examiner } from "../model/examiner.entity.js"

export default {
    name: 'ExaminerCard',
    props: {
        examiner: {
            type: Examiner,
            required: true
        }
    }
    /* data() {
        return {
            examiner: new Examiner({
                firstName: 'NOMBRE',
                lastName: 'APELLIDO',
                nationalProviderIdentifier: 'PE'
            })
        }
    } */
}
</script>

<style scoped></style>

<!-- 
En cada card se
muestra como 
header el nombre completo del Examiner,

como title el texto NPI seguido del valor de nationalProviderIdentifier, 

como subtitle el texto Mental State Exam Performance. 


sección de contenido de cada card se presenta los indicadores calculados en base a los
exámenes asignados a dicho Examiner: 
Current Assigned Mental State Exam Count (Cantidad Actual de Exámenes de Salud Mental Asignados) 
Average Assigned Mental State Exam Total Score (Promedio de Calificación Total de Exámenes de Salud Mental Asignados). -->