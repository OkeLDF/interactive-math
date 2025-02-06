import JXGBoard from "../JXGBoard"

var logicJS = (b) => {
    var box = [-5,10]    
    var view = b.create('view3d', [[-3,-3],[6,6],[box,box,box]],
        {
            xPlaneRear: {visible:false},
            yPlaneRear: {visible:false}
        }
    )
    b.create('point3d', [view,[1,1,1]])
}

export default function Vector() {
    return (
        <>
            <JXGBoard
                logic={logicJS}
                boardAttributes={{
                    boundingBox: [-6, 6, 6, -6],
                    axis:false
                }}
                style={{}}
            />
        </>
    )
}