<template>
    <div>
        <h1>Welcome to the Dashboard</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script setup>
import router from '@/router';
function logout() {
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
}
</script>

<style>
/* Add your styles */
</style>