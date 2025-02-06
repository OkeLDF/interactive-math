/* eslint-disable no-unused-vars */
import JXGBoard from "../JXGBoard";
import JXG from "jsxgraph";

var logicJS = (b) => {
    var radius = 2
    var o = b.create('point', [3, 3.625], {fixed:true, size: 0, name: ''})
    var circleXAxis = b.create('segment', [[o.X()-radius,o.Y()],[o.X()+radius,o.Y()]], {fixed:true, strokeWidth: 1, strokeColor: '#666'})
    var circleYAxis = b.create('segment', [[o.X(),o.Y()-radius],[o.X(),o.Y()+radius]], {fixed:true, strokeWidth: 1, strokeColor: '#666'})
    var c = b.create('circle', [o, radius], {strokeColor: '#555'})
    var p = b.create('glider', [o.X()+radius, o.Y(), c], {name:'P', strokeWidth: 0, fillColor: '#07a'})
    var r = b.create('segment', [o, p, radius])

    var x = b.create('point', [()=>p.X(), o.Y()], {name:'', size:0})
    var y = b.create('point', [o.X(), ()=>p.Y()], {name: 'sin', fillColor: '#e50', strokeWidth: 0})
    var sin = b.create('segment', [o, y], {strokeColor: '#e50'})
    var sinProj = b.create('segment', [x, p], {strokeColor: '#e50', dash: 2})

    var alpha = b.create('angle', [circleXAxis.point2,o,p], {name:''})
    var alphaVal = () => `${JXG.toFixed(alpha.Value()*180/Math.PI, 0)}º`
    var t = b.create('text',
        [()=>(1.2*Math.cos(alpha.Value()/2) + o.X()), ()=>(1.2*Math.sin(alpha.Value()/2) + o.Y()), alphaVal],
        {strokeColor: '#950', anchorX:'middle', anchorY:'middle', fontSize:14})


    var xAxis = b.create('segment', [[6.5,0], [-0.5,0]], {fixed:true, strokeColor:'#333'})
    
    b.create('segment', [[6.5,1], [-0.5,1]], {fixed:true, strokeColor:'#bbb', strokeWidth:1, dash:2})
    b.create('segment', [[6.5,0.5], [-0.5,0.5]], {fixed:true, strokeColor:'#bbb', strokeWidth:1, dash:2})
    b.create('segment', [[6.5,-1], [-0.5,-1]], {fixed:true, strokeColor:'#bbb', strokeWidth:1, dash:2})
    b.create('segment', [[6.5,-0.5], [-0.5,-0.5]], {fixed:true, strokeColor:'#bbb', strokeWidth:1, dash:2})
    
    var yAxis = b.create('segment', [[0,1], [0,-1]], {fixed:true, strokeColor:'#333'})
    b.create('point', [0,1], {face:'-', name:'1', strokeColor:'#333', strokeWidth:1})
    b.create('point', [0,0.5], {face:'-', name:'0.5', strokeColor:'#333', strokeWidth:1})
    b.create('point', [0,-1], {face:'-', name:'-1', strokeColor:'#333', strokeWidth:1})
    b.create('point', [0,-0.5], {face:'-', name:'-0.5', strokeColor:'#333', strokeWidth:1})
    
    b.create('functiongraph', [(x)=>Math.sin(x), 0, Math.PI*2], {strokeWidth:2, strokeColor:'#e50'})
    
    for (var i = 0; i <= 4; i++){
        let name = ''
        if(i == 0) name='0'
        else if(i == 2 || i == -2) name=(i==1)?'𝜋':'-𝜋'
        else name = (i%2==0)?`${i/2}𝜋`:`${i}𝜋/2`
        
        b.create('point', [Math.PI*i/2, 0], {name:name, fixed:true, fillColor:'#333', strokeWidth:0, size:2})
    }

    b.create('point', [()=>alpha.Value(), ()=>Math.sin(alpha.Value())], {name:''})
    b.create('segment', [[-0.5,()=>Math.sin(alpha.Value())], [6.5,()=>Math.sin(alpha.Value())]], {strokeColor:'#e50', strokeWidth:1, dash:2})

    b.create('text', [3,7,'Arraste o ponto P ao longo da circunferência'],
        {anchorX:'middle', anchorY:'middle', fontSize:16}
    )

    b.create('button', [2.75, 6.5, 'Começar animação', ()=>p.startAnimation(-1, 720, 25)],
        {anchorX:'right', cssClass:'jxgButton', highlightCssClass:'jxgButton'}
    )
    b.create('button', [3.25, 6.5, 'Parar animação', ()=>p.stopAnimation()],
        {cssClass:'jxgButton', highlightCssClass:'jxgButton'}
    )
}

export default function Senoide(){
    return (
        <JXGBoard
            logic={logicJS}
            boardAttributes={{
                axis:false,
                boundingbox: [-1, 8, 7, -2],
                showNavigation:false,
                showCopyright:false
            }}
            style={{
                border:'1px solid black',
                height:'625px'
            }}
        />
    )
}