//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  storeArr: [{
    storeIntro: '海苔豆腐小方 宝宝辅食食谱',
    storeTitle: '宝宝辅食大人原创',
    sumSee: '1352',
    collection: '1',
    imgArr: [{
      id: 1,
      src: '../../images/shanzha/1-1.jpg',
      foodIntro: '山楂排骨，你值得拥有',
      sumFood: '',
    }, {
      id: 2,
      src: '../../images/xianggu/2-1.png',
      foodIntro: '冬至美食至，不止暖胃还暖心',
      sumFood: '',
    }, {
      id: 3,
      src: '../../images/kongbao/3_02.png',
      foodIntro: '我对细腻醇香的甜品，毫无抵抗力',
      sumFood: '',
    }]
  }, {
    storeIntro: '咸蛋黄烧茄子',
    storeTitle: '小羽私厨',
    sumSee: '1862',
    collection: '2',
    imgArr: [{
      id: 4,
      src: '../../images/4/4_02.png',
      foodIntro: '炖出来的美味，最是酥软鲜香',
      sumFood: '',
    }, {
      src: '../../images/5.jpg',
      foodIntro: '围着暖气过冬，都不如这锅来得实在！',
      sumFood: '',
    }, {
      src: '../../images/6.jpg',
      foodIntro: '冻龄神器，赛过燕窝',
      sumFood: '',
    }]
  }],
  // 总共的菜单
  cookbook: [{
    id: 1,
    headimg: '../../images/shanzha/1_02.png',
    title: '山楂排骨',
    looksman: '69人浏览',
    intro: '口感丰富，借用山楂的果酸替代香醋的醇酸，给排骨注入了清新又跳跃的回味，把原先的肥腻都抵消的荡然无存。光是就着盘底浓郁微酸又带着甜的酱汁，都能干脆利索的呼噜掉两大碗米饭呢~',
    writeby: '小羽私厨',
    isCollect: true,
    foodmenu: [{
        name: '排骨',
        weight: '500克'
      }, {
        name: '山楂',
        weight: '15个'
      },
      {
        name: '生姜',
        weight: '3片'
      },
      {
        name: '小葱',
        weight: '1根'
      }
    ],
    step: [{
      img: '../../images/shanzha/1_05.png',
      num: '1',
      intro: '排骨冷水下锅，加入3片姜，1大勺料酒，煮出浮沫后捞出沥干水分。'
    }, {
      img: '../../images/shanzha/1_08.png',
      num: '2',
      intro: '炒锅倒油烧热，放入排骨、八角煸炒至排骨表面微焦。'
    }, {
      img: '../../images/shanzha//1_10.png',
      num: '3',
      intro: '转小火把排骨推到锅子一边，在另一边放入冰糖，炒至冰糖完全融化变成焦糖色。'
    }, {
      img: '../../images/shanzha/1_12.png',
      num: '4',
      intro: '然后混合排骨翻炒，让排骨表面都裹上糖色。'
    }, {
      img: '../../images/shanzha/1_14.png',
      num: '5',
      intro: '炒匀后加入热水没过排骨，再调入3大勺生抽，1小勺老抽，1大勺料酒，大火烧开。'
    }, {
      img: '../../images/shanzha/1_16.png',
      num: '6',
      intro: '放入一半的山楂，盖上盖子中火焖30分钟。吃不了太酸的口味可以少放山楂。'
    }, {
      img: '../../images/shanzha/1_18.png',
      num: '7',
      intro: '30分钟后加入剩下的山楂，翻炒至汤汁变少变浓稠。'
    }, {
      img: '../../images/shanzha/1_20.png',
      num: '8',
      intro: '出锅撒点小葱碎和白芝麻点缀就可以啦。'
    }]
  }, {
    id: 2,
    headimg: '../../images/xianggu/2-1.png',
    title: '香菇鸡丝粥排',
    looksman: '13388人浏览.407人收藏.1人做过',
    intro: '这款粥必须使用高汤才能鲜美好喝，加入1个家乐浓汤宝完全可以取代好几个小时才能熬成的高汤，让香菇鸡丝粥更加鲜香美味，也不需要别的调味料了。很适合小孩子老人食用，早餐晚餐，喝上这样- -碗粥，既简单又营养',
    writeby: '尖尖实验室',
    isCollect: false,
    foodmenu: [{
        name: '香米',
        weight: '100克'
      }, {
        name: '干香菇',
        weight: '4朵'
      },
      {
        name: '鸡胸脯肉',
        weight: '150克'
      },
      {
        name: '家乐老母鸡口味浓汤宝',
        weight: '1个'
      },
      {
        name: '姜丝',
        weight: '3片'
      },
      {
        name: '香葱',
        weight: '1根'
      }
    ],
    step: [{
      img: '../../images/xianggu/2-2.png',
      num: '1',
      intro: '准备食材:香菇提前泡发好，大米放水中浸泡2个小时，鸡胸肉撕去筋膜洗净，生姜去皮，家乐老母鸡口味浓汤宝1个准备好。'
    }, {
      img: '../../images/xianggu/2-3.png',
      num: '2',
      intro: '泡好的香菇，切成小片。鸡胸肉切成细丝。姜切成丝。家乐浓汤宝打开备用。'
    }, {
      img: '../../images/xianggu/2-4.png',
      num: '3',
      intro: '将所有食材投入电饭煲中。'
    }, {
      img: '../../images/xianggu/2-5.png',
      num: '4',
      intro: '加入1个家乐浓汤宝(在我们的印象中,浓汤宝或许只能跟汤类菜品沾边，其实这样的想法真的错了，用浓汤宝做粥，煮粥更香浓味美)'
    }, {
      img: '../../images/xianggu/2-1.png',
      num: '5',
      intro: '启动电饭煲按照常规煮粥模式煮熟即可，出锅装入碗中,根据个人口味可以加少许香葱花提味'
    }]
  }, {
    id: 3,
    headimg: '../../images/kongbao/3_02.png',
    title: '宫保素肉#松下多面美味#',
    looksman: '13533人浏览. 182人收藏',
    intro: '食素者的福音~超级下饭',
    writeby: '尖尖实验室',
    isCollect: false,
    foodmenu: [{
        name: '蛋白素肉丁',
        weight: '50克'
      }, {
        name: '黄瓜',
        weight: '100克'
      },
      {
        name: '胡萝卜',
        weight: '60克'
      },
      {
        name: '炸熟花生米',
        weight: '30克'
      }
    ],
    step: [{
      img: '../../images/kongbao/3_05.png',
      num: '1',
      intro: '蛋白素肉放水中泡发好，攥干水分备用.'
    }, {
      img: '../../images/kongbao/3_08.png',
      num: '2',
      intro: '黄瓜切成小丁,胡萝卜切成小丁，花生米炸熟备用。'
    }, {
      img: '../../images/kongbao/3_10.png',
      num: '3',
      intro: '大葱切成葱花，姜去皮切末，大蒜切末，干辣椒切小段备用。'
    }, {
      img: '../../images/kongbao/3_10.png',
      num: '4',
      intro: '生抽,料酒,糖，醋，蚝油，淀粉调成酱汁备用。'
    }, {
      img: '../../images/kongbao/3_12.png',
      num: '5',
      intro: '起锅热油，下素肉丁翻炒片刻'
    }, {
      img: '../../images/kongbao/3_14.png',
      num: '6',
      intro: '下郫县豆瓣酱,葱花，姜末，蒜末炒出红油'
    }, {
      img: '../../images/kongbao/3_16.png',
      num: '7',
      intro: '下黄瓜，胡萝卜炒至断生'
    }, {
      img: '../../images/kongbao/3_18.png',
      num: '8',
      intro: '加入花生米翻炒均匀'
    }, {
      img: '../../images/kongbao/3_20.png',
      num: '9',
      intro: '加入酱汁,翻炒均匀'
    }, {
      img: '../../images/kongbao/3_22.png',
      num: '10',
      intro: '关火，出锅'
    }, {
      img: '../../images/kongbao/3_24.png',
      num: '11',
      intro: '成品'
    }, {
      img: '../../images/kongbao/3_26.png',
      num: '12',
      intro: '成品'
    }, {
      img: '../../images/kongbao/3_28.png',
      num: '13',
      intro: '成品'
    }]
  }, {
    id: 4,
    headimg: '../../images/4/4_02.png',
      title: '鱼胶炖猪软骨',
      looksman: '32955.人浏览.957人收藏.3人做过',
    intro: '',
      writeby: '沫沫食觉',
    isCollect: false,
    foodmenu: [{
      name: '红烧软骨 ',
      weight: '1000克'
      }, {
        name: '鱼胶',
        weight: '五片'
      },
      {
        name: '虫草花',
        weight: '10克'
      }
    ],
    step: [{
      img: '../../images/4/4_05.png',
      num: '1',
      intro: '食材备齐.'
    }, {
      img: '../../images/4/4_08.png',
      num: '2',
        intro: '鱼胶入沸水中煮二十分钟,放几片姜片去腥。'
    }, {
      img: '../../images/4/4_10.png',
      num: '3',
        intro: '关火后自然冷却,取出后用清水浸泡六至八个小时。'
    }, {
      img: '../../images/4/4_10.png',
      num: '4',
        intro: '中间换两次水，直到泡发成纯白色。'
    }, {
      img: '../../images/4/4_12.png',
      num: '5',
        intro: '猪软骨切块,焯水'
    }, {
      img: '../../images/4/4_14.png',
      num: '6',
        intro: '焯熟后捞出沥干'
    }, {
      img: '../../images/4/4_16.png',
      num: '7',
        intro: '锅里倒色拉油，烧热后放姜片爆香'
    }, {
      img: '../../images/4/4_18.png',
      num: '8',
        intro: '将猪软骨放入炒至表面焦黄色后加入冰糖翻炒'
    }, {
      img: '../../images/4/4_20.png',
      num: '9',
        intro: '炒至冰糖溶化后倒入生抽、老抽炒至均匀上色，倒水没过猪软骨,倒入料酒,放入泡发好的鱼胶煮开'
    }, {
      img: '../../images/4/4_22.png',
      num: '10',
        intro: '煮沸后放入虫草花和炖肉料包,改小火盖上盖子焖煮一个小时'
    }, {
      img: '../../images/4/4_24.png',
      num: '11',
        intro: '改大火收汁,待汤汁粘稠即可关火。'
    }, {
      img: '../../images/4/4_26.png',
      num: '12',
      intro: '成品'
    }]
  }],

  // 收藏的菜单
  
  collectbook: [],
  searchArr: []




})