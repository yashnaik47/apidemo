(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(13),s=n.n(r),u=n(3),i=n(14),c=n(15),m=n(19),o=n(16),d=n(2),b=n(18),h=n(17),p=n.n(h),E=function(){return l.a.createElement("h2",null,"Loading")},f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={users:[],loading:!1},n.getUsers=n.getUsers.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(b.a)(t,e),Object(c.a)(t,[{key:"getUsers",value:function(){var e=this;this.setState({loading:!0}),p()("https://randomuser.me/api/?results=5").then(function(t){return e.setState({users:[].concat(Object(u.a)(e.state.users),Object(u.a)(t.data.results)),loading:!1})})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.getUsers()}},{key:"componentWillMount",value:function(){this.getUsers()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"FistBump Employees"),l.a.createElement("table",{border:"1",cellpadding:"5",cellspacing:"2"},l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),this.state.loading?l.a.createElement(E,null):this.state.users.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name.title),l.a.createElement("td",null,e.name.first),l.a.createElement("td",null,e.email))})),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"submit",value:"Load more employees"})))}}]),t}(a.Component);s.a.render(l.a.createElement(f,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3df2db33.chunk.js.map