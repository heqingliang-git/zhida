
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"navigationBar":{"style":"custom","type":"default"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"职达","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"4.24","entryPagePath":"pages/entry/login","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/entry/login","meta":{"isQuit":true,"isEntry":true,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/main/index","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/main/study","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/chat/chat","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/main/mine","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/chat/dialog","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/entry/signup","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/entry/forgetpwd","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/main/forum","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/main/main","meta":{"enablePullDownRefresh":true,"onReachBottomDistance":300,"pullToRefresh":{"support":true,"style":"circle","offset":"75px"},"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/subpage/mine/edit-profile","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/subpage/forum/publish-blog","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/subpage/forum/blog","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/subpage/forum/relation-list","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/subpage/study/course","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/util/pay","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/main/job","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/subpage/job/job-detail","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/subpage/job/job-apply","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/subpage/job/job-apply-success","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/discard/job-publish","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/discard/job-enterprise","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/discard/job-check-application","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/discard/job-manage","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  