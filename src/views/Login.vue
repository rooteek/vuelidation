<template>
    <div class="login-container">
        <form @submit.prevent="login">
            <div>
                <label for="email">Email:</label>
                <input v-model="formData.email" type="email" id="email" placeholder="Enter your email" />
                <p v-if="validation.email.$error">Please enter a valid email.</p>
            </div>
            <div>
                <label for="password">Password:</label>
                <input v-model="formData.password" type="password" id="password" placeholder="Enter your password" />
                <p v-if="validation.password.$error">Password is required.</p>
            </div>
            <button type="submit">Login</button>
            <!-- <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p> -->
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

export default {
    setup() {
        const formData = reactive({
            email: '',
            password: '',
        });

        const rules = {
            email: { required, email },
            password: { required },
        };

        const validation = useVuelidate(rules, formData);

        const login = () => {
            validation.value.$touch(); // Trigger validation
            if (validation.value.$invalid) {
                return;
            }
            if (formData.email === 'admin@gmail.com' && formData.password === '123456') {
                localStorage.setItem('isAuthenticated', 'true');
                window.location.href = '/dashboard'; // Redirect to dashboard
            } else {
                errorMessage.value = 'Invalid email or password.';
            }
        };

        const errorMessage = reactive({ value: '' });

        return {
            formData,
            validation,
            login,
            errorMessage,
        };
    },
};
</script>

<style>
/* Add your styles */
</style>