<script lang="ts">
import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_API_URL

export default {
  name: 'AppointmentsView',
  data() {
    return {
      appointments: null, // Propriété réactive pour stocker les données
    }
  },
  mounted() {
    this.fetchAppointments()
  },
  methods: {
    async fetchAppointments() {
      try {
        const response = await axios({
          method: 'get',
          url: '/appointments',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        })
        this.appointments = response.data // Mettre à jour la propriété réactive
      } catch (error) {
        console.error('Erreur lors de la récupération des RDV :', error)
      }
    },
  },
}
</script>

<template>
  <h1>Coucou ici les rdv</h1>

  <div>RDV:</div>
  <div>{{ this.appointments }}</div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
