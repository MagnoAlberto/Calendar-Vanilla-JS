// https://jsitor.com/kZsYkG0idL
class Calendar {
  constructor() {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();

    this.months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ];

    this.weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  }

  nextDay() {
    console.error('nextDay', this.currentYear, this.currentMonth);

    console.log(this.currentYear, this.currentMonth);
    this.currentMonth++;

    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }

    console.warn(this.currentYear, this.currentMonth);

    this.createCalendar(this.currentYear, this.currentMonth);
  }

  prevDay() {
    console.error('prevDay', this.currentYear, this.currentMonth);

    console.log(this.currentYear, this.currentMonth);
    this.currentMonth--;

    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }

    console.warn(this.currentYear, this.currentMonth);

    this.createCalendar(this.currentYear, this.currentMonth);
  }


  createCalendar(year, month) {
    console.clear();
    console.log('=createCalendar=');

    year = year || this.currentYear;
    month = month || this.currentMonth;

    let date = new Date(year, month);
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    let calendar = '';

    calendar += '<h2>' + this.getMonthName(month) + ' ' + year + '</h2>';
    calendar += '<div class="weekdays">';

    for (let day of this.weekdays) {
      calendar += '<span>' + day + '</span>';
    }

    calendar += '</div>';
    calendar += '<div class="days">';

    for (let i = 0; i < firstDay; i++) {
      calendar += '<span></span>';
    }

    for (let i = 1; i <= lastDay; i++) {
      calendar += '<span>' + i + '</span>';
    }

    calendar += '</div>';

    document.getElementById('calendar').innerHTML = calendar;
  }

  getMonthName(month) {
    console.log('getMonthName', month, this.months[month]);
    return this.months[month];
  }
}

const calendar = new Calendar();
calendar.createCalendar();

// var prev = calendar.currentMonth; 
// var next = calendar.currentMonth; 
// var year = calendar.currentYear;

document.getElementById('prev').addEventListener('click', () => {
  console.clear();
  console.log('PREV');

  // console.log(year, prev);
  // prev--;

  // if (prev < 0) {
  //   prev = 11;
  //   year--;
  // }

  // console.warn(year, prev);

  // calendar.createCalendar(year, prev);

  calendar.prevDay();

});

document.getElementById('next').addEventListener('click', () => {
  console.clear();
  console.log('NEXT');

  // console.log(year, next);
  // next++;

  // if (next > 11) {
  //   next = 0;
  //   year++;
  // }

  // console.warn(year, next);

  // calendar.createCalendar(year, next);
  calendar.nextDay();
});
