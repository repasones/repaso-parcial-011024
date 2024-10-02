<template>
    <div class="not-found">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Route: {{ $route.path }} does not exist</p>
        <button>
            <RouterLink to="/home">Go to Home</RouterLink>
        </button>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped>
.not-found {
    text-align: center;
    margin-top: 50px;
}
</style>

<!-- Dicha vista debe mostrar un mensaje incluyendo la ruta especificada que no se encontró y debe
ofrecer un botón para retornar a Home. -->