<template>
    <div class="d-flex">
        <span :style="label_style" :class="label_class" style="align-items: center; display: inline-flex">
            {{label_text}}
        </span>
        <div class="dropdown mx-2" v-if="is_dropdown">
            <font-awesome-icon icon="chevron-down" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false"/>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>     
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    name: "CustomLabel",
    props: {
        label_text: {
          default: "" 
        },
        label_style: {
            type: String,
            default: ""
        },
        is_dropdown: {
            type: Boolean,
            default: false
        },
        label_class: {
            type: String
        }
    },
    components: {
        FontAwesomeIcon
    }

}
</script>