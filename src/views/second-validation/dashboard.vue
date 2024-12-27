<script setup>
import { onMounted, ref } from 'vue'
import router from '@/router';
const userEmail = ref(sessionStorage.getItem('user') || '')
function logout() {
    sessionStorage.removeItem('user')
    router.push("/login-2")
}
onMounted(() => {
    if (userEmail.value.trim() === "") {
        router.push("/login-2")
    }
})
</script>
<template>
    <h1>2 Dashboard</h1>
    <p>hello {{ userEmail }}</p>
    <button @click="logout">logout</button>
</template>