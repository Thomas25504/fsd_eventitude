<template>
    <div class="event_container">
        <div class="event_name">
            <h1>{{ event.name }}</h1>
        </div>
        <div class="event_info">
            <p>{{ event.description }}</p>
            <p>{{ event.date }}</p>
            <p>{{ event.time }}</p>
            <p>{{ event.location }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            event: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style>
    .event_container {
        background-color: #f0f0f0;
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        margin: 10px;
        padding: 10px;
        max-width: 20vw;

        border-radius: 20px;
    }

    .event_name {
        font-size: 1.5em;
        font-weight: bold;
    }

    .event_info {
        display: flex;
        flex-direction: column;
    }
</style>