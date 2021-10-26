<script setup>
const props = defineProps({
    review: Object, //type: Review, defined in reviews.js
})
</script>

<template>
    <div class="review">
        <div class="user">
            <div class="username">{{ review.userName }}</div>
            <el-image
                :src="review.userProfilePicture"
                class="user-profile-picture"
            ></el-image>
        </div>
        <div class="text-container">
            <div class="header">
                <div class="rate">
                    评分:
                    <span class="rate-number">{{ review.rate }}</span>
                </div>
                <div class="date">{{ review.date }}</div>
            </div>
            <div class="content">{{ review.content }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./style/common.scss";
.review {
    background-color: #fff;
    padding: 1rem;
    display: flex;

    .user {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;

        .username {
            font-size: 1.5rem;
            color: $secondary-color;
        }
        .user-profile-picture {
            box-sizing: content-box;
            width: 2.5rem;
            height: 2.5rem;
            padding: 0.5rem;
        }
    }
    .text-container {
        margin-left: 1rem;
        flex-grow: 1;

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .rate {
                font-size: 1.5rem;

                .rate-number {
                    font-size: 1.6rem;
                    color: $secondary-color;
                }
            }
            .date {
                color: $secondary-text-color;
            }
        }
        .content {
            color: $normal-text-color;
            font-size: 1.3rem;
        }
    }
}
</style>
