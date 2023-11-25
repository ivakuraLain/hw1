const birstYear = prompt('введите год рождение');
if (birstYear === null) {
    alert('вы не ввели год рождения')

} else {
    const year = parseInt(birstYear)
    if (!isNaN(year)) {
        const age = new Date().getFullYear() - year
        if (age < 0) {
            alert('вы еще не родились')

        } else if (age <= 30) {
            alert('вы моложе 30 лет')
        } else if (age <= 60) {
            alert('вы старше 30 лет, но малдше 60 лет')
        } else {
            alert('вы старше 60,советуем вам посетить врача')
        }


    } else {
        alert('ведено не коректное число')
    }
}


