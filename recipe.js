

function toggle_equipment()
{
    sidebar = document.getElementById("sidebar");
    collapse_true = document.getElementsByClassName("collapse");

    if (collapse_true.includes(sidebar))
    {
        sidebar.classList.remove("collapse");
    }
    else {
        sidebar.classList.add("collapse");
    }
}