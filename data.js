var dataSet = [
    ["1. ofijsd"],
    ["2. ofijsd"],
    ["<a href='aaa' class='btn'>3. ofijsd</a>"]
    
];
 
$(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "PRODUK" },
            
        ]
    } );
} );
