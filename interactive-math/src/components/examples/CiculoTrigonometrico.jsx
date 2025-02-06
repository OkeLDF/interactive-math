/* eslint-disable no-unused-vars */
import JXGBoard from "../JXGBoard";
import JXG from "jsxgraph";

let logicJS = (b) => {
    var o = b.create('point', [0, 0], { fixed: true, size: 0, name: '' })
    var c = b.create('circle', [o, 1], { strokeColor: '#555' })
    var p = b.create('glider', [1, 1, c], { name: 'P', fillColor: '#555', strokeWidth: 0 })
    var r = b.create('segment', [o, p, 1], { strokeColor: '#888' })

    var x = b.create('point', [() => p.X(), 0], { name: 'cos', fillColor: '#05e', strokeWidth: 0 })
    var y = b.create('point', [0, () => p.Y()], { name: 'sin', fillColor: '#e50', strokeWidth: 0 })
    var cos = b.create('segment', [o, x], { strokeColor: '#05e' })
    var sin = b.create('segment', [o, y], { strokeColor: '#e50' })
    var sinProj = b.create('segment', [x, p], { strokeColor: '#e50', dash: 2 })

    var x_axis = b.create('point', [1, 0], { fixed: true, size: 0, name: `` })
    var alpha = b.create('angle', [x_axis, o, p], { name: '' })

    var tanLine = b.create('line', [[1, 0], [1, 1]], { fixed: true, strokeColor: '#aaa', dash: 2 })
    var tanPoint = b.create('point', [1, () => Math.tan(alpha.Value())], { name: 'tan', fillColor: '#0a9', strokeWidth: 0 })
    var tanProj = b.create('segment', [tanPoint, p], { strokeColor: '#aaa', dash: 2 })
    var tan = b.create('segment', [[1, 0], tanPoint], { strokeColor: '#0a9' })

    var alphaVal = () => `${JXG.toFixed(alpha.Value() * 180 / Math.PI, 0)}º`
    var t = b.create('text',
        [() => (0.4 * Math.cos(alpha.Value() / 2)), () => (0.4 * Math.sin(alpha.Value() / 2)), alphaVal],
        { strokeColor: '#950', anchorX: 'middle', anchorY: 'middle', fontSize: 14 })
}

export default function CiculoTrigonometrico() {
    return (
        <>
            <JXGBoard
                logic={logicJS}
                boardAttributes={{
                    boundingbox: [-1.5, 1.5, 1.5, -1.5],
                    showCopyright: false,
                    axis: true,
                    defaultAxes: {
                        y: {
                            ticks: {
                                visible: true,
                                majorHeight: 5 // hides vertical grid lines
                            }
                        },
                        x: {
                            ticks: {
                                visible: true,
                                majorHeight: 5 // hides horizontal grid lines
                            }
                        }
                    }
                }}
                style={{ border: "1px solid black" }}
            />
        </>
    )
}