<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <q-page padding class="items-center-justify-center bg-black-3">
        <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-black q-pa-md">
        <span class="text-black-10">TAMBAH DATA PEMBELI</span>
      </span>
            <div class="q-pa-md">
                <q-form
                        class="q-gutter-md"
                >
                    <q-input
                            label="ID PEMBELI"
                            lazy-rules
                            color="black"
                            v-model="idpembeli"
                            :rules="[
           val => val !== null && val !== '' || 'ID PEMBELI DI BUTUHKAN'
           ]">
                        <template v-slot:append>
                            <q-icon name="all_inclusive"/>
                        </template>
                    </q-input>
                    <q-input
                            label="NAMA PEMBELI"
                            lazy-rules
                            color="black"
                            v-model="namapembeli"
                            :rules="[
           val => val !== null && val !== '' || 'NAMA PEMBELI DI BUTUHKAN'
           ]">
                        <template v-slot:append>
                            <q-icon name="recent_actors"/>
                        </template>
                    </q-input>
                    <q-input
                            label="ALAMAT PEMBELI"
                            lazy-rules
                            color="black"
                            v-model="alamat"
                            :rules="[
           val => val !== null && val !== '' || 'ALAMAT PEMBELI DI BUTUHKAN'
           ]">
                        <template v-slot:append>
                            <q-icon name="library_books"/>
                        </template>
                    </q-input>
                    <q-input
                            label="EMAIL"
                            lazy-rules
                            color="black"
                            v-model="email"
                            :rules="[
           val => val !== null && val !== '' || 'EMAIL DI BUTUHKAN'
           ]">
                        <template v-slot:append>
                            <q-icon name="mail"/>
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
      idpembeli: null,
      namapembeli: null,
      email: null,
      alamat: null,
      nomortelphone: null
    }
  }
}
</script>

<style scoped>

</style>
