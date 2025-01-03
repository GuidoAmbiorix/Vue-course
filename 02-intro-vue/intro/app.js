const { createApp, ref } = Vue;

const app = createApp({
  //   template: `
  //   <h1>{{message}}</h1>
  //   <p>Desde App.Js</p>
  //     `,

  setup() {
    const message = ref("I'm batman");

    // setTimeout(() => {
    //   message.value = "Soy goku";
    // }, 5000);

    const changeQuote = () => {
      message.value = "hola, soy goku";
    };
    return {
      message,
      changeQuote,
    };
  },
});

app.mount("#myApp");
