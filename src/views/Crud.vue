<template>
  <div>
    <h1>Vue.js firebase y validación</h1>

    <ul class="lista">
      <li
        v-for="(user, index) in users"
        :key="index"
        class="user"
      >
        <span>{{ user.name }} - {{ user.email }}</span>
        <button @click="removeUser(user)">
          X
        </button>
      </li>
    </ul>
    <form
      id="form"
      @submit.prevent="addUser"
    >
      <input
        v-model="newUser.name"
        placeholder="Agregar nombre"
      >
      <input
        v-model="newUser.email"
        placeholder="Agregar email"
      >
      <input
        type="submit"
        value="Agregar usuario"
      >
    </form>
  </div>
</template>

<script>
import { dbFirestore } from "../plugins/vuefire";
export default {
  data() {
    return {
      users: [],
      newUser: {}
    };
  },
  methods: {
    addUser() {
      dbFirestore.collection("users").add({
        name: this.newUser.name,
        email: this.newUser.email
      });
    },
    removeUser(user) {
      dbFirestore
        .collection("users")
        .doc(user.id)
        .delete();
    }
  },
  firestore: {
    users: dbFirestore.collection("users").orderBy("name", "asc")
  }
};
</script>

<style lang="scss" scoped>
.lista {
  padding-top: 1rem;
}
</style>
