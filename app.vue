<script setup lang="ts">
const { data, pending } = useFetch('/api/info')

const date = new Date();
</script>

<template>
  <div>
    <h1>Hello World &ndash; {{ date.toLocaleString() }}</h1>
    <pre v-if="!pending">{{ JSON.stringify(data, null, '  ') }}</pre>
  </div>
</template>

