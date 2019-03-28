<template>
		<div>
		<header class="toubu">
			趣多多
			<img src="../components/img/jiant.gif"  class="img1"/>
			<img src="../components/img/fenxiang.gif" class="img2" />
		</header>
		<div class="toux">
			<img src="../components/img/touxiang.gif" class="toux1"/>
			<ul class="yuelan">
				<li>浏览0</li>
				<li><img src="../components/img/shugang.gif"/></li>
				<li>赞0</li>
				<li><img src="../components/img/shugang.gif"/></li>
				<li>粉丝0</li>
			</ul>
		</div>
		<div class="guanzhu">
			<div class="guanzhudr">关注的人</div>
			<div class="fensi">粉丝</div>
		</div>
		<div class="div">
			<img src="../components/img/fensi.gif" class="img4" />
			<ul class="dibu">
			<li>您还没有如何粉丝</li>
			<li>多发作品，让更多人看到你哦</li>
		</ul>
		</div>
		
	</div>
</template>

<script>
</script>

<style>
	.dibu{
		list-style-type: none;
		text-align: center;
		font-size: 28px;
		margin-top: 400px;
		line-height: 50px;
		color:#666666;
	}
	
	.img4{
	    position: absolute;
	    top: 600px;
	    left: 270px;
	     width: 240px;
	    height: 200px;
		}
	.guanzhu{
		width: 100%;
		height: 100px;
		line-height: 80px;
		font-size: 26px;
	}
	.guanzhudr{
		float: left;
		width: 50%;
		text-align: center;
	}
	.fensi{
		float: left;
		width: 50%;
		text-align: center;
		border-bottom:3px solid #00B7FF;
	}
	.yuelan{
		list-style-type: none;
		width: 50%;
		height: 50px;
		margin-left: 18%;
		margin-right: 25%;
		margin-top: 60px;
	    color:#bbbbbb;
	}
	.yuelan li{
		float: left;
		font-size: 28px;
		text-align: center;
		width: 20%;
	}
	.yuelan li img{
		height: 50px;
		}
	.toux{
		width:100%;
		height: 300px;
	}
	.toux1{
		width: 150px;
		height: 150px;
		margin-left: 41%;
		margin-right: 38%;
	}
	.toubu{
		width: 100%;
		height: 100px;
		font-size: 45px;
		text-indent: 120px;
		line-height: 100px;
		position: relative;
		font-weight: 500;
		background: #FFFFFF;
	}
	.img1{
		position: absolute;
		top: 35px;
		left: 30px;
		width: 36px;
		height: 34px;
	}
	.img2{
		position: absolute;
		top: 33px;
		right:33px;
		height: 40px;
		width: 36px;
	}
</style>