"use strict";(self.webpackChunksamurai=self.webpackChunksamurai||[]).push([[147],{8508:function(e,n,s){s.r(n),s.d(n,{default:function(){return x}});var i=s(5671),r=s(3144),a=s(136),t=s(2882),o=s(2791),l=s(8687),d=s(7483),c=s.p+"static/media/sadcat.421ae346c04a94d8e13f.gif",f={friendsBlock:"Friends_friendsBlock__VkOiC",friendsTitle:"Friends_friendsTitle__Ck8js",sadcat:"Friends_sadcat__FGWtU",friendsList:"Friends_friendsList__KlZgj",friendItem:"Friends_friendItem__yTZT+",avaBtn:"Friends_avaBtn__-9tsR",friendDescription:"Friends_friendDescription__yTvkv",name:"Friends_name__YZEzh",status:"Friends_status__PvlnO"},u=s(820),g=s(1523),p=s(9439),h=s(184),m=function(e){return e.friends.length?(0,h.jsxs)("div",{className:f.friendsBlock,children:[(0,h.jsx)("div",{className:f.friendsTitle,children:"My Friends"}),(0,h.jsx)(u.t,{currentPage:e.currentPage,pageSize:e.pageSize,onPageChanged:e.onPageChanged,totalItemsCount:e.totalFriendsCount,portionSize:10}),(0,h.jsx)("div",{className:f.friendsList,children:e.friends.map((function(n){return(0,h.jsxs)("div",{className:f.friendItem,children:[(0,h.jsxs)("div",{className:f.avaBtn,children:[(0,h.jsx)(g.OL,{to:"/profile/"+n.id,children:(0,h.jsx)("img",{className:f.avatar,alt:"avatar",src:null!=n.photos.small?n.photos.small:d})}),n.followed?(0,h.jsx)(p.z,{name:"Unfollow",size:"small",callBack:function(){return e.unfollow(n.id)},disabled:e.followingInProgress.some((function(e){return e===n.id}))}):(0,h.jsx)(p.z,{size:"small",name:"Follow",callBack:function(){e.follow(n.id)},disabled:e.followingInProgress.some((function(e){return e===n.id}))})]}),(0,h.jsxs)("div",{className:f.friendDescription,children:[(0,h.jsx)("div",{className:f.name,children:n.name}),(0,h.jsx)("div",{className:f.status,children:n.status})]})]})}))})]}):(0,h.jsxs)("div",{className:f.friendsTitle,children:["You have no cat-friends yet",(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:c,alt:"no friends",className:f.sadcat})})]})},v=s(6287),_=s(7284),j=s(7781),F=s(6417),w=function(e){(0,a.Z)(s,e);var n=(0,t.Z)(s);function s(){var e;(0,i.Z)(this,s);for(var r=arguments.length,a=new Array(r),t=0;t<r;t++)a[t]=arguments[t];return(e=n.call.apply(n,[this].concat(a))).onPageChanged=function(n){var s=e.props.pageSize;e.props.getFriends(n,s)},e}return(0,r.Z)(s,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,s=e.pageSize;this.props.getFriends(n,s)}},{key:"render",value:function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(m,{friends:this.props.friends,totalFriendsCount:this.props.totalFriendsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})})}}]),s}(o.Component),x=(0,j.qC)((0,l.$j)((function(e){return{friends:e.friends.friends,pageSize:e.friends.pageSize,totalFriendsCount:e.friends.totalFriendsCount,currentPage:e.friends.currentPage,followingInProgress:(0,F.yg)(e)}}),{follow:v.ZN,unfollow:v.fv,getFriends:v.$J}),_.D)(w)}}]);
//# sourceMappingURL=147.f15c161a.chunk.js.map