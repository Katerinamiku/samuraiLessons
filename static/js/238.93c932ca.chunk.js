"use strict";(self.webpackChunksamurai=self.webpackChunksamurai||[]).push([[238],{7284:function(n,e,s){s.d(e,{D:function(){return u}});var i=s(8683),r=s(5987),t=s(1045),o=(s(2791),s(8687)),a=s(184),l=["isAuth"],d=function(n){return{isAuth:n.auth.isAuth}};function u(n){return(0,o.$j)(d)((function(e){var s=e.isAuth,o=(0,r.Z)(e,l);return s?(0,a.jsx)(n,(0,i.Z)({},o)):(0,a.jsx)(t.l_,{to:"/login"})}))}},238:function(n,e,s){s.r(e),s.d(e,{default:function(){return w}});var i=s(5671),r=s(3144),t=s(136),o=s(2882),a=s(2791),l=s(8687),d=s(7483),u={friendsTitle:"Friends_friendsTitle__Ck8js",friendsBlock:"Friends_friendsBlock__VkOiC",friendsList:"Friends_friendsList__KlZgj",friendItem:"Friends_friendItem__yTZT+",avaBtn:"Friends_avaBtn__-9tsR",friendDescription:"Friends_friendDescription__yTvkv",name:"Friends_name__YZEzh",status:"Friends_status__PvlnO"},f=s(820),c=s(1523),g=s(9439),p=s(184),h=function(n){return n.friends.length?(0,p.jsxs)("div",{className:u.friendsBlock,children:[(0,p.jsx)("div",{className:u.friendsTitle,children:"My Friends"}),(0,p.jsx)(f.t,{currentPage:n.currentPage,pageSize:n.pageSize,onPageChanged:n.onPageChanged,totalItemsCount:n.totalFriendsCount,portionSize:10}),(0,p.jsx)("div",{className:u.friendsList,children:n.friends.map((function(e){return(0,p.jsxs)("div",{className:u.friendItem,children:[(0,p.jsxs)("div",{className:u.avaBtn,children:[(0,p.jsx)(c.OL,{to:"/profile/"+e.id,children:(0,p.jsx)("img",{className:u.avatar,alt:"avatar",src:null!=e.photos.small?e.photos.small:d})}),e.followed?(0,p.jsx)(g.z,{name:"Unfollow",size:"small",callBack:function(){return n.unfollow(e.id)},disabled:n.followingInProgress.some((function(n){return n===e.id}))}):(0,p.jsx)(g.z,{size:"small",name:"Follow",callBack:function(){n.follow(e.id)},disabled:n.followingInProgress.some((function(n){return n===e.id}))})]}),(0,p.jsxs)("div",{className:u.friendDescription,children:[(0,p.jsx)("div",{className:u.name,children:e.name}),(0,p.jsx)("div",{className:u.status,children:e.status})]})]})}))})]}):(0,p.jsx)("div",{className:u.friendsTitle,children:"Friends not found"})},m=s(6287),v=s(7284),_=s(7781),j=s(6417),F=function(n){(0,t.Z)(s,n);var e=(0,o.Z)(s);function s(){var n;(0,i.Z)(this,s);for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return(n=e.call.apply(e,[this].concat(t))).onPageChanged=function(e){var s=n.props.pageSize;n.props.getFriends(e,s)},n}return(0,r.Z)(s,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,s=n.pageSize;this.props.getFriends(e,s)}},{key:"render",value:function(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(h,{friends:this.props.friends,totalFriendsCount:this.props.totalFriendsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})})}}]),s}(a.Component),w=(0,_.qC)((0,l.$j)((function(n){return{friends:n.friends.friends,pageSize:n.friends.pageSize,totalFriendsCount:n.friends.totalFriendsCount,currentPage:n.friends.currentPage,followingInProgress:(0,j.yg)(n)}}),{follow:m.ZN,unfollow:m.fv,getFriends:m.$J}),v.D)(F)}}]);
//# sourceMappingURL=238.93c932ca.chunk.js.map