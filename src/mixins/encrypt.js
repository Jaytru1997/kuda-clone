import CryptoJS from "crypto-js";
const secret = "c3L@tLHHtU*$VzaD-XRIILM+ZghvFLL=-TCS*XRD=";

export default {
  methods: {
    encryptData(val) {
      let ciphertext = CryptoJS.AES.encrypt(val, secret).toString();
      return ciphertext;
    },
    decryptData(val) {
      const decryptData = CryptoJS.AES.decrypt(val, secret).toString(
        CryptoJS.enc.Utf8
      );
      return decryptData;
    },
  },
};
