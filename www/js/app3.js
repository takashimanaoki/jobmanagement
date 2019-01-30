var allMensetu = JSON.parse(localStorage.getItem('mensetu_data'));
if (!allMensetu) allMensetu = [];

//alert(JSON.stringify(allMensetu));


    //ページ移動（pushPage）が起きたらページに対して処理をする
    mynavigator.addEventListener('init', function(e){

    //ページを判別して処理を切り替え
        if (e.target.matches('#mensetugamen') ){
        //mensetu.htmlに移動してきた場合
        
            //pushPageの第2引数で渡しているdataを取得
            mensetuData = e.target.data;
            
            var title = document.getElementById('title');
            title.innerHTML = mensetuData.title;
            
            

            var desc = document.getElementById('description');
            desc.innerHTML = mensetuData.description;
        } else if (e.target.matches('#mensetu')){
        //mensetu.htmlに移動してき他場合
            var nameList = document.getElementById('list-mensetu');

          
            
            //配列のデータをもとに<ons-list-item>タグを生成して
            //<ons-list>タグの中に追加
            for (i = 0; i < allMensetu.length; i++){
                var newitem = document.createElement('ons-list-item');
                newitem.setAttribute('tappable', '');
                newitem.setAttribute('modifier', 'chevron');
                newitem.id = allMensetu[i].sid;
                newitem.optdata = allMensetu[i];
                newitem.onclick = function(){
                    var opt = {};
                    opt.data = this.optdata;
                    //e.navigator.pushPage('mensetu.html', opt);
                    document.querySelector('#navigator').pushPage('mensetugamen.html', opt);
                }
                //タグは強制的に文字列で書くことも可能。プログラムは読みにくくなる
                newitem.innerHTML = '<div class="center">'
                    + '<div class="list__item__title">'
                    + allMensetu[i].title
                    + '</div>'
                    + '<div class="list__item__subtitle">'
                    
                    + '</div>'
                    + '</div>';
                nameList.appendChild(newitem);
            }
        };
            
            if(allMensetu.length == 0) {
                ons.notification.toast('表示する銅像データがありません', { timeout: 2000 }); 
            }
            for(i = 0; i < allMensetu.length; i++){
                var newitem = document.createElement('div');
                newitem.optdata = allMensetu[i];
                newitem.onclick = function(){
                    var opt = {};
                    opt.data = this.optdata;
                    mynavigator.pushPage('mensetugamen.html', opt);
                }
                newitem.innerHTML = allMensetu[i].title
                    + '@' + allMensetu[i].place;

                L.marker(new L.LatLng(allMensetu[i].lat, allMensetu[i].lng))
                    .bindPopup(newitem)
                    .addTo(map);
            }
        
        
    });


//regist.html内での処理
var deviceReady = false;
window.onload = function() {
    document.addEventListener('deviceready', function() {
        deviceReady = true;
    }, false);
};




//取消ボタンが押されたとき
function cancelmensetu() {
    var cancel = confirm('本当に取り消しますか？');
        if (!cancel) {
        return;
    }
    
    document.getElementById('mensetu_name').value = '';
    
    
    document.getElementById('mensetu_description').value = '';
}

//全消去ボタンが押されたとき
function removemensetuData() {
    var remove = confirm('登録したデータを全て削除します。');
    if (!remove) {
        return;
    }
    localStorage.removeItem('mensetu_data');
    //localStorage.clear();
    allMensetu = [];
}

//登録ボタンが押されたとき
function registmensetu() {
    var regist = confirm('本当に登録しますか？');
    if (!regist) {
        return;
    }

    var mensetuData = JSON.parse(localStorage.getItem('mensetu_data'));
    if (!mensetuData) mensetuData = [];

    var mensetuDataLen = mensetuData.length; // 登録済みデータの個数
    var nextSid = ('000' + (mensetuDataLen + 1)).slice(-3);

    mensetuData.push({
        sid: nextSid,
        title: document.getElementById('mensetu_name').value,
        description: document.getElementById('mensetu_description').value,
        

    });

    //console.log(mensetuData);
    //console.log(JSON.stringify(mensetuData));

    try {
        localStorage.setItem('mensetu_data', JSON.stringify(mensetuData));
    } catch(e) {
        alert('登録が失敗しました。');
        throw e;
        return;
    }

    allMensetu = mensetuData;
    alert('登録が完了しました。');
}


