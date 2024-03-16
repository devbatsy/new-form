import {createElement, setStyle, sydDOM, mount, styleComponent, useState, preState,getState,visualTree} from "./sydneyDom.js";
import {} from './form1.js'
import {} from './form2.js'
import {} from './form3.js'
import {} from './form4.js'

visualTree({visual:true});

setStyle(
	[
		{
			nameTag:'reuse_flex',
			style:{
				display:'flex',
				justifyContent:'center',
				alignItems:'center',
				flexDirection:'row'
			}
		},
		{
			nameTag:'add_bg',
			style:{
				backgroundSize:'cover',
				backgroundPosition:'center',
				backgroundRepeat:'no-repeat',
			}
		},
		{
			nameTag:'floating',
			style:{
				position:'absolute',
				bottom:'10px',
				right:'0',
				zIndex:'999'
			}
		},
		{
			nameTag:'cinfoTextS',
			style:{
				fontWeight:'100',
				fontSize:'13px',
				opacity:'.7'
			}
		},
		{
			nameTag:'cinfoTextL',
			style:{
				fontWeight:'400',
			}
		}
	]
)

setStyle([
	{
		nameTag:'container',
		style:{
			height:'100vh',
			width:'100vw',
			background:'hsl(229, 24%, 87%)',
			fontFamily:'ubuntu',
		}
	},
	{
		nameTag:'nxtContainer',
		style:{
			padding:'10px',
			borderRadius:'20px',
		}
	}
])

sydDOM.text = () =>{
    return createElement(
        'p',
        {}
    )
}

sydDOM.container = () =>{
	return createElement(
		'div',
		{style:styleComponent.container()+styleComponent.reuse_flex()},
		[
			sydDOM.nxtContainer()
		]
	)
}

sydDOM.nxtContainer = () =>{
	return createElement(
		'div',
		{
			style:styleComponent.nxtContainer({method:'remove',style:['padding']}),
			id:'nxtContainer'
		},
		[
			sydDOM.rightController(),
			sydDOM.leftFlexible(),
		]
	)
}

sydDOM.rightController = () =>{
	return createElement(
		'div',
		{
			style:styleComponent.nxtContainer([
				{method:'remove',style:['maxHeight','maxWidth','width','background','height','borderRadius','padding']},
				{method:'add', style:{minWidth:'200px'}}
			])
			+styleComponent.reuse_flex([{method:'add',style:{flexDirection:'column',rowGap:'20px',columnGap:'20px',paddingLeft:'20px'}},{method:'remove', style:['alignItems','justifyContent','flexDirection']}]),
			id:'rightController'
		},
		[
			sydDOM.controllBtn(),
			sydDOM.controllBtn().replaceChild({position:0,element:sydDOM.circle2()})
			.replaceChild({position:1,
				element:sydDOM.cInfo().replaceChild({position:0,element:sydDOM.text().addChild({element:'STEP 2'}).addAttr({style:styleComponent.cinfoTextS()})}).replaceChild({position:1,element:sydDOM.text().addChild({element:'SELECT A PLAN'}).addAttr({style:styleComponent.cinfoTextL()})})
			}),
			sydDOM.controllBtn().replaceChild({position:0,element:sydDOM.circle3()})
			.replaceChild({position:1,
				element:sydDOM.cInfo().replaceChild({position:0,element:sydDOM.text().addChild({element:'STEP 3'}).addAttr({style:styleComponent.cinfoTextS()})}).replaceChild({position:1,element:sydDOM.text().addChild({element:'ADD-ONS'}).addAttr({style:styleComponent.cinfoTextL()})})
			}),
			sydDOM.controllBtn().replaceChild({position:0,element:sydDOM.circle4()})
			.replaceChild({position:1,
				element:sydDOM.cInfo().replaceChild({position:0,element:sydDOM.text().addChild({element:'STEP 4'}).addAttr({style:styleComponent.cinfoTextS()})}).replaceChild({position:1,element:sydDOM.text().addChild({element:'SUMMARY'}).addAttr({style:styleComponent.cinfoTextL()})})
			}),
		]
	)
}

