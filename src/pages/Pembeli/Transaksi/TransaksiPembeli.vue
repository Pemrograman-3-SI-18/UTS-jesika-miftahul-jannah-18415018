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
        <span class="text-black-14">DATA TRANSAKSI PEMBELIAN</span>
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
          label: 'ID TRANSAKSI',
          align: 'left',
          field: row => row.idtransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namapembeli', align: 'center', label: 'NAMA PEMBELI', field: 'namapembeli', sortable: true },
        { name: 'alamat', align: 'center', label: 'ALAMAT', field: 'alamat', sortable: true },
        { name: 'kodebarang', label: 'KODE BARANG ', align: 'center', field: 'kodebarang' },
        { name: 'pembayaran', label: 'PEMBAYARAN', align: 'center', field: 'pembayaran' },
        { name: 'pengiriman', label: 'PENGIRIMAN', align: 'center', field: 'pengiriman' },
        { name: 'total', label: 'TOTAL ', align: 'center', field: 'total' }
      ],
      data: [
        {
          idtransaksi: 'JNK0101',
          namapembeli: 'JESIKA MIFTAHUL',
          alamat: 'JL KEMERDEKAAN NO.123',
          kodebarang: 'GB01',
          pembayaran: 'BANK BCA',
          pengiriman: 'GOJEK',
          total: '30.000'
        },
        {
          idtransaksi: 'JNK0101',
          namapembeli: 'BAHRI',
          alamat: 'JL KATIBUNG RAYA TJ.RATU',
          kodebarang: 'GB05',
          pembayaran: 'ALFAMART',
          pengiriman: 'SICEPAT',
          total: '35.000'
        },
        {
          idtransaksi: 'JNK0101',
          namapembeli: 'NAILA TALITA',
          alamat: 'JL RA KARTINI',
          kodebarang: 'GB04',
          pembayaran: 'BANK MANDIRI SYARIAH',
          pengiriman: 'JNT',
          total: '22.000'
        },
        {
          idtransaksi: 'JNK0101',
          namapembeli: 'ZIANA APRILIA',
          alamat: 'GANG CENGKEH NO.4',
          kodebarang: 'GB03',
          pembayaran: 'GOPAY',
          pengiriman: 'SICEPAT',
          total: '18.000'
        },
        {
          idtransaksi: 'JNK0101',
          namapembeli: 'BRAM WIBOWO',
          alamat: 'JL GATOT SUPROTO NO.39',
          kodebarang: 'GB02',
          pembayaran: 'CASH ON DELIVERY',
          pengiriman: 'CASH ON DELIVERY',
          total: '45.000'
        },
        {
          idtransaksi: 'JNK0301',
          namapembeli: 'TORO ABIANTORO',
          alamat: 'BUMI WARAS NO.44',
          kodebarang: 'GB01',
          pembayaran: 'BANK BRI',
          pengiriman: 'KANTOR POS',
          total: '25.000'
        },
        {
          idtransaksi: 'JNK0105',
          namapembeli: 'MINAH SARI',
          alamat: 'JL KEMERDEKAAN NO.123',
          kodebarang: 'GB02',
          pembayaran: 'BANK BCA',
          pengiriman: 'JNE',
          total: '55.000'
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
