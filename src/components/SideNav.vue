<template>
  <v-navigation-drawer 
      app
      permanent
      expand-on-hover  
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Call Username right here
            </v-list-item-title>
            <v-list-item-subtitle>
              email@gmail.com goes to here
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      
      <v-list nav dense>
        <v-list-item-group light color="cyan">
          <v-list-item 
            v-for="(item, i) in items"
            :key="i"
            dense
            :to="item.route"
          >
            <v-list-item-icon><v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'SideNav',

    data: () => ({
      drawer:true,
      items: [
        {icon:'mdi-home', title:'Beranda', route:'/'},
        {icon:'mdi-ticket-percent', title:'Tiket Aduan', route:'/news'},
        {icon:'mdi-list-status', title:'Status', route:'/#'},
        {icon:'mdi-file-export', title:'Ekspor Laporan', route:'/#'}
      ]
    }),
  }
</script>
