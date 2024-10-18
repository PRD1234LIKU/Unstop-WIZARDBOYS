const profs = [
    "Prof. Jhon Doe",
    "Prof. Jane Smith",
    "Rakesh Sharma",
    "Banshi Mishra"
]
function showSuggestions() {
    let sug = document.getElementById('suggesions')
    sug.innerHTML = '';
    let ip = document.getElementById('searchProf').value;
    if(ip === '') {
        suggesions.style.display = 'none';
        return;
    }
    let suggest = profs.filter(x => x.toLowerCase().includes(ip.toLowerCase()));
    for(let i = 0; i < suggest.length; i++) {
        let opt = document.createElement('div');
        opt.innerHTML = suggest[i];
        sug.appendChild(opt);
        opt.style.cursor = 'pointer';
        opt.style.padding = '1px';
        opt.onclick = function() {
            let k = String(i);
            let name = "mentor" + k;
            window.location.href = '#'+name;
        }
    }
    suggesions.style.display = 'block';
}
