import JXGBoard from "../JXGBoard";

var logicJS = (b) => {
    var elements = []

    var inputAdd = b.create('input', [-9, 9, 'point', ''],
        {
            fixed:true,
            disabled:true,
            cssStyle:`
                width:100px;
                border: 1px solid black;
                padding: 2px 4px;
                border-radius: 4px;
        `}
    )
    var add = () => {
        elements.push(b.create(inputAdd.Value(), [0,0]))
        console.log(elements)
    }
    b.create('button', [-4.9, 9,'add',()=>add()],
        {
            fixed:true,
            cssClass:'jxgButton',
            highlightCssClass:'jxgButton'
        }
    )

    var inputDelete = b.create('input', [-9, 7.5, 'A', ''],
        {
            fixed:true,
            cssStyle:`
                width:100px;
                border: 1px solid black;
                padding: 2px 4px;
                border-radius: 4px;
        `}
    )
    var deleteFunc = () => {
        let val = inputDelete.Value()
        b.removeObject(val)
        elements = elements.filter(e => e.name!== val)
        console.log(elements)
    }
    b.create('button', [-4.9, 7.5,'delete',()=>deleteFunc()],
        {
            fixed:true,
            cssClass:'jxgButton',
            highlightCssClass:'jxgButton'
        }
    )

    var deleteAll = () => {
        b.removeObject(elements)
        elements = []
        console.log(elements)
    }
    b.create('button', [-9, 6,'delete all',()=>deleteAll()],
        {
            fixed:true,
            cssClass:'jxgButton',
            highlightCssClass:'jxgButton'
        }
    )
}

export default function Add() {
    return (
        <>
            <JXGBoard
                logic={logicJS}
                boardAttributes={{
                    boundingBox: [-10, 10, 10, -10],
                    axis: true,
                    showNavigation: false,
                    showCopyright: false,
                    defaultAxes: {
                        x: {
                            ticks: {
                                visible: true,
                                majorHeight: 5
                            }
                        },
                        y: {
                            ticks: {
                                visible: true,
                                majorHeight: 5
                            }
                        }
                    }
                }}
                style={{}}
            />
        </>
    )
}