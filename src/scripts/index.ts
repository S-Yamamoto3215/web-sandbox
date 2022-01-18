// Seet Event
const seats = document.getElementById('seats').getElementsByClassName('seat')

const seatClickHandler = (seat: Element) => {
  seat.classList.toggle("selected");
  const { selectedSeatCount, movePrice } = getCurrentData();
  console.log(selectedSeatCount, movePrice)
}

for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];
  const isOccupied = seat.classList.contains("occupied");
  if (!isOccupied) {
    seat.addEventListener('click', () => seatClickHandler(seat));
  }
}

// Pick Event
const moves = document.getElementById('moves');

const moveSelectHandler = () => {
  const { selectedSeatCount, movePrice } = getCurrentData();
  console.log(selectedSeatCount, movePrice)
}

moves.addEventListener('change', () => moveSelectHandler())

// get current data
const getCurrentData = () => {
  const currentSelectedSeats = document.getElementById('seats').getElementsByClassName('selected');
  const selectedSeatCount = currentSelectedSeats.length;

  const currentSelectedMove = <HTMLInputElement>document.getElementById('moves');
  const movePrice = Number(currentSelectedMove.value)

  return { selectedSeatCount: selectedSeatCount, movePrice: movePrice }
}
