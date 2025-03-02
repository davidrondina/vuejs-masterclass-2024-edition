<script setup lang="ts">
import { useRoute } from "vue-router";

const router = useRoute();
</script>
<template>
  <div>
    <!-- Use route.params to get the id from the url path -->
    <h1>Project {{ router.params.id }}</h1>
  </div>
</template>
