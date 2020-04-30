<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <wired-card elevation="3" fill="red">
      <p>Elevation: 3</p>
    </wired-card>
  </div>
</template>

<script>
import { WiredCard } from "wired-elements";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
