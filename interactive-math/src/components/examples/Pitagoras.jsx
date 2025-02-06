/* eslint-disable no-unused-vars */
import JXGBoard from '../JXGBoard'

var logicJS = (b) => {
    var pointA = b.create('point', [0, 0],
        {
            fixed:true, 
            fillColor:'#07a', 
            strokeColor:'#07a', 
            anchorX:'middle',
            anchorY:'middle',
            label:{ offset:[-20, -5] }
        }
    )
    var pointB = b.create('point', [3, 4], {attractToGrid:true, attractorDistance:0.3})
    var pointC = b.create('point', [()=>pointB.X(), 0], {fillColor:'#07a', strokeColor:'#07a'})
    var triangle = b.create('polygon', [pointA,pointB,pointC], {fixed:true, fillColor:'blue'})

    var wid = 0

    var segmentAB = b.create('segment', [pointA, pointB], {strokeWidth:2})
    var segmentBC = b.create('segment', [pointB, pointC], {strokeWidth:2})
    var segmentAC = b.create('segment', [pointA, pointC], {strokeWidth:2})

    var perpendAB_B = b.create('perpendicularsegment', [segmentAB, pointB], {strokeWidth:wid})
    var paralelAB = b.create('perpendicularsegment', [perpendAB_B, perpendAB_B.point2],
        {strokeWidth:wid}
    )

    var perpendBC_C = b.create('perpendicularsegment', [segmentBC, pointC],
        {strokeWidth:wid}
    )
    var paralelBC = b.create('perpendicularsegment', [perpendBC_C, perpendBC_C.point2], 
        {strokeWidth:wid}
    )

    var perpendAC_A = b.create('perpendicularsegment', [segmentAC, pointA], {strokeWidth:wid})
    var paralelAC = b.create('perpendicularsegment', [perpendAC_A, perpendAC_A.point1],
        {strokeWidth:wid}
    )
    
    var squareAB = b.create('polygon', [pointA, pointB, perpendAB_B.point2, paralelAB.point2], 
        {strokeWidth:wid}
    ) 
    var squareBC = b.create('polygon', [pointB, pointC, perpendBC_C.point2, paralelBC.point2], 
        {strokeWidth:wid}
    ) 
    var squareAC = b.create('polygon', [pointA, pointC, paralelAC.point1, perpendAC_A.point1], 
        {strokeWidth:wid}
    )

    var measureSquareAB = b.create('measurement',
        [
            ()=>(squareAB.bounds()[0]+squareAB.bounds()[2])/(2),
            ()=>(squareAB.bounds()[1]+squareAB.bounds()[3])/(2),
            ['Area',squareAB]
        ],
        {prefix:'área: ', anchorX:'middle', anchorY:'middle', fontSize:14}
    )
    var measureSquareBC = b.create('measurement',
        [
            ()=>(pointC.X() + (perpendBC_C.point2.X()-pointC.X()) / 2),
            ()=>(pointB.Y() / 2),
            ['Area', squareBC]
        ],
        {prefix:'área: ', anchorX:'middle', anchorY:'middle', fontSize:14}
    )
    var measureSquareAC = b.create('measurement',
        [
            ()=>(pointC.X() / 2),
            ()=>(perpendAC_A.point1.Y()/2),
            ['Area', squareAC]
        ],
        {prefix:'área: ', anchorX:'middle', anchorY:'middle', fontSize:14}
    )
}

export default function Pitagoras(){
    return (
        <JXGBoard
            logic={logicJS}
            boardAttributes={{
                axis: false,
                showCopyright:false,
                boundingbox: [-4, 8, 8, -4]
            }}
            style={{border:'1px solid black'}}
        />
    )
}