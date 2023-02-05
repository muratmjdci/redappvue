<template>
    <button class="btn btn-primary" type="button" @click="get_factors">Factors</button>

    <li v-if="data" v-for="item in data">

        <a> {{ item.label }} </a>

    </li>

</template>

<script src="./factors.js"/>