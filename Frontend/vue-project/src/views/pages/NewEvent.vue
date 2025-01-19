<template>
    <div>
        <h1>New Event</h1>
        <form @submit.prevent="handleSubmit">
            <label for="title">Event Name: </label><br/>
            <input type="text" name="title" v-model="title" placeholder="Title"/>
            <div v-show="submitted && !title">Title is required</div>

            <br /><br />

            <label for="description">Description: </label>
            <input type="text" name="description" v-model="description" placeholder="Description"/>
            <div v-show="submitted && !description">Description is required</div>

            <br /><br />

            <label for="startDate"> Start Date: </label>
            <input type="date" name="date" v-model="date" placeholder="Date"/>
            <div v-show="submitted && !date">Date is required</div>

            <br /><br />

            <label for="closeRegistration">Close Registration: </label>
            <input type="date" name="date" v-model="date" placeholder="Date"/>
            <div v-show="submitted && !time">Time is required</div>

            <br /><br />

            <label for="location">Location: </label>
            <input type="text" name="location" v-model="location" placeholder="Location"/>
            <div v-show="submitted && !location">Location is required</div>

            <br /><br />

            <label for="maxattendees">Max Atendees: </label>
            <input type="number" name="max_attendees" v-model="max_attendees" placeholder="Max Atendees"/>
            <div v-show="submitted && !location">Max atendees is required</div>

            <br /><br />

            <button>Create Event</button>

        </form>
    </div>
</template>

<style scoped>
    form {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #f9f9f9;
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
        display: block;
    }

    input[type="text"],
    input[type="date"],
    input[type="time"],
    input[type="number"] {
        width: 95%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #45a049;
    }

    div {
        color: red;
        font-size: 0.9em;
    }
</style>