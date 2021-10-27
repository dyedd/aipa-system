<script setup>
import { commonNavigator } from "../../utils/utils"
import { fetchBillsBySellerId } from "../../utils/bills"
import { getUserId } from "../../utils/userInfo"
import Pager from "../../components/seller/widgets/Pager.vue"
import { ref } from "vue-demi"
import Bills from "../../components/seller/Bills.vue"
import PagedNavigator from "../../components/seller/widgets/PagedNavigator.vue"

const BILLS_PER_PAGE = 30
const billsInfo = ref({})
const bills = ref([])
const navigate = commonNavigator(
    page => {
        return fetchBillsBySellerId(getUserId(), page, 30)
    },
    0,
    async res => {
        billsInfo.value = res
        bills.value = res.value
        return true
    },
    {
        init: true,
    },
)
</script>

<template>
    <div class="bills-container">
        <div class="top">
            <h1 class="title">账单管理</h1>
            <Pager :page-like="billsInfo" font-size="1.5rem" />
        </div>
        <div class="bills">
            <Bills :bills="bills" />
        </div>
        <div class="footer">
            <PagedNavigator
                :page-like="billsInfo"
                font-size="1.6rem"
                @navigate="navigate"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../components/seller/style/common.scss";
.bills-container {
    @include main-panel;
    @include card;
    .top {
        @include space-between;

        .title {
            @include common-title;
        }
    }
    .bills {
        margin-top: 1.5rem;
    }
    .footer {
        margin-top: 2rem;
    }
}
</style>
