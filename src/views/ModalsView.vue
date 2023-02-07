<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label for="">
                Show dark modals?
                <input type="checkbox" v-model="showDarkModals">
            </label>
        </div>
        <button @click="showModal = true">Show modal</button>
        <component 
            v-model="showModal" 
            :is="showDarkModals ? ModalDark : Modal"
            title="My modal title (via prop)"
        >
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem id
                molestias officiis reiciendis? Natus vel illum aliquam. Laudantium
                commodi maiores obcaecati culpa, nesciunt corporis, velit aperiam,
                possimus iure non sed?
            </p>
        </component>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import Modal from '@/components/Modal.vue'
    import ModalDark from '@/components/ModalDark.vue'

    const showDarkModals = ref(false)
    const showModal = ref(false)
</script>
