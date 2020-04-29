<template>
  <q-layout class="bg-blue-grey-1" view="hhh Lpr LFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
<!--                <div class="col-md-6 col-xs-12">-->
<!--                  <div class="row q-pt-md q-pb-md bg-teal-5">-->
<!--                    <div class="col-md-8 offset-md-2 col-xs-8">-->
<!--                      <q-img spinner-color="white" placeholder-src="statics/user.png" src="static/user.png">-->
<!--                      </q-img>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
                <q-card-section class="text-blue-grey-14">
                  <div class="text-h4" >registrasi</div>
                </q-card-section>
                <div class="col-md-12 col-xs-12 q-pt-md">
                  <div class="q-pa-md">

                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="username"
                        label="username *"
                        hint="username"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'data tidak boleh kosong']"
                      />

                      <q-input
                        filled
                        v-model="email"
                        label="Email*"
                        hint="Email"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="NoTelp"
                        label="No Telp*"
                        hint="No Telp"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'data tidak boleh kosong']"
                      />

                      <q-input
                        filled
                        type="password"
                        v-model="password"
                        label="password *"
                        hint="password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'data tidak boleh kosong']"
                      />

                      <div>
                        <q-btn label="Registrasi" type="submit" to="/outh/login" color="primary"/>
                        <q-btn label="Batal" to="/outh/login"  color="primary" flat class="q-ml-sm" />
                      </div>
                    </q-form>

                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Registrasi',
  data () {
    return {
      username: null,
      email: null,
      NoTelp: null,
      password: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
