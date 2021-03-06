

    const month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";


module.exports = {
  // format for the parsed data:
  // new Date(year, month, day, hours, minutes, seconds, milliseconds);
  format_date: ( date ) => {
    formattedDate = date.replace("-",",");

    const d = new Date( date );
    let month_name = month[d.getMonth()];

    return `${new Date(date).getDate()}-${month_name}-${new Date(date).getFullYear()}`;
  },
  
  get_emoji: () => {
    const randomNum = Math.random();

    if (randomNum > 0.85) {
      randomEmoji = "😇";
    } else if (randomNum > 0.70) {
      randomEmoji = "🤝";
    } else if (randomNum > 0.55) {
      randomEmoji = "🌈";
    } else if (randomNum > 0.40) {
      randomEmoji = "🏆";
    } else if (randomNum > 0.25) {
      randomEmoji = "🧗";
    }

    return `<span for="img" aria-label="randomEmoji">${randomEmoji}</span>`;
  },
  format_amount: ( amount ) => {
    return `${new Intl.NumberFormat('en-AU', {style: 'currency', currency: 'AUD', currencyDisplay:'code', minimumFractionDigits: 0}).format(amount)}`;

  },
};
