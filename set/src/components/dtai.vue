<template>
	<div class="body">
		<header class="toub">
		<a href="#" class=" bapck"></a>
				<span>动态</span>
		</header>
			<div class="denglu">
				<div class="shouji">消息</div>
				<router-link to="tzhi"><div class="youxiang">通知</div></router-link>
			</div>
			<ul>
				<li>
					<p class="pbq">春天啦去踏青咯</p>
					<span>2019-03-19 16:14:44</span>
					<p class="pbq2">春暖花开什么的最适合去踏青啦~快带火烈鸟粗去玩咯</p>
					<hr />
					<p class="pbq3">查看详情</p>
					<a href="#" class=" youjian"></a>
				</li>
					<li>
					<p class="pbq">春天啦去踏青咯</p>
					<span>2019-03-19 16:14:44</span>
					<p class="pbq2">春暖花开什么的最适合去踏青啦~快带火烈鸟粗去玩咯</p>
					<hr />
					<p class="pbq3">查看详情</p>
					<a href="#" class=" youjian"></a>
				</li>
					<li>
					<p class="pbq">春天啦去踏青咯</p>
					<span>2019-03-19 16:14:44</span>
					<p class="pbq2">春暖花开什么的最适合去踏青啦~快带火烈鸟粗去玩咯</p>
					<hr />
					<p class="pbq3">查看详情</p>
					<a href="#" class=" youjian"></a>
				</li>
					<li>
					<p class="pbq">春天啦去踏青咯</p>
					<span>2019-03-19 16:14:44</span>
					<p class="pbq2">春暖花开什么的最适合去踏青啦~快带火烈鸟粗去玩咯</p>
					<hr />
					<p class="pbq3">查看详情</p>
					<a href="#" class=" youjian"></a>
				</li>
					<li>
					<p class="pbq">春天啦去踏青咯</p>
					<span>2019-03-19 16:14:44</span>
					<p class="pbq2">春暖花开什么的最适合去踏青啦~快带火烈鸟粗去玩咯</p>
					<hr />
					<p class="pbq3">查看详情</p>
					<a href="#" class=" youjian"></a>
				</li>
					<li>
					<p class="pbq">春天啦去踏青咯</p>
					<span>2019-03-19 16:14:44</span>
					<p class="pbq2">春暖花开什么的最适合去踏青啦~快带火烈鸟粗去玩咯</p>
					<hr />
					<p class="pbq3">查看详情</p>
					<a href="#" class=" youjian"></a>
				</li>
					<li>
					<p class="pbq">春天啦去踏青咯</p>
					<span>2019-03-19 16:14:44</span>
					<p class="pbq2">春暖花开什么的最适合去踏青啦~快带火烈鸟粗去玩咯</p>
					<hr />
					<p class="pbq3">查看详情</p>
					<a href="#" class=" youjian"></a>
				</li>
					<li>
					<p class="pbq">春天啦去踏青咯</p>
					<span>2019-03-19 16:14:44</span>
					<p class="pbq2">春暖花开什么的最适合去踏青啦~快带火烈鸟粗去玩咯</p>
					<hr />
					<p class="pbq3">查看详情</p>
					<a href="#" class=" youjian"></a>
				</li>
			</ul>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.body{
		background:#eeeeee;
		}
	.pbq3{
		font-size: 32px;
		line-height: 80px;
		}
	.pbq2{
		font-size: 26px;
		color:#666666;
		}
	span{
		color:#999999;
		margin-left: 0.29rem;
	}
	.pbq{
		font-family: "黑体加粗";
		font-size: 36px;
		}
	.youjian{
		display: block;
		position: absolute;
		top: 2.65rem;
		left: 8.6rem;
		width: 50px;
		height: 50px;
		font-size: 40px;
		background: url(img/youjiant.gif) center no-repeat;
		background-size: auto 80%;
			
		}
	ul{
		margin-top: 1.875rem;
		list-style-type: none;
		
	}
	ul li{
		width: 94%;
		margin-left: 3%;
		margin-right: 3%;
		height: 3.5rem;
		text-indent: 20px;
		border: 1px solid #999999;
		background: #FFFFFF;
		position: relative;
		line-height: 55px;
		box-shadow: 3px 3px 0.1875rem;
		border-radius:6px ;
		margin-top: 0.5rem;
	}
	hr{
		width: 90%;
		margin-left: 5%;
		margin-top: 2%;
		
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
	.toub span{
		width: 150px;
		height: 60px;
		font-size: 42px;
		line-height: 170px;
		margin-left: 170px;			
		
	}
</style>
