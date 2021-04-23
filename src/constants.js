// export const BOARD_WIDTH = breakpoint();
export const TILE_COUNT =  8
export const GRID_SIZE =  4

// const puzzlePadding = 50

export function boardSize() {
    let w = window.visualViewport.width
    let p = (w * .05)
    return  w - p
}

// function breakpoint() {

//     let breakpoints = {
//         '(min-width: 1200px)': 1100, //50
//         '(min-width: 992px) and (max-width: 1199.98px)': 930, //30
//         '(min-width: 768px) and (max-width: 991.98px)': 720, //20
//         '(min-width: 576px) and (max-width: 767.98px)': 525,  //20
//         '(max-width: 575.98px)': 525,
//     }

//     for (let media in breakpoints) {
//         console.log('media: ',media)
        
        
//         if (window.matchMedia(media).matches) {
//             console.log('window: ',window.visualViewport)
//             return breakpoints[media];
//         }
//     }

//     return null;
// }

