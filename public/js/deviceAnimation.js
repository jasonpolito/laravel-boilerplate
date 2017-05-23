		var xmlns="http://www.w3.org/2000/svg", select = function(s) {
      return document.querySelector(s);
    }, selectAll = function(s) {
      return document.querySelectorAll(s);
    },
    monitorContent = selectAll('.monitorContentGroup path'),
    monitorGroup = select('.monitorGroup'),
    monitorScreen = select('.monitorScreen'),
    monitorLogo = select('.monitorLogo'),
    monitorStand = select('.monitorStand'),
    monitorStandShadow = select('.monitorStandShadow'),
    monitorBottom = select('.monitorBottom'), monitorEdge = select('.monitorEdge'),


    laptopContent = selectAll('.laptopContentGroup path'),
    laptopContentGroup = select('.laptopContentGroup'),
    laptopGroup = select('.laptopGroup'), laptopScreen = select('.laptopScreen'), laptopEdgeLeft = select('.laptopEdgeLeft'), laptopEdgeRight = select('.laptopEdgeRight'), laptopTrackpad = select('.laptopTrackpad'), laptopBase = select('.laptopBase'),

    tabletContent = selectAll('.tabletContentGroup path'),
    tabletContentGroup = select('.tabletContentGroup'), tabletGroup = select('.tabletGroup'), tabletButton = select('.tabletButton'), tabletCamera = select('.tabletCamera'), tabletScreen = select('.tabletScreen'),

    phoneGroup = select('.phoneGroup'),phoneButton = select('.phoneButton'),phoneCamera = select('.phoneCamera'),phoneSpeaker = select('.phoneSpeaker')




    TweenMax.set([ monitorBottom], {
      transformOrigin:'50% 100%'
    })
    TweenMax.set([monitorStand, laptopBase,tabletScreen], {
      transformOrigin:'50% 0%'
    })

    TweenMax.set([monitorLogo,monitorScreen, laptopScreen,  laptopTrackpad,  tabletGroup, laptopGroup, tabletButton, tabletCamera, tabletContentGroup,phoneButton, phoneCamera,phoneSpeaker, laptopContentGroup,phoneGroup], {
      transformOrigin:'50% 50%'
    })

    TweenMax.set([ laptopEdgeLeft,laptopEdgeRight ], {
      transformOrigin:'0% 100%'
    })

    TweenMax.set(tabletGroup, {
     rotation:-90
   })



    var tl = new TimelineMax({repeat:-1, delay:1, yoyo:false,paused:false});
    tl.timeScale(3)
    tl.from(monitorBottom,1, {
      scaleY:0,
      ease:Power1.easeOut
    })
    .from(monitorStand, 1, {
      y:-70,
      ease:Power1.easeOut
    }, '-=1')
    .from(monitorStandShadow, 0.5, {
     alpha:0,
     ease:Power1.easeIn
   },'-=0.5')
    .from(monitorEdge, 1, {
      y:330
    },'-=0.25')
    .from(monitorScreen, 2, {
      y:330,
      ease:Power1.easeOut
    },'-=1')

    .staggerFrom(monitorContent, 1, {
     scaleX:0
   },0.1,'-=0.51')
    .from(monitorLogo, 1, {
      scale:0,
      ease:Back.easeOut.config(2)
    })
    .staggerTo(monitorContent, 1, {
     alpha:0,
     delay:2
   }, 0.1)
    .to(monitorScreen, 1, {
      y:330,
      ease:Power1.easeIn
    },'-=1')
    .to(monitorEdge, 1, {
      y:330,
      ease:Power1.easeIn
    },'-=0.75')
    .to(monitorBottom,1, {
      scaleX:0.69,
      y:-23
    })
    .to(monitorBottom,1, {
      scaleY:0.45,
      alpha:1
    }, '-=1')
    .set(monitorBottom, {
      alpha:0
    })
    .to(monitorLogo, 0.5, {
      scale:0,
      ease:Back.easeIn
    },'-=1')
    .to(monitorStand, 1, {
  //scaleY:0
  y:-120
},'-=1.5')
    .to(monitorStandShadow, 0.5, {
     alpha:0
   },'-=1.5')

    .from(laptopBase, 1, {
      alpha:0
    }, '-=1')

    .from(laptopTrackpad, 1, {
      scaleX:0
    }, '-=1')

    .from(laptopScreen, 1, {
      scale:0,
      ease:Back.easeOut.config(0.5)
    })

    .from(laptopEdgeLeft, 2, {
      skewX:-40,
      scaleY:0,
      ease:Power3.easeOut
    },'-=2')
    .from(laptopEdgeRight, 2, {
      skewX:40,
      scaleY:0,
      ease:Power3.easeOut
    },'-=2')
    .staggerFrom(laptopContent, 1, {
     scaleX:0
   },0.1)
/*
.to(laptopBase, 1, {
  y:-60,
  scaleX:0
})
*/
.to(laptopTrackpad, 0.3, {
  alpha:0,
  delay:2
})

.to(laptopScreen, 1, {
	scaleX:0.67
})
.to(laptopScreen, 1, {
	scaleY:0.8
},'-=1')
.to(laptopContentGroup, 1,{
  alpha:0,
  scale:0.5
},'-=1')
.to(laptopBase, 1, {
  y:-20,
  scaleX:0
},'-=1')
.to(laptopEdgeLeft, 1, {
	x:40,
	transformOrigin:'50% 50%',
	scaleY:0.85
},'-=1')
.to(laptopEdgeRight, 1, {
	x:-40,
	transformOrigin:'50% 50%',
	scaleY:0.85
}, '-=1')

.set(laptopGroup,{
	alpha:0
})
.from(tabletGroup, 1,{
	scale:1.1,
	//y:20,
	alpha:0
}, '-=1')

.to(tabletGroup, 2, {
	rotation:0,
  delay:2,
  ease:Anticipate.easeOut//.config(0.3)
})
.staggerFrom([tabletButton, tabletCamera], 0.5, {
	scale:0,
  ease:Back.easeOut
},0.1,"-=1")
.from(tabletContentGroup, 2, {
  rotation:90,
  scaleX:1.33,
  scaleY:0.8,
  ease:Power3.easeInOut
},'-=0')


.to([tabletButton, tabletCamera], 0.5, {
	scale:0,
  delay:2
})
.to(tabletGroup, 1, {
	scaleX:0.45
})
.to(tabletGroup, 1, {
	scaleY:0.7
},'-=1')
.to(tabletContentGroup, 1, {
  y:-5
},'-=1')
.to(tabletScreen, 0.5,{
	scaleY:0.92,
  y:4
},'-=0.5')
.set(phoneGroup,{
	alpha:1
})

.set([tabletGroup, tabletContentGroup],  {
	alpha:0
})
.staggerFrom([phoneButton, phoneCamera, phoneSpeaker], 1,{
  scale:0,
  ease:Back.easeOut
},0.1)

.to(phoneGroup,2, {
	y:80,
  //alpha:0,
  delay:2,
  //scaleX:0.51,
  ease:Back.easeIn.config(2)
})

TweenMax.set('svg',{
  visibility:'visible'
})
