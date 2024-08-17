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
    { label: 'substring()' },
    { label: 'slice()' },
    { label: 'split()' },
    { label: 'join()' },
    { label: 'includes()' },
    { label: 'Count Characters' },
    { label: 'Count Vowels And Consonants' },
    { label: 'Replace Word With New Word' },
  ];

  isPopupTransformed = false;
  isPopupReplace = false;
  isPopupInclude = false;
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
  originalArticle: string = '';
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.replaceform = this.fb.group({
      existingWord: ['', Validators.required],
      newWord: ['', Validators.required],
    });

    this.findForm = this.fb.group({
      enterWord: ['', Validators.required],
    });

    this.form = this.fb.group({
      content: [''], // Initial value for the contenteditable div
    });
  }

  reverse() {
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString.split('').reverse().join('');
    this.isUserEnterText ? (this.inputString = this.transformedText) : '';
  }

  capitalizeWords() {
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    this.isUserEnterText ? (this.inputString = this.transformedText) : '';
  }

  toUpperCase() {
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.isUserEnterText
      ? this.inputString.toUpperCase()
      : '';
    this.isUserEnterText ? (this.inputString = this.transformedText) : '';
  }

  toLowerCase() {
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.isUserEnterText
      ? this.inputString.toLowerCase()
      : '';
    this.isUserEnterText ? (this.inputString = this.transformedText) : '';
  }

  removeSpecialCharacters() {
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString
      .split('')
      .filter((char) => /[a-zA-Z0-9 ]/.test(char))
      .join('');
    this.isUserEnterText ? (this.inputString = this.transformedText) : '';
  }

  removeNumerals() {
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString
      .split('')
      .filter((char) => char < '0' || char > '9')
      .join('');
    this.isUserEnterText ? (this.inputString = this.transformedText) : '';
  }

  removeSpaces() {
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString
      .split('')
      .filter((char) => char !== ' ')
      .join('');
    this.isUserEnterText ? (this.inputString = this.transformedText) : '';
  }

  countCharacters() {
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString.length;
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  countVowelsAndConsonants() {
    this.isUserEnterText = !!this.inputString;
    const vowels = 'aeiouAEIOU';
    let vowelsCount = 0;
    let consonantsCount = 0;

    for (const char of this.inputString) {
      if (vowels.includes(char)) {
        vowelsCount++;
      } else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
        consonantsCount++;
      }
    }

    this.transformedText = { vowels: vowelsCount, consonants: consonantsCount };
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  replace() {
    this.isUserEnterText = !!this.inputString;
    this.isPopupReplace = false;
    this.transformedText = this.inputString
      .split(this.existingWord)
      .join(this.newWord);
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  includes() {
    this.isUserEnterText = !!this.inputString;
    this.isPopupInclude = false;
    this.transformedText = this.inputString.includes(this.enterWord);
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  trim() {
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString.trim();
    this.isUserEnterText ? (this.inputString = this.transformedText) : '';
  }

  join() {
    this.isUserEnterText = !!this.inputString;
    const itemsArray = this.inputString.split(',').map((item) => item.trim());
    this.transformedText = itemsArray.join('; ');
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  split() {
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.inputString.split(',');
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  indexOf() {
    this.isUserEnterText = !!this.inputString;
    const charIndex = this.inputString.indexOf('.');
    this.transformedText =
      this.inputString.slice(0, charIndex) +
      "<span class='highlight'>" +
      this.inputString.charAt(charIndex) +
      '</span>' +
      this.inputString.slice(charIndex + 1);
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  lastIndexOf() {
    this.isUserEnterText = !!this.inputString;
    const charIndex = this.inputString.lastIndexOf('.');
    this.transformedText =
      this.inputString.slice(0, charIndex) +
      "<span class='highlight'>" +
      this.inputString.charAt(charIndex) +
      '</span>' +
      this.inputString.slice(charIndex + 1);
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  slice() {
    this.isUserEnterText = !!this.inputString;
    this.transformedText =
      "<span class='highlight'>" + this.inputString.slice(3, 5) + '</span>';
    this.isUserEnterText ? this.openModal(this.transformedText) : '';
  }

  substring() {
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
      default:
        console.log(`No action defined for ${buttonLabel}`);
        break;
    }
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

  reset() {
    this.inputString = this.originalArticle;
  }

  txtArea(txt: any) {
    this.originalArticle = txt;
    console.log(txt);
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

  onInput(event: Event): void {
    const target = event.target as HTMLElement;
    this.inputString = target.innerText || ''; // Update the bound variable
  }
}
