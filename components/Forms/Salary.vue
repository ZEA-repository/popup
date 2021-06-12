<template>
  <div>
    <ValidationObserver v-slot="{ invalid }">
      <form
        @submit.prevent="onSubmit"
        method="post"
        class="calculation"
        id="form1"
      >
        <ValidationProvider
          name="salary"
          :rules="{ required: true, min: 5 }"
          v-slot="{ errors, reset }"
        >
          <div class="input-wrapper">
            <label for="salary"> <h2>Ваша зарплата в месяц</h2> </label>
            <input
              name="salary"
              type="text"
              placeholder="Введите данные"
              v-model="formatedSalary"
              @blur="isInputActive = false"
              @focus="isInputActive = true"
              :class="{ 'input-border-invalid': errors.length > 0 }"
            />
            <span v-show="errors.length > 0" class="input-invalid">
              {{ errors[0] }}
            </span>
          </div>
          <button
            type="submit"
            class="btn btn-calculation"
            @click="reset"
            :disabled="invalid"
          >
            Рассчитать
          </button>
        </ValidationProvider>
      </form>
    </ValidationObserver>
    <Checkbox :all="payments" />
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import Checkbox from "./Checkbox";
export default {
  name: "salary",
  data() {
    return {
      salary: 0,
      isInputActive: false,
      total: 260000,
      payments: [],
    };
  },
  computed: {
    formatedSalary: {
      get: function() {
        if (this.salary == 0) return "";
        if (this.isInputActive || this.salary < 10000)
          return this.salary.toString();
        return (
          this.salary.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + " ₽"
        );
      },
      set: function(val) {
        let newVal = parseInt(val.replace(/[^0-9]/g, ""));
        this.salary = newVal | 0;
      },
    },
  },
  methods: {
    onSubmit() {
      const annualTax = this.salary * 12 * 0.13;

      let countPayments = Math.floor(this.total / annualTax);
      let paymentInYear = Math.floor(annualTax);
      let lastYear = Math.ceil(this.total % annualTax);
      this.payments = [];
      for (let i = 0; i < countPayments; i++) {
        this.payments.push(paymentInYear);
      }
      this.payments.push(lastYear);
    },
  },

  components: {
    Checkbox,
    ValidationObserver,
    ValidationProvider,
  },
};
</script>
