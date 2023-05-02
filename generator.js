const generator = {
 display: '',
 storage: '',
 lowerCase: 'abcdefghijklmnopqrstuvwxyz',
 upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
 numbers: '0123456789',
 symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-=',
 allCase:
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=',
 _randomPicker: function (x) {
  return x[Math.floor(Math.random() * x.length)];
 },
 _addLowercase: function () {
  this.storage += this._randomPicker(this.lowerCase);
 },
 _addUppercase: function () {
  this.storage += this._randomPicker(this.upperCase);
 },
 _addNumbers: function () {
  this.storage += this._randomPicker(this.numbers);
 },
 _addSymbols: function () {
  this.storage += this._randomPicker(this.symbols);
 },
 _generatePassword: function (count) {
  lowerCaseInput.checked ? this._addLowercase() : null;
  upperCaseInput.checked ? this._addUppercase() : null;
  numbersInput.checked ? this._addNumbers() : null;
  symbolsInput.checked ? this._addSymbols() : null;
  for (var i = this.storage.length; i < count; i++) {
   this.storage += this._randomPicker(this.allCase);
  }
  this.refreshDisplay();
 },
 refreshDisplay: function () {
  this.display = this.storage;
  this.storage = '';
  generatedPassword.innerText = this.display;
 },
};
suggestPassword.addEventListener('click', function () {
 generator._generatePassword(passwordWordCounter.value);
});
