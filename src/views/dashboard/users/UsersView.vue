
<script setup>
// import './factors';
import HeaderView from '../../../components/Header.vue'
</script>

<template>
    <HeaderView />
    <center>
        <h2 class="mt-5">
            Kullanici sayisi: {{ items.length }}
        </h2>
    </center>
    <div class="section full-height">
        <div class="pt-5">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Name Surname</th>
                            <th scope="col">E-Mail</th>
                            <th scope="col">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items">
                            <td>{{ item.username }}</td>
                            <td>{{ item.name + item.surname }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.amount }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="my-5 py-5">
    </div>
</template>


<script>
import axios_service from '../../../service/axios_service';
export default {
    data() {
        return {
            items: [],
        }
    },
    created() {
        this.get_users()
    },
    methods: {
        get_users() {
            axios_service.http
                .get("user")
                .then((r) => {
                    this.items = r.data.detail.users
                    console.log(r.data.detail.users)
                });
        }
    }

}

</script>