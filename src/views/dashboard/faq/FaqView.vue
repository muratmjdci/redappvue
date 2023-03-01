<script setup>
// import './factors';
import { def } from '@vue/shared';
import HeaderView from '../../../components/Header.vue'
</script>

<template>
    <HeaderView />
    <div v-if="showModal">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" @click="showModal = false">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">

                                <form>
                                    <div class="form-group row">
                                        <label for="text" class="col-4 col-form-label">Question</label>
                                        <div class="col-8">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">
                                                        <i class="fa fa-question"></i>
                                                    </div>
                                                </div>
                                                <input id="text" name="text" placeholder="Question" type="text"
                                                    class="form-control" v-model="question"
                                                    aria-describedby="textHelpBlock" required="required">
                                            </div>
                                            <span id="textHelpBlock" class="form-text text-muted">Gorunmesini
                                                istediginiz soru basligi</span>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="answer" class="col-4 col-form-label">Answer</label>
                                        <div class="col-8">
                                            <textarea v-model="answer" id="answer" name="answer" cols="40" rows="3"
                                                class="form-control" aria-describedby="answerHelpBlock"
                                                required="required"></textarea>
                                            <span id="answerHelpBlock" class="form-text text-muted">Gorunmesini
                                                istediginiz cevap</span>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    @click="showModal = false">Close</button>
                                <button type="button" @click="createFaq" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
    <center>
        <button center="true" class="btn btn-success mt-5" @click="showModal = true">Create Faq</button>
    </center>

    <div class="section full-height">
        <div class="pt-5">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                            <th colspan="10" scope="col">Question</th>
                            <th colspan="10" scope="col">Answer</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items">
                            <td colspan="10">{{ item.question }}</td>
                            <td colspan="10">{{ item.answer }}</td>
                            <td colspan="1">
                                <a @click="deleteFaq(item)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-trash" viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd"
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </a>
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
            showModal: false,
            question: "",
            answer: "",
        }
    },
    created() {
        this.fetch_faqs()
    },
    methods: {
        fetch_faqs() {
            axios_service.http.get("frequently_questions").then((r) => {
                this.items = r.data
            }).catch((err) => {
                console.log(err)
            })
        },
        deleteFaq(item) {
            axios_service.http.delete("frequently_questions/" + item.id).then((r) => {
                this.fetch_faqs();
                console.log(r)
            }).catch((err) => {
                console.log(err)
            })
        },
        createFaq() {
            axios_service.http.post("frequently_questions", {
                question: this.question,
                answer: this.answer,
            }).then((r) => {
                this.fetch_faqs();
                this.question = '';
                this.answer = '';
                console.log(r)
            }).catch((err) => {
                console.log(err)
            })
        }
    },

}

</script>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
</style>