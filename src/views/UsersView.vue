<template>
  <v-container>
    <v-row>
      <v-col class="">
        <v-data-table-server
          v-model:items-per-page="itemsPerPage"
          :search="search"
          :headers="headers"
          :items-length="totalItems"
          :items="serverItems"
          :loading="loading"
          item-value="name"
          @update:options="loadItems"
        >
        </v-data-table-server>
      </v-col>
    </v-row>
  </v-container>
  </template>

<script>
const desserts = [
  {
    id: 159,
    name: 'John Doe',
    email: 'johndoe@admin.com',
    roles: 'Admin, Business Admin',
    carbs: 24,
    last_login: '14 November 2023 05:00 AM',
  },
]

const FakeAPI = {
  async fetch ({ page, itemsPerPage, sortBy, search }) {
    return new Promise(resolve => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage
        const end = start + itemsPerPage
        const items = desserts.slice().filter(item => {
          if (search.name && !item.name.toLowerCase().includes(search.name.toLowerCase())) {
            return false
          }

          // eslint-disable-next-line sonarjs/prefer-single-boolean-return
          if (search.calories && !(item.calories >= Number(search.calories))) {
            return false
          }

          return true
        })

        if (sortBy.length) {
          const sortKey = sortBy[0].key
          const sortOrder = sortBy[0].order
          items.sort((a, b) => {
            const aValue = a[sortKey]
            const bValue = b[sortKey]
            return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
          })
        }

        const paginated = items.slice(start, end)

        resolve({ items: paginated, total: items.length })
      }, 500)
    })
  },
}

export default {
  data: () => ({
    itemsPerPage: 10,
    headers: [
      {
        title: 'Id',
        align: 'start',
        sortable: false,
        key: 'id',
      },
      { title: 'Full Name', key: 'name', align: 'end' },
      { title: 'Email', key: 'email', align: 'end' },
      { title: 'Roles (g)', key: 'roles', align: 'end' },
      { title: 'Last Login (%)', key: 'last_login', align: 'end' },
      { title: 'Actions', key: 'actions', align: 'end' },
    ],
    serverItems: [],
    loading: true,
    totalItems: 0,
    name: '',
    calories: '',
    search: '',
  }),
  watch: {
    name () {
      this.search = String(Date.now())
    },
    calories () {
      this.search = String(Date.now())
    },
  },
  methods: {
    loadItems ({ page, itemsPerPage, sortBy }) {
      this.loading = true
      FakeAPI.fetch({ page, itemsPerPage, sortBy, search: { name: this.name, calories: this.calories } }).then(({ items, total }) => {
        this.serverItems = items
        this.totalItems = total
        this.loading = false
      })
    },
  },
}
</script>