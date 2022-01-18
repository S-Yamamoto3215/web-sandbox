// Seet Event
const seats = document.getElementById('seats').getElementsByClassName('seat')

const seatClickHandler = (seat: Element) => {
  seat.classList.toggle("selected");
  const { selectedSeatCount, movePrice } = getCurrentData();
  UpdateTextContent(selectedSeatCount, movePrice);
}

for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];
  const isOccupied = seat.classList.contains("occupied");
  if (!isOccupied) {
    seat.addEventListener('click', () => seatClickHandler(seat));
  }
}

// Pick Event
const moves = <HTMLInputElement>document.getElementById('moves');

const moveSelectHandler = () => {
  const { selectedSeatCount, movePrice } = getCurrentData();
  UpdateTextContent(selectedSeatCount, movePrice);
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

// Update textContent
const UpdateTextContent = (seatCount: number, price: number) => {
  const totalPrice = price * seatCount;
  document.getElementById("selected-seat-count").textContent = String(seatCount);
  document.getElementById("total-price").textContent = String(totalPrice);
};

// init function
const initFunction = () => {
  const seatCount = document.getElementById('seats').getElementsByClassName('seat selected').length;
  const moveElement = <HTMLInputElement>document.getElementById('moves');
  const movePrice = Number(moveElement.value);
  UpdateTextContent(seatCount, movePrice);
}

initFunction()
