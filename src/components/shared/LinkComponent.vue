<script lang="ts" setup>
import clsx from "clsx";

type Props = {
  link: string;
  className?: string;
};

defineProps<Props>();
</script>

<template>
  <a
    :href="link"
    target="_blank"
    :class="clsx('transition-opacity duration-300 hover:opacity-70', className && className)"
  >
    <slot></slot>
  </a>
</template>
