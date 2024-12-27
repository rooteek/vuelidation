<script setup>
import { reactive } from 'vue'
import router from '@/router';
const userTable = [
    {
        email: "admin@gmail.com",
        password: "123456"
    },
    {
        email: "rut@gmail.com",
        password: "rut"
    },
]
const formData = reactive({
    email: '',
    password: '',
});

function login() {
    if (formData.email.trim() !== '' && formData.password.trim() !== '') {
        const findIndex = userTable.findIndex((data) => data.email === formData.email)
        // console.log(findIndex);
        if (findIndex >= 0) {
            if (userTable[findIndex].email === formData.email && userTable[findIndex].password === formData.password) {
                sessionStorage.setItem('user', formData.email);
                router.push("/dashboard-2")
            }
            else {
                console.log("Enter valid email pass");
            }
        }
        else {
            console.log("Enter valid email pass");
        }
    }
    else {
        console.log("enter email,password");
    }
}
</script>
<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 class="text-2xl font-bold text-center mb-4">Login</h2>
            <form @submit.prevent="login" class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input v-model="formData.email" type="email" id="email" placeholder="Enter your email"
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900" />

                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input v-model="formData.password" type="password" id="password" placeholder="Enter your password"
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900" />
                </div>
                <button type="submit"
                    class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>