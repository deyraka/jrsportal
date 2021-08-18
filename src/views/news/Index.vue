<template>
    <div class="mt-5">
        <div v-if="errored">Sorry, we're not able to retrieve data at this moment. Please try back later. Thanks</div>
        <v-card
            class="pa-3"
            v-else
            flat
            rounded="lg"
        > 
            <v-card-title>
                Daftar Berita
                <v-divider
                    class="mx-4"
                    inset
                    vertical
                ></v-divider>
                <v-btn
                    class="my-5"
                    fab
                    small
                    :to="{ path: '/create-news' }"
                    dark
                    color="cyan"
                    title="Tambah Berita Baru"
                >
                    <v-icon dark>
                        mdi-plus
                    </v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Cari Berita ... "
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="news"
                :search="search"
            >
                <template v-slot:item="row">
                    <tr>
                        <td>{{ row.item.id }}</td>
                        <td>
                            <v-img
                                class="my-2"
                                :aspect-ratio="16/9"
                                width="200"
                                :src="row.item.image"
                            ></v-img>
                        </td>
                        <td>{{ row.item.judul }}</td>
                        <td>{{ row.item.isi | truncate(50)}}</td>
                        <td>
                            <v-btn
                                class="ma-2"
                                title="Baca Selengkapnya"
                                dark
                                fab
                                x-small
                                color="warning"
                                @click="show(row.item.id)"
                            >
                                <v-icon>mdi-eye</v-icon>
                            </v-btn>
                            <v-btn
                                class="ma-2"
                                title="Ubah Berita"
                                dark
                                fab
                                x-small
                                color="cyan"
                                @click="edit(row.item.id)"
                            >
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn
                                class="ma-2"
                                title="Hapus Berita"
                                dark
                                fab
                                x-small
                                color="red"
                                @click="sentToTrash(row.item.id)"
                            >
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-card>
    </div>
    
</template>

<script>
import axios from 'axios'
// import { onMounted, ref } from 'vue'

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
                text: 'Cover',
                sortable: false,
                value: 'image'
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
            },
            {
                text: 'Action',
                sortable: false,
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
            axios.get('http://10.62.1.57:8000/api/v1/news',
                {
                    // headers: {Authorization: "Bearer keyZIIVNiQPvozEWb"}
                }
            )
            .then(result => {
                this.news = result.data.data.map((item)=>{
                    return {
                        id: item.id,
                        image: item.url_img,
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
        getColor(id){
            if (id>2) return 'green'
            else return 'cyan'
        },
        show(id){
            alert('You click ID : '+id)
        },
        edit(id){
            alert('You want to edit ID : '+id)
        },
        sentToTrash(id){
            alert('Are you sure want to delete item : '+id)
        }
    },
    filters: {
        truncate: function(text,num){
            const sentence = text.split("").slice(0,num).join("");
            return sentence+" ... ";
        }
    }
}
</script>
