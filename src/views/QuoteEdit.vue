<template>
  <div>
    <div class="bg-white rounded-md p-10">
    <h1 class="text-3xl font-bold w-96 mb-10">Edit 🖊️</h1>

      <form @submit.prevent="editQuote">
        <label for="qouteText" class="block text-sm font-medium text-gray-700"
          >Quote</label
        >
        <div class="mt-1 mb-2">
          <input
          required
            type="text"
            v-model="quoteText"
            name="qouteText"
            id="qouteText"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Write author name here!"
          />
        </div>

        <label for="quoteGenre" class="block text-sm font-medium text-gray-700"
          >Genre</label
        >
        <div class="mt-1 mb-2">
          <input
            type="text"
            required
            pattern="[a-zA-Zа-яА-Я\s]+"
            v-model="quoteGenre"
            name="quoteGenre"
            id="quoteGenre"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="And finally write genre here!"
          />
        </div>
        <br />
        <button
          type="submit"
          class="inline-flex items-center rounded-md border border-transparent bg-[#00bd7e] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#00bd7eb4] focus:outline-none focus:ring-2 focus:bg-[#00bd7e]focus:ring-offset-2"
        >
          Save Edit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      quoteText: "",
      quoteAuthor: "",
      quoteGenre: "",
      data: [],
      quotes: [],
      currentQuote: null,
    };
  },
  computed: {
    ...mapState({
      quote: (state) => state.single,
    }),
  },
  methods: {
    editQuote() {
      this.$store.commit("edit", {
        text: this.quoteText,
        author: this.quoteAuthor,
        genre: this.quoteGenre,
        id: +this.$route.query.id,
        updated_at: new Date(),
        created_at:this.quote.created_at
      });

      this.quoteText = "";
      this.quoteAuthor = "";
      this.quoteGenre = "";
      this.$router.push("/");
    },
    getQuote() {
      this.$store.commit("getById", this.$route.query.id);
      this.quoteText = this.quote.text;
      this.quoteAuthor = this.quote.author;
      this.quoteGenre = this.quote.genre;
    },
  },
  mounted() {
    this.getQuote();
  },
};
</script>
