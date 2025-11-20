function funkcja()
{
    const liczba = document.getElementById("liczba").value;

    liczban = Number(liczba);


    if (liczban>10)
    {
        div.innerHTML = "Liczba jest większa od 10";
    }
    else if (liczban<10)
    {
        div.innerHTML = "Liczba jest mniejsza od 10";
    }
    else if (liczban === 10)
    {
        div.innerHTML = "Liczba jest równa 10";
    }
}