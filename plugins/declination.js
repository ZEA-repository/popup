import Vue from "vue";

export default () => {
  Vue.filter("declination", function(value) {
    if (!value) return "";
    const arr = [
      "ый",
      "ый",
      "ой",
      "ий",
      "ый",
      "ый",
      "ой",
      "ой",
      "ой",
      "ый",
      "ый",
    ];
    const cpm = value < 10 || value > 21 ? arr[value] : arr[0];
    return `${value}-${cpm}`;
  });
};
