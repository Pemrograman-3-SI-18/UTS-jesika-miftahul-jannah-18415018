<template>
    <q-layout view="lHh Lpr lFf">

        <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
                <q-toolbar-title class="absolute-center">
                    <div class="text-white">
                        <div class="text-weight-bold">
                            <marquee direction="right" scollamount="5" align="cemter">AIR MINUM CICI WATER</marquee>
                        </div>
                    </div>
                </q-toolbar-title>

        <q-footer>
          AIR MINUM CICI WATER
        </q-footer>

                <q-toolbar-title></q-toolbar-title>
        <div></div>
                 <q-btn to="/outh/login"
                 rounded=""
                 outline=""
                  color=""
                  label="LOGOUT"
                  class="q-mr-sm">
                  <q-tooltip>logout disini..</q-tooltip>
                </q-btn>
            </q-toolbar>
            <q-toolbar inset="">
              <q-toolbar-title>
                <strong>
                  <q-btn to="/admin"
                rounded=""
                outline=""
                icon="dashboard"
                  color=""
                  class="q-mr-sm"
                  label="MENU"></q-btn>
                  <q-btn to="/admin/DataPembeli"
                rounded=""
                outline=""
                icon="folder_shared"
                  color=""
                  class="q-mr-sm"
                  label="DATA PEMBELI"></q-btn>
                  <q-btn to="/admin/InputDataPembeli"
                rounded=""
                outline=""
                icon="post_add"
                  color=""
                  class="q-mr-sm"
                  label="INPUT DATA PEMBELI"></q-btn>
                  <q-btn to="/admin/DataBarang"
                rounded=""
                outline=""
                icon="storefront"
                  color=""
                  class="q-mr-sm"
                  label="DATA BARANG"></q-btn>
                  <q-btn to="/admin/InputDataBarang"
                rounded=""
                outline=""
                icon="note_add"
                  color=""
                  class="q-mr-sm"
                  label="INPUT DATA BARANG"></q-btn>
                  <q-btn to="/admin/TransaksiPenjualan"
                rounded=""
                outline=""
                icon="chrome_reader_mode"
                  color=""
                  class="q-mr-sm"
                  label="TRANSAKSI PENJUALAN"></q-btn>
                </strong>
              </q-toolbar-title>
            </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      content-class="bg-deep-purple-2 text-white-h6"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 50px;" class="bg-white text-bold">
            <q-toolbar-title class="absolute-center">
                   HALAMAN ADMIN
                </q-toolbar-title>
          </q-item>
          <div class="text-weight-bold">AKUN ADMIN</div>
          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="100px" class="q-mb-md">
                <img src="statics/foto.jpeg">
              </q-avatar>
              <div class="text-weight-bold">18415018</div>
              <div>JESIKA MIFTAHUL JANNAH</div>
            </div>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
           PENDATAAN
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/admin">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              MENU
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/admin/DataPembeli">
            <q-item-section avatar>
              <q-icon name="folder_shared" />
            </q-item-section>
            <q-item-section>
              DATA PEMBELI
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/admin/InputDataPembeli">
            <q-item-section avatar>
              <q-icon name="post_add" />
            </q-item-section>
            <q-item-section>
              INPUT DATA PEMBELI
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/Admin/DataBarang">
            <q-item-section avatar>
              <q-icon name="storefront" />
            </q-item-section>
            <q-item-section>
              DATA BARANG
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/Admin/InputDataBarang">
            <q-item-section avatar>
              <q-icon name="note_add" />
            </q-item-section>
            <q-item-section>
              INPUT DATA BARANG
            </q-item-section>
          </q-item>

          <q-item-label
            header
            class="text-grey-8"
          >
            TRANSAKSI
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/admin/TransaksiPenjualan" >
            <q-item-section avatar>
              <q-icon name="chrome_reader_mode" />
            </q-item-section>
            <q-item-section>
              TRANSAKSI PENJUALAN
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      left: false
    }
  }
}
</script>