sydDOM.leftFlexible = () =>{
	return createElement(
		'div',
		{
			style:styleComponent.nxtContainer([
				{method:'remove',style:['maxHeight','maxWidth','padding']},
				{method:'add', style:{padding:'10px',paddingTop:'20px',height:'100%',width:'100%',position:'relative'}}
			]),
			id:'leftFlex'
		},
		[
			createElement(
				'div',
				{style:'width:100%;',id:'formCont'},
				[
					sydDOM.form_1(),
					sydDOM.form_2(),
					sydDOM.form_3(),
					sydDOM.form_4(),
				]
			),
			sydDOM.btnCont()
		]
	)
}

sydDOM.btnCont = () =>{
	return createElement(
		'div',
		{
			style:styleComponent.floating({method:'remove',style:['bottom','right','position']})+styleComponent.reuse_flex({method:'remove',style:['justifyContent','display']}),
			id:'btnCont'
		},
		[
			sydDOM.goBack(),
			sydDOM.nextStep()
		]
	)
}

sydDOM.sbtnCont = () =>{
	return createElement(
		'div',
		{
			style:styleComponent.floating({method:'remove',style:['bottom','right','position']})+styleComponent.reuse_flex({method:'remove',style:['justifyContent','display']}),
			id:'sbtnCont'
		},
		[
			sydDOM.goBack(),
			sydDOM.nextStep()
		]
	)
}


sydDOM.controllBtn = () =>{
	return createElement(
		'div',
		{
			style:styleComponent.reuse_flex([
				{method:'remove', style:['alignItems','justifyContent']},
				{method:'add',style:{
					columnGap:'10px'
				}}
			])
		},
		[
			sydDOM.circle1(),
			sydDOM.cInfo()
		]
	)
}

sydDOM.circle1 = () =>{
	return createElement(
		'span',
		{
			style:styleComponent.reuse_flex()+`font-size:14px;font-weight:700;min-height:30px;border:1px solid #fff;min-width:30px;max-height:30px;border-radius:50%;transition:all linear .3s;background:${preState(['circle1','bg'],'hsl(206, 94%, 87%)')};color:${preState(['circle1','c'],'#000')};`
		},
		[
			'1'
		],
		{
			createState:{
				stateName:'circle1',
				state:{bg:'hsl(206, 94%, 87%)',c:'#000'}
			},
			type:'circle1'
		}
	)
}

sydDOM.circle2 = () =>{
	return createElement(
		'span',
		{
			style:styleComponent.reuse_flex()+sydDOM.circle1().inherit(['attribute','style'])+`background:${preState(['circle2','bg'],'transparent')};color:${preState(['circle2','c'],'#fff')};`
		},
		[
			'2'
		],
		{
			createState:{
				stateName:'circle2',
				state:{bg:'transparent',c:'#fff'}
			},
			type:'circle2'
		}
	)
}
sydDOM.circle3 = () =>{
	return createElement(
		'span',
		{
			style:styleComponent.reuse_flex()+sydDOM.circle1().inherit(['attribute','style'])+`background:${preState(['circle3','bg'],'transparent')};color:${preState(['circle3','c'],'#fff')};`
		},
		[
			'3'
		],
		{
			createState:{
				stateName:'circle3',
				state:{bg:'transparent',c:'#fff'}
			},
			type:'circle3'
		}
	)
}
sydDOM.circle4 = () =>{
	return createElement(
		'span',
		{
			style:styleComponent.reuse_flex()+sydDOM.circle1().inherit(['attribute','style'])+`background:${preState(['circle4','bg'],'transparent')};color:${preState(['circle4','c'],'#fff')};`
		},
		[
			'4'
		],
		{
			createState:{
				stateName:'circle4',
				state:{bg:'transparent',c:'#fff'}
			},
			type:'circle4'
		}
	)
}

