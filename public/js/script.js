// configuración del datatable
const datatable = new simpleDatatables.DataTable('#tabla', {
    searchable: true,
    sortable: true,
    filterable: true,
    pageable: true,
    pageSize: 5,
    fixedHeight: true
})