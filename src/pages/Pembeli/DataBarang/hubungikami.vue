<template>
    <q-layout view="lHh Lpr lFf">

        <q-header elevated class="glossy">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="left = !left" />
                <q-btn to="/pembeli/"
                rounded=""
                  color=""
                  class="q-mr-sm"
                  label="Home"></q-btn>
                  <q-btn to="/pembeli/produk"
                rounded=""
                  color=""
                  class="q-mr-sm"
                  label="PRODUK"></q-btn>
                <q-toolbar-title class="absolute-center">
                    <div class="text-white">
                        <div class="text-weight-bold">
                            <marquee direction="right" scollamount="5" align="cemter">AIR MINUM CICI WATER</marquee>
                        </div>
                    </div>
                </q-toolbar-title>
                <q-footer>
                    AIR MINUM
                </q-footer>

                <q-toolbar-title></q-toolbar-title>
                <div></div>
                <q-btn to="/pembeli/tentangkami"
                rounded=""
                  color=""
                  class="q-mr-sm"
                  label="tentang kami"></q-btn>
                 <q-btn to="/outh/login"
                 rounded=""
                 outline=""
                  color=""
                  label="LOGOUT"
                  class="q-mr-sm">
                  <q-tooltip>logout disini..</q-tooltip>
                </q-btn>
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
                            HALAMAN PEMBELI
                        </q-toolbar-title>
                    </q-item>
                    <div class="text-weight-bold">AKUN SAYA</div>
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
                        BERANDA
                    </q-item-label>
                    <q-item clickable active-class="active" exact v-ripple to="/pembeli">
                        <q-item-section avatar>
                            <q-icon name="local_library" />
                        </q-item-section>
                        <q-item-section>
                            HOME
                        </q-item-section>
                    </q-item>

                    <q-item clickable active-class="active" exact v-ripple to="/Pembeli/produk">
            <q-item-section avatar>
              <q-icon name="post_add" />
            </q-item-section>
            <q-item-section>
              PRODUK
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/Pembeli/pembayaran">
            <q-item-section avatar>
              <q-icon name="post_add" />
            </q-item-section>
            <q-item-section>
              PEMBAYARAN
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/Pembeli/pengiriman">
            <q-item-section avatar>
              <q-icon name="post_add" />
            </q-item-section>
            <q-item-section>
              PENGIRIMAN
            </q-item-section>
          </q-item>

                    <q-item-label
                            header
                            class="text-grey-8"
                    >
                        TRANSAKSI
                    </q-item-label>
                    <q-item clickable active-class="active" exact v-ripple to="/Pembeli/TransaksiPembeli" >
                        <q-item-section avatar>
                            <q-icon name="local_atm" />
                        </q-item-section>
                        <q-item-section>
                            DATA TRANSAKSI
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
  name: 'PembeliLayout',

  data () {
    return {
      left: false
    }
  }
}
</script>
