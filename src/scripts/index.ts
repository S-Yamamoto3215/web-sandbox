const seats = document.getElementById('seats').getElementsByClassName('seat')

const seatClickHandler = (seat: Element) => {
  seat.classList.toggle("selected");
}

for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];
  const isOccupied = seat.classList.contains("occupied");
  if (!isOccupied) {
    seat.addEventListener('click', () => seatClickHandler(seat))
  }
}
