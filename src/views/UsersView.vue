<template>
  <datatable :title="'Users'" :headers="headers" :records="users" :actions="userActions">
    <!-- <template v-slot:content>asdasdsd
      <template v-slot:item.status="{ value }">
        <v-chip :color="getColor(value)">
          {{ value }}
        </v-chip>
      </template>
    </template> -->
  </datatable>
</template>

<script>
export default {
  data: () => ({
    users: [],
    userActions: {
      createUrl: '/users/create',
      updateUrl: '/users/4/edit',
    },
    headers: [
      {
        title: 'Id',
        align: 'start',
        sortable: false,
        key: 'id'
      },
      {
        title: 'Full Name',
        align: 'start',
        key: 'name'
      },
      { title: 'Email', key: 'email' },
      { title: 'Roles', key: 'roles' },
      { title: 'Status', key: 'status' },
      { title: 'Last Login', key: 'last_login', sortable: false },
      { title: 'Actions', key: 'actions', sortable: false }
    ]
  }),

  created() {
    this.initialize()
  },

  methods: {
    getColor(status) {
      if (status == 'active') return 'green'
      else if (status == 'inactive') return 'orange'
      else return 'red'
    },

    initialize() {
      this.users = [
        {
          id: 43435,
          name: 'Admin',
          roles: 'Admin, SuperAdmin',
          email: 'admin@admin.com',
          status: 'active',
          last_login: '11 Novemeber 2023, 05:06 PM'
        },
      ]
    }
  }
}
</script>
