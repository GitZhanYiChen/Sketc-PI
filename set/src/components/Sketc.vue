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
		<div class="shouyeul_lunbo">
			 <Carousel autoplay v-model="value2" loop>
			  <div v-for="i in srca">
			    <CarouselItem>
			        <div class="demo-carousel"><img :src="i.src"></div>
			    </CarouselItem>
			  </div>
			</Carousel>
		</div>
	<div class="mohubeij">
		
	</div>
		<div class="neir">
			<ul class="nrul">
				<li><img src="../components/img/NR3.gif"/></li>
				<li><img src="../components/img/NR2.gif"/></li>
				<li><img src="../components/img/NR1.gif"/></li>
				<li><img src="../components/img/NR1.gif"/></li>
				<li><img src="../components/img/NR3.gif"/></li>
				<li><img src="../components/img/NR1.gif"/></li>
				<li><img src="../components/img/NR1.gif"/></li>
			</ul>
		</div>
		<img src="../components/img/dianjzhib.gif" class="tuoyuan"/>
	</div>
</template>

<script>
	   import Divider from "iview/src/components/divider/divider";
	export default {
	  components: {Divider},
	  data () {
	        return {
	            value2: 0,
	            srca:undefined
	        }
	    },
	  created() {
	    this.$http.post('/api/lubo/lubos').then((data) => {
	      this.srca = data.body.data;
	    }
	  )
	  }
	}
</script>

<style scoped="scoped">
	.demo-carousel{
		width: 100%;
	}
	.mohubeij{
		width: 100%;
		height: 200px;
		
	}
	.fenke{
		width: 100%;
		height: 35px;
	}
	.shouyetop{
		border-bottom: 3px solid #00B7FF;
	}
	.demo-carousel img{
		border-radius: 20px;
		width: 96%;
		margin-left: 2%;
		margin-right: 2%;
		}
	.ivu-carousel-dots{
	   padding-top: 30px;
	}
	*{
		margin: 0;
		padding: 0;
	}
	.tuoyuan{
		position: fixed;
		width: 130px;
		height:130px;
		top: 1100px;
		right: 50px;
	}
	.nrul{
		list-style-type: none;
		}
	.nrul li{
		float: left;
		width: 50%;
		}
	.nrul li img{
		width: 96%;
		}
	.neir{
		width: 94%;
		height: 100%;
		margin-top: 5%;
		margin-left: 3%;
		margin-right: 3%;
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
	
	.ivu-carousel-list {
		width: 100%;
	}
	
	.shouyeul_lunbo {
		float: left;
		width: 100%;
	}
	.nrul li img{
		width: 100%;
		margin: 0;
	}

</style>