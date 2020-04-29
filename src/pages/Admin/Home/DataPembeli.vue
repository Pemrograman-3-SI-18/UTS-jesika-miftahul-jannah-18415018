<template>
  <q-page >
    <div class="bg-primary"></div>
    <div class="row bg-primary"></div>
    <div class="col"></div>
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
          <q-btn color="primary" :disable="loading" label="TAMBAH DATA PEMBELI" to="/admin/InputDataPembeli/"/>
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
          label: 'ID PEMBELI',
          align: 'left',
          field: row => row.idpembeli,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namapembeli', align: 'center', label: 'NAMA PEMBELI', field: 'namapembeli', sortable: true },
        { name: 'email', align: 'center', label: 'EMAIL', field: 'email', sortable: true },
        { name: 'alamat', align: 'center', label: 'ALAMAT', field: 'alamat', sortable: true },
        { name: 'nomortelphone', label: 'NOMOR TELPHONE', align: 'center', field: 'nomortelphone' }
      ],
      data: [
        {
          idpembeli: 'KB001',
          namapembeli: 'JESIKA MIFTAHUL',
          email: 'JESIKAMIFTAHUL@GMAIL.COM',
          alamat: 'JL KEMERDEKAAN NO.123',
          nomortelphone: '089878986741'
        },
        {
          idpembeli: 'KB005',
          namapembeli: 'BAHRI',
          email: 'BAHRI123@GMAIL.COM',
          alamat: 'JL KATIBUNG RAYA TJ.RATU',
          nomortelphone: '081298893410'
        },
        {
          idpembeli: 'KB003',
          namapembeli: 'NAILA TALITA',
          email: 'NAILALAMPUNG@GMAIL.COM',
          alamat: 'JL RA KARTINI',
          nomortelphone: '081752368873'
        },
        {
          idpembeli: 'KB004',
          namapembeli: 'ZIANA APRILIA',
          email: 'NAILALAMPUNG@GMAIL.COM',
          alamat: 'GANG CENGKEH NO.4',
          nomortelphone: '089972211309'
        },
        {
          idpembeli: 'KB002',
          namapembeli: 'BRAM WIBOWO',
          email: 'BRAMWIBOWOWOO@GMAIL.COM',
          alamat: 'JL GATOT SUPROTO NO.39',
          nomortelphone: '089799892315'
        },
        {
          idpembeli: 'KB001',
          namapembeli: 'TORO ABIANTORO',
          email: 'ABIANTORO_TORO@GMAIL.COM',
          alamat: 'BUMI WARAS NO.44',
          nomortelphone: '081223456712'
        },
        {
          idpembeli: 'KB002',
          namapembeli: 'MINAH SARI',
          email: 'MINAH_SARI_190@GMAIL.COM',
          alamat: 'JL KEMERDEKAAN NO.123',
          nomortelphone: '081334127654'
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
