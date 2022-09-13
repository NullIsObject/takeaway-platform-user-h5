<template>
	<div class="appraise-content">
		<div class="user-message">
			<div class="head-photo"></div>
			<div class="name-and-date">
				<div class="user-name">用户名</div>
				<div class="appraise-date">2022-06-26</div>
			</div>
		</div>
		<div class="grade">
			<span>满意度</span>
			<Rate allow-half readonly size="12px" color="red" gutter="0" />
			<span>味道5星</span>
			<span>包装5星</span>
			<span>骑士满意</span>
		</div>
		<div class="comment-content">评论内容...........</div>
	</div>
</template>
<script setup lang="ts">
import { Rate } from 'vant'
</script>
<style lang="less" scoped>
.appraise-content {
	background-color: #fff;
	padding: @app-padding;
	padding-bottom: 1rem;
	margin-top: @app-padding;
	border-radius: @app-component-border-radius;

	& > div {
		margin-top: @app-padding;
	}

	.user-message {
		display: flex;

		.head-photo {
			--size: 2rem;
			width: var(--size);
			height: var(--size);
			border-radius: 50%;
			background-color: red;
			margin-right: 6px;
		}

		.name-and-date {
			font-size: 12px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.user-name {}

			.appraise-date {
				opacity: .5;
			}
		}

	}

	.grade {
		transform: scale(.7);
		transform-origin: 0 50%;

		& > span {
			margin-right: .5em;
		}
	}

	.comment-content {
		font-size: 12px;
	}
}
</style>