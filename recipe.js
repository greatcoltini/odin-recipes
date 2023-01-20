function show_equipment()
{
    sidebar = document.getElementById("sidebar");
    var collapse = new bootstrap.Collapse(sidebar);

    collapse("show");
}

function cross(element)
{
    // toggle_class(element, 'cross');
    element.classList.add('cross');
}

function toggle_class(element, class_t)
{
    if (element.classList.includes(class_t))
    {
        element.classList.remove(class_t);
    }
    else
    {
        element.classList.add(class_t);
    }
}