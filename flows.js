/* Extra flows from the Figma file: popups 1.1-1.3, requests 1.6, coin requests 2.9, parent 4.1/4.2, payment errors 2.11. Loaded after app.js. */
Object.assign(D.en,{requests:"My requests",lb:"Leaderboard",ch:"Challenge",bd:"Badges",journey:"Your journey",j1:"Earn points",j2:"Explore offers",j3:"Redeem",j4:"Rate",
rank:"Your rank",quest:"Ready for midterms (U1–U3)",quest_b:"A quest to get you ready. 6 weeks, ends 25 Apr.",goals:"Goals",g1:"Basic functions",g2:"Integral functions",g3:"Log function",
b1:"7-day streak",b2:"First redemption",b3:"Top 3 this week",b4:"Quiz master",locked:"Locked",
no_req:"No requests yet",no_req_b:"Ask your guardian from a locked offer or the Inspire Plus page.",sch:"Child schedule",rep:"Report cards",passed:"Passed",attn:"Needs attention",
choose_who:"Request coins from",amt:"Amount (SAR)",send:"Send request",notif:"Notifications",review:"Review",
cu:"Mohammed requests a Core upgrade",cu_b:"Choose the experience that best supports your child's reward journey.",pick:"Choose",
pay:"Pay",pay_t:"Confirm payment",fail:"Payment failed",fail_b:"No charge was made. Your C-Pay balance is safe.",retry:"Try again",demo:"Demo: simulate failed payment",paid:"Payment complete",help:"View transaction help",
math:"Maths",sci:"Science",arab:"Arabic",join:"Join now",req_note_c:"Requested from"});
Object.assign(D.ar,{requests:"طلباتي",lb:"لوحة المتصدرين",ch:"التحدي",bd:"الشارات",journey:"رحلتك",j1:"اكسب النقاط",j2:"استكشف العروض",j3:"استبدل",j4:"قيّم",
rank:"ترتيبك",quest:"جاهز للاختبارات النصفية (و1–و3)",quest_b:"مهمة تجهّزك للاختبارات. 6 أسابيع وتنتهي في 25 أبريل.",goals:"الأهداف",g1:"الدوال الأساسية",g2:"دوال التكامل",g3:"الدالة اللوغاريتمية",
b1:"7 أيام متتالية",b2:"أول استبدال",b3:"من أفضل 3 هذا الأسبوع",b4:"بطل الاختبارات",locked:"مقفلة",
no_req:"لا توجد طلبات بعد",no_req_b:"اطلب من وليّ أمرك عبر عرض مقفل أو صفحة إنسباير بلس.",sch:"جدول الابن",rep:"تقارير الدرجات",passed:"ناجح",attn:"يحتاج متابعة",
choose_who:"طلب العملات من",amt:"المبلغ (ريال)",send:"إرسال الطلب",notif:"الإشعارات",review:"مراجعة",
cu:"محمد يطلب الترقية إلى كور",cu_b:"اختر التجربة الأنسب لرحلة المكافآت لدى ابنك.",pick:"اختيار",
pay:"ادفع",pay_t:"تأكيد الدفع",fail:"فشلت عملية الدفع",fail_b:"لم يتم خصم أي مبلغ. رصيد C-Pay آمن.",retry:"حاول مرة أخرى",demo:"تجريبي: محاكاة فشل الدفع",paid:"تم الدفع",help:"مساعدة في المعاملة",
math:"الرياضيات",sci:"العلوم",arab:"اللغة العربية",join:"انضم الآن",req_note_c:"مطلوب من"});
const esc=s=>String(s).replace(/[<>&]/g,"");
const pend=()=>S.reqs.filter(r=>r.status==="pending");
/* journey tracker + popups on My Inspire */
const _my=V.my;V.my=()=>{const on=[true,true,S.owned.length>0,S.rating>0];
const j=`<div class="card" style="margin-top:16px"><h2>${t("journey")}</h2><ol class="jr">${["j1","j2","j3","j4"].map((k,i)=>`<li class="${on[i]?"on":""}"><span>${i+1}</span>${t(k)}</li>`).join("")}</ol>
<div class="row" style="margin-top:12px"><button class="btn o" data-pop="lb">${t("lb")}</button><button class="btn o" data-pop="ch">${t("ch")}</button><button class="btn o" data-pop="bd">${t("bd")}</button></div></div>`;
return _my().replace(/<h2 style="margin:28px/,j+'<h2 style="margin:28px')};
V.requests=()=>`<div class="view"><div class="head"><h1>${t("requests")}</h1></div><div class="card">${S.reqs.length?S.reqs.map(r=>`<div class="req"><div><h3>${t("q_"+r.type)}</h3>${r.note?`<p class="sub">${esc(r.note)}</p>`:""}</div><span class="tag ${r.status==="approved"?"ok":r.status==="declined"?"err":""}">${r.status==="pending"?t("pending"):t(r.status)}</span></div>`).join(""):`<div style="text-align:center;padding:24px"><div class="big" style="margin:0 auto 12px">📨</div><h3>${t("no_req")}</h3><p class="sub">${t("no_req_b")}</p></div>`}</div></div>`;
const _par=V.parent;V.parent=()=>_par()+`<div class="g g2" style="margin-top:16px"><div class="card"><h2>${t("sch")}</h2>${[["math","8:00","Mr Matt"],["sci","9:30","Mr David"],["arab","10:30","Mr Ahmed"]].map(s=>`<div class="req"><div><h3>${t(s[0])}</h3><p class="sub">${s[2]} · ${s[1]}</p></div><button class="btn o">${t("join")}</button></div>`).join("")}</div>
<div class="card"><h2>${t("rep")}</h2><div class="req"><div><h3>Midterm · Jan 2025</h3></div><span class="tag ok">${t("passed")} 80%</span></div><div class="req"><div><h3>Final exams · Mar 2024</h3></div><span class="tag err">${t("attn")} 45.6%</span></div></div></div>`;
/* parent bell (4.2: upgrade from notifications) */
const _ch=chrome;chrome=function(){_ch();if(S.role==="p"){const n=pend().length;$("#top .sp").insertAdjacentHTML("afterend",`<button class="chip bell" data-bell aria-label="${t("notif")}">🔔 ${n?`<b class="dot">${n}</b>`:""}</button>`)}};
const popup=(k)=>{if(k==="lb")return`<h2>${t("lb")}</h2>${[["Sara",2980],["Omar",2710],["Muhammed",2450],["Lina",2390],["Yusuf",2210]].map((p,i)=>`<div class="req" ${p[0]==="Muhammed"?'style="background:var(--p05);border-radius:8px;padding-inline:8px"':""}><span><b>${i+1}</b> &nbsp;${p[0]}</span><b>${p[1]}</b></div>`).join("")}`;
if(k==="ch")return`<h2>${t("quest")}</h2><p>${t("quest_b")}</p><div class="bar" style="background:var(--p05)"><i style="width:50%;background:var(--p)"></i></div><p class="sub">${t("goals")}: 3/6</p>${["g1","g2","g3"].map((g,i)=>`<div class="req"><span>${t(g)}</span><span class="tag ${i<2?"ok":""}">${i<2?"✓":"…"}</span></div>`).join("")}`;
return`<h2>${t("bd")}</h2><div class="g" style="grid-template-columns:repeat(2,1fr)">${["b1","b2","b3","b4"].map((b,i)=>{const on=i===0||(i===1&&S.owned.length);return`<div class="safe" style="text-align:center;opacity:${on?1:.5}"><div style="font-size:34px">${["🔥","🎁","🏆","🧠"][i]}</div><b>${t(b)}</b>${on?"":`<p class="sub">${t("locked")}</p>`}</div>`}).join("")}</div>`};
const pay=(i)=>{const r=S.reqs[i],a=r.type==="core"?19:50;modal(`<div class="big" aria-hidden="true">💳</div><h2>${t("pay_t")}</h2><p>${t("q_"+r.type)} · <b>SAR ${a}</b></p><div class="safe">${t("offline")}</div><div class="row"><button class="btn" data-paygo="${i}">${t("pay")} SAR ${a}</button><button class="btn o" data-payfail="${i}">${t("demo")}</button></div>`)};
document.addEventListener("click",e=>{const g=s=>e.target.closest(s);let b;
if(b=g("[data-ask=plus]")){e.stopImmediatePropagation();return modal(`<h2>${t("req_c")}</h2><p class="sub">${t("choose_who")}</p><div class="seg" role="group"><button aria-pressed="true" data-who="${t("from_s")}">${t("from_s")}</button><button aria-pressed="false" data-who="${t("from_g")}">${t("from_g")}</button></div><label>${t("amt")}<br><input id="amt" type="number" min="10" value="50" style="width:100%;padding:8px;border:1px solid var(--line);border-radius:8px"></label><div class="row"><button class="btn" data-sendc>${t("send")}</button><button class="btn o" data-x>${t("close")}</button></div>`)}
if(b=g("[data-who]")){e.stopImmediatePropagation();b.parentNode.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b));return}
if(g("[data-sendc]")){e.stopImmediatePropagation();const w=document.querySelector("[data-who][aria-pressed=true]").dataset.who,a=+$("#amt").value||50;S.reqs.push({type:"plus",status:"pending",note:`${t("req_note_c")}: ${w} · SAR ${a}`});shut();toast(t("sent"));return render(1)}
if(b=g("[data-pop]")){e.stopImmediatePropagation();return modal(popup(b.dataset.pop)+`<button class="btn" data-x>${t("close")}</button>`)}
if(g("[data-bell]")){e.stopImmediatePropagation();const p=pend();return modal(`<h2>${t("notif")}</h2>${p.length?p.map(r=>`<div class="req"><div><h3>${r.type==="core"?t("cu"):t("q_"+r.type)}</h3>${r.note?`<p class="sub">${esc(r.note)}</p>`:""}</div><button class="btn" data-rev="${S.reqs.indexOf(r)}">${t("review")}</button></div>`).join(""):`<p class="sub">${t("none")}</p>`}<button class="btn o" data-x>${t("close")}</button>`)}
if(b=g("[data-rev]")){e.stopImmediatePropagation();const i=+b.dataset.rev,r=S.reqs[i];if(r.type!=="core"){shut();return render(1)}
return modal(`<h2>${t("cu")}</h2><p>${t("cu_b")}</p><div class="g g2"><div class="safe"><h3>${t("lite")}</h3><p class="sub">${t("l1")} · ${t("l2")}</p><b>0 ${t("per")}</b></div><div class="safe" style="border:2px solid var(--p)"><h3>${t("corep")}</h3><p class="sub">${t("c1")} · ${t("c2")}</p><b>19 ${t("per")}</b></div></div><div class="row"><button class="btn" data-payopen="${i}">${t("pick")} ${t("corep")}</button><button class="btn o" data-dec="${i}" data-x>${t("decline")}</button></div>`)}
if(b=g("[data-payopen]")){e.stopImmediatePropagation();return pay(+b.dataset.payopen)}
if(b=g("[data-app]")){const r=S.reqs[+b.dataset.app];if(r&&(r.type==="core"||r.type==="plus")){e.stopImmediatePropagation();return pay(+b.dataset.app)}}
if(b=g("[data-paygo]")){e.stopImmediatePropagation();const r=S.reqs[+b.dataset.paygo];r.status="approved";if(r.type==="core")S.plan="core";else S.plus+=50;shut();confetti();toast(t("paid"));return render(1)}
if(b=g("[data-payfail]")){e.stopImmediatePropagation();const i=b.dataset.payfail;return modal(`<div class="big err" aria-hidden="true">✕</div><h2>${t("fail")}</h2><div class="safe">${t("fail_b")}</div><div class="row"><button class="btn" data-payopen="${i}">${t("retry")}</button><button class="btn o" data-x>${t("help")}</button></div>`)}
},true);

