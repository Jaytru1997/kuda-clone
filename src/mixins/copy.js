export default {
  methods: {
    async copyPhrase(val) {
      const phrase = val;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(phrase);
      }
      const elem = document.createElement("textarea");
      elem.value = phrase;
      document.body.appendChild(elem);
      elem.select();
      document.execCommand("copy");
      document.body.removeChild(elem);
      return true;
    },
  },
};
