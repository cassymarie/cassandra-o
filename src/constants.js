export const BOARD_WIDTH = breakpoint();
export const TILE_COUNT =  BOARD_WIDTH < 700 ? 9 : 8
export const GRID_SIZE = BOARD_WIDTH < 700 ? 3 : 4

function breakpoint() {
    let breakpoints = {
        '(min-width: 1200px)': 1000,
        '(min-width: 992px) and (max-width: 1199.98px)': 920,
        '(min-width: 768px) and (max-width: 991.98px)': 720,
        '(min-width: 576px) and (max-width: 767.98px)': 500,
        '(max-width: 575.98px)': 320,
    }

    for (let media in breakpoints) {
        if (window.matchMedia(media).matches) {
            return breakpoints[media];
        }
    }

    return null;
}