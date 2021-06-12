import { extend } from 'vee-validate';
import { required, min, regex } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Поле обязательно для заполнения"
});

extend("min", {
  ...min,
  message: "Минимальная зарплата 10 000 ₽"
});

extend("regex", {
  ...regex,
  message: "Введите сумму"
});






