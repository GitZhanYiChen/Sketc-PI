<template>
	<div class="body">
			<header class="toub">
		<a href="#" class=" bapck"></a>
				<span>动态</span>
		</header>
			<div class="denglu">
				<router-link to="dtai"><div class="shouji">消息</div></router-link>
				<div class="youxiang">通知</div>
			</div>
			<img src="../components/img/kulian.gif" class="img4" />
			<ul class="dibu">
				<li>您还没有关注任何人</li>
				<li>添加关注，随时掌握大神动态</li>
			</ul>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.body{
		height: 17.8rem;
		background:#eeeeee;
		}
		.dibu{
		list-style-type: none;
		text-align: center;
		font-size: 28px;
		margin-top: 680px;
		line-height: 50px;
		color:#666666;
	}
	.img4{
		width: 4.5rem;
	    position: absolute;
	    top: 500px;
	    left: 220px;
		}
		.bapck{
	display: block;
	position: absolute;
	top: 55px;
	left: 30px;
	width: 60px;
	height: 60px;
	font-size: 40px;
	background: url(img/bacekjiant.gif) center no-repeat;
	background-size: auto 80%;
	}
	.toub{
	width: 100%;
	height: 170px;
	display: flex;
	background: #FFFFFF;
	}
	.shouji{
	float: left;
	width: 50%;
	height: 85px;
	font-size: 28px;
	line-height: 85px;
	text-align: center;
		background: #FFFFFF;
	}
	.youxiang{
	float: left;
	width: 50%;
	height: 85px;
	font-size: 28px;
	line-height: 85px;
	border: hidden;
	text-align: center;
		border-bottom: 3px solid #00B7FF;
		background: #FFFFFF;
	}
	.toub span{
		width: 150px;
		height: 60px;
		font-size: 42px;
		line-height: 170px;
		margin-left: 170px;			
		
	}
</style>