/* ===== v3: search, stores, feedback, parent services, motion ===== */
Object.assign(D.en,{learn:"Learning",search:"Search offers, brands or categories",nores:"No offers match your search",nores_b:"Try another word or clear the category filter.",oos:"Out of stock",online:"Online",
disc:"Sample offers for prototyping. Brand names and logos belong to their owners.",about:"About",all_off:"All offers",open_app:"Open app to redeem",
fb_t:"How was your redemption?",fb_s:"Tell us what worked so we can improve Inspire.",t1:"Easy to redeem",t2:"Great value",t3:"Code worked",t4:"Hard to find",fb_c:"Anything else? (optional)",fb_send:"Send feedback",skip:"Skip",fb_done:"Thank you!",fb_done_b:"Your feedback helps us pick better rewards.",
svc:"Other services",s_mail:"Mailbox",s_plans:"Weekly plans",s_bus:"Bus trips",s_appt:"Appointments",s_contr:"Student contracts",s_adm:"Admission schedule",s_med:"Medals report",s_cant:"Canteen",s_clin:"Clinic",s_r1:"Latest update: today",s_r2:"Nothing needs your action"});
Object.assign(D.ar,{learn:"التعلّم",search:"ابحث عن عروض أو علامات أو فئات",nores:"لا توجد عروض مطابقة",nores_b:"جرّب كلمة أخرى أو امسح فلتر الفئة.",oos:"نفدت الكمية",online:"عبر الإنترنت",
disc:"عروض تجريبية لأغراض النموذج. أسماء العلامات وشعاراتها ملك لأصحابها.",about:"نبذة",all_off:"جميع العروض",open_app:"افتح التطبيق للاستبدال",
fb_t:"كيف كانت تجربة الاستبدال؟",fb_s:"أخبرنا بما نجح لنحسّن إنسباير.",t1:"سهل الاستبدال",t2:"قيمة ممتازة",t3:"الرمز يعمل",t4:"صعب العثور عليه",fb_c:"هل من ملاحظات؟ (اختياري)",fb_send:"إرسال الملاحظات",skip:"تخطي",fb_done:"شكراً لك!",fb_done_b:"ملاحظاتك تساعدنا على اختيار مكافآت أفضل.",
svc:"خدمات أخرى",s_mail:"البريد",s_plans:"الخطط الأسبوعية",s_bus:"رحلات الحافلة",s_appt:"المواعيد",s_contr:"عقود الطلاب",s_adm:"جدول القبول",s_med:"تقرير الميداليات",s_cant:"المقصف",s_clin:"العيادة",s_r1:"آخر تحديث: اليوم",s_r2:"لا يلزمك أي إجراء"});
const SV=[["mail","✉️"],["plans","🗓️"],["bus","🚌"],["appt","📅"],["contr","📝"],["adm","🎓"],["med","🏅"],["cant","🍽️"],["clin","🩺"]];
const _p2=V.parent;V.parent=()=>_p2()+`<div class="card" style="margin-top:16px"><h2>${t("svc")}</h2><div class="svc">${SV.map(([k,e])=>`<button data-svc="${k}"><span aria-hidden="true">${e}</span>${t("s_"+k)}</button>`).join("")}</div></div>`;
const _m=V.market;V.market=()=>{const h=_m();return S.tab==="stores"?h:h.replace('<label class="search">',`<div class="mq" aria-hidden="true"><div>${[...stores(),...stores()].map(k=>`<i style="--bc:#${B[k].h};--fg:${lum(B[k].h)>.62?"#1b1c1c":"#fff"}"><svg viewBox="0 0 24 24"><path d="${B[k].p}"/></svg></i>`).join("")}</div></div><label class="search">`)};
redeem=function(i){const o=O[i];S.coins-=o[2];S.owned.push(off(o));S.rating=0;S.tags=[];confetti();chrome();
modal(`${tile(o[4],"ban")}<div class="big ok" aria-hidden="true" style="margin-top:-44px;border:4px solid #fff">✓</div><h2>${t("ok_t")}</h2><p>${t("ok_b")}</p><div class="safe code">${(B[o[4]].t.slice(0,3)+"-"+Math.random().toString(36).slice(2,8)).toUpperCase()}</div><h3>${t("fb_t")}</h3><p class="sub">${t("fb_s")}</p><div class="stars" role="group">${[1,2,3,4,5].map(n=>`<button data-star="${n}" aria-label="${n}">★</button>`).join("")}</div><div class="cats" style="margin:0">${["t1","t2","t3","t4"].map(k=>`<button aria-pressed="false" data-tag="${k}">${t(k)}</button>`).join("")}</div><textarea id="fbc" rows="2" placeholder="${t("fb_c")}" style="padding:8px;border:1px solid var(--line);border-radius:8px;font:inherit"></textarea><div class="row"><button class="btn" data-fbsend>${t("fb_send")}</button><button class="btn o" data-x>${t("skip")}</button></div>`)};
document.addEventListener("click",e=>{const g=s=>e.target.closest(s);let b;
if(b=g("[data-star]")){e.stopImmediatePropagation();const n=+b.dataset.star;S.rating=n;document.querySelectorAll("[data-star]").forEach(x=>x.classList.toggle("on",+x.dataset.star<=n));return}
if(b=g("[data-tag]")){e.stopImmediatePropagation();b.setAttribute("aria-pressed",b.getAttribute("aria-pressed")!=="true");return}
if(g("[data-fbsend]")){e.stopImmediatePropagation();modal(`<div class="big ok" aria-hidden="true">♥</div><h2>${t("fb_done")}</h2><p>${t("fb_done_b")}</p><button class="btn" data-x>${t("t_ok")}</button>`);return render(1)}
if(b=g("[data-store]")){e.stopImmediatePropagation();const k=b.dataset.store,l=O.map((o,i)=>[o,i]).filter(([o])=>o[4]===k);
return modal(`${tile(k,"ban")}<h2>${B[k].t}</h2><p class="sub">${ST[k]?"📍 "+ST[k]:"🌐 "+t("online")}</p><h3>${t("all_off")}</h3>${l.map(([o,i])=>`<button class="req rowb" data-o="${i}"><span><b>${pick(o)[0]}</b><br><span class="sub">${o[2]?o[2]+" "+t("coins"):t("free")}</span></span><span aria-hidden="true">›</span></button>`).join("")}<button class="btn o" data-x>${t("close")}</button>`)}
if(b=g("[data-svc]")){e.stopImmediatePropagation();const k=b.dataset.svc;return modal(`<div class="big">${SV.find(x=>x[0]===k)[1]}</div><h2>${t("s_"+k)}</h2><div class="req"><span>${t("s_r1")}</span></div><div class="req"><span>${t("s_r2")}</span><span class="tag ok">✓</span></div><button class="btn" data-x>${t("close")}</button>`)}
},true);
document.addEventListener("input",e=>{if(e.target.id==="q"){S.q=e.target.value;const gr=$("#grid");if(gr)gr.innerHTML=grid()}});
/* 3D tilt on offer cards */
if(!matchMedia("(prefers-reduced-motion:reduce)").matches&&matchMedia("(hover:hover)").matches){
document.addEventListener("pointermove",e=>{const c=e.target.closest&&e.target.closest(".offer");if(!c)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(700px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-4px)`});
document.addEventListener("pointerout",e=>{const c=e.target.closest&&e.target.closest(".offer");if(c&&!c.contains(e.relatedTarget))c.style.transform=""})}
render();
