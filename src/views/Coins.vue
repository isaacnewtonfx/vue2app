<template>
  <div class="coins">

    <Header/>

    <div v-if="param_id=='all'">
      <router-link to="/coins/all/childview">Show Child View</router-link>
    </div>

    <!-- show child view here -->
    <router-view></router-view>

    <div v-if="isLoading">
      <div class="container">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>  

    

      <div v-else-if="singleCoin">
        <p>Name: {{ coinData.name }}</p>
        <p>Symbol: {{ coinData.symbol }}</p>
        <p>Price (USD): ${{ coinData.price_usd.toLocaleString('en') }}</p>
      </div>

      <div v-else>
        <table>
          <tr>
            <th style="width:90px">#</th>
            <th style="width:128;text-align:left;">Name</th>
            <th style="width:121px">Market Cap</th>
            <th style="width:100px">Price</th>
            <th style="width:180px">Volume (24h)</th>
            <th style="width:164px">Circulating Supply</th>
            <th style="width:106px">Change (24h)</th>
          </tr>
          <tr v-for="(row, k) in coinData" v-bind:key="row.id">
            <td>{{k}}</td>            
            <td style="text-align:left;"> 
              <img v-bind:src="getImageUrl(k)" class="logo-sprite" alt="Bitcoin" width="16" height="16"> {{ row.name}}
            </td>
            <td>${{row.quotes.USD.market_cap.toLocaleString('en')}}</td>
            <td>${{row.quotes.USD.price.toLocaleString('en')}}</td>
            <td>${{row.quotes.USD.volume_24h.toLocaleString('en')}}</td>
            <td>${{row.circulating_supply.toLocaleString('en')}}</td>
            <td>{{row.quotes.USD.percent_change_24h}} %</td>
          </tr> 
        </table>
      </div>


      <Footer/>


  </div>
</template>

<script>
  //import axios from 'axios'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'

  export default {
    name: 'Coins',
    components: {Header, Footer},
    data() {
      return {
        isLoading:true,
        coinData: {},
        singleCoin:false,
        param_id:null
      }
    },

    created() {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },
     computed: {
      getParamId () {
        return this.param_id
      }
    },
    methods: {
        isEmpty(obj) { 
            for ( var prop in obj ) { 
                return false
            } 
            return true
        },
        getImageUrl(key){
          return `https://s2.coinmarketcap.com/static/img/coins/16x16/${key}.png`
        },
      fetchData() {
          let thisComponent = this
        
        // axios.get('https://api.coinmarketcap.com/v1/ticker/'+this.$route.params.id+'/')
        // .then((resp) => {
        //   this.coin = resp.data[0]
        //   console.log(resp)
        // })
        // .catch((err) => {
        //   console.log(err)
        // })

        const id = this.$route.params.id
        this.param_id = id
      

        if(id == "all"){
            thisComponent.singleCoin = false
            thisComponent.isLoading = true

            fetch('https://api.coinmarketcap.com/v2/ticker/?limit=3000')
            .then((resp)=>{
                return resp.json()
            }).then((data)=>{
                let coins = JSON.stringify(data.data)
                let coinsJson = JSON.parse(coins)
                //console.log(JSON.parse(coins))
                thisComponent.coinData = coinsJson
                thisComponent.isLoading = false
            }).catch((err)=>{
                console.log(err)
            })

        }else{
            thisComponent.singleCoin = true
            thisComponent.isLoading = true

            fetch('https://api.coinmarketcap.com/v1/ticker/'+id+'/')
            .then(function(resp){
                return resp.json()
            }).then(function(data){
                let coin = data[0]
                thisComponent.coinData = coin
                thisComponent.isLoading = false
            }).catch(function(err){
                console.log(err)
            })
        }


      }
    }
  }
</script>


<style>

table
{ 
  border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
}

tr {
  line-height:60px;
  border-bottom:1px solid #DCDCDC;
}




/* loading placeholder css 
http://www.codewithitguy.com/loading-placeholder-effect/
*/
.container
{
	height: 220px;
	border: 1px solid lightgrey;
	border-radius: 5px;
	width: 50%;
  margin: auto;
}
.line
{
	height: 12px;
	margin: 10px;
	animation: pulse 1s infinite ease-in-out;
	-webkit-animation:pulse 1s infinite ease-in-out;
}
.container div:nth-child(1)
{
	width: 150px;
}
.container div:nth-child(2)
{
	width: 120px;
}
.container div:nth-child(3)
{
	width: 230px;
}
.container div:nth-child(4)
{
	width: 110px;
}
.container div:nth-child(5)
{
	width: 90px;
}
.container div:nth-child(6)
{
	width: 135px;
}
.container div:nth-child(7)
{
	width: 230px;
}
.container div:nth-child(8)
{
	width: 178px;
}
.container div:nth-child(9)
{
	width: 140px;
}
.container div:nth-child(10)
{
	width: 138px;
}

@keyframes pulse
{
	0%{
		background-color: rgba(165,165,165,.1);
	}
	50%{
		background-color: rgba(165,165,165,.3);
	}
	100%{
		background-color: rgba(165,165,165,.1);
	}
}
@-webkit-keyframes pulse
{
	0%{
		background-color: rgba(165,165,165,.1);
	}
	50%{
		background-color: rgba(165,165,165,.3);
	}
	100%{
		background-color: rgba(165,165,165,.1);
	}
}
/* end loading placeholder css */



</style>