const d=window.HERMES_SITE_DATA;
document.querySelector("#feature-grid").innerHTML=d.features.map(x=>'<article class="feature"><div class="ico">'+x[0]+'</div><h3>'+x[1]+'</h3><p>'+x[2]+'</p></article>').join("");
for(const [id,key] of [["#now","now"],["#next","next"],["#parity","parity"]])document.querySelector(id).innerHTML=d[key].map(x=>"<li>"+x+"</li>").join("");
document.querySelector("#faqs").innerHTML=d.faq.map(x=>"<details><summary>"+x[0]+"</summary><p>"+x[1]+"</p></details>").join("");
const fg=document.querySelector("#future-grid");if(fg)fg.innerHTML=d.future.map(x=>'<article class="feature"><div class="ico">'+x[0]+'</div><h3>'+x[1]+'</h3><p>'+x[2]+'</p></article>').join("");
const track=document.querySelector("#demo-carousel"),slides=[...track.querySelectorAll("figure")],dots=[...document.querySelectorAll(".carousel-dots i")];
function nearest(){let best=0,dist=Infinity;slides.forEach((s,i)=>{const d=Math.abs((s.offsetLeft+s.offsetWidth/2)-(track.scrollLeft+track.clientWidth/2));if(d<dist){dist=d;best=i}});dots.forEach((d,i)=>d.classList.toggle("active",i===best));return best}
function go(delta){const i=Math.max(0,Math.min(slides.length-1,nearest()+delta));slides[i].scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}
document.querySelector(".carousel-arrow.prev").addEventListener("click",()=>go(-1));document.querySelector(".carousel-arrow.next").addEventListener("click",()=>go(1));track.addEventListener("scroll",()=>requestAnimationFrame(nearest),{passive:true});nearest();
