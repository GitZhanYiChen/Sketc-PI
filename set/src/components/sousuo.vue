<template>
	<div class="body">
					<header class="toub">
				<a href="#" class=" bapck"></a>
				<input type="text" placeholder="搜索" class="sous"/>
				<a href="#" class=" bapck2"></a>
				</header> 
					<div class="denglu">
						<router-link to="dtai"><div class="shouji">作品</div></router-link>
						<div class="youxiang">作者</div>
		        	</div>
					<div class="huorec">
						<span class="remenss">热门搜索</span>
						<ul class="rem">
							<li>&nbsp;&nbsp;&nbsp;黄昏&nbsp;&nbsp;&nbsp;</li>
							<li>&nbsp;&nbsp;&nbsp;男孩&nbsp;&nbsp;&nbsp;</li>
							<li>&nbsp;&nbsp;&nbsp;鱼&nbsp;&nbsp;&nbsp;</li>
							<li>&nbsp;&nbsp;&nbsp;月亮&nbsp;&nbsp;&nbsp;</li>
							<li>&nbsp;&nbsp;&nbsp;兔子&nbsp;&nbsp;&nbsp;</li>
							<li>&nbsp;&nbsp;&nbsp;福&nbsp;&nbsp;&nbsp;</li>
							<li>&nbsp;&nbsp;&nbsp;花&nbsp;&nbsp;&nbsp;</li>
							<li>&nbsp;&nbsp;&nbsp;水果&nbsp;&nbsp;&nbsp;</li>
							<li>&nbsp;&nbsp;&nbsp;虫&nbsp;&nbsp;&nbsp;</li>
							<li>&nbsp;&nbsp;&nbsp;动漫&nbsp;&nbsp;&nbsp;</li>
							<li>&nbsp;&nbsp;&nbsp;魔道宗室&nbsp;&nbsp;&nbsp;</li>
							<li>&nbsp;&nbsp;&nbsp;情侣&nbsp;&nbsp;&nbsp;</li>
						</ul>
						
					</div>
	</div>
</template>

<script>
</script>

<style>
	ul{
		list-style-type: none;
		}
	.remenss{
		font-size: 34px;
		line-height: 80px;
	}
	.rem li{
		float: left;
		font-size: 32px;
		height: 1rem;
		line-height: 1rem;
		border-radius:2px ;
		background:#dadada;
		margin-left: 15px;
		margin-top: 10px;
		border-radius:10px ;
	}
	.huorec{
	 width: 100%;
	 height: 46.875rem;
	 background:#fafafa;
	}
	.bapck2{
	display: block;
	position: absolute;
	top: 55px;
	left: 8.75rem;
	width: 60px;
	height: 60px;
	font-size: 40px;
	background: url(img/fangdajing.gif) center no-repeat;
	background-size: auto 80%;
	}
	.sous{
	width: 96%;
	margin-left: 14%;
	height: 1.25rem;
	margin-top: 0.5rem;
	font-size: 42px;
	text-indent: 30px;
	border: hidden;
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
	border-bottom: 3px solid #00B7FF;
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
		background: #FFFFFF;
	}
	
</style>
