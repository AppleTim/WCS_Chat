// Initialisation form Materialize

$(document).ready(function() {
    $('select').material_select();
});

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 50, // Creates a dropdown of 15 years to control year
    max: true,
    format: 'dd/mm/yyyy'
});