<template>
    <div class="cards-container">
        <template v-for="examiner in examiners">
            <ExaminerCard :examiner="examiner" />
        </template>
    </div>
</template>

<script>
import ExaminerCard from "./examiner-card.component.vue"
import { NursingAPI } from '../services/nursing-api.service.js'
import { Examiner } from '../model/examiner.entity.js'

export default {
    name: 'ExaminerList',
    components: {
        ExaminerCard
    },
    data() {
        return {
            examiners: [],
            api: new NursingAPI()
        };
    },
    created() {
        this.api.getAllExaminers().then(response => {
            const data = response.data;

            this.examiners = data.map(d => new Examiner(d));
        }
        ).catch(e => alert("Error", e));
    }
};
</script>

<style scoped>
.cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px
}
</style>