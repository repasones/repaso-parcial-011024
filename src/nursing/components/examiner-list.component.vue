<template>
    <div v-for="examiner in examiners" class="card-container">
        <ExaminerCard :examiner="examiner" />
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

<style scoped></style>