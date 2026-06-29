const screens=[...document.querySelectorAll('.screen')];
function show(id){screens.forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelectorAll('[data-screen]').forEach(b=>b.classList.toggle('active',b.dataset.screen===id));window.scrollTo(0,0)}
document.querySelectorAll('[data-screen]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.screen)));
const cities={
 osaka:['🐙','Osaka','Nara · Uji · Hiraoka · Dotonbori','Playful, neon, food, day trips.'],
 kyoto:['⛩','Kyoto','Fushimi · Arashiyama · Gion','Peaceful, slow, temple lanes, tea breaks.'],
 fuji:['🗻','Fuji','Ropeway · Chureito · Lake','Quiet chapter: sky, lake, reflection.'],
 tokyo:['🗼','Tokyo','Disney · Kamakura · Ginza','Fast city hub: hotel, maps, shopping, food.'],
 seoul:['🏙','Seoul','Namsan · Myeongdong · Han River','Final chapter: cafés, skincare, Namsan, memories.']
};
function openCity(id){const c=cities[id];document.getElementById('cityHero').innerHTML='<div class=icon>'+c[0]+'</div><h2>'+c[1]+'</h2><p>'+c[2]+'</p><p class=sub>'+c[3]+'</p>';document.getElementById('cityCards').innerHTML=['🏨 Hotel / Stay','📍 Saved Maps','🍃 Food Guide','🛍 Shopping','💰 City Budget','📸 Today’s Story'].map(x=>'<button onclick="detail(\''+x+'\')">'+x+'</button>').join('');show('city')}
function detail(t){document.getElementById('modalContent').innerHTML='<h2>'+t+'</h2><p>This opens as a curated card: notes, map links, photos, receipts, ratings, and related items.</p><button onclick="show(\'add\');closeModal()">＋ Add related item</button>';openModal()}
function openMilestone(title,action,date){document.getElementById('modalContent').innerHTML='<h2>🌸 '+title+'</h2><p><b>'+action+'</b></p><p>Suggested reminder date: '+date+'</p><button onclick="closeModal()">Set Reminder</button>';openModal()}
function startFlow(t){document.getElementById('flowArea').innerHTML='<div class=card><h3>'+t+'</h3><input placeholder="Name / place"><input placeholder="Amount"><select><option>Tokyo</option><option>Osaka</option><option>Kyoto</option><option>Fuji</option><option>Seoul</option></select><div class=photo-box>📷 optional receipt / photo</div><button onclick="saved()">Add to Journey</button></div>'}
function saved(){const r=document.getElementById('repoGrid');if(r){r.insertAdjacentHTML('afterbegin','<div class=repo-card>✅<b>New item saved</b><small>Budget + city + story updated</small></div>')}alert('Saved to Budget, City, Repository and Today’s Story.')}
function openModal(){document.getElementById('modal').classList.remove('hidden')}
function closeModal(){document.getElementById('modal').classList.add('hidden')}