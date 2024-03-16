import {createElement, setStyle, sydDOM, mount, styleComponent, useState, preState} from "./sydneyDom.js";

setStyle([
    {
        nameTag:'form_1',
        style:{
            height:'100%',
            width:'100%'
        }
    },
    {
        nameTag:'input',
        style:{
            height:'40px',
            borderRadius:'5px',
            paddingLeft:'10px',
            outline:'none',
            transition:'border .3s linear'
        }
    },
    {
        nameTag:'color',
        style:{
            color:'hsl(213, 96%, 18%)',
        }
    },
    {
        nameTag:'fontFamily',
        style:{
            fontSize:'13px'
        }
    }
])

sydDOM.form_1 = () =>{
    return createElement(
        'div',
        {style:'height:100%;overflow:scroll;width:85%;background:#fff;transition:all linear .3s;padding:20px;border-radius:10px;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);'+styleComponent.reuse_flex([{method:'add',style:{flexDirection:'column',rowGap:'12px',position:'absolute',zIndex:preState(['form_1','z'],'10'),opacity:preState(['form_1','op'],'1')}},{method:'remove',style:['justifyContent','alignItems']}])},
        [
            sydDOM.text().addAttr({style:'font-size:20px;font-weight:700;'+styleComponent.color()}).addChild({element:'Personal info'}),
            sydDOM.text().addAttr({style:'font-weight:400;color:hsl(229, 24%, 87%);'+styleComponent.fontFamily()}).addChild({element:'Please provide your name, email address, and phone number.'}),
            sydDOM.inputHold(),
            sydDOM.inputHold().replaceChild({position:0,element:'Email Address'}).replaceChild({position:1,element:sydDOM.input().addAttr({placeholder:'enter email address'})}),
            sydDOM.inputHold().replaceChild({position:0,element:'Phone Number'}).replaceChild({position:1,element:sydDOM.input().addAttr({placeholder:'e.g. +1 234 567 890'})}),
            // sydDOM.nextStep()
        ],
        {
            createState:{
                stateName:'form_1',
                state:{op:'1',z:'10'}
            },
            type:'form_1'
        }
    )
}

sydDOM.inputHold = () =>{
    return createElement(
        'div',
        {style:styleComponent.reuse_flex([{method:'add',style:{flexDirection:'column',rowGap:'8px'}},{method:'remove',style:['justifyContent','alignItems']}])+'height:fit-content;width:100%;font-size:14px'},
        [
            'Name',
            sydDOM.input()
        ]
    )
}

sydDOM.input = () =>{
    return createElement(
        'input',
        {style:styleComponent.input()}
    )
}