<template>
    <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'jobdetails', params: { id: job.id } }">
            <p> {{ job.name }}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                { name: 'Ninja Web Developer', id: 1, details: 'lorem' },
                { name: 'Ninja UIUX', id: 2, details: 'lorem' },
                { name: 'Ninja Web Designer', id: 3, details: 'lorem' }
            ]
        }
    }
}
</script>

<style>
.job {
    background-color: #f4f4f4;
    padding: 10px;
    margin: 5px auto;
    width: 400px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
}

.job:hover {
    background-color: #ddd;
    color: white;
}

.job a {
    text-decoration: none;
}
</style>