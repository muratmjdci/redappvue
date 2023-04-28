<script setup>
// import './factors';
import HeaderView from '../../../components/Header.vue'
</script>

<template>
    <HeaderView />
    <div class="container">
        <form class="mt-5 container">
            <div class="form-group row">
                <label for="text" class="col-4 col-form-label">Mining Rate</label>
                <div class="col-8">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fa fa-clock-o"></i>
                            </div>
                        </div>
                        <input v-model="mining_rate" id="text" name="text" placeholder="Mining Rate" type="text"
                            class="form-control" aria-describedby="textHelpBlock" required="required">
                    </div>
                    <span id="textHelpBlock" class="form-text text-muted">Saatlik kazanilacak coin miktarı.</span>
                </div>
            </div>
            <div class="form-group row">
                <label for="text1" class="col-4 col-form-label">Advertise Interval</label>
                <div class="col-8">
                    <input v-model="ad_interval" id="text1" name="text1" placeholder="Dakika cinsinden girin." type="text"
                        class="form-control" aria-describedby="text1HelpBlock" required="required">
                    <span id="text1HelpBlock" class="form-text text-muted">Zorunlu reklam izleme sıklığı. Ör: 24 Saat ->
                        1440</span>
                </div>
            </div>
            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">Reference Rate</label>
                <div class="col-8">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fa fa-percent"></i>
                            </div>
                        </div>
                        <input v-model="reference_rate" id="text2" name="text2" placeholder="Reference Rate" type="text"
                            class="form-control" aria-describedby="text2HelpBlock" required="required">
                    </div>
                    <span id="text2HelpBlock" class="form-text text-muted">Referanslarin saglayacagi ekstra kazim
                        orani.</span>
                </div>
            </div>



            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">Minimum Withdraw Rate</label>
                <div class="col-8">
                    <div class="input-group">

                        <input v-model="minimum_withdraw" id="text2" name="text2" placeholder="Reference Rate" type="text"
                            class="form-control" aria-describedby="text2HelpBlock" required="required">
                    </div>
                    <span id="text2HelpBlock" class="form-text text-muted">Minimum Withdraw Rate</span>
                </div>
            </div>

            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">Maximum Withdraw Rate</label>
                <div class="col-8">
                    <div class="input-group">
                        <input v-model="maximum_withdraw" id="text2" name="text2" placeholder="Maximum cekim oranini"
                            type="text" class="form-control" aria-describedby="text2HelpBlock" required="required">
                    </div>
                    <span id="text2HelpBlock" class="form-text text-muted">Maximum cekim oranini belirler.</span>
                </div>
            </div>

            <p v-if="errors.length">
                <b>Hata(lar):</b>
            <ul style="list-style-type:none;">
                <li style="none" v-for="error in errors">{{ error }}</li>
            </ul>
            </p>

            <div class="form-group row">
                <div class="offset-4 col-8">
                    <div name="submit" @click="post_settings" class="btn btn-primary">Guncelle</div>
                </div>
            </div>
        </form>
    </div>
</template>


<script>
import axios_service from '../../../service/axios_service';
export default {
    data() {
        return {
            errors: [],
            mining_rate: 0,
            ad_interval: 0,
            reference_rate: 0,
            minimum_withdraw: 0,
            maximum_withdraw: 0
        }
    },
    created() {
        this.get_default()
    },
    methods: {
        get_default() {
            axios_service.http
                .get("settings")
                .then((r) => {
                    this.reference_rate = r.data.reference_rate;
                    this.ad_interval = r.data.ad_interval;
                    this.mining_rate = r.data.mining_rate;
                    this.minimum_withdraw = r.data.withdrawl_rate.min;
                    this.maximum_withdraw = r.data.withdrawl_rate.max;
                });
        },
        post_settings() {
            this.errors = []
            if (!this.mining_rate) this.errors.push("Mining rate bos olamaz.")
            if (!this.ad_interval) this.errors.push("Ad interval bos olamaz.")
            if (!this.reference_rate) this.errors.push("Reference rate bos olamaz.")

            if (this.errors)
                axios_service.http
                    .post("settings", {
                        "mining_rate": this.mining_rate,
                        "ad_interval": this.ad_interval,
                        "reference_rate": this.reference_rate,
                        "withdrawl_rate": {
                            "min": this.minimum_withdraw,
                            "max": this.maximum_withdraw
                        },
                        "dynamic_settings": {
                            "FIREBASE_NOTIFICATION_TITLE": "Red App",
                            "FIREBASE_NOTIFICATION_BODY": "You have a new notification"
                        },
                    })
                    .then((r) => {
                        console.log(r.data)
                    });

        }
    }

}

</script>