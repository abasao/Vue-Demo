<template>
  <div class="demo">
      <input type="text" v-model="title"><br>
      <h1>{{title}}</h1>
      <div v-if="showName">
        <p>{{user.firstName}}, {{user.lastName}}</p>
        <p v-text="fullName"></p>
        <ul>
            <li v-for="(item, index) in items" :key="index">{{item.title}}</li>
        </ul>
        <button @click="greet">Say your greetings</button>
        <br>
        <input type="text" @keyup="pressKey" @keyup.enter="enterHit">
        <br>
        <label> First Name:</label>  
        <input type="text" v-model="user.firstName">
        <label> Last Name:</label>  
        <input type="text" v-model="user.lastName">
        <h3>{{ fullName }}</h3>
        <h2>{{ msg }}</h2>
      </div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  props: {
      msg: {
          type: String,
          default: 'foobar'
      }
  },
  data() {
      return {
          title: 'Hello World',
          user: {
              firstName: 'John',
              lastName: 'Doe',
          },
          showName: true,
          items: [
              {title: "item 1"},
              {title: "item 2"},
              {title: "item 3"},
              {title: "item 4"},
              {title: "item 5"},
          ]
      }
  },
  methods: {
      greet: function() {
          let msg='say hi';
          alert(msg);
      },
      pressKey: function(e){
      },
      enterHit: function(e){
          e.target.value='';
      }
  },
  computed: {
      fullName: function () {
        return this.user.firstName + ' ' + this.user.lastName          
      }
  }
}
</script>

<style scoped>

</style>
