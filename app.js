const d=window.HERMES_SITE_DATA;
// Timeline data is static and trusted (site-data.js); no remote content is rendered.
const tl=document.querySelector("#timeline");
if(tl)tl.innerHTML=d.timeline.map(m=>{
const when=m.date?'<time datetime="'+m.date+'">'+m.dateLabel+'</time>':'<span class="when">'+m.dateLabel+'</span>';
const list=(label,items,cls)=>items&&items.length?'<p class="tl-label">'+label+'</p><ul class="tl-list'+(cls||"")+'">'+items.map(i=>"<li>"+i+"</li>").join("")+"</ul>":"";
const links=m.links?'<p class="tl-links">'+m.links.map(l=>'<a href="'+l[1]+'"'+(l[2]?' title="'+l[2]+'"':"")+'>'+l[0]+' →</a>').join("")+"</p>":"";
return '<li class="tl-item '+m.status+'"'+(m.id==="features"?' id="features"':"")+'><span class="tl-dot" aria-hidden="true"></span><div class="tl-card"><div class="tl-meta"><span class="badge '+m.status+'">'+m.badge+'</span>'+when+'</div><h3>'+m.title+'</h3><p class="tl-summary">'+m.summary+'</p>'+list(m.featuresLabel,m.features)+list(m.inDevLabel,m.inDev," dev")+links+"</div></li>"}).join("");
document.querySelector("#faqs").innerHTML=d.faq.map(x=>"<details><summary>"+x[0]+"</summary><p>"+x[1]+"</p></details>").join("");
const track=document.querySelector("#demo-carousel"),slides=[...track.querySelectorAll("figure")],dots=[...document.querySelectorAll(".carousel-dots i")];
function nearest(){let best=0,dist=Infinity;slides.forEach((s,i)=>{const d=Math.abs((s.offsetLeft+s.offsetWidth/2)-(track.scrollLeft+track.clientWidth/2));if(d<dist){dist=d;best=i}});dots.forEach((d,i)=>d.classList.toggle("active",i===best));return best}
function go(delta){const i=Math.max(0,Math.min(slides.length-1,nearest()+delta));slides[i].scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}
document.querySelector(".carousel-arrow.prev").addEventListener("click",()=>go(-1));document.querySelector(".carousel-arrow.next").addEventListener("click",()=>go(1));track.addEventListener("scroll",()=>requestAnimationFrame(nearest),{passive:true});nearest();
