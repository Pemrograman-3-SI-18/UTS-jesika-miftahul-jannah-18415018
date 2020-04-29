import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/Admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Admin/Home/Menu.vue') },
      { path: 'InputDataPembeli', component: () => import('pages/Admin/Home/InputDataPembeli.vue') },
      { path: 'DataBarang', component: () => import('pages/Admin/Home/DataBarang.vue') },
      { path: 'InputDataBarang', component: () => import('pages/Admin/Home/InputDataBarang.vue') },
      { path: 'TransaksiPenjualan', component: () => import('pages/Admin/Home/TransaksiPenjualan.vue') },
      { path: 'DataPembeli', component: () => import('pages/Admin/Home/DataPembeli.vue') }
    ]
  },
  {
    path: '/Pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Pembeli/DataBarang/databarang.vue') },
      { path: 'pembayaran', component: () => import('pages/Pembeli/DataBarang/pembayaran.vue') },
      { path: 'pengiriman', component: () => import('pages/Pembeli/DataBarang/pengiriman.vue') },
      { path: 'TransaksiPembeli', component: () => import('pages/Pembeli/Transaksi/TransaksiPembeli.vue') },
      { path: 'tentangkami', component: () => import('pages/Pembeli/DataBarang/tentangkami.vue') },
      { path: 'produk', component: () => import('pages/Pembeli/DataBarang/produk.vue') },
      { path: 'hubungikami', component: () => import('pages/Pembeli/DataBarang/hubungikami.vue') },
      { path: 'panduan', component: () => import('pages/Pembeli/Transaksi/panduan.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'outh/Login', component: () => import('pages/users/Login.vue') },
      { path: 'outh/Registrasi', component: () => import('pages/users/Registrasi.vue') },
      { path: 'outh/datapembeli', component: () => import('pages/Admin/Home/DataPembeli.vue') },
      { path: 'outh/inputdatapembeli', component: () => import('pages/Admin/Home/InputDataPembeli.vue') },
      { path: 'outh/menu', component: () => import('pages/Pembeli/DataBarang/databarang.vue') },
      { path: 'outh/pembayaran', component: () => import('pages/Pembeli/DataBarang/pembayaran.vue') },
      { path: 'outh/pengiriman', component: () => import('pages/Pembeli/DataBarang/pengiriman.vue') },
      { path: 'outh/TransaksiPembeli', component: () => import('pages/Pembeli/Transaksi/TransaksiPembeli.vue') },
      { path: 'outh/InputDataBarang', component: () => import('pages/Admin/Home/InputDataBarang.vue') },
      { path: 'outh/TransaksiPenjualan', component: () => import('pages/Admin/Home/TransaksiPenjualan.vue') },
      { path: 'outh/produk', component: () => import('pages/Pembeli/DataBarang/produk.vue') },
      { path: 'outh/panduan', component: () => import('pages/Pembeli/Transaksi/panduan.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
