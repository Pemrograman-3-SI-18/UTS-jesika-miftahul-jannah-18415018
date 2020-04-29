<template>
  <div class="row bg-deep-purple-1">
    <div class="col">
    <q-carousel
      animated
      v-model="slide"
      control-color="primary"
      height="500px"
      max-width="100%"
      arrows
      infinite
    >
      <q-carousel-slide :name="1" img-src="/statics/ciciwater.png" />
      <q-carousel-slide :name="2" img-src="/statics/logo2.png" />
    </q-carousel>
    <div class="row justify-center">
      <q-btn to="/pembeli/produk"
                rounded=""
                  color="primary"
                  class="q-mr-sm"
                  label="LIHAT LEBIH LANJUT"></q-btn>
    </div>
  </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>
