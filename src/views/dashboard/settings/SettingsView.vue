<script setup>
// import './factors';
import HeaderView from '../../../components/Header.vue'
</script>

<style>
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #2196F3;
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>

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

            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">Fortune Rates</label>
                <div class="col-8">
                    <div class="input-group">
                        <input v-model="fortuneValues" id="text2" name="text2" placeholder="Carkta cikacak oranlar (1,2,3)"
                            type="text" class="form-control" aria-describedby="text2HelpBlock" required="required">
                    </div>
                    <span id="text2HelpBlock" class="form-text text-muted">Carkta cikacak oranlar (10,20,30)</span>
                </div>
            </div>

            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">Fortune Interval</label>
                <div class="col-8">
                    <div class="input-group">
                        <input v-model="FORTUNE_INTERVAL" id="text2" name="text2" placeholder="Carkin cevrilme suresi"
                            type="text" class="form-control" aria-describedby="text2HelpBlock" required="required">
                    </div>
                    <span id="text2HelpBlock" class="form-text text-muted">Carkin cevrilme suresi</span>

                </div>
            </div>


            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">Google ads</label>
                <div class="col-8">
                    <div class="input-group">

                        <label class="switch">
                            <input type="checkbox" v-model="adEnabled" @click="onChange">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <span id="text2HelpBlock" class="form-text text-muted">Google reklamlarinin gosterilip
                        gosterilmeyecegini belirler</span>
                </div>
            </div>


            <div class="form-group row" v-if="!adEnabled">
                <label for="text2" class="col-4 col-form-label">Remote Ad Url</label>
                <div class="col-8">
                    <div class="input-group">
                        <input v-model="remoteAdUrl" id="text2" name="text2" placeholder="https://www.google.com"
                            type="text" class="form-control" aria-describedby="text2HelpBlock" required="required">
                    </div>
                    <span id="text2HelpBlock" class="form-text text-muted">Reklamlar kapaliyken yonlendirilecek web
                        sitesi</span>
                </div>
            </div>

            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">Mini Games</label>
                <div class="col-8">
                    <div class="input-group">
                        <label class="switch">
                            <input type="checkbox" v-model="gamesEnabled">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <span id="text2HelpBlock" class="form-text text-muted">Mini oyunlarin aktiflik durumunu duzenler</span>
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
            maximum_withdraw: 0,
            fortuneValues: "",
            adEnabled: false,
            gamesEnabled: false,
            remoteAdUrl: "",
            FORTUNE_INTERVAL: 0,
            FORTUNE_WHEEL: []
        }
    },
    created() {
        this.get_default()
    },

    methods: {
        onChange() {
            console.log(this.adEnabled)
        },
        get_default() {
            axios_service.http
                .get("settings")
                .then((r) => {
                    this.reference_rate = r.data.reference_rate;
                    this.ad_interval = r.data.ad_interval;
                    this.mining_rate = r.data.mining_rate;
                    this.minimum_withdraw = r.data.withdrawl_rate.min;
                    this.maximum_withdraw = r.data.withdrawl_rate.max;
                    this.FORTUNE_INTERVAL = r.data.dynamic_settings.FORTUNE_INTERVAL;
                    r.data.dynamic_settings.FORTUNE_WHEEL.percentages.forEach(element => {
                        if (this.fortuneValues == "") return this.fortuneValues = element
                        this.fortuneValues = this.fortuneValues + "," + element
                    });
                    r.data.dynamic_settings.ad_enabled ? this.adEnabled = true : this.adEnabled = false;
                    r.data.dynamic_settings.games_enabled ? this.gamesEnabled = true : this.gamesEnabled = false;
                    this.remoteAdUrl = r.data.dynamic_settings.remoteAdUrl;
                });
        },
        post_settings() {
            this.errors = []
            if (!this.mining_rate) this.errors.push("Mining rate bos olamaz.")
            if (!this.ad_interval) this.errors.push("Ad interval bos olamaz.")
            if (!this.reference_rate) this.errors.push("Reference rate bos olamaz.")
            if (!this.minimum_withdraw) this.errors.push("Minimum withdraw bos olamaz.")
            if (!this.maximum_withdraw) this.errors.push("Maximum withdraw bos olamaz.")
            if (this.fortuneValues) {
                this.fortuneValues = this.fortuneValues.split(",")
                this.FORTUNE_WHEEL = this.fortuneValues.map((item) => {
                    return parseInt(item)
                })
            }
            if (this.errors)
                axios_service.http
                    .post("settings", {
                        "mining_rate": parseInt(this.mining_rate),
                        "ad_interval": parseInt(this.ad_interval),
                        "reference_rate": parseInt(this.reference_rate),
                        "withdrawl_rate": {
                            "min": parseInt(this.minimum_withdraw),
                            "max": parseInt(this.maximum_withdraw)
                        },
                        "dynamic_settings": {
                            "FIREBASE_NOTIFICATION_TITLE": "Red App",
                            "FIREBASE_NOTIFICATION_BODY": "You have a new notification",
                            "FORTUNE_INTERVAL": parseInt(this.FORTUNE_INTERVAL),
                            "FORTUNE_WHEEL": { "percentages": this.FORTUNE_WHEEL },
                            "ad_enabled": this.adEnabled,
                            "games_enabled": this.gamesEnabled,
                            "remoteAdUrl": this.remoteAdUrl
                        },
                    })
                    .then((r) => {
                        console.log(r.data)
                    });

        }
    }

}

</script>