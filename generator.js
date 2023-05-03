const generator = {
 display: '',
 _storage: '',
 _lowerCase: 'abcdefghijklmnopqrstuvwxyz',
 _upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
 _numbers: '0123456789',
 _symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-=',
 _allCase: '',
 _randomPicker: function (selectedCase) {
  return selectedCase[Math.floor(Math.random() * selectedCase.length)];
 },
 _addLowercase: function () {
  this._allCase += this._lowerCase;
  this._storage += this._randomPicker(this._lowerCase);
 },
 _addUppercase: function () {
  this._allCase += this._upperCase;
  this._storage += this._randomPicker(this._upperCase);
 },
 _addNumbers: function () {
  this._allCase += this._numbers;
  this._storage += this._randomPicker(this._numbers);
 },
 _addSymbols: function () {
  this._allCase += this._symbols;
  this._storage += this._randomPicker(this._symbols);
 },
 _generatePassword: function (count) {
  lowerCaseInput.checked ? this._addLowercase() : null;
  upperCaseInput.checked ? this._addUppercase() : null;
  numbersInput.checked ? this._addNumbers() : null;
  symbolsInput.checked ? this._addSymbols() : null;
  if (this._allCase.length == 0) {
   alert('Please select atleast one option');
   return;
  }
  for (var i = this._storage.length; i < count; i++) {
   this._storage += this._randomPicker(this._allCase);
  }
  this._allCase = '';
  this.refreshDisplay();
 },
 refreshDisplay: function () {
  this.display = this._storage;
  this._storage = '';
  generatedPassword.innerText = this.display;
 },
};
suggestPassword.addEventListener('click', function () {
 generator._generatePassword(passwordWordCounter.value);
});
