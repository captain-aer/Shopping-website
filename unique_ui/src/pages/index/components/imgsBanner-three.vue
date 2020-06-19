<template>
  <div id="slider">
    <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
          <a :href="sliders[sliders.length - 1].href">
            <img :style="{width:imgWidth+'px'}" :src="sliders[sliders.length - 1].img" alt="">
          </a>
        </li>
        <li  v-for="(item, index) in sliders" :key="index">
          <a :href="item.href">
            <img :style="{width:imgWidth+'px'}" :src="item.img" alt="">
          </a>
        </li>
        <li>
          <a :href="sliders[0].href">
            <img :style="{width:imgWidth+'px'}" :src="sliders[0].img" alt="">
          </a>
        </li>
      </ul>
      <ul class="direction">
        <li class="left" @click="move(180, 1, speed)">
          <svg class="icon" width="15px" height="15px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  /></svg>
        </li>
        <li class="right" @click="move(180, -1, speed)">
          <svg class="icon" width="15px" height="15px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
/* 全部 */
*{
box-sizing: border-box;
margin:0;
padding:0;
}
ol,ul{
list-style: none;
}
#slider{
text-align: center;
}
.window{
position:relative;
width:180px;
height:140px;
margin:0 auto;
overflow:hidden;
background-color: white;
}
.container{
display:flex;
position:absolute;
}
.left, .right{
position:absolute;
top:50%;
transform:translateY(-50%);
width:25px;
height:25px;
background-color:rgba(0,0,0,.3);
border-radius:50%;
cursor:pointer;
}
.left{
left:1%;
padding-left:6px;
padding-top:5px;
}
.right{
right:1%;
padding-right:6px;
padding-top:5px;
}
img{
user-select: none;
}
</style>
<script>
export default {
  name: 'slider',
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      sliders:[
        {
          img:'/img/imgBanner2/banner2-1.jpg',href:"https://www.baidu.com/"
        },
        {
          img:'/img/imgBanner2/banner2-2.jpg',href:"https://www.iconfont.cn/"
        },
        {
          img:'/img/imgBanner2/banner2-3.jpg',href:"https://www.baidu.com/"
        },
        {
          img:'/img/imgBanner2/banner2-4.jpg',href:"https://www.iconfont.cn/"
        },
        {
          img:'/img/imgBanner2/banner2-5.jpg',href:"https://www.baidu.com/"
        },
      ],
      imgWidth:180,
      currentIndex:1,
      distance:-180,
      transitionEnd: true,
      speed: this.initialSpeed
    }
  },
  computed:{
    containerStyle() {
      return {
        transform:`translate3d(${this.distance}px, 0, 0)`
      }
    },
    interval() {
      return this.initialInterval * 1000
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init() {
      this.play()
      window.onblur = function() { this.stop() }.bind(this)
      window.onfocus = function() { this.play() }.bind(this)
    },
    move(offset, direction, speed) {
      if (!this.transitionEnd) return
      this.transitionEnd = false
      direction === -1 ? this.currentIndex += offset/180 : this.currentIndex -= offset/180
      if (this.currentIndex > 5) this.currentIndex = 1
      if (this.currentIndex < 1) this.currentIndex = 5

      const destination = this.distance + offset * direction
      this.animate(destination, direction, speed)
    },
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null ;
      }
      this.temp = window.setInterval(() => {
        if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
          this.distance += speed * direc
        } else {
          this.transitionEnd = true
          window.clearInterval(this.temp)
          this.distance = des
          if (des < -900) this.distance = -180
          if (des > -180) this.distance = -900
        }
      }, 20)
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(index - this.currentIndex) * 180;
      const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed ;
      this.move(offset, direction, jumpSpeed)
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer)
        this.timer = null
      }
      this.timer = window.setInterval(() => {
        this.move(180, -1, this.speed)
      }, this.interval)
    },
    stop() {
      window.clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>