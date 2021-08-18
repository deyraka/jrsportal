<template>
    <div class="mt-5">
        <v-row>
            <v-col
                cols="auto"
                md="12"
            >
                <v-card 
                    class="pa-3"
                    flat
                    rounded="lg"
                >
                    <v-card-title>Berita Baru</v-card-title>
                    <v-card-subtitle>Tambahkan berita baru dan publis kepada pengguna</v-card-subtitle>
                </v-card>
                <v-card 
                    class="px-3 py-10 mt-3"
                    flat
                    rounded="lg"
                >
                    <v-form
                        class="mx-5"
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-row>
                            <v-col
                                cols="12"
                                md="4"
                            >
                                <v-text-field
                                    v-model="url_img"
                                    :counter="225"
                                    label="Url Image"
                                    required
                                    outlined
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="8"
                            >
                                <v-text-field
                                    v-model="judul"
                                    :counter="150"
                                    :rules="judulRules"
                                    label="Judul Berita"
                                    required
                                    outlined
                                ></v-text-field>
                                <v-textarea
                                    v-model="isi"
                                    :rules="isiRules"
                                    :counter="1000"
                                    label="Isi Berita"
                                    required
                                    outlined
                                ></v-textarea>
                            </v-col>
                        </v-row>
                        <div class="text-center">
                            <v-btn
                                class="mx-3"
                                title="Batalkan"
                                rounded
                                depressed
                                large
                                outlined
                                color="error"
                                @click="goBack"
                            >
                                Cancel
                                <v-icon>mdi-close-thick</v-icon>
                            </v-btn>
                            <v-btn
                                class="mx-3"
                                title="Simpan"
                                rounded
                                depressed
                                large
                                outlined
                                dark
                                color="success"
                                @click="validateAndSave"
                            >
                                <v-icon>mdi-check-bold</v-icon>
                                Save
                            </v-btn>
                        </div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios' 

export default {
    data: () => ({
        news: [],
        loading: true,
        errored: false,
        search: '',
        headers: [
            {
                text: 'ID',
                align: 'start',
                value: 'id'
            },
            {
                text: 'Judul',
                sortable: false,
                value: 'judul'
            },
            {
                text: 'Isi',
                sortable: false,
                value: 'isi'
            }
        ],
        
    }),
    mounted() {
        this.loadItems()
    },
    methods: {
        loadItems(){
            // var self = this
            // this.news = []
            axios.get('http://192.168.42.25:8000/api/v1/news',
                {
                    // headers: {Authorization: "Bearer keyZIIVNiQPvozEWb"}
                }
            )
            .then(result => {
                this.news = result.data.data.map((item)=>{
                    return {
                        id: item.id,
                        judul: item.judul,
                        isi: item.isi
                    }
                })
                console.log(result.data)
            })
            .catch(err => {
                console.log(err)
                this.errored = true
            })
            .finally(this.loading = false)
        },
        goBack(){
            return this.$router.go(-1);
        }
    },
}
</script>
