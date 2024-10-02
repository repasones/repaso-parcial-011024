<template>
    <pv-card class="home">
        <template #title>
            <h1>Mental State Exam Analytics</h1>
        </template>

        <template #subtitle>
            <p>Score Analytics</p>
        </template>

        <template #content>
            <ExamStatsComponent />
        </template>
    </pv-card>
</template>

<script>
import ExamStatsComponent from '../../nursing/components/exam-stats.component.vue'

export default {
    name: 'HomeComponent',
    components: {
        ExamStatsComponent
    }
};
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 50px;
}
</style>
