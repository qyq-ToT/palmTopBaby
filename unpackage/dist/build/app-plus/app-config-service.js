
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/select_login/select_login","pages/index/index","components/find/find","components/message/message","components/mine/mine","pages/attendance/attendance","pages/car/car","pages/curriculum/curriculum","pages/healthy/healthy","pages/mailList/mailList","pages/more/more","pages/recipes/recipes","pages/sing/sing","pages/login/login","components/find_selected/find_selected","components/find_dynamic/find_dynamic","components/find_FindVideo/find_FindVideo","components/find_FindFollow/find_FindFollow"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#cdd1d4","selectedColor":"#ff5a40","borderStyle":"white","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbarImgs/ic_tab_school.png","selectedIconPath":"static/tabbarImgs/ic_tab_school_select.png","text":"校园"},{"pagePath":"components/find/find","iconPath":"static/tabbarImgs/ic_tab_find.png","selectedIconPath":"static/tabbarImgs/ic_tab_find_select.png","text":"发现"},{"pagePath":"components/message/message","iconPath":"static/tabbarImgs/ic_tab_message.png","selectedIconPath":"static/tabbarImgs/ic_tab_message_select.png","text":"消息"},{"pagePath":"components/mine/mine","iconPath":"static/tabbarImgs/ic_tab_mine.png","selectedIconPath":"static/tabbarImgs/ic_tab_mine_select.png","text":"我"}],"midButton":{"width":"84rpx","height":"84rpx","iconPath":"static/tabbarImgs/ic_tab_more_select.png","iconWidth":"70rpx"}},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"PalmTopBaby-1","compilerVersion":"3.1.4","entryPagePath":"pages/select_login/select_login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/select_login/select_login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"登陆页面","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"校园----主页"}},{"path":"/components/find/find","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"发现页面","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/components/message/message","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消息页面","enablePullDownRefresh":false}},{"path":"/components/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false}},{"path":"/pages/attendance/attendance","meta":{},"window":{"navigationBarTitleText":"宝宝考勤","enablePullDownRefresh":false}},{"path":"/pages/car/car","meta":{},"window":{"navigationBarTitleText":"校车","enablePullDownRefresh":false}},{"path":"/pages/curriculum/curriculum","meta":{},"window":{"navigationBarTitleText":"课程表","enablePullDownRefresh":false}},{"path":"/pages/healthy/healthy","meta":{},"window":{"navigationBarTitleText":"健康","enablePullDownRefresh":false}},{"path":"/pages/mailList/mailList","meta":{},"window":{"navigationBarTitleText":"通讯录","enablePullDownRefresh":false}},{"path":"/pages/more/more","meta":{},"window":{"navigationBarTitleText":"更多","enablePullDownRefresh":false}},{"path":"/pages/recipes/recipes","meta":{},"window":{"navigationBarTitleText":"宝宝食谱","enablePullDownRefresh":false}},{"path":"/pages/sing/sing","meta":{},"window":{"navigationBarTitleText":"儿歌","enablePullDownRefresh":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登陆页面","enablePullDownRefresh":false}},{"path":"/components/find_selected/find_selected","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/find_dynamic/find_dynamic","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/find_FindVideo/find_FindVideo","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/find_FindFollow/find_FindFollow","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
