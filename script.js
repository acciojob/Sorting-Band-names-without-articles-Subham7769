//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
const bandsList = document.querySelector('#bands');
        const articles = ['The', 'An', 'A'];

        const sorted = touristSpots.sort((previous, next) => {
            previous = previous.split(' ');
            next = next.split(' ');

            if (articles.includes(previous[0])) {
                previous = previous.splice(1, previous.length).join(' ');
            } else {
                previous = previous.join(' ');
            }


            if (articles.includes(next[0])) {
                next = next.splice(1, previous.length).join(' ');
            } else {
                next = next.join(' ');
            }

            if (previous < next) return -1;
            if (previous > next) return 1;

            return 0;
        });

        const markup = sorted.reduce((markup, name) => {
            return `
              ${markup}
              <li>${name}</li>
            `;
        }, '');

        bandsList.innerHTML = markup;
    </script>

