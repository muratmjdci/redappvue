
<script setup>
// import './factors';
import HeaderView from '../../../components/Header.vue'
</script>

<template>
    <HeaderView />
    <center>
        <h2 class="mt-5">
            Toplam istek sayisi: {{ items.length }}
        </h2>
        <div class="custom-control custom-switch">
            <label for="text2" class="col-form-label">Aktif Talepler</label>
            <label class="switch ml-5 mr-5">
                <input type="checkbox" @change="onChangeList" v-model="activeList">
                <span class="slider round"></span>
            </label>
            <label for="text2" class="col-form-label">Eski Talepler</label>
        </div>
    </center>

    <div class="section full-height container-fluid">
        <div class="pt-5">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Address</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                            <th v-if="!activeList" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items">
                            <td>{{ item.user.username }}</td>
                            <td>{{ item.user.email }}</td>
                            <td>{{ item.address }}</td>
                            <td>{{ formatAmount(item.amount) }}</td>
                            <td>{{ item.withdraw_status }}</td>

                            <td v-if="!activeList">
                                <button class="btn btn-primary" @click="approve(item.id)">Approve</button>
                                <button class="btn btn-danger ml-1" @click="reject(item.id)">Reject</button>
                            </td>
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
            activeList: false
        }
    },
    created() {
        this.getRequests()
    },
    methods: {
        onChangeList(e) {
            if(this.activeList) {
                this.getPastRequests()
            } else {
                this.getRequests()
            }
        },
        getPastRequests() {
            axios_service.http
                .get("withdraw/all-list")
                .then((r) => {
                    this.items = r.data;
                    console.log(r.data)
                });
        },
        getRequests() {
            axios_service.http
                .get("withdraw/list")
                .then((r) => {
                    this.items = r.data;
                    console.log(r.data)
                });
        },
        approve(id) {
            axios_service.http
                .post("withdraw/accept", { withdraw_id: id, status: "done" })
                .then((r) => {
                    this.getRequests()
                });
        },
        reject(id) {
            axios_service.http
                .post("withdraw/accept", { withdraw_id: id, status: "rejected" })
                .then((r) => {
                    this.getRequests()
                });
        },
        //will format amount to 1000000 => 1.000.000
        formatAmount(amount) {
            return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    }

}

</script>