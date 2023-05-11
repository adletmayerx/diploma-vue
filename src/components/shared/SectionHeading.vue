<script lang="ts" setup>
import clsx from "clsx";

type Props = {
  text: string;
  borderColor?: string;
};

withDefaults(defineProps<Props>(), {
  borderColor: "border-gray-200",
});
</script>

<template>
  <h2 :class="clsx('w-full border-b pb-7 text-lg text-gray-50 md:text-xl', borderColor)">{{ text }}</h2>
</template>
