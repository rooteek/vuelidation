<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 class="text-2xl font-bold text-center mb-4">Login</h2>
            <form @submit.prevent="login" class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input v-model="formData.email" type="email" id="email" placeholder="Enter your email"
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900" />
                    <p v-if="validation.email.$error" class="text-red-500 text-sm mt-1">
                        Please enter a valid email.
                    </p>
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input v-model="formData.password" type="password" id="password" placeholder="Enter your password"
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900" />
                    <p v-if="validation.password.$error" class="text-red-500 text-sm mt-1">
                        Password is required.
                    </p>
                </div>
                <button type="submit"
                    class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Login
                </button>
                <!-- <p v-if="errorMessage" class="text-red-500 text-sm text-center mt-2">
                    {{ errorMessage }}
                </p> -->
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = reactive({
    email: '',
    password: '',
});

const rules = {
    email: { required, email },
    password: { required },
};

const validation = useVuelidate(rules, formData);

const errorMessage = reactive({ value: '' });

const login = () => {
    validation.value.$touch();
    if (validation.value.$invalid) {
        return;
    }
    if (formData.email === 'admin@gmail.com' && formData.password === '123456') {
        localStorage.setItem('isAuthenticated', 'true');
        router.push('/dashboard');
    } else {
        errorMessage.value = 'Invalid email or password.';
    }
};
</script>

<style>
/* Add custom styles if needed */
</style>