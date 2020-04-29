<template>
  <q-page >
    <div class="q-pa-md">
      <q-table
              title="Treats"
              :data="data"
              :columns="columns"
              row-key="id"
              :filter="filter"
              :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="primary" :disable="loading" label="TAMBAH DATA BARANG" to="/admin/InputDataBarang/"/>
<!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="pageview" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'ID BARANG',
          align: 'left',
          field: row => row.idbarang,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namabarang', align: 'center', label: 'NAMA BARANG', field: 'namabarang', sortable: true },
        { name: 'stokbarang', align: 'center', label: 'STOK BARANG', field: 'stokbarang', sortable: true },
        { name: 'habisterjual', align: 'center', label: 'HABIS TERJUAL', field: 'habisterjual', sortable: true },
        { name: 'sisabarang', label: 'SISA BARANG', align: 'center', field: 'sisabarang' }
      ],
      data: [
        {
          idbarang: 'GB01',
          namabarang: 'AIR MINUM KEMASAN BOTOL',
          stokbarang: '250 BUAH',
          habisterjual: '178 BUAH',
          sisabarang: '72 BUAH'
        },
        {
          idbarang: 'GB02',
          namabarang: 'GALON',
          stokbarang: '150 BUAH',
          habisterjual: '100 BUAH',
          sisabarang: '50 BUAH'
        },
        {
          idbarang: 'GB03',
          namabarang: 'MINUMAN RASA JERUK',
          stokbarang: '350 BUAH',
          habisterjual: '281 BUAH',
          sisabarang: '69 BUAH'
        },
        {
          idbarang: 'GB04',
          namabarang: 'MINUMAN RASA SEMANGKA',
          stokbarang: '100 BUAH',
          habisterjual: '98 BUAH',
          sisabarang: '2 BUAH'
        },
        {
          idbarang: 'GB05',
          namabarang: 'MINUMAN RASA APEL',
          stokbarang: '309 BUAH',
          habisterjual: '80 BUAH',
          sisabarang: '229 BUAH'
        },
        {
          idbarang: 'GB06',
          namabarang: 'MINUMAN RASA NANAS',
          stokbarang: '150 BUAH',
          habisterjual: '78 BUAH',
          sisabarang: '72 BUAH'
        },
        {
          idbarang: 'GB01',
          namabarang: 'AIR MINUM KEMASAN BOTOL',
          stokbarang: '90 BUAH',
          habisterjual: '75 BUAH',
          sisabarang: '15 BUAH'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
