<template>
  <form
    v-if="all.length > 0"
    id="form-checkbox"
    class="checkbox-form"
  >
    <h2>Итого можете внести в качестве досрочных:</h2>
    <div
      v-for="(payment, i) in all"
      :key="i"
      class="form-group"
    >
      <label class="check">
        <input
          :value="i"
          v-model="checked"
          type="checkbox"
          class="checkbox"
        />
        <span class="checkmark" />
        <p>
          <span> {{ payment | separetedNumber }} рублей </span>
          в {{ (i + 1) | declination }} год
        </p>
      </label>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    all: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      checked: [],
    };
  },
  watch: {
    all(newVal) {
      this.checked = [...newVal.map(() => false)];
    },
  },
  filters: {
    separetedNumber(num) {
      if (!num) return "";
      return num.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
    },
  },
};
</script>
