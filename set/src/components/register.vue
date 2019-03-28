<template>
	<div>
		<header class="toub">
    <a href="#" class=" bapck"></a>
			<span>注册</span>
		</header>
		<div class="denglu">
			<div class="shouji">手机注册</div>
			<div class="youxiang">邮箱注册</div>
		</div>
		<form>
			<div>
			<div>
				<input type="text" value="手机号码" class="haoma" v-model="username">
			</div>
			
			<div class="yes"></div>
			</div>
			<div class="yanzmapo">
			<input type="text"  value="验证码" class="mima" v-model="password"/>
			<div class="yanzma">获取验证码</div>
			<div class="no"></div>
			</div>
			<div class="yanmass">
			<input type="text" v-model="rePassword" value="" placeholder="请输入密码（6-16字符，区分大小写）" class="mima"/>
			<img src="../components/img/yanj.gif" class="yanj">
			<div class="no"></div>
				<input type="submit"  class="dengl" value="注册" v-on:click="userRegister()"/>
				<div class="zhuceyig">我已有账号，<span>立即登录</span></div>
				<ul class="xieyi">
					<li>轻触上面的“注册”按钮,即表示同意</li>
						<li class="li2">《Sketch Pi软件许可服务协议》</li>
				</ul>
			</div>
			</form>

	</div>
</template>

<script>
export default{
		data(){
			return{
				username:'',
				password:'',
				rePassword:''
			}
		},
		methods:{
			userRegister:function(event){
				if(this.password!=this.rePassword){
					alert("两次密码不一致")
				}else{
					let sendDate={
						username:this.username,
						password:this.password,
					}
					this.$http.post('/api/users/register',sendDate).then((data)=>{
						if(data.body.status==1){
							alert(data.body.message)
						}else{
							alert("注册成功")
							this.$router.go({path:'index'})
						}
					}).catch(function(err){
						console.log(err);
					})
				}
			}
		}
	}
</script>

<style>
	.xieyi{
		margin-top: 250px;
		list-style-type: none;
		font-size: 28px;
		text-align: center;
		color:#999999
	}
	.li2{
		color:#00bbd3
	}
	.zhuceyig{
		width: 100%;
		font-size: 30px;
		margin-top: 20px;
		text-indent: 20px;
		color:#999999;
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
	.yanj{
		position: absolute;
		left: 660px;
		top: 80px;
	}
	.yanzmapo{
		position: relative;
		}
	.yanmass{
		position: relative;
		color:#999999;
		}
	.yanzma{
		width: 230px;
		height: 75px;
		border: 4px solid #11bfd6; 
		border-radius:10px ;
		position: absolute;
		top: 70px;
		left: 485px;
		font-size: 36px;
		line-height: 75px;
		text-indent: 20px;
		color: #11bfd6;
		
	}
	.mima{
		width: 92%;
		margin-top: 50px;
		margin-left:4%;
		margin-right: 4%;
		height: 100px;
		font-size: 35px;
		border: hidden;
		color:#999999
	}
	.no{
		width:100%;
		height: 30px;
		background:url(img/no.gif)no-repeat;
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
		border: hidden;
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
		font-size: 45px;
		color: #fff;
		line-height: 170px;
		margin-left: 150px;			
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
		margin-top: 30px;
		color:#999999;
	}
</style>