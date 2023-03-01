<script setup>
// import './factors';
import HeaderView from '../../components/Header.vue'
</script>

<template>
    <div>
        <HeaderView />
    </div>
    <div class="container">
        <form class="container m-5">
            <div class="form-group row">
                <label for="text" class="col-4 col-form-label">Gorev Basligi</label>
                <div class="col-8">
                    <input id="text" name="text" placeholder="Label" type="text" class="form-control"
                        aria-describedby="textHelpBlock" required="true" v-model="label">
                    <span id="textHelpBlock" class="form-text text-muted">Gorevin basligi</span>
                </div>
            </div>
            <div class="form-group row">
                <label for="textarea" class="col-4 col-form-label">Aciklama</label>
                <div class="col-8">
                    <textarea id="textarea" name="textarea" cols="40" rows="3" class="form-control"
                        aria-describedby="textareaHelpBlock" v-model="detail"></textarea>
                    <span id="textareaHelpBlock" class="form-text text-muted">Aciklama yazisi</span>
                </div>
            </div>
            <div class="form-group row">
                <label for="select" class="col-4 col-form-label">Faktor Tipi</label>
                <div class="col-8">
                    <select id="select" name="select" class="custom-select" required="true" v-model="factor_type"
                        aria-describedby="selectHelpBlock">
                        <option value="awarded_quest">Odullu Gorev</option>
                        <option value="purchasable">Satin Alim</option>
                        <option value="subscription">Abonelik</option>
                    </select>
                    <span id="selectHelpBlock" class="form-text text-muted">Faktor Tipi</span>
                </div>
            </div>

            <div class="form-group row" v-if="factor_type === 'awarded_quest'">
                <label class="col-4">Gorev tipi</label>
                <div class="col-8">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio2" id="radio2_0" type="radio" class="custom-control-input"
                            value="download_app" v-model="quest_type" aria-describedby="radio2HelpBlock">
                        <label for="radio2_0" class="custom-control-label">Uygulama Indir</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio2" id="radio2_1" type="radio" class="custom-control-input" value="watch_ad"
                            v-model="quest_type" aria-describedby="radio2HelpBlock">
                        <label for="radio2_1" class="custom-control-label">Reklam Izle</label>
                    </div>
                    <span id="radio2HelpBlock" class="form-text text-muted">Odullu Gorev Tipi</span>
                </div>
            </div>
            <div class="form-group row" v-if="quest_type === 'watch_ad'">
                <label for="text5" class="col-4 col-form-label">Reklam Sayisi</label>
                <div class="col-8">
                    <div class="input-group">
                        <input id="text5" name="text5" placeholder="Kac Reklam Izleyecek" v-model="count" type="text"
                            class="form-control">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <i class="fa fa-sort-numeric-asc"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group row" v-if="quest_type === 'download_app'">
                <label for="text3" class="col-4 col-form-label">Playstore Url</label>
                <div class="col-8">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fa fa-external-link"></i>
                            </div>
                        </div>
                        <input id="text3" name="text3" placeholder="Playstore URL" v-model="playstore_url" type="text"
                            class="form-control">
                    </div>
                </div>
            </div>
            <div class="form-group row" v-if="quest_type === 'download_app'">
                <label for="text4" class="col-4 col-form-label">Paket Adi</label>
                <div class="col-8">
                    <input id="text4" v-model="package_name" name="text4" placeholder="Uygulama Paket Adi" type="text"
                        class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label for="text1" class="col-4 col-form-label">Faktor Etkisi</label>
                <div class="col-8">
                    <div class="input-group">
                        <input id="text1" v-model="percentage" name="text1" placeholder="Yuzdelik" type="text"
                            class="form-control" aria-describedby="text1HelpBlock">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <i class="fa fa-sort-numeric-desc"></i>
                            </div>
                        </div>
                    </div>
                    <span id="text1HelpBlock" class="form-text text-muted">Yuzde kac artis saglayacak</span>
                </div>
            </div>
            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">Gecerlilik Suresi</label>
                <div class="col-8">
                    <div class="input-group">
                        <input v-model="valid_minutes" id="text2" name="text2" placeholder="Kac Dakika Gecerli"
                            type="text" class="form-control" aria-describedby="text2HelpBlock" required="true">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <i class="fa fa-clock-o"></i>
                            </div>
                        </div>
                    </div>
                    <span id="text2HelpBlock" class="form-text text-muted">Bu urunun takviyesi kac dakika boyunca
                        gecerli
                        kalacak</span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-4">Tek Seferlik Kullanim</label>
                <div class="col-8">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio" id="radio_0" type="radio" class="custom-control-input" value="true"
                            v-model="one_time_usage" aria-describedby="radioHelpBlock">
                        <label for="radio_0" class="custom-control-label">Evet</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio" v-model="one_time_usage" id="radio_1" type="radio"
                            class="custom-control-input" value="false" aria-describedby="radioHelpBlock">
                        <label for="radio_1" class="custom-control-label">Hayir</label>
                    </div>
                    <span id="radioHelpBlock" class="form-text text-muted">Kullanici ayni anda bu urune 2 defa sahip
                        olabilir mi?</span>
                </div>
            </div>
            <div class="form-group row">
                <label for="textarea1" class="col-4 col-form-label">Gorsel</label>
                <div class="col-8">
                    <textarea v-model="image" id="textarea1" name="textarea1" cols="40" rows="5" class="form-control"
                        aria-describedby="textarea1HelpBlock"></textarea>
                    <span id="textarea1HelpBlock" class="form-text text-muted">Gorseli base64 formatinda ekleyin</span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-4">Ucretli mi</label>
                <div class="col-8">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio1" id="radio1_0" type="radio" v-model="is_paid" class="custom-control-input"
                            value="true" aria-describedby="radio1HelpBlock">
                        <label for="radio1_0" class="custom-control-label">Evet</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio1" id="radio1_1" type="radio" class="custom-control-input" v-model="is_paid"
                            value="false" aria-describedby="radio1HelpBlock">
                        <label for="radio1_1" class="custom-control-label">Hayir</label>
                    </div>
                    <span id="radio1HelpBlock" class="form-text text-muted">Bu Faktor Ucretli Mi</span>
                </div>
            </div>
            <div class="form-group row">
                <div class="offset-4 col-8">
                    <a name="submit" @click="createFactor" class="btn btn-primary">Submit</a>
                </div>
            </div>
        </form>
    </div>
</template>


<script>
import axios from 'axios';
import axios_service from '../../service/axios_service';
export default {
    data() {
        return {
            id: "",
            label: "",
            detail: "",
            is_paid: "",
            valid_minutes: "",
            one_time_usage: "",
            percentage: "",
            image: "",
            factor_type: "",
            quest_type: "",
            count: "",
            playstore_url: "",
            package_name: "",
        }
    },
    methods: {
        createFactor() {

            axios_service.http.post("factors", {
                label: this.label,
                detail: this.detail,
                is_paid: this.is_paid,
                valid_minutes: this.valid_minutes,
                one_time_usage: this.one_time_usage,
                percentage: this.percentage,
                image: this.image,
                factor_type: this.factor_type,
                extra_attributes: {
                    quest_type: this.quest_type,
                    count: this.count,
                    playstore_url: this.playstore_url,
                    package_name: this.package_name
                }
            }).then((e) => {
                console.log(e)
            }).catch((er) => {
                console.log(err)
            })
        }
    },


}
</script>

