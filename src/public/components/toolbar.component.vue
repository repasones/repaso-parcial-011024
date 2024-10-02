<!-- start, center and end -->
<!-- https://hign.org/sites/default/files/2022-01/HIGN-logo-1200.png -->

<template>
    <pv-toolbar>
        <template #start>
            <img src="https://hign.org/sites/default/files/2022-01/HIGN-logo-1200.png" alt="loguito">
            <h1>HIGN</h1>
        </template>

        <template #end>
            <button>
                <RouterLink to="/home">Home</RouterLink>
            </button>
            <button>
                <RouterLink to="/nursing/examiner-performance-overview">Examiner Performance Overview</RouterLink>
            </button>
            <pv-selectbutton v-model="$i18n.locale" :options="languages" />
        </template>
    </pv-toolbar>
</template>

<script>
export default {
    name: 'ToolbarComponent',
    data() {
        return {
            languages: ['en', 'es']
        };
    }
};
</script>

<style scoped>
img {
    max-width: 50px;
}

h1 {
    font-size: 16px;
}
</style>
<!-- 
Un Toolbar, donde se muestra a la izquierda el logo de HIGN 
y a continuación el nombre de la empresa (Hartford Institute for Geriatric Nursing). 

Al extremo derecho se muestra las opciones “Home”, “Examiner Performance Overview”.

El toolbar debe ofrecer además a la derecha de las opciones del toolbar, select buttons con “EN”
y “ES” para el switching de idioma.

-->