/*global Picker*/

window.onerror = function (msg, url, line) { console.log('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + line); };
window.onload = init;

function init() {
    "use strict";

    function $(selector, context) {
        return (context || document).querySelector(selector);
    }

    // function capRel(val) {
    //     return (val < 0) ? 0
    //                      : (val > 1) ? 1 : val;
    // }

    // function relayDrag(_, pos) {
    //     const w = container.clientWidth,
    //           h = container.clientHeight;
              
    //     const relX = pos[0]/(flipped ? h : w),
    //           relY = pos[1]/(flipped ? w : h);
              
    //     callbackRelative(capRel(relX), capRel(relY));
    // }

    var parentMain = $('#main-color');

    var pickerFixed = new Picker({
        parent: parentMain,
        popup: false,
        alpha: true,
        editor: false,
        editorFormat: 'rgba',
        color: '#cef6',
        // callbackDragStart: relayDrag,
        // callback:      relayDrag,
        template: `<div class="picker_wrapper" tabindex="-1">
                        <div class="picker_arrow"></div>
                        <div class="picker_sl"><div class="picker_selector"></div></div>
                        <div class="picker_hue picker_slider"><div class="picker_selector"></div></div>
                        <div class="picker_alpha picker_slider"><div class="picker_selector"></div></div>
                        <div class="picker_editor"><input aria-label="Type a color name or hex value"/></div>
                        <div class="picker_sample"></div>
                        <div class="picker_done"><button>Ok</button></div>
                        <div class="picker_cancel"><button>Cancel</button></div>
                    </div>`,
        onChange: function (color) {
            document.body.style.backgroundColor = color.rgbaString;
        },
    });
    pickerFixed.setColor('lime', true);

}