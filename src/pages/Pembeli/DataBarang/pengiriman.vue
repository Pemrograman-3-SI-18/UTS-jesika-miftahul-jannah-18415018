<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <q-page padding class="items-center-justify-center bg-black-3">
        <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-black q-pa-md">
        <span class="text-black-10">SILAHKAN ISI PENGIRIMAN</span>
      </span>
            <div class="q-pa-md">
                <q-form
                        class="q-gutter-md"
                >
                    <q-input
                            label="NAMA LENGKAP"
                            lazy-rules
                            color="black"
                            v-model="namalengkap"
                            :rules="[
           val => val !== null && val !== '' || 'NAMA LENGKAP DI BUTUHKAN'
           ]">
                        <template v-slot:append>
                            <q-icon name="recent_actors"/>
                        </template>
                    </q-input>
                    <q-input
                            label="ALAMAT LENGKAP"
                            lazy-rules
                            color="black"
                            v-model="alamat"
                            :rules="[
           val => val !== null && val !== '' || 'ALAMAT LENGKAP DI BUTUHKAN'
           ]">
                        <template v-slot:append>
                            <q-icon name="library_books"/>
                        </template>
                    </q-input>
                    <q-input
                            label="NOMOR TELPHONE"
                            lazy-rules
                            color="black"
                            v-model="nomortelphone"
                            :rules="[
           val => val !== null && val !== '' || 'NOMOR TELPHONE DI BUTUHKAN'
           ]">
                        <template v-slot:append>
                            <q-icon name="phone_iphone"/>
                        </template>
                    </q-input>
                    <q-input
                            label="MASUKKAN VOUCHER"
                            lazy-rules
                            color="black"
                            v-model="masukkanvoucher"
                            :rules="[
           val => val !== null && val !== '' || 'MASUKKAN VOUCHER DI BUTUHKAN'
           ]">
                        <template v-slot:append>
                            <q-icon name="receipt"/>
                        </template>
                    </q-input>
                    <q-select
        filled
        label="PENGIRIMAN"
        lazy-rules
        color="black"
        v-model="pengiriman"
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        :options="options"
        @filter="filterFn"
        @input-value="setModel"
        style="width: 1000px; padding-bottom: 10px"
      >
            <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
                        <template v-slot:append>
                        </template>
                        </q-item-section>
          </q-item>
        </template>
      </q-select>
                        <q-btn
                                unelevated
                                icon="add"
                                label="TAMBAH DATA PENGIRIMAN"
                                style="height: 50px"
                                @click="tambahkan=true"
                                color="primary"/>
                                <q-dialog v-model="tambahkan">
                                  <q-card>
                                    <q-card-section>
                                      <div class="text-h6">warning !!!</div>
                                    </q-card-section>
                                    <q-card-section class="q-pt-none">
                                      success
                                    </q-card-section>
                                    <q-card-actions align="right">
                                      <q-btn flat label="ok" color="primary" v-close-popup/>
                                    </q-card-actions>
                                  </q-card>
                                </q-dialog>
                </q-form>
            </div>
        </q-card>
    </q-page>
</template>

<script>
const stringOptions = [
  'JNT', 'SICEPAT', 'GOJEK', 'KANTOR POS', 'JNE', 'GRAB', 'CASH ON DELIVERY'
].reduce((acc, opt) => {
  for (let i = 1; i <= 1; i++) {
    acc.push(opt + ' ')
  }
  return acc
}, [])
export default {
  data () {
    return {
      tambahkan: false,
      namalengkap: null,
      alamat: null,
      nomortelphone: null,
      masukkanvoucher: null,
      pengiriman: null,
      options: stringOptions
    }
  },
  methods: {
    filterFn (val, update) {
      update(() => {
        const needle = val.toLocaleLowerCase()
        this.options = stringOptions.filter(v => v.toLocaleLowerCase().indexOf(needle) > -1)
      })
    },

    setModel (val) {
      this.model = val
    }
  }
}
</script>

<style scoped>

</style>
