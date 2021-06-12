<template>
  <section class="popup-content-wrapper">
    <nuxt-link to="/" class="close-btn-wrapper">
      <div class="close-btn"></div>
    </nuxt-link>
    <div class="tax-descripton">
      <h1>Налоговый вычет</h1>
      <p>
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет <br />
        не более 13&#37; от своего официального годового дохода.
      </p>
    </div>

    <Salary />

    <div class="categories">
      <h2>Что уменьшаем ?</h2>
      <div class="btn-categories-wrapper">
        <button
          @click="isDesending = !isDesending"
          class="btn-categories"
          :class="{ active: isDesending }"
        >
          Платеж
        </button>
        <button
          @click="isDesending = !isDesending"
          class="btn-categories"
          :class="{ active: !isDesending }"
        >
          Срок
        </button>
      </div>
    </div>
    <button class="btn-add">Добавить</button>
  </section>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import Salary from "./Forms/Salary";
export default {
  name: "popup",
  data() {
    return {
      isDesending: true,
    };
  },
  components: {
    Salary,
    ValidationObserver,
    ValidationProvider,
  },
};
</script>
