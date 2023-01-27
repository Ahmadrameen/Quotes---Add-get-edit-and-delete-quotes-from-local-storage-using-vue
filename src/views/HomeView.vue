<template>
  <div>
    <router-link to="/form" class="float-right p-1 rounded-md"
      >⭐ New</router-link
    >
    <h1 class="text-3xl font-bold w-96 mb-10">Quotes 🖊️</h1>
    <input
      type="text"
      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-5"
      placeholder="Search quote or author"
      v-model="search"
      @input="onSearch"
      v-if="quotes.length > 0"
    />
    <ul role="list" class="space-y-3">
      <li
        v-for="data in filtered.slice().reverse()"
        :key="data.id"
        class="overflow-hidden rounded-md bg-white px-6 py-4 shadow"
      >
        <p class="text-lg text-md mb-5">{{ data.text }}</p>
        <p class="text-sm font-light text-gray-400 mb-2">
          <span class="bg-[#00bd7e] py-1 px-3 rounded-sm text-white">🧔 Author</span>
          {{ data.author }}
        </p>
        <p class="text-sm font-light text-gray-400">
          <span class="bg-[#00bd7e] py-1 px-[0.97rem] rounded-sm text-white"
            >🎹 Genre</span
          >
          {{ data.genre }}
        </p>

        <div class="float-right opacity-25 hover:opacity-100">
          <router-link :to="`/edit?id=${data.id}`" class="hover:rounded-md">✏️</router-link>
          <button @click="deleteQuote(data.id)">❎</button>
        </div>
        <div class="text-[10px] mt-3 text-gray-300 w-auto">
          {{ new Date(data.updated_at).toDateString() }}
          {{ new Date(data.updated_at).toLocaleTimeString() }}
        </div>
      </li>
    </ul>
    <div v-if="filtered.length === 0">
      <button
        type="button"
        class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span class="text-6xl"> 🖊️ </span>

        <span class="mt-2 block text-sm font-medium text-gray-900"
          >Add a quote please!</span
        >
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      text: "",
      author: "",
      search: "",
      genre: "",
    };
  },
  computed: {
    ...mapState({
      quotes: (state) => state.data,
    }),
    filtered() {
      return this.quotes.filter((quote) => {
        return (
          quote.text.toLowerCase().includes(this.search.toLowerCase()) ||
          quote.author.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
  methods: {
    deleteQuote(id) {
      if (confirm("Do you really want to delete?")) {
        this.$store.commit("delete", id);
      }
    },
  },
};
</script>
