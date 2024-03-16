import {createElement, setStyle, sydDOM, mount, styleComponent, useState, preState} from "./sydneyDom.js";

setStyle([
    {
        nameTag:'tab',
        style:{
            height:'50px',
            width:'100%',
            borderRadius:'5px',
            cursor:'pointer',
            paddingLeft:'20px'
        }
    }
])

sydDOM.form_3 = () =>{
    return createElement(
        'div',
        {
            style:sydDOM.form_1().inherit(['attribute','style'])+`z-index:${preState(['form_3','z'],'8')};opacity:${preState(['form_3','op'],'0')}`
        },
        [
            sydDOM.text().addAttr({style:'font-size:20px;font-weight:700;'+styleComponent.color()}).addChild({element:'Pick add-ons'}),
            sydDOM.text().addAttr({style:'font-weight:400;color:hsl(229, 24%, 87%);'+styleComponent.fontFamily()}).addChild({element:'Add-ons help enhance your gaming experience'}),
            sydDOM.containTab(),
            // sydDOM.goBack(),
            // sydDOM.nextStep()
        ],
        {
            createState:{
                stateName:'form_3',
                state:{op:'0',z:'8'}
            },
            type:'form_3'
        }
    )
}

sydDOM.containTab = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.reuse_flex([
                {method:'remove',style:['justifyContent','alignItems']},
                {method:'add',style:{rowGap:'10px',width:'100%',flexDirection:'column'}}
            ])
        },
        [
            sydDOM.tabs(),
            sydDOM.tabs()
            .replaceChild({
                position:1,
                element:sydDOM.beside()
                .replaceChild({
                    position:0,
                    element:sydDOM.textCont()
                    .replaceChild({position:0,element:sydDOM.F2TextL().replaceChild({position:0,element:'Larger storage'})})
                    .replaceChild({position:1,element:sydDOM.F2TextS().replaceChild({position:0,element:'Extra 1TB of cloud save'})})
                })
                .replaceChild({
                    position:1,
                    element:sydDOM.text().addChild({element:'+$2/mo'}).addAttr({style:'font-size:12px'})
                })
            }),
            sydDOM.tabs()
            .replaceChild({
                position:1,
                element:sydDOM.beside()
                .replaceChild({
                    position:0,
                    element:sydDOM.textCont()
                    .replaceChild({position:0,element:sydDOM.F2TextL().replaceChild({position:0,element:'customizable profile'})})
                    .replaceChild({position:1,element:sydDOM.F2TextS().replaceChild({position:0,element:'Custom theme on your profile'})})
                })
                .replaceChild({
                    position:1,
                    element:sydDOM.text().addChild({element:'+$2/mo'}).addAttr({style:'font-size:12px'})
                })
            }),
        ]
    )
}
sydDOM.checkBox = () =>{
    return createElement(
        'input',
        {
            type:'checkbox',
            style:'accent-color: hsl(213, 96%, 18%)'
        }
    )
}


sydDOM.beside = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.reuse_flex({method:'add',style:{justifyContent:'space-between',width:'100%',padding:'0 15px'}}),
        },
        [
            sydDOM.textCont()
            .replaceChild({position:0,element:sydDOM.F2TextL().replaceChild({position:0,element:'Online service'})})
            .replaceChild({position:1,element:sydDOM.F2TextS().replaceChild({position:0,element:'Access to multiplayer games'})}),
            sydDOM.text().addChild({element:'+$1/mo'}).addAttr({style:'font-size:12px'})

        ]
    )
}

sydDOM.tabs = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.reuse_flex({method:'remove',style:['justifyContent','alignItems']})+styleComponent.tab({method:'add',style:{height:'fit-content',minHeight:'70px'}}),
            id:'tab'
        },
        [
            sydDOM.checkBox(),
            sydDOM.beside()
        ]
    )
}