let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function generateCalendar(year, month) {
    const calendarContainer = document.getElementById('calendar-container');
    const calendarTitle = document.getElementById('calendar-title');
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let calendarHtml = '<table class="table text-center"><thead><tr>';

    daysOfWeek.forEach(day => {
        calendarHtml += `<th>${day}</th>`;
    });

    calendarHtml += '</tr></thead><tbody><tr>';
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        calendarHtml += '<td></td>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if ((firstDay + day - 1) % 7 === 0 && day > 1) {
            calendarHtml += '</tr><tr>';
        }
        calendarHtml += `<td><button class="btn btn-outline-primary calendar-day" onclick="selectDate(${day})">${day}</button></td>`;
    }

    const totalCells = (firstDay + daysInMonth);
    const cellsToFill = 7 - (totalCells % 7);
    if (cellsToFill < 7) {
        for (let i = 0; i < cellsToFill; i++) {
            calendarHtml += '<td></td>';
        }
    }

    calendarHtml += '</tr></tbody></table>';
    calendarContainer.innerHTML = calendarHtml;
    calendarTitle.innerHTML = `${year} - ${month + 1}`;
}

function changeMonth(direction) {
    if (direction === 'prev') {
        currentMonth -= 1;
    } else if (direction === 'next') {
        currentMonth += 1;
    }

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear -= 1;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear += 1;
    }

    generateCalendar(currentYear, currentMonth);
}

function selectDate(day) {
    alert(`Selected date: ${currentYear}-${currentMonth + 1}-${day}`);
}

window.addEventListener('DOMContentLoaded', () => {
    generateCalendar(currentYear, currentMonth);
});
