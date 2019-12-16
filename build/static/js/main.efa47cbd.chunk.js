(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),l=t.n(u),c=t(2),o=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Add new Person"),r.a.createElement("form",{onSubmit:e.addNewPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},i=function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("p",null,"Name: ",e.person.name),r.a.createElement("p",null,"Number: ",e.person.number),r.a.createElement("button",{onClick:function(n){return e.deletePerson(e.person.id)}},"Delete"))},m=function(e){var n=e.persons.filter((function(n){return n.name.includes(e.filter)}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Persons on phonebook"),r.a.createElement("ul",null,n.map((function(n){return r.a.createElement(i,{key:n.id,person:n,deletePerson:e.deletePerson})}))))},d=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Search"),r.a.createElement("input",{value:e.filter,onChange:e.handleFilterChange}))},s=t(3),f=t.n(s),h="/api/persons",p=function(){return f.a.get(h).then((function(e){return e.data}))},E=function(e){return f.a.post(h,e).then((function(e){return e.data}))},b=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},g=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"msg"},n)},w=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},N=(t(36),function(){var e=Object(a.useState)([""]),n=Object(c.a)(e,2),t=n[0],u=n[1],l=Object(a.useState)(""),i=Object(c.a)(l,2),s=i[0],f=i[1],h=Object(a.useState)(""),N=Object(c.a)(h,2),O=N[0],j=N[1],C=Object(a.useState)(""),P=Object(c.a)(C,2),k=P[0],y=P[1],S=Object(a.useState)(null),T=Object(c.a)(S,2),D=T[0],F=T[1],J=Object(a.useState)(null),M=Object(c.a)(J,2),x=M[0],A=M[1];Object(a.useEffect)((function(){p().then((function(e){return u(e)}))}),[]);return""==t?r.a.createElement("div",null,"Loading"):r.a.createElement("div",null,r.a.createElement(g,{message:D}),r.a.createElement(w,{message:x}),r.a.createElement(d,{handleFilterChange:function(e){y(e.target.value)}}),r.a.createElement(o,{newName:s,newNumber:O,handleNameChange:function(e){f(e.target.value)},handleNumberChange:function(e){j(e.target.value)},addNewPerson:function(e){e.preventDefault();var n={name:s,number:O,id:Math.floor(1e8*Math.random())};try{if(t.map((function(e){return e.name})).includes(s)){if(window.confirm("Phonebook already contains that person. Would you like to update that number?")){var a=t.find((function(e){return e.name==s}));a.number=O,b(a.id,a).then(F("'".concat(n.name,"' was added."))),setTimeout((function(){F(null)}),5e3)}}else E(n).then(u(t.concat(n))),F("'".concat(n.name,"' was added.")),setTimeout((function(){F(null)}),5e3);f(""),j("")}catch(x){A("Oops we did a doopsie"),setTimeout((function(){F(null)}),5e3)}}}),r.a.createElement(m,{persons:t,filter:k,deletePerson:function(e){var n=window.confirm("Confirm delete");try{n&&v(e).then(u(t.filter((function(n){return n.id!==e}))))}catch(x){A("Error happened with delete."),setTimeout((function(){F(null)}),5e3)}}}))});l.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.efa47cbd.chunk.js.map