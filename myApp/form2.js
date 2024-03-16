import {createElement, setStyle, sydDOM, mount, styleComponent, useState, preState} from "./sydneyDom.js";

setStyle([
    {
        nameTag:'cSmall',
        style:{
            fontSize:'12px',
            color:'hsl(231, 11%, 63%)'
        }
    }
])

sydDOM.form_2 = () =>{
    return createElement(
        'div',
        {
            style:sydDOM.form_1().inherit(['attribute','style'])+`display:flex;z-index:${preState(['form_2','z'],'9')};opacity:${preState(['form_2','op'],'0')}`
        },
        [
            sydDOM.text().addAttr({style:'font-size:20px;font-weight:700;'+styleComponent.color()}).addChild({element:'Select your plan'}),
            sydDOM.text().addAttr({style:'font-weight:400;color:hsl(229, 24%, 87%);'+styleComponent.fontFamily()}).addChild({element:'You have the option of monthly or yearly billing.'}),
            createElement(
                'div',
                {
                    style:styleComponent.reuse_flex(
                        [
                            {method:'remove', style:['alignItems','flexDirection','justifyContent']},
                            {method:'add',style:{columnGap:'15px',rowGap:'10px',width:'100%',padding:'5px'}}
                        ]
                    ),
                    id:'mode'
                },
                [
                    sydDOM.card(),
                    sydDOM.card().replaceChild({
                        position:0,element:sydDOM.bulb().addAttr({style:styleComponent.add_bg({method:'add',style:{height:'30px',width:'30px',borderRadius:'50%',backgroundSize:'contain',backgroundImage:'url(./images/icon-ad.svg)'}})})
                    }).replaceChild({
                        position:1,element:sydDOM.textCont().replaceChild({position:0,element:sydDOM.F2TextL().replaceChild({position:0,element:'Advanced'})}).replaceChild({position:1,element:sydDOM.F2TextS().replaceChild({position:0,element:'$12/mo'})})
                    }),
                    sydDOM.card().replaceChild({
                        position:0,element:sydDOM.bulb().addAttr({style:styleComponent.add_bg({method:'add',style:{height:'30px',width:'30px',borderRadius:'50%',backgroundSize:'contain',backgroundImage:'url(./images/icon-pro.svg)'}})})
                    }).replaceChild({
                        position:1,element:sydDOM.textCont().replaceChild({position:0,element:sydDOM.F2TextL().replaceChild({position:0,element:'Pro'})}).replaceChild({position:1,element:sydDOM.F2TextS().replaceChild({position:0,element:'$15/mo'})})
                    }),
                ]
            ),
            sydDOM.timely(),
            // sydDOM.goBack(),
            // sydDOM.nextStep()
        ],
        {
            createState:{
                stateName:'form_2',
                state:{op:'0',z:'9'}
            },
            type:'form_2'
        }
    )
}

sydDOM.card = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.reuse_flex([
                {method:'remove',style:['alignItems','flexDirection','justifyContent']},
                {method:'add', style:{columnGap:'10px'}}
            ])+'padding:10px 0 10px 10px ;border-radius:5px; cursor:pointer;',
            id:'card'
        },
        [
            sydDOM.bulb(),
            sydDOM.textCont()
        ]
    )
}

sydDOM.bulb = () =>{
    return createElement(
        'span',
        {
            style:styleComponent.add_bg({method:'add',style:{height:'30px',width:'30px',borderRadius:'50%',backgroundSize:'contain',backgroundImage:'url(./images/icon-ar.svg)'}})
        }
    )
}

sydDOM.F2TextL = () =>{
    return createElement(
        'p',
        {
            style:styleComponent.color()
        },
        [
            'Arcade'
        ]
    )
}
sydDOM.F2TextS = () =>{
    return createElement(
        'p',
        {
            style:styleComponent.cSmall()
        },
        [
            '$9/mo'
        ]
    )
}
sydDOM.textCont = () =>{
    return createElement(
        'div',
        {},
        [
            sydDOM.F2TextL(),
            sydDOM.F2TextS()
        ]
    )
}
sydDOM.timely = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.reuse_flex({method:'add',style:{columnGap:'10px',background:'hsl(217, 100%, 97%)',height:'40px',width:'100%',borderRadius:'5px'}})
        },
        [
            sydDOM.F2TextL().replaceChild({position:0,element:'Monthly'}),
            sydDOM.switch(),
            sydDOM.F2TextS().replaceChild({position:0,element:'Yearly'}).addAttr({style:styleComponent.cSmall()+'font-size:16px'})
        ]
    )
}
sydDOM.switch = () =>{
    return createElement(
        'div',
        {
            style:'height:30px;width:50px;padding:5px;background:hsl(243, 100%, 62%);border-radius:20px;'
        },
        [
            sydDOM.Sball()
        ]
    )
}
sydDOM.Sball = () =>{
    switchF = () =>{
        useState('Sball')
    }
    return createElement(
        'div',
        {
            style:`height:20px;width:20px;background:#fff;border-radius:50%;transform:translateX(${preState(['Sball'],0)}%);transition:all linear .3s;cursor:pointer;`,
            onclick:'switchF()'
        },
        [],
        {
            createState:{
                stateName:'Sball',
                tenary:true,
                tenaryOptions:[0,100]
            },
            type:'Sball'
        }
    )
}