<template>
  <div class="users">
    <h1>Users say Hello</h1>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <input type="checkbox" class="toggle" v-model="user.contacted">
        <span :class="{contacted: user.contacted}">
          {{user.name}}: {{user.email}} <button @click="deleteUser(index)">Delete</button>
        </span>
      </li>
    </ul>

    <form @submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="NAME">
      <br>
      <input type="text" v-model="newUser.email" placeholder="EMAIL">
      <br>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>
<script>
export default {
  name: 'users',
  data () {
    return {
      newUser: {},
      users: [
        {
          name: "JOHN DOE",
          email: "JOHNDOE@email.com",
          contacted: false
        },
        {
          name: "Jane Doe",
          email: "JaneDoe@email.com",
          contacted: false
        },
        {
          name: "Jack Frost",
          email: "JackFrost@email.com",
          contacted: false
        }
      ]
    }
  },
  methods: {
    addUser: function (e) {
      let new_user = {
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false       
      };
      this.users.push(new_user);
      e.preventDefault();
    },
    deleteUser: function(index){
      this.users.splice(index, 1);
    }
  },
  created: function () {
    this.$http.get("http://jsonplaceholder.typicode.com/users")
        .then(function(response){
          this.users = response.data;
        });
  }
}
</script>

<style scoped>
  .contacted {
    background-color: rgb(236, 197, 197);
    text-decoration: line-through;
  }
</style>

