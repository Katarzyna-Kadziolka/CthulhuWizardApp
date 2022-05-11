<script setup lang="ts">
import FormInput from "../atoms/FormInput.vue";
</script>

<template>
    <main>
        <div class="row">
            <div class="col-12 justify-start">
                <h5>Investigator's Personal Data</h5>
            </div>
        </div>
        <div class="row justify-between">
            <div class="col-5">
                <FormInput watermark="Name" :hasTooltip='true' tooltipText="Investigator's first name" />
             </div>
            <div class="col-5">
                <FormInput watermark="Age" :hasTooltip='true' tooltipText="Age range 18-90" />
            </div>
        </div>
    </main>
</template>