<template>
  <div>
    <div class="bg-white rounded-md p-10">
      <h1 class="text-3xl font-bold w-96 mb-10">New 🖊️</h1>
      <form @submit.prevent="addQuote">
        <label for="qouteText" class="block text-sm font-medium text-gray-700"
          >Quotes</label
        >
        <div class="mt-1 mb-2">
          <input
            type="text"
            required
            v-model="quoteText"
            name="qouteText"
            id="qouteText"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            placeholder="Write the quote here!"
          />
        </div>

        <label for="quoteAuthor" class="block text-sm font-medium text-gray-700"
          >Author</label
        >
        <div class="mt-1 mb-2">
          <input
            type="text"
            required
            pattern="[a-zA-Zа-яА-Я\s]+"
            v-model="quoteAuthor"
            name="quoteAuthor"
            id="quoteAuthor"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            placeholder="Write author name here!"
          />
        </div>

        <label for="quoteGenre" class="block text-sm font-medium text-gray-700"
          >Genre</label
        >
        <div class="mt-1 mb-2">
          <input
            type="text"
            pattern="[a-zA-Zа-яА-Я\s]+"
            required
            v-model="quoteGenre"
            name="quoteGenre"
            id="quoteGenre"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            placeholder="And finally write genre here!"
          />
        </div>
        <br />
        <button
          type="submit"
          class="inline-flex items-center rounded-md border border-transparent bg-[#00bd7e] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#00bd7eb4] focus:outline-none focus:ring-2 focus:bg-[#00bd7e]focus:ring-offset-2"
        >
          Add Quote
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quoteText: "",
      quoteAuthor: "",
      quoteGenre: "",
      data: [],
    };
  },
  computed: {
    quotes() {
      return quotes.data;
    },
  },
  methods: {
    addQuote() {
      this.$store.commit("add", {
        text: this.quoteText,
        author: this.quoteAuthor,
        genre: this.quoteGenre,
        id: +new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      });
      this.quoteText = "";
      this.quoteAuthor = "";
      this.quoteGenre = "";
      this.$router.push("/");
    },
  },
};
</script>
