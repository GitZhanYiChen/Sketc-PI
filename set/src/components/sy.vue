<template>
<div class="main">
<div class="main1">
1231231231
</div>
    <Carousel autoplay v-model="value2" loop>
      <div v-for="i in srca">
        <CarouselItem>
            <div class="demo-carousel"><img :src="i.src"></div>
        </CarouselItem>
      </div>
    </Carousel>
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
<style>
*{
margin:0 0;
}
.main1{
display:flex;
width:750px;
margin:0 auto;
    background-color:#ffc400 ;
}
.main2{
width:200px;
padding:30px 10px;
}
.main3{
width:50px;
margin-left:450px;
padding:35px 0px;
}
.main3 img{
width:50px;
}
.demo-carousel img{
width:750px;
}
  .main4{
    width: 750px;
    margin: 0 auto;
  }
  .main4 img{
    width: 100px;
  }
</style>
