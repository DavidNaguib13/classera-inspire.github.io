/* Classera Inspire – rewards prototype. State lives in memory; language/role persist in localStorage. */
const D={en:{
my:"My Inspire",market:"Marketplace",plus:"Inspire Plus",upgrade:"Upgrade",parent:"Requests",home:"Home",courses:"Courses",role_s:"Student",role_p:"Parent",
welcome:"Welcome back, Muhammed!",welcome_s:"Earn points with every learning activity, then redeem them for real rewards.",pts:"Inspire points",tier:"Tier progress",to_diamond:"97 pts to Diamond",streak:"Active streak",days:"days",
explore:"Redeem my points",affects:"What affects your score?",
f1:"Number of activities",f1d:"More activity, more points. Join discussions, watch lectures and finish assignments.",
f2:"Grade",f2d:"Higher grades earn more. Full marks unlock the maximum points.",
f3:"Weight",f3d:"Each activity has its own value. An assignment earns more than a message.",
f4:"Time",f4d:"Finish early to earn bonus points before the deadline.",
recent:"Recent activities",a1:"Submitted Integration quiz",a2:"Watched Lesson 1 – Integration",a3:"Posted in Maths discussion",close:"Close",
offers:"Inspire offers",instant:"Instant offers",stores:"Stores",all:"All",food:"Food & beverage",ent:"Entertainment",fit:"Fitness",shop:"E-commerce",tech:"Electronics",
coins:"Coins",free:"Free",core:"Core only",age:"18+",redeem:"Redeem",details:"Offer details",enjoying:"You're enjoying 8 rewards. Unlock 24 more with Core.",
balance:"Balance",you_have:"You have",
confirm:"Redeem for",free_btn:"Redeem for free",ok_t:"Reward redeemed",ok_b:"Find it in My rewards. Show the code at the partner store.",
rate:"How was your redemption?",thanks:"Thanks for your feedback",
need_up:"Upgrade to Core to unlock this offer",need_up_b:"Core members get 24 more offers and higher point rates.",ask_up:"Ask my guardian to upgrade",go_up:"See plans",
need_g:"Guardian approval needed",need_g_b:"This offer is for ages 18+. Your guardian must approve it first.",ask_g:"Request approval",pending:"Waiting for your guardian",
need_c:"Not enough coins",need_c_b:"You need more coins for this reward.",ask_c:"Request Inspire Plus coins",
e_dup:"Duplicate redemption blocked",e_dup_b:"This voucher is already in My rewards.",e_dup_s:"No extra points were used.",
e_oos:"This reward is out of stock",e_oos_b:"All vouchers have been claimed. Choose a similar reward instead.",e_oos_s:"Your points are still yours.",
e_exp:"Offer expired",e_exp_b:"This offer ended on 26 Sep 2026.",e_exp_s:"Your balance is unchanged.",browse:"Browse similar offers",
plans:"Choose your Inspire plan",lite:"Inspire Lite",corep:"Inspire Core",lite_d:"The essential experience.",core_d:"More offers, higher rewards.",
l1:"Standard offers",l2:"Fixed point rates",c1:"All Core offers",c2:"Bonus point multiplier",c3:"Early access to flash deals",current:"Current plan",per:"SAR / month",
plus_t:"Inspire Plus",plus_d:"SAR credit from your school or guardian. Spend it on flash deals, gear and food vouchers.",avail:"Total available",spent:"Spent",expires:"Expires",
hist:"Transaction history",tx:"Transaction",date:"Date",status:"Status",amount:"Amount",done:"Completed",
req_c:"Request coins",from_s:"From school",from_g:"From guardian",sent:"Request sent",
p_hello:"Welcome back, Ahmed!",p_sub:"Mohammed's requests",none:"No pending requests.",approve:"Approve",decline:"Decline",approved:"Approved",declined:"Declined",
q_age:"Age-restricted purchase request",q_core:"Inspire Core upgrade",q_plus:"Inspire Plus coins top-up",
p_att:"Attendance",p_prog:"Overall progress",p_asg:"Assignments done",mine:"My rewards",
t_ok:"Done",offline:"Pay safely: your balance is protected."},
ar:{
my:"إنسباير الخاص بي",market:"السوق",plus:"إنسباير بلس",upgrade:"الترقية",parent:"الطلبات",home:"الرئيسية",courses:"المقررات",role_s:"طالب",role_p:"ولي أمر",
welcome:"أهلاً بعودتك يا محمد!",welcome_s:"اكسب نقاطاً مع كل نشاط تعليمي، ثم استبدلها بمكافآت حقيقية.",pts:"نقاط إنسباير",tier:"التقدم في المستوى",to_diamond:"97 نقطة للوصول إلى الماسي",streak:"أيام متتالية",days:"أيام",
explore:"استبدل نقاطي",affects:"ما الذي يؤثر على نتيجتك؟",
f1:"عدد الأنشطة",f1d:"كلما زاد نشاطك زادت نقاطك. شارك في النقاشات وشاهد المحاضرات وأنجز الواجبات.",
f2:"الدرجة",f2d:"الدرجات الأعلى تمنحك نقاطاً أكثر، والدرجة الكاملة تفتح الحد الأقصى.",
f3:"الوزن",f3d:"لكل نشاط قيمته الخاصة. الواجب يمنح نقاطاً أكثر من الرسالة.",
f4:"الوقت",f4d:"أنجز مبكراً لتحصل على نقاط إضافية قبل الموعد النهائي.",
recent:"آخر الأنشطة",a1:"سلّمت اختبار التكامل",a2:"شاهدت الدرس 1 – التكامل",a3:"شاركت في نقاش الرياضيات",close:"إغلاق",
offers:"عروض إنسباير",instant:"العروض الفورية",stores:"المتاجر",all:"الكل",food:"الطعام والمشروبات",ent:"الترفيه",fit:"اللياقة",shop:"التسوق",tech:"الإلكترونيات",
coins:"عملة",free:"مجاني",core:"للمشتركين في كور",age:"+18",redeem:"استبدال",details:"تفاصيل العرض",enjoying:"تستمتع بـ 8 مكافآت. افتح 24 أخرى مع كور.",
balance:"الرصيد",you_have:"لديك",
confirm:"استبدال مقابل",free_btn:"استبدال مجاني",ok_t:"تم استبدال المكافأة",ok_b:"ستجدها في مكافآتي. اعرض الرمز في المتجر الشريك.",
rate:"كيف كانت تجربة الاستبدال؟",thanks:"شكراً على ملاحظاتك",
need_up:"قم بالترقية إلى كور لفتح هذا العرض",need_up_b:"يحصل مشتركو كور على 24 عرضاً إضافياً ونقاط أعلى.",ask_up:"اطلب من وليّ أمري الترقية",go_up:"عرض الباقات",
need_g:"مطلوب موافقة ولي الأمر",need_g_b:"هذا العرض لمن هم فوق 18 عاماً. يجب أن يوافق وليّ أمرك أولاً.",ask_g:"اطلب الموافقة",pending:"بانتظار وليّ الأمر",
need_c:"عملاتك غير كافية",need_c_b:"تحتاج إلى مزيد من العملات لهذه المكافأة.",ask_c:"اطلب عملات إنسباير بلس",
e_dup:"تم منع الاستبدال المكرر",e_dup_b:"هذه القسيمة موجودة بالفعل في مكافآتي.",e_dup_s:"لم تُستخدم أي نقاط إضافية.",
e_oos:"نفدت هذه المكافأة",e_oos_b:"تم الاستحواذ على جميع القسائم. اختر مكافأة مشابهة.",e_oos_s:"نقاطك ما زالت لك.",
e_exp:"انتهى العرض",e_exp_b:"انتهى هذا العرض في 26 سبتمبر 2026.",e_exp_s:"رصيدك لم يتغير.",browse:"تصفح عروضاً مشابهة",
plans:"اختر باقة إنسباير",lite:"إنسباير لايت",corep:"إنسباير كور",lite_d:"التجربة الأساسية.",core_d:"عروض أكثر ومكافآت أعلى.",
l1:"عروض قياسية",l2:"معدلات نقاط ثابتة",c1:"جميع عروض كور",c2:"مضاعف نقاط إضافي",c3:"وصول مبكر للعروض الخاطفة",current:"باقتك الحالية",per:"ريال / شهر",
plus_t:"إنسباير بلس",plus_d:"رصيد بالريال من مدرستك أو وليّ أمرك. أنفقه على العروض الخاطفة والأدوات وقسائم الطعام.",avail:"الإجمالي المتاح",spent:"المصروف",expires:"ينتهي في",
hist:"سجل المعاملات",tx:"المعاملة",date:"التاريخ",status:"الحالة",amount:"المبلغ",done:"مكتملة",
req_c:"اطلب عملات",from_s:"من المدرسة",from_g:"من وليّ الأمر",sent:"تم إرسال الطلب",
p_hello:"أهلاً بعودتك يا أحمد!",p_sub:"طلبات محمد",none:"لا توجد طلبات معلّقة.",approve:"موافقة",decline:"رفض",approved:"تمت الموافقة",declined:"تم الرفض",
q_age:"طلب شراء مقيّد بالعمر",q_core:"ترقية إنسباير كور",q_plus:"شحن عملات إنسباير بلس",
p_att:"الحضور",p_prog:"التقدم العام",p_asg:"الواجبات المنجزة",mine:"مكافآتي",
t_ok:"تم",offline:"رصيدك محمي."}};
const O=[ // cat, tier, cost, kind, brand, [en title, en desc], [ar title, ar desc], flag
["food","free",0,"ok","starbucks",["Free iced coffee on sign-up","Welcome perk: a vanilla sweet cream cold brew, on us."],["قهوة مثلجة مجانية عند التسجيل","هدية ترحيب: كولد برو بالفانيليا علينا."],"instant"],
["food","free",150,"ok","mcdonalds",["Buy 1 Get 1 burger meal","Any signature burger meal, the second one is free."],["اشترِ وجبة برجر واحصل على أخرى","أي وجبة برجر مميزة، والثانية مجاناً."]],
["food","core",60,"ok","starbucks",["Free Venti upgrade","Upgrade any espresso drink to Venti."],["ترقية مجانية إلى فنتي","ارفع حجم أي مشروب إسبريسو إلى فنتي."],"instant"],
["food","free",90,"dup","kfc",["Free school meal voucher","Already in My rewards. Valid until 30 Sep."],["قسيمة وجبة مدرسية مجانية","موجودة في مكافآتي. صالحة حتى 30 سبتمبر."]],
["food","free",120,"ok","burgerking",["20% off any combo","Applies to all combo meals, dine-in or pickup."],["خصم 20% على أي وجبة كومبو","على جميع الوجبات، في المطعم أو للاستلام."]],
["ent","free",90,"ok","netflix",["1 month streaming gift","One month on the Standard plan."],["شهر مشاهدة مجاني","شهر واحد على الباقة القياسية."]],
["ent","free",800,"exp","audible",["Audiobook credit","Expired 26 Sep 2026."],["رصيد كتاب صوتي","انتهى في 26 سبتمبر 2026."]],
["fit","core",120,"ok","nike",["20% off training gear","Shoes, tops and shorts for the new term."],["خصم 20% على ملابس التدريب","أحذية وملابس رياضية للفصل الجديد."]],
["ent","free",200,"age","playstation",["Game gift card (18+)","Needs guardian approval."],["بطاقة ألعاب (+18)","تحتاج موافقة وليّ الأمر."]],
["tech","core",300,"oos","dell",["SAR 100 laptop voucher","All vouchers claimed. Restock date not confirmed."],["قسيمة لابتوب 100 ريال","نفدت القسائم. موعد التوفير غير مؤكد."]],
["tech","core",250,"ok","bose",["Wireless ANC headphones","Block the noise and focus on studying."],["سماعات لاسلكية بعزل الضوضاء","احجب الضجيج وركّز في دراستك."]],
["shop","free",0,"ok","carrefour",["25% off weekly essentials","Instant voucher for your next shop."],["خصم 25% على المشتريات الأسبوعية","قسيمة فورية لتسوقك القادم."],"instant"],
["ent","free",80,"ok","spotify",["Spotify Premium, 1 month","Ad-free study playlists, offline."],["سبوتيفاي بريميوم لمدة شهر","قوائم دراسة بلا إعلانات، وبدون إنترنت."],"instant"],
["learn","free",70,"ok","duolingo",["Super Duolingo, 1 month","Unlimited hearts and no ads."],["دولينجو سوبر لمدة شهر","قلوب غير محدودة وبدون إعلانات."]],
["learn","free",110,"ok","coursera",["Free course certificate","Pick any self-paced course."],["شهادة دورة مجانية","اختر أي دورة ذاتية التعلم."]],
["learn","core",95,"ok","udemy",["SAR 40 off any course","Over 200,000 video courses."],["خصم 40 ريال على أي دورة","أكثر من 200 ألف دورة فيديو."]],
["fit","free",140,"ok","adidas",["15% off sneakers","Valid on full-price footwear."],["خصم 15% على الأحذية الرياضية","ساري على الأحذية بالسعر الكامل."]],
["shop","core",180,"ok","ikea",["10% off study desks","Desks, lamps and storage."],["خصم 10% على مكاتب الدراسة","مكاتب وإضاءة وتخزين."]],
["tech","core",160,"ok","samsung",["12% off Galaxy Buds","Wireless earbuds for class and commute."],["خصم 12% على سماعات جالاكسي","سماعات لاسلكية للدراسة والطريق."]]];
const ST={starbucks:"0.4 km",mcdonalds:"1.2 km",carrefour:"2.0 km",kfc:"2.4 km",burgerking:"3.1 km",nike:"3.8 km",ikea:"5.1 km"};
const lum=h=>{const n=parseInt(h,16);return(.299*(n>>16)+.587*(n>>8&255)+.114*(n&255))/255};
function tile(k,c="img"){const b=B[k];return`<div class="${c}" style="--bc:#${b.h};--fg:${lum(b.h)>.62?"#1b1c1c":"#fff"}" role="img" aria-label="${b.t}"><img class="ph" src="images/${k}.jpg" alt="" loading="lazy" onerror="this.remove()"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${b.p}"/></svg></div>`}
const logo=k=>tile(k,"lg");
const S={lang:localStorage.lang||"en",role:localStorage.role||"s",route:"my",tab:"offers",cat:"all",coins:300,plus:75,plan:"lite",owned:[],
reqs:[],rating:0,tx:[["School top-up academic","Aug 21, 2026","+SAR 50"],["School top-up back-to-school","Aug 15, 2026","+SAR 25"],["Flash deal: HungerStation","Aug 10, 2026","−SAR 20"]]};
const $=s=>document.querySelector(s),t=k=>D[S.lang][k]??D.en[k]??k,off=o=>o[5][0];
const pick=(o)=>S.lang==="ar"?o[6]:o[5];
function toast(m){const e=$("#toast");e.textContent=m;e.classList.add("on");clearTimeout(toast.i);toast.i=setTimeout(()=>e.classList.remove("on"),2400)}
function confetti(){if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;const c=["#01718b","#348da2","#fdb022","#46cd89","#f97066"];
for(let i=0;i<46;i++){const e=document.createElement("i");e.className="conf";e.style.cssText=`left:${Math.random()*100}vw;background:${c[i%5]};--x:${Math.random()*160-80}px;animation-delay:${Math.random()*.3}s`;document.body.append(e);setTimeout(()=>e.remove(),2200)}}
function count(el,to){const s=performance.now();(function f(n){const p=Math.min((n-s)/1100,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3))).toLocaleString(S.lang==="ar"?"ar-EG":"en");p<1&&requestAnimationFrame(f)})(s)}
const has=(type)=>S.reqs.find(r=>r.type===type&&r.status==="pending");
const modal=h=>{const m=$("#modal");m.innerHTML=`<div class="sheet" role="dialog" aria-modal="true">${h}</div>`;m.hidden=false;m.querySelector("button")?.focus()};
const shut=()=>{$("#modal").hidden=true};
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal"||e.target.closest("[data-x]"))shut()});
document.addEventListener("keydown",e=>e.key==="Escape"&&shut());
/* ---------- chrome ---------- */
function chrome(){const ar=S.lang==="ar";document.documentElement.lang=S.lang;document.documentElement.dir=ar?"rtl":"ltr";
const items=S.role==="s"?[["my","🏠"],["market","🛍️"],["plus","💳"],["requests","📨"],["upgrade","⭐"]]:[["parent","✅"]];
$("#side").innerHTML=`<div class="logo"><i></i>Classera</div><nav class="nav" aria-label="Main">${items.map(([k,i])=>`<a href="#/${k}" ${S.route===k?'aria-current="page"':""}><span aria-hidden="true">${i}</span>${t(k)}</a>`).join("")}</nav>`;
$("#top").innerHTML=`<strong>${S.role==="s"?"Future Language School":"Future Language School"}</strong><span class="sp"></span>
${S.role==="s"?`<span class="chip" title="${t("coins")}">🪙 ${S.coins}</span>`:""}
<div class="seg" role="group" aria-label="Role"><button aria-pressed="${S.role==="s"}" data-role="s">${t("role_s")}</button><button aria-pressed="${S.role==="p"}" data-role="p">${t("role_p")}</button></div>
<div class="seg" role="group" aria-label="Language"><button aria-pressed="${!ar}" data-lang="en">EN</button><button aria-pressed="${ar}" data-lang="ar">ع</button></div>`}
document.addEventListener("click",e=>{const b=e.target.closest("[data-lang],[data-role]");if(!b)return;
if(b.dataset.lang){S.lang=localStorage.lang=b.dataset.lang}else{S.role=localStorage.role=b.dataset.role;location.hash=S.role==="s"?"#/home":"#/parent";return}render()});
/* ---------- screens ---------- */
const V={
my(){const r=408*(1-.63);return`<div class="view"><div class="card hero"><div class="ring" style="--off:${r}"><svg width="150" height="150" viewBox="0 0 150 150"><circle class="bg" cx="75" cy="75" r="65"/><circle class="fg" cx="75" cy="75" r="65"/></svg><b><span id="n">0</span><small>${t("pts")}</small></b></div>
<div><h1>${t("welcome")}</h1><p class="sub">${t("welcome_s")}</p><div class="bar" role="progressbar" aria-valuenow="63" aria-valuemin="0" aria-valuemax="100" aria-label="${t("tier")}"><i style="width:63%"></i></div><p>${t("tier")}: ${Math.max(0,2547-(S.pts||2450))} ${t("to_pts")}</p>
<div class="stats"><div><b>12</b>${t("streak")} (${t("days")})</div><div><b>${S.owned.length}</b>${t("mine")}</div></div><p style="margin-top:16px"><a class="btn o" style="background:#fff;display:inline-block;text-decoration:none" href="#/market">${t("explore")}</a> <button class="btn o" style="background:transparent;color:#fff;border-color:#fff" data-recent>${t("recent")}</button></p></div></div>
<h2 style="margin:28px 0 12px">${t("affects")}</h2><div class="g g2">${[1,2,3,4].map(i=>`<button class="factor" data-f="${i}"><h3>${t("f"+i)}</h3><p class="sub">${t("f"+i+"d")}</p></button>`).join("")}</div></div>`},
market(){const cats=["all","food","ent","fit","shop","tech","learn"],tabs=["offers","instant","stores"];let body;
if(S.tab==="stores")body=`<div class="g g3" id="grid">${stores().map(k=>`<button class="card offer" data-store="${k}">${tile(k)}<div class="bd"><h3>${B[k].t}</h3><p class="sub">${ST[k]||t("online")} · ${O.filter(o=>o[4]===k).length} ${t("offers")}</p></div></button>`).join("")}</div>`;
else body=`<div class="cats">${cats.map(c=>`<button aria-pressed="${S.cat===c}" data-cat="${c}">${t(c)}</button>`).join("")}</div><div class="g g3" id="grid">${grid()}</div>`;
return`<div class="view"><div class="head"><h1>${t("market")}</h1><p class="sub">${t("enjoying")}</p></div><label class="search"><span aria-hidden="true">🔍</span><input id="q" type="search" value="${S.q||""}" placeholder="${t("search")}" aria-label="${t("search")}"></label><div class="tabs" role="tablist">${tabs.map(k=>`<button role="tab" aria-selected="${S.tab===k}" data-tab="${k}">${t(k==="offers"?"offers":k)}</button>`).join("")}</div>${body}<p class="sub" style="margin-top:24px;font-size:12px">${t("disc")}</p></div>`},
upgrade(){const core=S.plan==="core";return`<div class="view"><div class="head"><h1>${t("plans")}</h1></div><div class="g g2">
<div class="card plan"><h2>${t("lite")}</h2><p class="sub">${t("lite_d")}</p><ul><li>${t("l1")}</li><li>${t("l2")}</li></ul><b>0 ${t("per")}</b><p>${core?"":`<span class="tag">${t("current")}</span>`}</p></div>
<div class="card plan best"><h2>${t("corep")}</h2><p class="sub">${t("core_d")}</p><ul><li>${t("c1")}</li><li>${t("c2")}</li><li>${t("c3")}</li></ul><b>19 ${t("per")}</b><p style="margin-top:12px">${core?`<span class="tag ok">${t("current")}</span>`:has("core")?`<button class="btn" disabled>${t("pending")}</button>`:`<button class="btn" data-ask="core">${t("ask_up")}</button>`}</p></div></div></div>`},
plus(){return`<div class="view"><div class="head"><h1>${t("plus_t")}</h1><p class="sub">${t("plus_d")}</p></div>
<div class="card hero"><div><p class="sub">${t("avail")}</p><h1 style="font-size:40px;line-height:48px"><span id="n">0</span> SAR</h1><div class="stats"><div><b>20</b>${t("spent")}</div><div><b>Sep 30, 2026</b>${t("expires")}</div></div></div>
<div><button class="btn o" style="background:#fff" data-ask="plus">${t("req_c")}</button></div></div>
<div class="card" style="margin-top:16px"><h2>${t("hist")}</h2><table><thead><tr><th>${t("tx")}</th><th>${t("date")}</th><th>${t("amount")}</th></tr></thead><tbody>${S.tx.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table></div></div>`},
parent(){const rs=S.reqs;return`<div class="view"><div class="head"><h1>${t("p_hello")}</h1></div>
<div class="g g3" style="margin-bottom:16px"><div class="card"><p class="sub">${t("p_prog")}</p><h1>3.8</h1></div><div class="card"><p class="sub">${t("p_att")}</p><h1>96%</h1></div><div class="card"><p class="sub">${t("p_asg")}</p><h1>45%</h1></div></div>
<div class="card"><h2>${t("p_sub")}</h2>${rs.length?rs.map((r,i)=>`<div class="req"><div><h3>${t("q_"+r.type)}</h3>${r.note?`<p class="sub">${r.note}</p>`:""}</div>${r.status==="pending"?`<div class="row"><button class="btn o" data-dec="${i}">${t("decline")}</button><button class="btn" data-app="${i}">${t("approve")}</button></div>`:`<span class="tag ${r.status==="approved"?"ok":"err"}">${t(r.status)}</span>`}</div>`).join(""):`<p class="sub" style="padding:12px 0">${t("none")}</p>`}</div></div>`}};
function card(o){const[p,d]=pick(o);const tier=o[1]==="core"?`<span class="tag core">${t("core")}</span>`:o[2]===0?`<span class="tag">${t("free")}</span>`:"";
const pend=o[3]==="age"&&has("age");return`<button class="card offer" data-o="${O.indexOf(o)}">${tile(o[4])}<div class="bd"><div class="row" style="gap:6px">${tier}${o[3]==="age"?`<span class="tag err">${t("age")}</span>`:""}${o[3]==="oos"?`<span class="tag err">${t("oos")}</span>`:""}</div><h3>${p}</h3><p class="sub">${B[o[4]].t}</p><span class="price">${o[2]?o[2]+" "+t("coins"):t("free")}${pend?` · ${t("pending")}`:""}</span></div></button>`}
const stores=()=>[...new Set(O.map(o=>o[4]))].sort((a,b)=>(ST[a]?0:1)-(ST[b]?0:1));
const KW={starbucks:"coffee cafe drink",mcdonalds:"burger fast food meal",kfc:"chicken fast food meal",burgerking:"burger fast food meal",netflix:"movies series streaming",spotify:"music streaming",playstation:"games gaming",nike:"sport shoes gym",adidas:"sport shoes gym",samsung:"phone earbuds",ikea:"furniture desk home",carrefour:"grocery supermarket",duolingo:"language study",coursera:"course study",udemy:"course study",audible:"books audio",bose:"audio",dell:"laptop computer"};
function grid(){const q=(S.q||"").toLowerCase(),l=O.filter(o=>(S.cat==="all"||o[0]===S.cat)&&(S.tab!=="instant"||o[7]==="instant")&&(!q||(pick(o).join(" ")+B[o[4]].t+" "+(KW[o[4]]||"")).toLowerCase().includes(q)));
return l.length?l.map(card).join(""):`<div class="card" style="grid-column:1/-1;text-align:center"><div class="big" style="margin:0 auto 8px">🔍</div><h3>${t("nores")}</h3><p class="sub">${t("nores_b")}</p></div>`}
/* ---------- offer flow ---------- */
function openOffer(i){const o=O[i],[n,d]=pick(o);const head=ic=>`<div class="big ${ic[1]||""}" aria-hidden="true">${ic[0]}</div>`;
const close=`<button class="btn o" data-x>${t("close")}</button>`;
let h;
if(o[3]==="dup")h=`${head(["⚠️","err"])}<h2>${t("e_dup")}</h2><p>${t("e_dup_b")}</p><div class="safe"><b>${n}</b><br>${t("e_dup_s")}</div>${close}`;
else if(o[3]==="oos")h=`${head(["📦","err"])}<h2>${t("e_oos")}</h2><p>${t("e_oos_b")}</p><div class="safe"><b>${n}</b><br>${t("e_oos_s")}</div><button class="btn" data-x data-go="market">${t("browse")}</button>`;
else if(o[3]==="exp")h=`${head(["⏰","err"])}<h2>${t("e_exp")}</h2><p>${t("e_exp_b")}</p><div class="safe"><b>${n}</b><br>${t("e_exp_s")}</div>${close}`;
else if(o[1]==="core"&&S.plan!=="core")h=`${head(["⭐"])}<h2>${t("need_up")}</h2><p>${t("need_up_b")}</p><div class="row"><button class="btn" data-x data-go="upgrade">${t("go_up")}</button>${close}</div>`;
else if(o[3]==="age"&&!S.owned.includes("age-ok")&&!S.reqs.find(r=>r.type==="age"&&r.status==="approved"))h=`${head(["🔒"])}<h2>${t("need_g")}</h2><p>${t("need_g_b")}</p>${has("age")?`<button class="btn" disabled>${t("pending")}</button>`:`<button class="btn" data-ask="age">${t("ask_g")}</button>`}${close}`;
else if(S.coins<o[2])h=`${head(["🪙"])}<h2>${t("need_c")}</h2><p>${t("need_c_b")} (${t("you_have")} ${S.coins})</p><button class="btn" data-x data-go="plus">${t("ask_c")}</button>${close}`;
else h=`<h2>${n}</h2><p>${d}</p><div class="safe">${t("balance")}: ${S.coins} ${t("coins")}</div><div class="row"><button class="btn" data-redeem="${i}">${o[2]?`${t("confirm")} ${o[2]} ${t("coins")}`:t("free_btn")}</button>${close}</div>`;
modal(tile(o[4],"ban")+h)}
function redeem(i){const o=O[i];S.coins-=o[2];S.owned.push(off(o));confetti();S.rating=0;chrome();
modal(`<div class="big ok" aria-hidden="true">✓</div><h2>${t("ok_t")}</h2><p>${t("ok_b")}</p><p><b>${t("rate")}</b></p><div class="stars" role="group">${[1,2,3,4,5].map(n=>`<button data-star="${n}" aria-label="${n}">★</button>`).join("")}</div><button class="btn" data-x>${t("t_ok")}</button>`)}
document.addEventListener("click",e=>{const g=s=>e.target.closest(s);let b;
if(b=g("[data-o]"))return openOffer(+b.dataset.o);
if(b=g("[data-redeem]"))return redeem(+b.dataset.redeem);
if(b=g("[data-star]")){const n=+b.dataset.star;S.rating=n;document.querySelectorAll("[data-star]").forEach(x=>x.classList.toggle("on",+x.dataset.star<=n));return toast(t("thanks"))}
if(b=g("[data-tab]")){S.tab=b.dataset.tab;return render(1)}
if(b=g("[data-cat]")){S.cat=b.dataset.cat;return render(1)}
if(b=g("[data-store]")){S.tab="offers";S.cat="all";return modal(`<h2>${STORES[b.dataset.store][0]}</h2><p class="sub">${STORES[b.dataset.store][2]}</p>${STORES[b.dataset.store][3].map(x=>`<div class="req"><h3>${x}</h3></div>`).join("")}<button class="btn" data-x data-go="market">${t("browse")}</button>`)}
if(b=g("[data-f]")){const i=b.dataset.f;return modal(`<h2>${t("f"+i)}</h2><p>${t("f"+i+"d")}</p><button class="btn" data-x>${t("close")}</button>`)}
if(g("[data-recent]"))return modal(`<h2>${t("recent")}</h2>${["a1","a2","a3"].map((k,i)=>`<div class="req"><span>${t(k)}</span><b>+${[40,25,10][i]}</b></div>`).join("")}<button class="btn" data-x>${t("close")}</button>`);
if(b=g("[data-ask]")){const k=b.dataset.ask;if(!has(k)){S.reqs.push({type:k,status:"pending",note:k==="age"?"Gaming gift card (18+)":k==="plus"?"SAR 50":""})}toast(t("sent"));shut();return render(1)}
if(b=g("[data-app],[data-dec]")){const i=+(b.dataset.app??b.dataset.dec),r=S.reqs[i];r.status=b.dataset.app!==undefined?"approved":"declined";
if(r.status==="approved"){if(r.type==="core")S.plan="core";if(r.type==="plus")S.plus+=50}toast(t(r.status));return render(1)}
if(b=g("[data-go]"))location.hash="#/"+b.dataset.go});
/* ---------- router ---------- */
function render(soft){const h=(location.hash.slice(2)||(S.role==="s"?"home":"parent"));S.route=V[h]?h:"my";if(S.role==="p"&&S.route!=="parent")S.route="parent";if(S.role==="s"&&S.route==="parent")S.route="my";
chrome();$("#main").innerHTML=V[S.route]();if(!soft)window.scrollTo(0,0);const n=$("#n");if(n)count(n,S.route==="plus"?S.plus:(S.pts||2450))}
addEventListener("hashchange",()=>render());render();
