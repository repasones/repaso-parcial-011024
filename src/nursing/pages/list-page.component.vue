<template>

    <h1>List Page</h1>
    <examinerListComponent />
</template>

<script>
import examinerListComponent from "../components/examiner-list.component.vue"

export default {
    name: 'ListPageComponent',
    components: {
        examinerListComponent
    }
};
</script>

<style scoped></style>