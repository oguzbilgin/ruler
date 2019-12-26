$('#incButton').click(function () {
    $('#sourceDiv').clone(true).appendTo('#clones');
});                              //cloning the input field


$('#orButton').click(function () {
    $('#sourceBlock').clone(true).appendTo('#clonedBlock');
});

function on(elSelector, eventName, selector, fn) {
    var element = document.querySelector(elSelector);
 
    element.addEventListener(eventName, function(event) {
        var possibleTargets = element.querySelectorAll(selector);
        var target = event.target;
 
        for (var i = 0, l = possibleTargets.length; i < l; i++) {
            var el = target;
            var p = possibleTargets[i];
 
            while(el && el !== element) {
                if (el === p) {
                    return fn.call(p, event);
                }
 
                el = el.parentNode;
            }
        }
    });
 }
 
 on ('#clones', 'click','#incButton', function(e){                   // clone event attached to the cloned button
 
    $('#sourceDiv').clone(true).appendTo('#clones');
 });

 on ('#clones', 'click','#decButton', function(e){                  // remove event attached to the cloned button
 
    $(this).closest('#sourceDiv').remove();
 });
