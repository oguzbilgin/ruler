$('#incButton').click(function () {   //cloning the input field
    $('#templateSourceDiv').clone(true).appendTo('#clones');
    $('#templateSourceDiv').attr('id','clonedSourceDiv');
    $('#clones').find('#decButton').show();
});                              


$('#orButton').click(function () {  //cloning the input block
    $('#sourceBlock').clone(true).appendTo('#clonedBlock');
    $('#sourceBlock').find('#decButton').hide();
    $('#sourceBlock').attr('id','clonedSourceBlock');
    $('#templateSourceDiv').attr('id','clonedSourceDivInBlock');
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
 
    $('#templateSourceDiv').clone(true).appendTo('#clones');
    $('#templateSourceDiv').attr('id','clonedSourceDiv');
    $(this).closest(find('#decButton')).show();
    
    
 });

 on ('#clones', 'click','#decButton', function(e){                  // remove event attached to the cloned button
 
    $(this).closest('#clonedSourceDiv').remove();
 });

 on ('#clonedBlock', 'click','#closeBlocks', function(e){                  // remove block event attached to the cloned button
    
    $(this).closest('#clonedSourceBlock').remove();
 });

on ('#clonedBlock', 'click','#incButton', function(e){                  // clone event in block attached to the cloned button

    var $clonedSource = $('#templateSourceDiv').clone(true);

    var $destination = $(this).closest('#clonedSourceBlock').find('.defaultTemplate').last();
    
    $clonedSource.appendTo('#clonedSourceBlock').insertAfter($destination);

   $('#templateSourceDiv').attr('id', 'clonedSourceDivInBlock');

    $clonedSource.find('#decButton').show();
    
 });

 on ('#clonedBlock', 'click','#decButton', function(e){                  // remove event attached to the cloned button
 
    $(this).closest('#clonedSourceDivInBlock').remove();
 });


$('#rulerForm').submit(function (e) {
    e.preventDefault();
var data = {};
var formData = $(this).serializeArray();


data = JSON.stringify(formData);
console.log(data);

});

