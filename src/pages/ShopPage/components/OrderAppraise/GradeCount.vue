<template>
	<div class="grade-count">
		<div class="content">
			<van-row class="grade">
				<van-col span="12">
					<div class="count">{{a}}</div>
					<div class="start-box">
						<p>高于附近0.0%的商家</p>
						<Rate allow-half readonly v-model="a" size="12px" color="red" gutter="0" />
					</div>
				</van-col>
				<!-- ↓预留位置 -->
				<van-col span="12"></van-col>
			</van-row>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { Rate } from 'vant';
const a = 4.3
</script>
<style lang="less" scoped>
.grade-count {
	background-color: #fff;
	border-radius: @app-component-border-radius;
	padding: @app-padding;

	.content {
		.grade {
			& > div {
				display: flex;
			}

			.count {
				font-size: 1.5rem;
				color: red;
				margin-right: 6px;
			}

			.start-box {
				height: 100%;
				font-size: 12px;
				transform: scale(.8);
				transform-origin: 0 50%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
		}
	}
}
</style>