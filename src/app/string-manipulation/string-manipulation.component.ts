import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'string-manipulation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    TextFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './string-manipulation.component.html',
  styleUrls: ['./string-manipulation.component.scss'],
})
export class StringManipulationComponent {
  buttons = [
    { label: 'Uppercase Article' },
    { label: 'Lowercase Article' },
    { label: 'Capitalize First Letter of Each Word' },
    { label: 'Reverse Article' },
    { label: 'Remove Special Characters' },
    { label: 'Remove Numericals' },
    { label: 'Remove Spaces' },
    { label: 'Trim the whitespace from both ends' },
    { label: 'indexOf()' },
    { label: 'lastIndexOf()' },
    { label: 'Count Characters' },
    { label: 'Count Vowels And Consonants' },
    { label: 'Replace Word With New Word' },
    { label: 'includes()' },
    { label: 'substring()' },
    { label: 'slice()' },
    { label: 'split()' },
    { label: 'join()' },
    { label: 'splice()' },
   
  ];

  isPopupTransformed = false;
  isPopupReplace = false;
  isPopupInclude = false;
  isPopupIndex = false;
  isUserEnterText = true;
  replaceform!: FormGroup;
  findForm!: FormGroup;
  inputString: string = '';
  transformedText: any;
  existingWord: any;
  newWord: any;
  enterWord: any;
  textTransformed: any;
  charToHighlight: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.replaceform = this.fb.group({
      existingWord: ['', Validators.required],
      newWord: ['', Validators.required],
    });

