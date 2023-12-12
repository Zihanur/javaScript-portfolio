// navbar menu bar click handeler
document.getElementById('menu-bar').addEventListener('click',()=>{
    document.getElementById('menu-bar').style.display = 'none';
    document.getElementById('sidebar').style.display = 'block';
})

// navbar close items click handeler
document.getElementById('sidebar').addEventListener('click',()=>{
    document.getElementById('menu-bar').style.display = 'flex';
})