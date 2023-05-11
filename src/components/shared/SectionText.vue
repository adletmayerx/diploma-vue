<script lang="ts" setup>
import clsx from "clsx";

type Props = {
  className?: string;
};

defineProps<Props>();
</script>

<template>
  <p :class="clsx('text-xs text-gray-50 xl:text-sm&quot;, className && className')">
    <slot></slot>
  </p>
</template>