sydDOM.cInfo = () =>{
	return createElement(
		'div',
		{
			style:styleComponent.reuse_flex([
				{method:'remove', style:['alignItems','justifyContent','display']},
				{method:'add',style:{
					flexDirection:'column',
					color:'#fff'
				}}
			]),
			id:'cInfo'
		},
		[
			sydDOM.text().addChild({element:'STEP 1'}).addAttr({style:styleComponent.cinfoTextS()}),
			sydDOM.text().addChild({element:'YOUR INFO'}).addAttr({style:styleComponent.cinfoTextL()})
		]
	)
}


sydDOM.nextStep = () =>{
	updateForm = () =>{
		const current = getState('nextStep');
		const backState = getState('goBack');
		switch(true)
		{
			case current.count < 3:
				current.count++;
				backState.d = 'visible'
				const formUpdatePrev = getState(`form_${current.count}`);
				const formUpdateAft = getState(`form_${current.count+1}`);
				const prevZ = formUpdateAft.z
				formUpdateAft.z = '10';
				formUpdatePrev.z = prevZ;
				formUpdatePrev.op = '0';
				formUpdateAft.op = '1';
				const circlePrev = getState(`circle${current.count}`);
				const circleAft = getState(`circle${current.count+1}`);
				circlePrev.bg = 'transparent'
				circlePrev.c = '#fff'
				circleAft.bg = 'hsl(206, 94%, 87%)'
				circleAft.c = '#000'
				//
				switch(true)
				{
					case current.count === 3:
						current.text = 'Confirm'
				}
				//
				useState(`form_${current.count}`,{type:'a',value:formUpdatePrev})
				useState(`form_${current.count+1}`,{type:'a',value:formUpdateAft})
				useState(`circle${current.count}`,{type:'a',value:circlePrev})
				useState(`circle${current.count+1}`,{type:'a',value:circleAft})
				useState('nextStep',{type:'a',value:current})
				useState('goBack',{type:'a',value:backState})
		}
	}
	return createElement(
		'div',
		{
			style:'background:hsl(213, 96%, 18%);padding:8px 12px;width:fit-content;border-radius:5px;color:#fff;cursor:pointer;transition:all linear .3s;',
			class:'nxtButton',
			onclick:'updateForm()'
		},
		[
			preState(['nextStep','text'],"Next Step")
		],
		{
			createState:{
				stateName:'nextStep',
				state:{count:0}
			},
			type:'nextStep'
		}
	)
}
sydDOM.goBack = () =>{
	updateFormBack = () =>{
		const current = getState('nextStep');
		const backState = getState('goBack')
		switch(true)
		{
			case current.count > 0:
				current.text = 'Next Step'
				const formUpdatePrev = getState(`form_${current.count+1}`);
				const formUpdateAft = getState(`form_${current.count}`);
				const prevz = formUpdateAft.z
				formUpdateAft.z = '10';
				formUpdatePrev.z = prevz;
				formUpdatePrev.op = '0';
				formUpdateAft.op = '1';
				const circlePrev = getState(`circle${current.count+1}`);
				const circleAft = getState(`circle${current.count}`);
				circlePrev.bg = 'transparent'
				circlePrev.c = '#fff'
				circleAft.bg = 'hsl(206, 94%, 87%)'
				circleAft.c = '#000'

				useState(`form_${current.count+1}`,{type:'a',value:formUpdatePrev})
				useState(`form_${current.count}`,{type:'a',value:formUpdateAft})
				useState(`circle${current.count+1}`,{type:'a',value:circlePrev})
				useState(`circle${current.count}`,{type:'a',value:circleAft})
				useState('nextStep',{type:'a',value:current})

				current.count--;
				switch(true)
				{
					case current.count === 0:
						backState.d = 'hidden';
						useState('goBack',{type:'a',value:backState})
				}
		}
	}
	return createElement(
		'div',
		{
			style:`padding:8px 12px;width:fit-content;border-radius:5px;cursor:pointer;transition:transform linear .3s;visibility:${preState(['goBack','d'],'hidden')};`,
			class:'nxtButton',
			onclick:'updateFormBack()'
		},
		[
			"Go Back"
		],
		{
			createState:{
				stateName:'goBack',
				state:{d:'hidden'}
			},
			type:'goBack'
		}
	)
}
mount(sydDOM.container())