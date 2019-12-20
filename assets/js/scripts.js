var listenerPlus, listenerNegative, orListener,dataNumber, listenerClose;

listenerPlus = document.getElementById('incButton');

listenerNegative = document.getElementById('decButton');

orListen = document.getElementById('orButton');

listenerPlus.addEventListener("click",copySection);

orListen.addEventListener("click",copyBlock);

listenerNegative.addEventListener("click",delFunction);

listenerClose = document.getElementById('closeBlocks');

listenerClose.addEventListener('click',deleteDiv);
















function copySection(){

   let sourceDiv = document.getElementById('sourceDiv');
   let clone = sourceDiv.cloneNode(true);
   let br = document.createElement('br');
   document.getElementById('clones').appendChild(br);
   let cloneDestination = document.getElementById('clones').appendChild(clone);
   cloneDestination.setAttribute("id",'cloned');
   br.setAttribute("id","clonedbr");
}

/*function createUniqueId(id){
   let counter = 1;
   let uniqueId;
   id = (typeof id ==="string")?id:"";
   do{
      uniqueId = id + counter++;
   }while(document.getElementById(id)!==null);
   return uniqueId;
}*/


function copyBlock(){
   let sourceBlock=document.getElementById('sourceBlock');
   let mainBlock = document.getElementById('clonedBlock');
   let hr = document.createElement('HR');
   mainBlock.appendChild(hr);
   let clone = sourceBlock.cloneNode(true);
   let br = document.createElement('br');
   let theclonedBlock = document.getElementById('clonedBlock').appendChild(clone);
   theclonedBlock.setAttribute("id","clonedDiv");
   document.getElementById('clonedBlock').appendChild(br);
   hr.setAttribute('id','clonedHrInBlock');
   br.setAttribute('id','clonedBrInBlock');   
   dataNumber = parseInt(document.getElementById('clonedDiv').getAttribute('data-order'));
   if(isNaN(dataNumber)){
      dataNumber=1;
      theclonedBlock.setAttribute('data-order',dataNumber);
      return dataNumber;
   }
      dataNumber++;
      theclonedBlock.setAttribute('data-order',dataNumber);
      return dataNumber;
 }

 function copySectionInBlock(){
   let br = document.createElement('br');
   document.getElementById('clonedDiv').appendChild(br);
   let sourceDiv = document.getElementById('sourceDiv');
   let clone = sourceDiv.cloneNode(true);
   let cloneDestination = document.getElementById('clonedDiv').appendChild(clone);
   cloneDestination.setAttribute("id","clonedInBlock");
   br.setAttribute("id","copiedBrInBlock");
}

 function delFunction(){
   let aboutDelete = document.getElementById('cloned');
   let deleteSpace = document.getElementById('clonedbr');   
   deleteSpace.remove();
   aboutDelete.remove();
 }

 function delFunctionInBlock(){
   let aboutDelete = document.getElementById('clonedInBlock');
   let deleteSpace = document.getElementById('copiedBrInBlock');   
   deleteSpace.remove();
   aboutDelete.remove();
 }

function deleteDiv(){
   let divId = document.getElementById('clonedDiv');
   let hrId = document.getElementById('clonedHrInBlock');
   let brId = document.getElementById('clonedBrInBlock');

   divId.remove();
   brId.remove();
   hrId.remove();

}

function deleteIndividualDiv(){
   let divId = document.getElementById('clonedDiv');
   let hrId = document.getElementById('clonedHrInBlock');
   let brId = document.getElementById('clonedBrInBlock');

   divId.remove();
   brId.remove();
   hrId.remove();

}

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

on ('#clones', 'click','#incButton', function(e){

   copySection();
});

on ('#clones', 'click','#decButton', function(e){

   delFunction();
});

on ('#clonedBlock', 'click','#closeBlocks', function(e){

   deleteIndividualDiv();
});

on ('#clonedBlock', 'click','#incButton', function(e){

   copySectionInBlock();
});

on ('#clonedBlock', 'click','#decButton', function(e){

   delFunctionInBlock();
});

