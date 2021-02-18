<template>
  <div>
    <ul style="list-style-type:none;">
      <li v-for="(artist) in artists" :key="artist.id" >
      <h4 class="title">{{artist.id}}. 
        <img src="./grayarrow.gif" class="votearrow"/>
        <span class="storylink"> {{artist.text}}</span> 
        <span class="sitestr">({{artist.site}})</span>
      </h4>
      <h6 style="padding-left:30px" class="subtext">{{artist.points}} Points by 
        <a>{{artist.BY}}</a> <a>{{artist.lastDate}}</a> | 
        <a>{{artist.visit}}</a> | 
        <a>{{artist.CounterComments}} comments</a>
      </h6>
      
      </li>
      
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Test',
  data (){
    return {
      artists: [
       {id:1,text: 'TikTok hit with consumer law breaches complaints across Europe', site: 'reuters.com', points: '97',BY:'giuliomagnifico',lastDate:'1 hour ago',visit:'hide',CounterComments:'57'},
       {id:2,text: 'Show HN: Endgame – An AWS Pentesting tool to backdoor or expose AWS resources', site: 'github.com/salesforce', points: '128',BY:'kmcquade',lastDate:'2 hours ago',visit:'hide',CounterComments:'20'},
       {id:3,text: 'What I Worked On', site: 'paulgraham.com', points: '30',BY:'tosh',lastDate:'27 minutes ago',visit:'hide',CounterComments:'7'},
       {id:4,text: 'The VT-69 portable data terminal', site: 'violence.works', points: '32',BY:'656565656565',lastDate:'1 hour ago',visit:'hide',CounterComments:'22'},
       
      ]
    }
  }
}
</script>
<style scoped>
body {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 10pt;
    color: #828282;
}
.title {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 10pt;
    color: #828282;
}

.votearrow {
    width: 10px;
    height: 10px;
    border: 0px;
    margin: 3px 2px 6px;
    /* background: url(grayarrow.gif) no-repeat; */
}
a:link {
    color: #000000;
    text-decoration: none;
}

.subtext {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 7pt;
    color: #828282;
}
.subtext a:link, .subtext a:visited {
    color: #828282;
}
.subtext a:hover {
    text-decoration: underline;
}

.sitestr{
    color: #828282;
    font:10px;
}
.storylink{
    color: black;
    font:13px;
}
</style>