<template>
  <h2 :class="view">
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    title: {
      type: String,
      required: true,
    },
    view: {
      type: String,
      required: true,
    },
  },
};
</script>
