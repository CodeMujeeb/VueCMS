<template>
  <v-data-table :headers="headers" :items="records">
    <template v-slot:top>
      <v-toolbar flat class="toolbar-content">
        <v-toolbar-title
          ><div class="d-flex grow flex-wrap" style="padding: 15px 0 !important">
            <div class="text-start mb-n6 sheet-success pa-5">
              <i
                aria-hidden="true"
                class="v-icon notranslate mdi mdi-clipboard-text theme--dark"
                style="font-size: 32px"
              ></i>
            </div>
            <div class="card-title ml-4">
              <div class="font-weight-light">{{ title }}</div>
            </div>
          </div></v-toolbar-title
        >
        <v-text-field
          color="teal"
          label="Search..."
          variant="underlined"
          single-line
        ></v-text-field>

        <router-link v-if="actions?.createUrl" :to="actions?.createUrl">
          <v-btn color="teal" variant="flat" class="ml-5 mb-5">
            <v-icon>mdi-plus</v-icon>Create</v-btn
          >
        </router-link>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="small" class="me-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <p>No Data</p>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: ['headers', 'records', 'title', 'actions'],
  data: () => ({
    dialogDelete: false,
    editedIndex: -1
  }),

  watch: {
    dialogDelete(val) {
      val || this.closeDelete()
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.records.indexOf(item)
    },

    deleteItem(item) {
      this.editedIndex = this.records.indexOf(item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.records.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedIndex = -1
      })
    }
  }
}
</script>

<style scoped>
.v-toolbar-title div,
.toolbar-content {
  background-color: #fff;
}
.toolbar-content {
  height: 120px;
}
.sheet-success {
  background-color: #3d8a7b !important;
  border-radius: 3px;
}
.sheet-success i {
  color: #fff;
}
</style>
