// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
});

$('#dataTable').DataTable( {
    order: []
} );


$(document).ready(function() {
  $('#dataTable2').DataTable();
});

$('#dataTable2').DataTable({
  "ordering": false
});
