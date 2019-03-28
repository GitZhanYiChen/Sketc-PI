<template>
		<div class="mian">
		<header class="toubu">
			SKetc Pi
			<img src="../components/img/sanh.gif"  class="img1"/>
			<img src="../components/img/ldang.gif" class="img2" />
			<img src="../components/img/fangdajing.gif"  class="img3"/>
		</header>
		<div>
			<ul class="shouyeul">
				<li class="shouyetop"><router-link to="Sketc">首页</router-link></li>
				<li class="guanzhutop"><router-link to="guanzhu">关注</router-link></li>
				<li class="jielongtop"><router-link to="jielong">接龙</router-link></li>
			</ul>
		</div>
		<ul class="jielul">
			<li><img src="../components/img/jiel1.gif"/></li>
			<li><img src="../components/img/jiel2.gif"/></li>
			<li><img src="../components/img/jiel3.gif"/></li>
			<li><img src="../components/img/jiel2.gif"/></li>
			<li><img src="../components/img/jiel1.gif"/></li>
		</ul>
		</div>
</template>

<script>
</script>

<style scoped="scoped">
	.jielongtop{
		border-bottom: 3px solid #00B7FF;
	}
	*{
		margin: 0;
		padding: 0;
	}
	.jielul li img{
			width: 100%;
	}
	.jielul{
		list-style-type: none;
		margin: 0;
	}
	.shouyeul{
		width: 100%;
		height: 130px;
		background: #FFFFFF;
		box-shadow: 4px 4px 4px #d6d6d6;
	}
	.shouyeul li{
		float: left;
		width: 33%;
		height: 134px;
		list-style-type: none;
		text-align: center;
		line-height: 160px;
		font-size: 28px;
		color:#717171;
	}
	.mian{
		width: 100%;
		height: 1700px;
		background:#fafafa;
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
		width: 42px;
		height: 34px;
	}
    .img2{
		position: absolute;
		top: 33px;
		right: 50px;
		height: 40px;
		width: 36px;
		
	}
	.img3{
		position: absolute;
		top: 35px;
		right: 150px;
		height: 40px;
		width: 36px;
	}
</style>