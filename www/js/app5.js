var allJiko = JSON.parse(localStorage.getItem('jiko_data'));
if (!allJiko) allJiko = [];

//alert(JSON.stringify(allJiko));


    //ページ移動（pushPage）が起きたらページに対して処理をする
    mynavigator.addEventListener('init', function(e){

    //ページを判別して処理を切り替え
        if (e.target.matches('#jikogamen') ){
        //jiko.htmlに移動してきた場合
        
            //pushPageの第2引数で渡しているdataを取得
            jikoData = e.target.data;
            
            var title = document.getElementById('title');
            title.innerHTML = jikoData.title;
            
            

            var desc = document.getElementById('description');
            desc.innerHTML = jikoData.description;
        } else if (e.target.matches('#jiko')){
        //mensetu.htmlに移動してき他場合
            var nameList = document.getElementById('list-jiko');

          
            
            //配列のデータをもとに<ons-list-item>タグを生成して
            //<ons-list>タグの中に追加
            for (i = 0; i < allJiko.length; i++){
                var newitem = document.createElement('ons-list-item');
                newitem.setAttribute('tappable', '');
                newitem.setAttribute('modifier', 'chevron');
                newitem.id = allJiko[i].sid;
                newitem.optdata = allJiko[i];
                newitem.onclick = function(){
                    var opt = {};
                    opt.data = this.optdata;
                    //e.navigator.pushPage('jiko.html', opt);
                    document.querySelector('#navigator').pushPage('jiko.html', opt);
                }
                //タグは強制的に文字列で書くことも可能。プログラムは読みにくくなる
                newitem.innerHTML = '<div class="center">'
                    + '<div class="list__item__title">'
                    + allJiko[i].title
                    + '</div>'
                    + '<div class="list__item__subtitle">'
                    
                    + '</div>'
                    + '</div>';
                nameList.appendChild(newitem);
            }
        };
            
           
        
        
    });


//regist.html内での処理
var deviceReady = false;
window.onload = function() {
    document.addEventListener('deviceready', function() {
        deviceReady = true;
    }, false);
};




//取消ボタンが押されたとき
function canceljiko() {
    var cancel = confirm('本当に取り消しますか？');
        if (!cancel) {
        return;
    }
    
    document.getElementById('jiko_name').value = '';
    
    
    document.getElementById('jiko_description').value = '';
}

//全消去ボタンが押されたとき
function removeAllData() {
    var remove = confirm('登録したデータを全て削除します。');
    if (!remove) {
        return;
    }
    localStorage.removeItem('jiko_data');
    //localStorage.clear();
    allJiko = [];
}

//登録ボタンが押されたとき
function registjiko() {
    var regist = confirm('本当に登録しますか？');
    if (!regist) {
        return;
    }

    var jikoData = JSON.parse(localStorage.getItem('jiko_data'));
    if (!jikoData) jikoData = [];

    var jikoDataLen = jikoData.length; // 登録済みデータの個数
    var nextSid = ('000' + (jikoDataLen + 1)).slice(-3);

    jikoData.push({
        sid: nextSid,
        title: document.getElementById('jiko_name').value,
        description: document.getElementById('jiko_description').value,
        

    });

    //console.log(jikoData);
    //console.log(JSON.stringify(jikoData));

    try {
        localStorage.setItem('jiko_data', JSON.stringify(jikoData));
    } catch(e) {
        alert('登録が失敗しました。');
        throw e;
        return;
    }

    allJiko = jikoData;
    alert('登録が完了しました。');
}




