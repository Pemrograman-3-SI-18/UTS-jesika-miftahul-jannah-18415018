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
          <span class="text-h6 text-weight-black q-pa-md">
        <span class="text-black-14">DATA TRANSAKSI PENJUALAN</span>
      </span>
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
          label: 'ID PENJUALAN',
          align: 'left',
          field: row => row.idpenjualan,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namapembeli', align: 'center', label: 'NAMA PEMBELI', field: 'namapembeli', sortable: true },
        { name: 'alamat', align: 'center', label: 'ALAMAT', field: 'alamat', sortable: true },
        { name: 'namabarang', align: 'center', label: 'NAMA BARANG', field: 'namabarang', sortable: true },
        { name: 'harga', label: 'HARGA', align: 'center', field: 'harga' },
        { name: 'sisabarang', label: 'SISA BARANG', align: 'center', field: 'sisabarang' },
        { name: 'pembayaran', label: 'PEMBAYARAN', align: 'center', field: 'pembayaran' }
      ],
      data: [
        {
          idpenjualan: 'PEN001',
          namapembeli: 'JESIKA MIFTAHUL',
          alamat: 'JL KEMERDEKAAN NO.123',
          namabarang: 'AIR MINUM KEMASAN BOTOL',
          harga: '20.000',
          sisabarang: '72 BUAH',
          pembayaran: 'BANK BCA'
        },
        {
          idpenjualan: 'PEN005',
          namapembeli: 'BAHRI',
          alamat: 'JL KATIBUNG RAYA TJ.RATU',
          namabarang: 'MINUMAN RASA APEL',
          harga: '35.000',
          sisabarang: '229 BUAH',
          pembayaran: 'ALFAMARET'
        },
        {
          idpenjualan: 'PEN003',
          namapembeli: 'NAILA TALITA',
          alamat: 'JL RA KARTINI',
          namabarang: 'MINUMAN RASA SEMANGKA',
          harga: '15.000',
          sisabarang: '2 BUAH',
          pembayaran: 'BANK MANDIRI SYARIAH'
        },
        {
          idpenjualan: 'PEN004',
          namapembeli: 'ZIANA APRILIA',
          alamat: 'GANG CENGKEH NO.4',
          namabarang: 'MINUMAN RASA JERUK',
          harga: '7.000',
          sisabarang: '69 BUAH',
          pembayaran: 'GOPAY'
        },
        {
          idpenjualan: 'PEN002',
          namapembeli: 'BRAM WIBOWO',
          alamat: 'JL GATOT SUPROTO NO.39',
          namabarang: 'GALON',
          harga: '45.000',
          sisabarang: '50 BUAH',
          pembayaran: 'BANK BRI'
        },
        {
          idpenjualan: 'PEN001',
          namapembeli: 'TORO ABIANTORO',
          alamat: 'BUMI WARAS NO.44',
          namabarang: 'MINUMAN RASA NANAS',
          harga: '20.000',
          sisabarang: '72 BUAH',
          pembayaran: 'BANK BRI'
        },
        {
          idpenjualan: 'PEN002',
          namapembeli: 'MINAH SARI',
          alamat: 'JL KEMERDEKAAN NO.123',
          namabarang: 'GALON',
          harga: '45.000',
          sisabarang: '50 BUAH',
          pembayaran: 'BANK BCA'
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
