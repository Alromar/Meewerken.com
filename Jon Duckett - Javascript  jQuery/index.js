let msg = 'Sign up to rceive our newslettr for 10% of! ';
function updateMEssage() {
    let el = document.getElementById('message');
    el.textContent = msg; 
} 
updateMEssage();

let hotel = {
    name : 'Amstel Hotel',
    rooms : 30,
    booked : 14,
    checkAvailability: function() {
        return this.rooms  - this.booked;
    }
};

console.log(hotel.checkAvailability());

