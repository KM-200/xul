// Called once when the dialog displays
function onLoad() {
  // Use the arguments passed to us by the caller
  document.getElementById("name").value = window.arguments[0].inn.name;
  document.getElementById("description").value = window.arguments[0].inn.description;
  document.getElementById("enabled").checked = window.arguments[0].inn.enabled;
}

// Called once if and only if the user clicks OK
function onOK() {
   // Return the changed arguments.
   // Notice if user clicks cancel, window.arguments[0].out remains null
   // because this function is never called
   window.arguments[0].out = {name:document.getElementById("name").value,
        description:document.getElementById("description").value,    
        enabled:document.getElementById("enabled").checked};
   return true;
}
