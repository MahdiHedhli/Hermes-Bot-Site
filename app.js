const d=window.HERMES_SITE_DATA;
document.querySelector("#feature-grid").innerHTML=d.features.map(x=>'<article class="feature"><div class="ico">'+x[0]+'</div><h3>'+x[1]+'</h3><p>'+x[2]+'</p></article>').join("");
for(const [id,key] of [["#now","now"],["#next","next"],["#parity","parity"]])document.querySelector(id).innerHTML=d[key].map(x=>"<li>"+x+"</li>").join("");
document.querySelector("#faqs").innerHTML=d.faq.map(x=>"<details><summary>"+x[0]+"</summary><p>"+x[1]+"</p></details>").join("");