<template>
	<div>
		<header class="toub">
    <a href="#" class=" bapck"></a>
			<span>登录</span>
		</header>
		<div class="denglu">
			<div class="shouji">手机登录</div>
			<div class="youxiang">邮箱登录</div>
		</div>
		<div>
			<div style="display: flex;margin-top: 2rem;">
				<select class="baliu">
				<option value="0">+86</option>
				</select>
				<input type="text" value="手机号码" class="haoma" v-model="username" placeholder="手机号码"/>
			</div>
			
			<div class="yes"></div>
			</div>
			<div>
			<input type="text" value="请输入密码" class="mima" v-model="password" placeholder="请输入密码"/>
					<img src="../components/img/yanj.gif" class="yanj">
			<div class="no"></div>
			</div>
			<div class="wangji">忘记密码？</div>
			<input type="submit" v-on:click=userlogin() class="dengl" value="登录" />
			<div class="zhuceyig">我还没有账号，<span>立即注册</span></div>
			<div class="qit">
				<div class="zuoceqi"><hr/></div>
				<div class="zhojian">其他注册方式</div>
				<div class="youceq"><hr/></div>
			</div>
			<div class="qitdengl">
				<div></div>
				<div></div>
				<div></div>
			</div>
	</div>
</template>

<script>
	
		export default{
		data(){
			return{
				username:'',
				password:'',
			}
		},
		methods:{
			userlogin:function(event){
				this.$http.post('/api/users/login',{username:this.username,password:this.password}).then((data)=>{
					if(data!=null){
						alert(data.body.message);
					}
				})
			},
		}
	}
</script>

<style>
	.yanj{
		position: absolute;
		top: 580px;
		left: 650px;
	}
	.baliu{
		width: 100px;
		height: 60px;
		border: hidden;
		font-size: 38px;
		color:#9b9b9b;
		position: absolute;
		top: 400px;
		left: 50px;
		
	}
	*{
		margin: 0;
		padding: 0;
	}
	.qitdengl{
		margin-top:50px ;
	}
	.qitdengl :nth-last-child(1){
		float: left;
		width: 33%;
		background: url(img/weix.gif)center no-repeat;
		height: 150px;
	}
	.qitdengl :nth-last-child(2){
		float: left;
		width: 33%;
		background: url(img/weibo.gif)center no-repeat;
		height: 150px;
	}
	.qitdengl :nth-last-child(3){
		float: left;
		width: 33%;
		background: url(img/qq.gif)center no-repeat;
		height: 150px;
	}
	.qit{
		margin-top: 200px;
		color:#999999;
	}
	.qit .zhojian{
		width: 35%;
		margin-left: 32.5%;
		margin-right: 32.5%;
		text-align: center;
	}
	.qit .zuoceqi{
		width: 32.5%;
		float: left;
		margin-top: 20px;
		}
		.qit .youceq{
		width: 32.5%;
		float: right;
		margin-top: -10px;
		}
	.dengl{
		margin-top: 50px;
		width: 94%;
		border-radius:8px ;
		height: 100px;
		margin-left: 3%;
		margin-right: 3%;
		background: #efefef;
		line-height: 100px;
		text-align: center;
		font-size: 32px;
		color: #fff;
	}
	.wangji{
		width: 100%;
		font-size: 30px;
		color: cadetblue;
		margin-top: 20px;
		text-indent: 80%;
	}
	.zhuceyig{
		width: 100%;
		font-size: 30px;
		margin-top: 20px;
		text-indent: 20px;
		color:#999999;
	}
	.zhuceyig span{
		color: cadetblue;
	}
	.shouji{
		box-shadow: 5px 5px 5px #2C3E50;
	}
		.youxiang{
		box-shadow: 5px 5px 5px #2C3E50;
	}
	.yes{
		width:100%;
		height: 30px;
		background:url(img/xian.gif)no-repeat;
	}
		.no{
		width:100%;
		height: 30px;
		background:url(img/no.gif)no-repeat;
	}


	.haoma{
		width: 92%;
		margin-top: 50px;
		margin-left:4%;
		margin-right: 4%;
		height: 100px;
		font-size: 35px;
		border: hidden;
		text-indent: 150px;
	}
	.mima{
		width: 92%;
		margin-top: 50px;
		margin-left:4%;
		margin-right: 4%;
		height: 100px;
		font-size: 35px;
		border: hidden;
		text-indent: 30px;
	}
	.bapck{
    display: block;
    position: absolute;
    top: 55px;
    left: 30px;
    width: 60px;
    height: 60px;
    font-size: 40px;
    background: url(img/fanhui.gif) center no-repeat;
    background-size: auto 80%;
	}
	.toub{
		width: 100%;
		height: 170px;
		background: #00bbd3;
		display: flex;
	}
	.shouji{
		float: left;
		width: 50%;
		height: 85px;
		background: #00bbd3;
		font-size: 28px;
		color:#ffffff;
		line-height: 85px;
		text-indent: 135px;
		border-bottom: 3px solid yellow;
	}
	.youxiang{
		float: left;
		width: 50%;
		height: 85px;
		background: #00bbd3;
			font-size: 28px;
		color:#ffffff;
		line-height: 85px;
		text-indent: 140px;
		border: hidden;
	}
	.toub span{
		width: 150px;
		height: 60px;
		font-size: 40px;
		color: #fff;
		line-height: 170px;
		margin-left: 170px;			
	}
</style>