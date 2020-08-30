<template>
    <div>
        <button class="collapsible" v-on:click.self="open = !open">{{ title }}</button>
        <div v-if="open" class="content">
            <ul>
            <li v-for="item in items"> {{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false,
        };
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style scoped>
.collapsible {
  background-color: #A7A7A7;
  color: black;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active, .collapsible:hover {
  background-color: #512888;
  color: white;
}
</style>