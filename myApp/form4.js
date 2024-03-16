import {createElement, setStyle, sydDOM, mount, styleComponent, useState, preState} from "./sydneyDom.js";

sydDOM.link = () =>{
    return createElement(
        'a',
        {
            href:''
        },
        [
            "change"
        ]
    )
}

sydDOM.form_4 = () =>{
    return createElement(
        'div',
        {
            style:sydDOM.form_1().inherit(['attribute','style'])+`z-index:${preState(['form_4','z'],'7')};opacity:${preState(['form_4','op'],'0')}`
        },
        [
            sydDOM.text().addAttr({style:'font-size:20px;font-weight:700;'+styleComponent.color()}).addChild({element:'Finishing up'}),
            sydDOM.text().addAttr({style:'font-weight:400;color:hsl(229, 24%, 87%);'+styleComponent.fontFamily()}).addChild({element:'Double-check everything looks OK before confirming'}),
            createElement(
                'div',
                {
                    style:styleComponent.reuse_flex([
                        {method:'remove',style:['justifyContent','alignItems']},
                        {method:'add',style:{rowGap:'20px',margin:'10px 0',width:'100%',height:'fit-content',padding:'10px',background:'hsl(229, 24%, 87%)',borderRadius:'8px',flexDirection:'column'}}
                    ])
                },
                [
                    sydDOM.beside()
                    .replaceChild({
                        position:0,
                        element:sydDOM.textCont()
                        .replaceChild({position:0,element:sydDOM.F2TextL().replaceChild({position:0,element:'Arcade (monthly)'})})
                        .replaceChild({position:1,element:sydDOM.F2TextS().replaceChild({position:0,element:sydDOM.link()})})
                    })
                    .replaceChild({
                        position:1,
                        element:sydDOM.text().addChild({element:'$9/mo'}).addAttr({style:'font-size:12px;color:hsl(213, 96%, 18%);font-weight:600'})
                    }),
                    createElement('hr',{style:'height:1px;width:100%;border:none;background:hsl(231, 11%, 63%);'}),
                    sydDOM.beside()
                    .replaceChild({
                        position:0,
                        element:sydDOM.text().addChild({element:'Online service'}).addAttr({style:styleComponent.cSmall()})
                    })
                    .replaceChild({
                        position:1,
                        element:sydDOM.text().addChild({element:'+$1/mo'}).addAttr({style:'font-size:12px;color:hsl(213, 96%, 18%)'})
                    }),
                    sydDOM.beside()
                    .replaceChild({
                        position:0,
                        element:sydDOM.text().addChild({element:'Larger storage'}).addAttr({style:styleComponent.cSmall()})
                    })
                    .replaceChild({
                        position:1,
                        element:sydDOM.text().addChild({element:'+$2/mo'}).addAttr({style:'font-size:12px;color:hsl(213, 96%, 18%)'})
                    })
                ]
            ),
            sydDOM.beside()
                    .replaceChild({
                        position:0,
                        element:sydDOM.text().addChild({element:'Total (per month)'}).addAttr({style:styleComponent.cSmall()})
                    })
                    .replaceChild({
                        position:1,
                        element:sydDOM.text().addChild({element:'+$12/mo'}).addAttr({style:'font-size:18px;color:hsl(243, 100%, 62%);font-weight:700;'})
                    }),
            // sydDOM.goBack(),
            // sydDOM.nextStep()

        ],
        {
            createState:{
                stateName:'form_4',
                state:{op:'0',z:'7'}
            },
            type:'form_4'
        }
    )
}