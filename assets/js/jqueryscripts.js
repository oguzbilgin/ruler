$('#incButton').click(function () {   //cloning the input field
    $('#sourceDiv').clone(true).appendTo('#clones');
});                              


$('#orButton').click(function () {  //cloning the input block
    $('#sourceBlock').clone(true).appendTo('#clonedBlock').show();
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

 on ('#clonedBlock', 'click','#closeBlocks', function(e){                  // remove block event attached to the cloned button
    
    $(this).closest('#sourceBlock').remove();
 });

on ('#clonedBlock', 'click','#incButton', function(e){                  // clone event in block attached to the cloned button

    var $clonedSource = $('#sourceDiv').clone(true);

    var $destination = $(this).closest('#sourceBlock').find('.defaultTemplate').last();
    
    $clonedSource.appendTo('#sourceBlock').insertAfter($destination);

    $clonedSource.find('#decButton').show();
    
 });

 on ('#clonedBlock', 'click','#decButton', function(e){                  // remove event attached to the cloned button
 
    $(this).closest('#sourceDiv').remove();
 });


$('#rulerForm').submit(function (e) {
    e.preventDefault();
var data ={};
var formData = $(this).serializeArray();

data = JSON.stringify(formData);
console.log(data);

});

