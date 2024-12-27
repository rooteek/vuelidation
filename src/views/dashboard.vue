<template>
    <div>
        <h1>Welcome to the Dashboard</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem('isAuthenticated');
            this.$router.push('/login');
        },
    },
};
</script>

<style>
/* Add your styles */
</style>