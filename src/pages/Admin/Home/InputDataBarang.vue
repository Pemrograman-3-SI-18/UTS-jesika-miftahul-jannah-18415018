<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <q-page padding class="items-center-justify-center bg-black-3">
        <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-black q-pa-md">
        <span class="text-black-10">TAMBAH DATA BARANG</span>
      </span>
            <div class="q-pa-md">
                <q-form
                        class="q-gutter-md"
                >
                    <q-input
                            label="ID BARANG"
                            lazy-rules
                            color="black"
                            v-model="idbarang"
                            :rules="[
           val => val !== null && val !== '' || 'ID BARANG DI BUTUHKAN'
           ]">
                        <template v-slot:append>
                            <q-icon name="all_inclusive"/>
                        </template>
                    </q-input>
                    <q-input
                            label="NAMA BARANG"
                            lazy-rules
                            color="black"
                            v-model="namabarang"
                            :rules="[
           val => val !== null && val !== '' || 'NAMA BARANG DI BUTUHKAN'
           ]">
                        <template v-slot:append>
                            <q-icon name="list_alt"/>
                        </template>
                    </q-input>
                    <q-input
                            label="STOK BARANG"
                            lazy-rules
                            color="black"
                            v-model=stokbarang
                            :rules="[
           val => val !== null && val !== '' || 'STOK BARANG DI BUTUHKAN'
           ]">
                        <template v-slot:append>
                            <q-icon name="home_work"/>
                        </template>
                    </q-input>
                    <q-input
                            label="HABIS TERJUAL"
                            lazy-rules
                            color="black"
                            v-model="habisterjual"
                            :rules="[
           val => val !== null && val !== '' || 'HABIS TERJUAL DI BUTUHKAN'
           ]">
                        <template v-slot:append>
                            <q-icon name="attach_money"/>
                        </template>
                    </q-input>
                     <q-input
                            label="SISA BARANG"
                            lazy-rules
                            color="black"
                            v-model="sisabarang"
                            :rules="[
           val => val !== null && val !== '' || 'SISA BARANG DI BUTUHKAN'
           ]">
                        <template v-slot:append>
                            <q-icon name="assignment"/>
                        </template>
                    </q-input>

                    <div>
                        <q-btn
                                unelevated
                                icon="add"
                                label="TAMBAHKAN DATA"
                                style="height: 50px"
                                color="primary"/>
                    </div>
                </q-form>
            </div>
        </q-card>
    </q-page>
</template>

<script>
export default {
  data () {
    return {
      idbarang: null,
      namabarang: null,
      stokbarang: null,
      habisterjual: null,
      sisabarang: null
    }
  }
}
</script>

<style scoped>

</style>