    this.findForm = this.fb.group({
      enterWord: ['', Validators.required],
    });
  }

  reverse() {
    // i/p - subscribe target developers
    // o/p - "srepoleved tegrat ebircsus"
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString.split('').reverse().join('');
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  capitalizeWords() {
    // i/p - subscribe target developers
    // o/p -Subscribe Target Developers
    this.isUserEnterText = !!this.inputString;

    this.transformedText = this.inputString
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  toUpperCase() {
    // The toUpperCase() function is designed to transform a user's input text into uppercase letters
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.isUserEnterText
      ? this.inputString.toUpperCase()
      : '';
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  toLowerCase() {
    // toLowerCase function convert  text  to lowercase text

    // checks if the inputstring contains any text and
    // The !! operator converts the value of inputString to a boolean
    // true if it has content and  false if it's empty
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.isUserEnterText
      ? this.inputString.toLowerCase()
      : '';
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  removeSpecialCharacters() {
    // i/p - "subscribe target developers!@"
    // o/p - "subscribe target developers"

    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString
      .split('')
      .filter((char) => /[a-zA-Z0-9 ]/.test(char))
      .join('');
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  removeNumerals() {
    // i/p - "subscribe target developers123"
    // o/p - "subscribe target developers"

    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString
      .split('')
      .filter((char) => char < '0' || char > '9')
      .join('');
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  removeSpaces() {
    // i/p - "subscribe target developers"
    // o/p - "subscribetargetdevelopers"
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString
      .split('')
      .filter((char) => char !== ' ')
      .join('');
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  countCharacters() {
    // i/p - "subscribe like share comment target developers"
    // o/p - 46
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString.length;
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  countVowelsAndConsonants() {
     // i/p - "subscribe like share comment target developers"
    // o/p - vowel count -  15   consonant count -  26
    this.isUserEnterText = !!this.inputString;
    let vowelsCount = 0;
    let consonantsCount = 0;
    for (const char of this.inputString) {
      if ('aeiouAEIOU'.includes(char)) vowelsCount++;
      else if (/[a-z]/i.test(char)) consonantsCount++;
    }
    this.transformedText =
      '<h1>' +
      'vowel count - ' +
      '&nbsp' +
      vowelsCount +
      '</h1>' +
      '<h1>' +
      'consonant count - ' +
      '&nbsp' +
      consonantsCount +
      '</h1>';
    this.isUserEnterText && this.openModal(this.transformedText);
  }

  replace() {
    // i/p - subscribe like share comment target coders
   // o/p - subscribe like share comment target developers
   
    this.isUserEnterText = !!this.inputString;
    this.isPopupReplace = false;
    this.transformedText = this.inputString
      .split(this.existingWord)
      .join(this.newWord);
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  includes() {
    // i/p - subscribe target developers
   // o/p - true
    this.isUserEnterText = !!this.inputString;
    this.isPopupInclude = false;
    this.transformedText = this.inputString.includes(this.enterWord);
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  trim() {
    // i/p - "   subscribe target developers   "
    // o/p - "subscribe target developers"
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString.trim();
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  join() {
     // input- subscribe,target,developers     
    // output- ['subscribe', 'target', 'developers']
    this.isUserEnterText = !!this.inputString;
    const itemsArray = this.inputString.split(',');
    console.log(itemsArray);
    this.transformedText = itemsArray.join('');
    console.log(this.transformedText);
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  split() {
    // input- subscribe,target,developers     
    // output- ['subscribe', 'target', 'developers']
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString.split('');
    console.log(this.transformedText);
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  indexOf() {
    // input- subscribe.target.developers
    // output- Index Value - 9

    this.isUserEnterText = !!this.inputString;
    const charIndex = this.inputString.indexOf('.'); // finds the index of the first dot
    this.transformedText =
      this.inputString.slice(0, charIndex) +
      "<span class='highlight'>" +
      this.inputString.charAt(charIndex) +
      '</span>' +
      this.inputString.slice(charIndex + 1) +
      '</br>' +
      '<h1>' +
      'Index Value - ' +
      '&nbsp &nbsp' +
      charIndex +
      '</h1>';
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  lastIndexOf() {
    // input- subscribe.target.developers
    // output- Last Index Value - 16
    this.isUserEnterText = !!this.inputString;
    const charIndex = this.inputString.lastIndexOf('.'); // finds the last index of the first dot
    this.transformedText =
      this.inputString.slice(0, charIndex) +
      "<span class='highlight'>" +
      this.inputString.charAt(charIndex) +
      '</span>' +
      this.inputString.slice(charIndex + 1) +
      '</br>' +
      '<h1>' +
      'Last Index Value - ' +
      '&nbsp &nbsp' +
      charIndex +
      '</h1>';
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  splice() { 
    // input- subscribe,target,developers     
    // output- ['subscribe', 'target', 'developers']
    
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString.split(',');
    console.log(this.transformedText); 
    // Remove 2 items starting from index 1 (target and developers)
    this.transformedText.splice(1, 2); 
    console.log(this.transformedText); //--Output: ["subscribe"]
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
    // Adding Items with splice
    //---- Add "like" and "share" starting at index 1 (before "developers")
    // this.transformedText.splice(1, 0,"like","share"); 
    // console.log(this.transformedText); //--Output: ["subscribe"]
    // this.isUserEnterText ? this.openModal(this.transformedText) : '';
    // Replacing Items with splice
    //------ Replace "subscribe" with "like"
    // this.transformedText.splice(0, 1,"like"); 
    // console.log(this.transformedText); //--Output: ["subscribe"]
    // this.isUserEnterText ? this.openModal(this.transformedText) : '';

  }

  slice() {
    // input- subscribe target developers
    // output - sc 
    this.isUserEnterText = !!this.inputString;
    this.transformedText =
      "<span class='highlight'>" + this.inputString.slice(3, 5) + '</span>';
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  substring() {
   // i/p - target developers
   // o/p - target

    this.isUserEnterText = !!this.inputString;
    const spaceIndex = this.inputString.indexOf(' ');
    this.transformedText =
      spaceIndex === -1
        ? this.inputString
        : this.inputString.substring(0, spaceIndex);
    this.isUserEnterText
      ? this.openModal("<span class='highlight'>" + this.transformedText) +
        '</span>'
      : '';
  }

  openModal(textTransformed: any) {
    this.textTransformed = textTransformed;
    this.isPopupTransformed = true;
  }

  closeModal() {
    this.isPopupTransformed = false;
    this.isPopupReplace = false;
    this.isPopupInclude = false;
  }

  textClear() {
    this.inputString = '';
  }

  submit() {
    this.existingWord = this.replaceform.value.existingWord;
    this.newWord = this.replaceform.value.newWord;
    this.replace();
  }

  find() {
    this.enterWord = this.findForm.value.enterWord;
    this.includes();
  }

  replaceToggle() {
    this.isUserEnterText = !!this.inputString;
    this.isUserEnterText ? (this.isPopupReplace = true) : '';
  }

  includesToggle() {
    this.isUserEnterText = !!this.inputString;
    this.isUserEnterText ? (this.isPopupInclude = true) : '';
  }

  handleClick(buttonLabel: string): void {
    switch (buttonLabel) {
      case 'Uppercase Article':
        this.toUpperCase();
        break;
      case 'Lowercase Article':
        this.toLowerCase();
        break;
      case 'Capitalize First Letter of Each Word':
        this.capitalizeWords();
        break;
      case 'Reverse Article':
        this.reverse();
        break;
      case 'Remove Special Characters':
        this.removeSpecialCharacters();
        break;
      case 'Remove Numericals':
        this.removeNumerals();
        break;
      case 'Count Characters':
        this.countCharacters();
        break;
      case 'Remove Spaces':
        this.removeSpaces();
        break;
      case 'Count Vowels And Consonants':
        this.countVowelsAndConsonants();
        break;
      case 'Replace Word With New Word':
        this.replaceToggle();
        break;
      case 'Trim the whitespace from both ends':
        this.trim();
        break;
      case 'substring()':
        this.substring();
        break;
      case 'slice()':
        this.slice();
        break;
      case 'indexOf()':
        this.indexOf();
        break;
      case 'lastIndexOf()':
        this.lastIndexOf();
        break;
      case 'split()':
        this.split();
        break;
      case 'join()':
        this.join();
        break;
      case 'includes()':
        this.includesToggle();
        break;
      case 'splice()':
        this.splice();
        break;
      default:
        console.log(`No action defined for ${buttonLabel}`);
        break;
    }
  }
}
