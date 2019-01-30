

    document.addEventListener('show', function(event) {
      var page = event.target;
//      var titleElement = document.querySelector('#toolbar-title');

      if (page.matches('#first-page')) {
//        titleElement.innerHTML = 'TODO';
      } else if (page.matches('#second-page')) {
//        titleElement.innerHTML = 'MEMO';
            mynavigator = document.getElementById('navigator'); 




var allKigyou = JSON.parse(localStorage.getItem('kigyou_data'));
if (!allKigyou) allKigyou = [];

//alert(JSON.stringify(allKigyou));


    //ページ移動（pushPage）が起きたらページに対して処理をする
    mynavigator.addEventListener('init', function(e){

    //ページを判別して処理を切り替え
        if (e.target.matches('#kigyougamen') ){
        //kigyou.htmlに移動してきた場合
        
            //pushPageの第2引数で渡しているdataを取得
            kigyouData = e.target.data;
            
            var title = document.getElementById('title');
            title.innerHTML = kigyouData.title;
            
            

            var desc = document.getElementById('description');
            desc.innerHTML = kigyouData.description;
        } else if (e.target.matches('#kigyou')){
        //mensetu.htmlに移動してき他場合
            var nameList = document.getElementById('list-kigyou');

          
            
            //配列のデータをもとに<ons-list-item>タグを生成して
            //<ons-list>タグの中に追加
            for (i = 0; i < allKigyou.length; i++){
                var newitem = document.createElement('ons-list-item');
                newitem.setAttribute('tappable', '');
                newitem.setAttribute('modifier', 'chevron');
                newitem.id = allKigyou[i].sid;
                newitem.optdata = allKigyou[i];
                newitem.onclick = function(){
                    var opt = {};
                    opt.data = this.optdata;
                    //e.navigator.pushPage('kigyou.html', opt);
                    document.querySelector('#navigator').pushPage('kigyou.html', opt);
                }
                //タグは強制的に文字列で書くことも可能。プログラムは読みにくくなる
                newitem.innerHTML = '<div class="center">'
                    + '<div class="list__item__title">'
                    + allKigyou[i].title
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
function cancelkigyou() {
    var cancel = confirm('本当に取り消しますか？');
        if (!cancel) {
        return;
    }
    
    document.getElementById('kigyou_name').value = '';
    
    
    document.getElementById('kigyou_description').value = '';
}

//全消去ボタンが押されたとき
function removekigyouData() {
    var remove = confirm('登録したデータを全て削除します。');
    if (!remove) {
        return;
    }
    localStorage.removeItem('kigyou_data');
    //localStorage.clear();
    allKigyou = [];
}

//登録ボタンが押されたとき
function registkigyou() {
    var regist = confirm('本当に登録しますか？');
    if (!regist) {
        return;
    }

    var kigyouData = JSON.parse(localStorage.getItem('kigyou_data'));
    if (!kigyouData) kigyouData = [];

    var kigyouDataLen = kigyouData.length; // 登録済みデータの個数
    var nextSid = ('000' + (kigyouDataLen + 1)).slice(-3);

    kigyouData.push({
        sid: nextSid,
        title: document.getElementById('kigyou_name').value,
        description: document.getElementById('kigyou_description').value,
        

    });

    //console.log(kigyouData);
    //console.log(JSON.stringify(kigyouData));

    try {
        localStorage.setItem('kigyou_data', JSON.stringify(kigyouData));
    } catch(e) {
        alert('登録が失敗しました。');
        throw e;
        return;
    }

    allKigyou = kigyouData;
    alert('登録が完了しました。');
}




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












        } else if (page.matches('#third-page')) {
//        titleElement.innerHTML = 'KIROKU';
            mynavigator = document.getElementById('navigator2'); 



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
                    document.querySelector('#navigator').pushPage('mensetu.html', opt);
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
function removeAllData() {
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






      }
      }
    );

  
        var mynavigator;
        /*
        ons.ready(function() {
            mynavigator = document.getElementById('navigator'); 
            
        });

*/














         


  